<!-- DS - Layout.vue: Custom VitePress theme layout wrapper. Extends the DefaultTheme Layout and injects the BackToTop component into the #doc-after slot. Also injects a "← Back to Blog" button in #doc-before on blog post pages. -->
<template>
  <Layout>
    <template #doc-before>
      <Button v-if="isBlogPost" href="/blog/" arrow="left">Back to Blog</Button>
    </template>
    <template #doc-after>
      <BackToTop />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BackToTop from './components/BackToTop.vue'

const { Layout } = DefaultTheme

const { page } = useData()
const isBlogPost = computed(() =>
  page.value.filePath?.startsWith('blog/') && page.value.filePath !== 'blog/index.md'
)
</script>

