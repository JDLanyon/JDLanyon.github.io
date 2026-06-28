<template>
  <span class="glitch-wrapper">
    <span
      class="glitch-displacement"
      :style="{ transform: `translate(${displaceX}px, ${displaceY}px)` }"
    >
      <span
        class="glitch-main"
        :style="{
          display: 'inline-block',
          position: 'relative',
          willChange: 'transform, filter',
        }"
      >
        <!-- Shake layer -->
        <span
          class="glitch-shake"
          :style="{ transform: `translate(${shakeX}px, ${shakeY}px)` }"
        >
          <slot />
        </span>

        <!-- Effects — only rendered during glitch -->
        <template v-if="phase !== 'idle'">
          <!-- Chromatic aberration layers (6 colors) -->
          <span
            v-for="(layer, i) in chromaLayers"
            :key="i"
            class="glitch-chroma"
            :class="layer.blendClass"
            :style="layer.style"
            aria-hidden="true"
            role="presentation"
          >
            <slot />
          </span>

          <!-- Motion blur -->
          <span
            class="glitch-motion-blur"
            :style="{ backdropFilter: 'blur(' + (1.5 * intensity) + 'px)', opacity: intensity }"
            aria-hidden="true"
            role="presentation"
          />
        </template>
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  duration?: number
  delay?: number
  variance?: number
  intensity?: number
}>(), {
  duration: 200,
  delay: 3000,
  variance: 1000,
  intensity: 1.5,
})

type Phase = 'idle' | 'active'
const phase = ref<Phase>('idle')
const intensity = ref(0)
const displacement = ref(0)
const shakeX = ref(0)
const shakeY = ref(0)
const displaceX = ref(0)
const displaceY = ref(0)

// Seeded PRNG — reseeded per glitch to avoid SSR/hydration mismatch
let seed = 0
function reseed() { seed = Date.now() }
function rand() {
  seed = (seed * 16807) % 2147483647
  return (seed - 1) / 2147483646
}

const CHROMA_COLORS = [
  { name: 'red', value: '#ff0000', x: 2, y: 0, blend: 'screen' },
  { name: 'green', value: '#00ff00', x: -2, y: 2, blend: 'screen' },
  { name: 'blue', value: '#0000ff', x: 0, y: -2, blend: 'screen' },
  { name: 'cyan', value: '#00ffff', x: 2, y: -2, blend: 'difference' },
  { name: 'magenta', value: '#ff00ff', x: -2, y: 0, blend: 'difference' },
  { name: 'yellow', value: '#ffff00', x: 0, y: 2, blend: 'difference' },
]

interface ChromaLayerData {
  style: Record<string, string | undefined>
  blendClass: string
}

const chromaLayers = ref<ChromaLayerData[]>([])

