<template>
  <!--
    DS - Modal.vue
    Pure base shell for modals. Renders the empty box: off-click / ✕ / Escape to
    close, a scrollable body (slots/default), and an optional signature footer
    (slot "signature"). This component does NO fetching or backend work — wrappers
    like <ProjectModal> supply their own content and heavy lifting via slots.

    Slots:
      - header-actions-left  : e.g. "View on GitHub"
      - header-actions-right : e.g. "Open full page"
      - default              : the modal body (scrolls when too large)
      - signature            : small footer line at the bottom
    Emits: close.
  -->
  <Teleport to="body">
    <div class="modal-backdrop" @click.self="close">
      <div class="modal-container" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div class="modal-actions-left">
            <slot name="header-actions-left" />
          </div>
          <div class="modal-actions-right">
            <slot name="header-actions-right" />
            <button class="modal-close" @click="close" aria-label="Close">✕</button>
          </div>
        </div>

        <div class="modal-scroll">
          <slot />
        </div>

        <div v-if="$slots.signature" class="modal-signature">
          <slot name="signature" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{ close: [] }>()

function close() {
  emit('close')
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.documentElement.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})

defineExpose({ close })
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: color-mix(in srgb, var(--vp-c-bg) 88%, transparent);
  backdrop-filter: blur(2px);
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: min(88vw, 72rem);
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid var(--vp-c-border);
  flex-shrink: 0;
}

.modal-actions-left,
.modal-actions-right {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.modal-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 1;
  background: transparent;
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.modal-close:hover {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
}

/* Scrollbox when content is too large */
.modal-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 1.25rem;
}

.modal-scroll::-webkit-scrollbar {
  width: 6px;
}

.modal-scroll::-webkit-scrollbar-thumb {
  background: var(--vp-c-border);
  border-radius: 3px;
}

.modal-signature {
  flex-shrink: 0;
  padding: 0.6rem 1.25rem;
  border-top: 1px solid var(--vp-c-border);
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
@media (max-width: 48rem) {
  .modal-backdrop {
    padding: 0;
  }

  .modal-container {
    max-width: 100%;
    max-height: 100vh;
    border: none;
  }
}
</style>

