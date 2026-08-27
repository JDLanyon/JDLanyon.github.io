<template>
  <!--
    DS - ProjectModal.vue
    Project detail modal. Wraps the base <Modal> shell and handles the heavy lifting:
    fetching the generated /projects/:slug HTML, extracting the .project-fullpage-body
    fragment, and rendering it with loading/error states. Header actions and the
    signature footer are provided via Modal slots.

    Props: slug, repo. Emits: close.
  -->
  <Modal @close="$emit('close')">
    <template #header-actions-left>
      <a
        v-if="repo"
        :href="repo"
        target="_blank"
        rel="noopener noreferrer"
        class="modal-btn"
      >View on GitHub →</a>
      <span
        v-else
        class="modal-btn modal-btn-disabled"
        title="private repository"
      >This repo is private for now :(</span>
    </template>

    <template #header-actions-right>
      <GlitchLink :href="`/projects/${slug}`">Open full page</GlitchLink>
    </template>

    <template #signature>
      Fetched from GitHub — <a :href="repo || `/projects/${slug}`" target="_blank" rel="noopener noreferrer">source</a>
    </template>

    <div v-if="loading" class="modal-loading">Loading...</div>
    <div v-else-if="error" class="modal-error">Could not load project details.</div>
    <div v-else v-html="content" class="project-modal-content" />
  </Modal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  slug: string
  repo?: string
}>()

const emit = defineEmits<{ close: [] }>()

const loading = ref(true)
const error = ref(false)
const content = ref('')
const pageUrl = `/projects/${props.slug}`

async function loadContent() {
  loading.value = true
  error.value = false

  try {
    // Try clean URL first (VitePress dev server), fall back to .html (static deploy)
    let res = await fetch(pageUrl)
    if (!res.ok) {
      res = await fetch(`${pageUrl}.html`)
    }
    if (!res.ok) throw new Error('Failed to fetch')

    const html = await res.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    const bodyEl = doc.querySelector('.project-fullpage-body')
    if (bodyEl) {
      content.value = bodyEl.innerHTML
        // Strip Vue component tags that don't hydrate inside v-html
        .replace(/<\/?GlitchLink[^>]*>/g, '')
        .replace(/<YouTubeEmbeds\s*\/?>/g, '')
    } else {
      // Fallback: try common VitePress content containers
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

onMounted(loadContent)
</script>

<style scoped>
.modal-loading,
.modal-error {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--vp-c-text-2);
}

/* Typography for fetched project README content */
.project-modal-content :deep(h2) {
  font-size: 1.35rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.project-modal-content :deep(h3) {
  font-size: 1.1rem;
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
}
.project-modal-content :deep(p) {
  margin: 0.5rem 0;
  line-height: 1.7;
}
.project-modal-content :deep(ul),
.project-modal-content :deep(ol) {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}
.project-modal-content :deep(li) {
  margin-bottom: 0.25rem;
}
.project-modal-content :deep(a) {
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.project-modal-content :deep(code) {
  background: var(--vp-c-bg-soft);
  padding: 0.15em 0.35em;
  border-radius: 4px;
  font-size: 0.9em;
  border: 1px solid var(--vp-c-border);
}
.project-modal-content :deep(pre) {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  overflow-x: auto;
  margin: 0.75rem 0;
  border: 1px solid var(--vp-c-border);
}
.project-modal-content :deep(pre code) {
  background: transparent;
  border: none;
  padding: 0;
}
.project-modal-content :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
  display: block;
}
.project-modal-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--vp-c-border);
  margin: 1.5rem 0;
}
.project-modal-content :deep(blockquote) {
  border-left: 3px solid var(--vp-c-border);
  padding-left: 1rem;
  color: var(--vp-c-text-2);
  margin: 1rem 0;
}
.project-modal-content :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}
.project-modal-content :deep(th),
.project-modal-content :deep(td) {
  border: 1px solid var(--vp-c-border);
  padding: 0.5rem 0.75rem;
  text-align: left;
}
.project-modal-content :deep(th) {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}
</style>