function generateLayers() {
  const intens = intensity.value
  const d = displacement.value
  return CHROMA_COLORS.map((color, i) => {
    const r1 = rand()
    const r2 = rand()
    const r3 = rand()
    const r4 = rand()
    const r5 = rand()

    const xJitter = (r1 - 0.5) * 4
    const yJitter = (r2 - 0.5) * 4
    const glowJitter = r3 * 3
    const dX = d > 0 ? (r4 * d * 0.8) * (i % 2 ? 1 : -1) : 0
    const dY = d > 0 ? (r5 * d * 0.5) * (i % 3 ? 1 : -1) : 0

    const tx = (color.x * intens + xJitter + dX) * (i % 2 ? -1 : 1)
    const ty = (color.y * intens + yJitter + dY) * (i % 3 ? -1 : 1)
    const gs = 6 * intens + glowJitter

    return {
      style: {
        color: color.value,
        opacity: String(intens),
        transform: `translate(${tx}px, ${ty}px)`,
        filter: `blur(0.5px) drop-shadow(0 0 ${gs}px ${color.value})`,
        clipPath: d > 0
          ? `inset(${(r4 * d * (i % 2)) % 30}% ${(r5 * d * (i % 3)) % 30}% 0 0)`
          : undefined,
        transition: `transform ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      },
      blendClass: i >= 3 ? 'mix-blend-difference' : 'mix-blend-screen',
    }
  })
}

let timer: ReturnType<typeof setTimeout> | null = null
let shakeFrame: number | null = null
let displaceFrame: number | null = null

function triggerGlitch() {
  if (phase.value !== 'idle') return

  reseed()
  const d = Math.floor(rand() * 4 + 1) * 6 + Math.floor(rand() * 6)
  displacement.value = d

  // Kick off RAF loops for shake & displacement
  phase.value = 'active'
  intensity.value = props.intensity

  // Generate layers once using seeded PRNG (not in a computed — pure)
  chromaLayers.value = generateLayers()

  let startTime: number | null = null
  function shakeLoop(time: number) {
    if (phase.value !== 'active') { shakeX.value = 0; shakeY.value = 0; return }
    if (startTime === null) startTime = time
    const progress = Math.min((time - startTime) / props.duration, 1)
    const step = Math.floor(progress * 9) / 9
    const mag = 4 * props.intensity * step
    shakeX.value = (rand() > 0.5 ? -1 : 1) * mag
    shakeY.value = (rand() > 0.5 ? -1 : 1) * mag
    if (progress < 1) shakeFrame = requestAnimationFrame(shakeLoop)
    else { shakeX.value = 0; shakeY.value = 0 }
  }
  shakeFrame = requestAnimationFrame(shakeLoop)

  let dispStart: number | null = null
  function dispLoop(time: number) {
    if (phase.value !== 'active') { displaceX.value = 0; displaceY.value = 0; return }
    if (dispStart === null) dispStart = time
    const progress = Math.min((time - dispStart) / props.duration, 1)
    const shift = d * 0.6
    displaceX.value = (rand() - 0.5) * shift * 2
    displaceY.value = (rand() - 0.5) * shift
    if (progress < 1) displaceFrame = requestAnimationFrame(dispLoop)
    else { displaceX.value = 0; displaceY.value = 0 }
  }
  displaceFrame = requestAnimationFrame(dispLoop)

  // End glitch after duration
  timer = setTimeout(() => {
    phase.value = 'idle'
    intensity.value = 0
    displacement.value = 0
    chromaLayers.value = []
    shakeX.value = 0
    shakeY.value = 0
    displaceX.value = 0
    displaceY.value = 0
    if (shakeFrame) cancelAnimationFrame(shakeFrame)
    if (displaceFrame) cancelAnimationFrame(displaceFrame)
    shakeFrame = null
    displaceFrame = null
    scheduleNext()
  }, props.duration)
}

function scheduleNext() {
  const min = Math.max(100, props.delay - props.variance)
  const max = props.delay + props.variance
  const nd = Math.random() * (max - min) + min
  timer = setTimeout(triggerGlitch, nd)
}

function glitchOnce() { triggerGlitch() }

onMounted(() => scheduleNext())
onUnmounted(() => {
  if (timer) clearTimeout(timer)
  if (shakeFrame) cancelAnimationFrame(shakeFrame)
  if (displaceFrame) cancelAnimationFrame(displaceFrame)
})

defineExpose({ glitchOnce })
</script>

<style scoped>
.glitch-wrapper {
  display: inline-block;
  position: relative;
  line-height: 0;
}
.glitch-displacement { display: inline-block; will-change: transform; line-height: 0; }
.glitch-main { position: relative; line-height: 0; }
.glitch-shake { position: relative; z-index: 10; display: inline-block; line-height: 0; }
.glitch-chroma {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  will-change: transform; line-height: 0;
}
.mix-blend-screen { mix-blend-mode: screen; }
.mix-blend-difference { mix-blend-mode: difference; }
.glitch-motion-blur { position: absolute; inset: 0; z-index: 4; pointer-events: none; }
</style>
