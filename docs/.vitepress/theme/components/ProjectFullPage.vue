<!-- ProjectFullPage.vue
  Full-page layout for project details at /projects/:slug.
  Reads repo, date, and url from page frontmatter via useData().
  No prop needed - just wrap markdown content with <ProjectFullPage>.
-->
<template>
  <div class="page-root">
    <div class="project-fullpage">
      <div class="project-fullpage-header">
        <Button href="/projects" arrow="left">Back to Projects</Button>
        <Button
          v-if="url"
          :href="url"
          arrow="right"
        >Visit Project</Button>
        <Button
          v-if="repo"
          :href="repo"
          arrow="right"
        >View on GitHub</Button>
        <Button
          v-else
          disabled
          title="This repository is private"
          arrow="right"
        >This repo is currently private :(</Button>
      </div>
      <div class="project-fullpage-body">
        <div v-if="date" class="project-fullpage-date">Latest commit: {{ date }}</div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
const repo = frontmatter.value?.repo as string | undefined
const date = frontmatter.value?.date as string | undefined
const url = frontmatter.value?.url as string | undefined
</script>

<style scoped>
.page-root {
  min-height: 100vh;
  background: var(--vp-c-bg);
}

.project-fullpage {
  max-width: 56rem;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.project-fullpage-header {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.project-fullpage-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.5rem;
}
</style>

