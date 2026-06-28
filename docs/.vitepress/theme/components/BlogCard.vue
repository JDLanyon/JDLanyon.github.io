<!-- BlogCard.vue
Clickable card for a single blog post in the listing.
Navigates to the post's full URL on click (or keyboard enter/space).
Props: url, title, date, description, tags[]
-->
<template>
  <Card
    :title="title"
    :date="date"
    :description="description"
    :tags="tags"
    :hashTags="true"
    tabindex="0"
    role="link"
    :ariaLabel="`Read ${title}`"
    @click="navigate"
  />
</template>

<script setup lang="ts">
import Card from './Card.vue'
import { useRouter } from 'vitepress'

const props = defineProps<{
  url: string
  title: string
  date?: string
  description?: string
  tags?: string[]
}>()

const router = useRouter()

function navigate() {
  router.go(props.url)
}
</script>

