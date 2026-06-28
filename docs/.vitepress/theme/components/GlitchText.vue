<template>
  <span class="glitch-wrapper" ref="wrapperRef">
    <!-- Position displacement wrapper -->
    <span class="glitch-displacement" ref="displaceRef">
      <span class="glitch-main" :style="{ display: 'inline-block', position: 'relative', willChange: 'transform, filter' }">
        <!-- Shake layer -->
        <span class="glitch-shake" ref="shakeRef">
          <span class="glitch-text" v-if="$slots.default"><slot /></span>
          <span class="glitch-text" v-else>{{ text }}</span>
        </span>

        <!-- Effects — only during glitch -->
        <template v-if="phase !== 'idle'">
          <span
            v-for="(layer, i) in chromaLayers"
            :key="i"
            class="glitch-chroma"
            :class="layer.blendClass"
            :style="layer.style"
            aria-hidden="true"
            role="presentation"
          >
            <slot v-if="$slots.default" />
            <template v-else>{{ text }}</template>
          </span>
          <span
            class="glitch-motion-blur"
            :style="{ backdropFilter: 'blur(' + (1.5 * intensity) + 'px)', opacity: intensity }"
            aria-hidden="true"
            role="presentation"
          />
          <span v-if="showFlicker" class="glitch-flicker" aria-hidden="true" role="presentation" />
        </template>
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  text?: string
  duration?: number
  intensity?: number
}>(), {
  text: '',
  duration: 300,
  intensity: 1.5,
})

type Phase = 'idle' | 'easeIn' | 'active' | 'easeOut'
const phase = ref<Phase>('idle')
const intensity = ref(0)
const displacement = ref(0)
const showFlicker = ref(false)

const shakeRef = ref<HTMLElement | null>(null)
const displaceRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)

const CHROMA_COLORS = [
  { name: 'red', value: '#ff0000', x: 2, y: 0, blend: 'screen' },
  { name: 'green', value: '#00ff00', x: -2, y: 2, blend: 'screen' },
  { name: 'blue', value: '#0000ff', x: 0, y: -2, blend: 'screen' },
  { name: 'cyan', value: '#00ffff', x: 2, y: -2, blend: 'difference' },
  { name: 'magenta', value: '#ff00ff', x: -2, y: 0, blend: 'difference' },
  { name: 'yellow', value: '#ffff00', x: 0, y: 2, blend: 'difference' },
]

