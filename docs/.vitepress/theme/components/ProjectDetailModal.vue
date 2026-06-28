<template>
  <!--
    DS - ProjectDetailModal.vue
    Modal that shows detailed project content (fetched from the generated README page).
    Used by ProjectCard when clicked. Teleports to <body> for overlay stacking.
    Fetches the /projects/:slug HTML, extracts the .project-fullpage-body content,
    and renders it. Falls back to common VitePress content containers if missing.
    Props: slug, repo. Emits: close.
    Also provides an "Open full page" link for direct navigation.
  -->
  <Teleport to="body">
    <div v-if="visible" class="detail-backdrop" @click.self="close">
      <div class="detail-container">
        <div class="detail-header">
          <div class="detail-actions-left">
            <a
              v-if="repo"
              :href="repo"
              target="_blank"
              rel="noopener noreferrer"
              class="detail-btn"
            >View on GitHub →</a>
            <span
              v-else
              class="detail-btn detail-btn-disabled"
              title="private repository"
            >Unfortunately this repo is private for now :(</span>
          </div>
          <div class="detail-actions-right">
            <button
              class="detail-btn"
              @click="openFullPage"
            >Open full page →</button>
            <button class="detail-btn detail-close" @click="close">✕</button>
          </div>
        </div>
        <div class="detail-body" ref="bodyRef">
          <div v-if="loading" class="detail-loading">Loading...</div>
          <div v-else-if="error" class="detail-error">Could not load project details.</div>
          <div v-else v-html="content" class="detail-content" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vitepress'

const props = defineProps<{
  slug: string
  repo?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const router = useRouter()

const visible = ref(false)
const loading = ref(true)
const error = ref(false)
const content = ref('')
const bodyRef = ref<HTMLElement | null>(null)
const pageUrl = `/projects/${props.slug}`

async function loadContent() {
  loading.value = true
  error.value = false

  try {
    // Try clean URL first (VitePress dev server), fall back to .html (GitHub Pages static)
    let res = await fetch(pageUrl)
    if (!res.ok) {
      res = await fetch(`${pageUrl}.html`)
    }
    if (!res.ok) throw new Error('Failed to fetch')

    const html = await res.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    // Extract the content inside .project-fullpage-body
    const bodyEl = doc.querySelector('.project-fullpage-body')
    if (bodyEl) {
      content.value = bodyEl.innerHTML
        // Strip GlitchLink wrappers — Vue components don't hydrate in v-html
        .replace(/<\/?GlitchLink[^>]*>/g, '')
        // Strip YouTubeEmbeds component tag (handled below if needed)
        .replace(/<YouTubeEmbeds\s*\/>/g, '')
    } else {
      // Fallback chain: try common VitePress content containers
      const mainEl =
        doc.querySelector('.vp-doc > div') ||
        doc.querySelector('.content-container') ||
        doc.querySelector('.VPDoc .content')
      content.value = mainEl?.innerHTML || '<p>Could not extract content.</p>'
    }
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

function open() {
  visible.value = true
  document.documentElement.style.overflow = 'hidden'
  loadContent()
}

function close() {
  visible.value = false
  document.documentElement.style.overflow = ''
  emit('close')
}

function openFullPage() {
  close()
  router.go(pageUrl)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  visible.value = true
  loadContent()
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.documentElement.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})

defineExpose({ open, close })
</script>

<style scoped>
.detail-backdrop {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: color-mix(in srgb, var(--vp-c-bg) 85%, transparent);
  backdrop-filter: blur(2px);
}

.detail-container {
  position: relative;
  width: 100%;
  max-width: 56rem;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  overflow: hidden;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid var(--vp-c-border);
  flex-shrink: 0;
}

.detail-actions-left,
.detail-actions-right {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.detail-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  background: transparent;
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}

.detail-btn:hover {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
}

.detail-btn-disabled {
  opacity: 0.45;
  cursor: default;
  pointer-events: none;
  font-style: italic;
  font-weight: 400;
  font-size: 0.8rem;
}

.detail-btn-disabled:hover {
  background: transparent;
  color: var(--vp-c-text-1);
}

.detail-close {
  font-size: 1rem;
  line-height: 1;
  padding: 0.4rem 0.7rem;
}

.detail-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 1.25rem;
}

.detail-body::-webkit-scrollbar {
  width: 6px;
}

.detail-body::-webkit-scrollbar-thumb {
  background: var(--vp-c-border);
  border-radius: 3px;
}

.detail-loading,
.detail-error {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--vp-c-text-2);
}

.detail-content :deep(h1) {
  font-size: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.detail-content :deep(h2) {
  font-size: 1.35rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.detail-content :deep(h3) {
  font-size: 1.1rem;
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
}

.detail-content :deep(p) {
  margin: 0.5rem 0;
  line-height: 1.7;
}

.detail-content :deep(ul),
.detail-content :deep(ol) {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.detail-content :deep(li) {
  margin-bottom: 0.25rem;
}

.detail-content :deep(a) {
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.detail-content :deep(code) {
  background: var(--vp-c-bg-soft);
  padding: 0.15em 0.35em;
  border-radius: 4px;
  font-size: 0.9em;
  border: 1px solid var(--vp-c-border);
}

.detail-content :deep(pre) {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  overflow-x: auto;
  margin: 0.75rem 0;
  border: 1px solid var(--vp-c-border);
}

.detail-content :deep(pre code) {
  background: transparent;
  border: none;
  padding: 0;
}

.detail-content :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
  display: block;
}

.detail-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--vp-c-border);
  margin: 1.5rem 0;
}

.detail-content :deep(blockquote) {
  border-left: 3px solid var(--vp-c-border);
  padding-left: 1rem;
  color: var(--vp-c-text-2);
  margin: 1rem 0;
}

.detail-content :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}

.detail-content :deep(th),
.detail-content :deep(td) {
  border: 1px solid var(--vp-c-border);
  padding: 0.5rem 0.75rem;
  text-align: left;
}

.detail-content :deep(th) {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}

@media (max-width: 48rem) {
  .detail-backdrop {
    padding: 0;
  }

  .detail-container {
    max-width: 100%;
    max-height: 100vh;
    border: none;
  }
}
</style>
