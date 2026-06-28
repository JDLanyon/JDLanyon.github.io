<template>
  <Card
    :title="title"
    :date="date"
    :description="description"
    :tags="tags"
    tabindex="0"
    role="button"
    :ariaLabel="`View details for ${title}`"
    @click="openModal"
  >
    <GlitchLink
      v-if="url"
      :href="url"
      class="project-card-url"
      @click.stop
    >View Live</GlitchLink>
  </Card>

    <!-- Modal instance — one per card, triggered on click -->
    <ProjectDetailModal
      v-if="showModal"
      :slug="slug"
      :repo="repo"
      @close="showModal = false"
    />
</template>

<script setup lang="ts">
import Card from './Card.vue'
import { ref } from 'vue'

const props = defineProps<{
  slug: string
  title: string
  description: string
  tags?: string[]
  repo?: string
  date?: string
  url?: string
}>()

const showModal = ref(false)

function openModal() {
  showModal.value = true
}
</script>

<style scoped>
.project-card-url {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.project-card-url:hover {
  text-decoration: underline;
}
</style>