const chromaLayers = computed(() => {
  if (phase.value === 'idle') return []
  const intens = intensity.value
  return CHROMA_COLORS.map((color, i) => {
    const xJitter = (Math.random() - 0.5) * 3
    const yJitter = (Math.random() - 0.5) * 3
    const glowJitter = Math.random() * 2

    const translateX = (color.x * intens + xJitter) * (i % 2 ? -1 : 1)
    const translateY = (color.y * intens + yJitter) * (i % 3 ? -1 : 1)
    const glowSize = 4 * intens + glowJitter

    return {
      style: {
        color: color.value,
        opacity: intens * 0.8,
        transform: `translate(${translateX}px, ${translateY}px)`,
        filter: `blur(0.3px) drop-shadow(0 0 ${glowSize}px ${color.value})`,
        transition: `transform ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      },
      blendClass: i >= 3 ? 'mix-blend-difference' : 'mix-blend-screen',
    }
  })
})

let timer: ReturnType<typeof setTimeout> | null = null
let shakeFrame: number | null = null
let displaceFrame: number | null = null
let shakeStartTime: number | null = null
let displaceStartTime: number | null = null

function triggerGlitch() {
  if (phase.value !== 'idle') return
  displacement.value = Math.floor(Math.random() * 4) + 2
  phase.value = 'easeIn'
  intensity.value = props.intensity
  startShake()
  startDisplacement()

  timer = setTimeout(() => {
    phase.value = 'active'
    intensity.value = 1 * props.intensity

    const shouldFlicker = Math.random() <= 0.1
    if (shouldFlicker) {
      showFlicker.value = true
      setTimeout(() => { showFlicker.value = false }, 50)
    }

    timer = setTimeout(() => {
      phase.value = 'easeOut'
      intensity.value = 0.3 * props.intensity
      timer = setTimeout(() => {
        phase.value = 'idle'
        intensity.value = 0
        stopShake()
        stopDisplacement()
      }, props.duration * 0.2)
    }, props.duration * 0.6)
  }, props.duration * 0.2)
}

function startShake() {
  shakeStartTime = null
  const STEPS = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
  function animate(time: number) {
    if (!shakeRef.value) return
    if (shakeStartTime === null) shakeStartTime = time
    const elapsed = time - shakeStartTime
    const progress = Math.min(elapsed / props.duration, 1)
    const stepIndex = Math.floor(progress * STEPS.length)
    const step = STEPS[Math.min(stepIndex, STEPS.length - 1)]
    const maxOffset = 2 * intensity.value
    const x = (Math.random() > 0.5 ? -1 : 1) * maxOffset * step
    const y = (Math.random() > 0.5 ? -1 : 1) * maxOffset * step
    shakeRef.value.style.transform = `translate(${x}px, ${y}px)`
    if (progress < 1) shakeFrame = requestAnimationFrame(animate)
    else { shakeRef.value.style.transform = ''; shakeStartTime = null }
  }
  shakeFrame = requestAnimationFrame(animate)
}

function stopShake() {
  if (shakeFrame) cancelAnimationFrame(shakeFrame)
  if (shakeRef.value) shakeRef.value.style.transform = ''
  shakeStartTime = null
}

function startDisplacement() {
  displaceStartTime = null
  function animate(time: number) {
    if (!displaceRef.value) return
    if (displaceStartTime === null) displaceStartTime = time
    const elapsed = time - displaceStartTime
    const progress = Math.min(elapsed / props.duration, 1)
    const phaseM = phase.value === 'active' ? 1 : 0.4
    const maxShift = displacement.value * phaseM
    const x = (Math.random() - 0.5) * maxShift * 2
    const y = (Math.random() - 0.5) * maxShift
    displaceRef.value.style.transform = `translate(${x}px, ${y}px)`
    if (progress < 1) displaceFrame = requestAnimationFrame(animate)
    else { displaceRef.value.style.transform = ''; displaceStartTime = null }
  }
  displaceFrame = requestAnimationFrame(animate)
}

function stopDisplacement() {
  if (displaceFrame) cancelAnimationFrame(displaceFrame)
  if (displaceRef.value) displaceRef.value.style.transform = ''
  displaceStartTime = null
}

function glitchOnce() { triggerGlitch() }

onUnmounted(() => {
  if (timer) clearTimeout(timer)
  stopShake()
  stopDisplacement()
})

defineExpose({ glitchOnce })
</script>

<style scoped>
.glitch-wrapper { display: inline-block; position: relative; }
.glitch-displacement { display: inline-block; will-change: transform; }
.glitch-main { position: relative; }
.glitch-shake { position: relative; z-index: 10; }
.glitch-text { position: relative; display: inline-block; }
.glitch-chroma {
  position: absolute; inset: 0; z-index: 2; pointer-events: none; will-change: transform;
}
.mix-blend-screen { mix-blend-mode: screen; }
.mix-blend-difference { mix-blend-mode: difference; }
.glitch-motion-blur { position: absolute; inset: 0; z-index: 4; pointer-events: none; }
.glitch-flicker {
  position: absolute; inset: 0; z-index: 30; pointer-events: none;
  background: white; opacity: 0.1; mix-blend-mode: overlay;
  animation: flicker-flash 0.05s linear;
}
@keyframes flicker-flash {
  0% { opacity: 0; }
  50% { opacity: 0.1; }
  100% { opacity: 0; }
}
</style>
