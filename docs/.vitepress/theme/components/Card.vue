<!-- Card.vue
Shared card component used by BlogCard and ProjectCard.
Provides consistent card styling (border, hover, head/title/date/desc/tags layout).
Uses a renderless pattern – the parent passes action/click behaviour via card wrapper.
Props: title, date?, description?, tags?

Emits: click — forwarded from the card's own @click handler
-->
<template>
  <div
    class="card"
    :tabindex="tabindex"
    :role="role"
    :aria-label="ariaLabel"
    @click="$emit('click', $event)"
    @keydown.enter="$emit('click', $event)"
    @keydown.space.prevent="$emit('click', $event)"
  >
    <div class="card-head">
      <h3 class="card-title">{{ title }}</h3>
      <time v-if="date" class="card-date">{{ date }}</time>
    </div>
    <p v-if="description" class="card-desc">{{ description }}</p>
    <div v-if="computedTags.length" class="card-tags">
      <span v-for="tag in computedTags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <!-- Slot for extra card-footer content (e.g. "Visit Project" link) -->
    <div v-if="$slots.default" class="card-footer">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  date?: string
  description?: string
  tags?: string[]
  /** If true, prepends "#" to each tag */
  hashTags?: boolean
  tabindex?: string
  role?: string
  ariaLabel?: string
}>()

defineEmits<{
  (e: 'click', event: MouseEvent | KeyboardEvent): void
}>()

const computedTags = computed(() => {
  if (!props.tags?.length) return []
  return props.hashTags ? props.tags.map((t) => `#${t}`) : props.tags
})
</script>

<style scoped>
.card {
  border: 1px solid var(--vp-c-border);
  padding: 1.25rem;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;
  position: relative;
}

.card:hover {
  transform: translateY(-2px);
  background: var(--vp-c-bg-soft);
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.card-date {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.card-desc {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin: 0 0 0.75rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0;
}

.tag {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-2);
}

.card-footer {
  margin-top: 0.75rem;
}
</style>
