<template>
  <span class="typewriter-wrapper">
    <span class="typewriter-text">{{ displayText }}</span>
    <span class="typewriter-cursor" :class="{ blinking: isIdle }">▎</span>
    <span v-if="remainingText" class="typewriter-ghost">{{ remainingText }}</span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  headings: string[]
  speed?: number        // wpm
  delayBetweenHeadings?: number
}>(), {
  headings: () => [],
  speed: 240,
  delayBetweenHeadings: 4000,
})

const currentIdx = ref(0)
const currentText = ref('')
const isDeleting = ref(false)

const displayText = computed(() => currentText.value)
const remainingText = computed(() => {
  if (isDeleting.value) return ''
  const full = props.headings[currentIdx.value]
  return full.substring(currentText.value.length)
})
const isIdle = computed(() => !isDeleting.value && currentText.value === props.headings[currentIdx.value])

function deleteLastWord(text: string): string {
  return text.replace(/\s*\S+$/, '')
}

let timer: ReturnType<typeof setTimeout> | null = null

function tick() {
  const full = props.headings[currentIdx.value]
  const charDelay = props.speed > 0 ? 12000 / props.speed : 60
  const wordDeleteDelay = 150

  if (!isDeleting.value && currentText.value === full) {
    // Pause, then start deleting
    timer = setTimeout(() => {
      isDeleting.value = true
      tick()
    }, props.delayBetweenHeadings)
  } else if (isDeleting.value && currentText.value === '') {
    // Move to next heading
    isDeleting.value = false
    currentIdx.value = (currentIdx.value + 1) % props.headings.length
    timer = setTimeout(tick, charDelay)
  } else {
    const delay = isDeleting.value ? wordDeleteDelay : charDelay
    timer = setTimeout(() => {
      if (isDeleting.value) {
        currentText.value = deleteLastWord(currentText.value)
      } else {
        currentText.value = full.substring(0, currentText.value.length + 1)
      }
      tick()
    }, delay)
  }
}

onMounted(() => {
  // Start by typing the first heading
  timer = setTimeout(tick, 500)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.typewriter-wrapper {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
}

.typewriter-cursor {
  display: inline-block;
  color: var(--secondary);
  opacity: 1;
  transition: opacity 0.3s;
  margin-left: 1px;
}

.typewriter-cursor.blinking {
  animation: blink 1s step-end infinite;
}

.typewriter-ghost {
  opacity: 0.3;
  color: var(--secondary);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
