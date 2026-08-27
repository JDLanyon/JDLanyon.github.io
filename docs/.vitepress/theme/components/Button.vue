<!-- Button.vue
  Reusable blocky button component that inverts colours on hover.
  Always renders a <button>. Use `href` to navigate (via click handler) or
  pass an `@click` to run arbitrary JS (e.g. copy-to-clipboard, open a modal).
  In-app hrefs use VitePress's router; external http(s) hrefs open in a new tab.
  Props:
    href  - string - If set, clicking navigates here (router-aware).
    arrow - string - ('left'|'right'|'up'|'down') Appends an arrow glyph.
    title - string - Native tooltip.

  Emits: click (MouseEvent) - fired on every click, before navigation.
  Slot: default - button text or inline content.
-->
<template>
  <button
    type="button"
    class="btn"
    :title="title"
    @click="handleClick"
  >
    <span v-if="arrow === 'left'" class="btn-arrow">&larr;</span>
    <span class="btn-text"><slot /></span>
    <span v-if="arrow === 'right'" class="btn-arrow">&rarr;</span>
    <span v-if="arrow === 'up'" class="btn-arrow">&uarr;</span>
    <span v-if="arrow === 'down'" class="btn-arrow">&darr;</span>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress'

const props = withDefaults(defineProps<{
  href?: string
  arrow?: 'left' | 'right' | 'up' | 'down'
  title?: string
}>(), {
  href: '',
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()

const router = useRouter()

function handleClick(event: MouseEvent) {
  emit('click', event) // parents can hook JS actions (copy, modal, etc.)
  if (!props.href || event.defaultPrevented) return
  if (props.href.startsWith('http')) {
      window.open(props.href, '_blank', 'noopener,noreferrer')
  } else if (/^(mailto|tel|#):/.test(props.href)) {
    window.location.href = props.href // mailto/tel/anchor — plain navigation
  } else if (router) {
    router.go(props.href)
  } else {
    window.location.href = props.href
  }
}
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

.btn-arrow {
  line-height: 1;
}
</style>

