<template>
  <Transition name="back-to-top-fade">
    <button
      v-if="visible"
      class="custom-back-to-top"
      @click="scrollToTop"
      aria-label="Back to top"
    >Back to top</button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
let observer: IntersectionObserver | null = null

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function isModalActive(): boolean {
  return !!document.querySelector('.project-modal-overlay, .project-detail-overlay')
}

function isPageScrollable(): boolean {
  return document.documentElement.scrollHeight > window.innerHeight
}

onMounted(() => {
  const target = document.querySelector('.VPFooter')
  if (!target) return

  observer = new IntersectionObserver(
    ([entry]) => {
      visible.value = isPageScrollable() && entry.isIntersecting && !isModalActive()
    },
    { threshold: 0.1 },
  )
  observer.observe(target)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.custom-back-to-top {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  min-height: 3rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
  background: transparent;
  border: 1px solid var(--vp-c-border, #ddd);
  color: var(--vp-c-text-1, #111);
  text-decoration: none;
  cursor: pointer;
  transform: translateY(0);
  transition:
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.5s ease,
    color 0.5s ease,
    opacity 0.3s ease;
}

.custom-back-to-top:hover {
  transform: translateY(-8px);
  background: var(--vp-c-text-1, #111);
  color: var(--vp-c-bg, #eee);
  border-color: var(--vp-c-text-1, #111);
}

.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.back-to-top-fade-enter-from,
.back-to-top-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>

