<!-- Button.vue
  Reusable blocky button component that inverts colours on hover.
  Used for CTAs, nav buttons, and page-action links across the site.

  Props:
    href     - string  - Link destination.
    arrow    - string  - ('left'|'right'|'up'|'down') Appends arrow.
    download - boolean|string - Download attribute (true or filename).
    disabled - boolean - Renders as a non-interactive <span> with muted styles.

  Slot: default - button text or inline content.
-->
<template>
  <span
    v-if="disabled"
    class="btn btn-disabled"
    :title="title"
  >
    <span v-if="arrow === 'left'" class="btn-arrow">&larr;</span>
    <span class="btn-text"><slot /></span>
    <span v-if="arrow === 'right'" class="btn-arrow">&rarr;</span>
    <span v-if="arrow === 'up'" class="btn-arrow">&uarr;</span>
    <span v-if="arrow === 'down'" class="btn-arrow">&darr;</span>
  </span>
  <a
    v-else
    :href="href"
    class="btn"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :download="downloadProp"
  >
    <span v-if="arrow === 'left'" class="btn-arrow">&larr;</span>
    <span class="btn-text"><slot /></span>
    <span v-if="arrow === 'right'" class="btn-arrow">&rarr;</span>
    <span v-if="arrow === 'up'" class="btn-arrow">&uarr;</span>
    <span v-if="arrow === 'down'" class="btn-arrow">&darr;</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  href?: string
  arrow?: 'left' | 'right' | 'up' | 'down'
  download?: boolean | string
  disabled?: boolean
  title?: string
}>(), {
  href: '#',
})

const isExternal = computed(() =>
  props.href.startsWith('http://') || props.href.startsWith('https://')
)

const downloadProp = computed(() => {
  if (typeof props.download === 'string') return props.download
  if (props.download === true) return ''
  return undefined
})
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 1.5rem;
  min-height: 3rem;
  font-weight: bold;
  background: transparent;
  border: 1px solid var(--vp-c-border, #ddd);
  color: var(--vp-c-text-1, #111);
  text-decoration: none !important;
  cursor: pointer;
  transform: translateY(0);
  margin: 8px;
  transition:
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.5s ease,
    color 0.5s ease;
}

.btn:hover {
  transform: translateY(-8px);
  background: var(--vp-c-text-1, #111);
  color: var(--vp-c-bg, #eee) !important;
  border-color: var(--vp-c-text-1, #111);
}

.btn-disabled {
  opacity: 0.45;
  cursor: default;
  pointer-events: none;
  font-style: italic;
  font-weight: 400;
}

.btn-arrow {
  line-height: 1;
}
</style>

