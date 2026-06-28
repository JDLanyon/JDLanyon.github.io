<template>
  <div v-for="id in embedIds" :key="id" style="position:relative;padding-bottom:56.25%;margin:1.5rem 0;">
    <iframe
      style="position:absolute;top:0;left:0;width:100%;height:100%;"
      :src="`https://www.youtube-nocookie.com/embed/${id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
const embedIds = (frontmatter.value?.embed_ids || []) as string[]
</script>
