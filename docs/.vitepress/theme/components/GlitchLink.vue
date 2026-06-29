<!-- GlitchLink
A styled link that plays a CSS-animated glitch effect (chromatic aberration + shake + motion blur) on hover.
Uses RGB & CMY colours with screen/difference blend modes.
Props: href, text (fallback if no slot), cooldown (ms between triggers).
Slot: default - inner link content (e.g. markdown link text). -->
<template>
  <a
    :href="href"
    class="glitch-link"
    @mouseenter="triggerGlitch"
  >
    <span class="glitch-text-wrap" :class="{ 'is-glitching': isGlitching }">
      <span class="glitch-base"><slot>{{ text }}</slot></span>
      <span class="glitch-chroma glitch-chroma-r" aria-hidden="true"><slot>{{ text }}</slot></span>
      <span class="glitch-chroma glitch-chroma-g" aria-hidden="true"><slot>{{ text }}</slot></span>
      <span class="glitch-chroma glitch-chroma-b" aria-hidden="true"><slot>{{ text }}</slot></span>
      <span class="glitch-chroma glitch-chroma-c" aria-hidden="true"><slot>{{ text }}</slot></span>
      <span class="glitch-chroma glitch-chroma-m" aria-hidden="true"><slot>{{ text }}</slot></span>
      <span class="glitch-chroma glitch-chroma-y" aria-hidden="true"><slot>{{ text }}</slot></span>
      <span class="glitch-motion-blur" aria-hidden="true" />
    </span>
    <span class="glitch-underline" />
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  href: string
  text?: string
  cooldown?: number
}>(), {
  text: '',
  cooldown: 1000,
})

const isGlitching = ref(false)
const lastTrigger = ref(0)

function triggerGlitch() {
  const now = Date.now()
  if (now - lastTrigger.value < props.cooldown) return
  lastTrigger.value = now
  isGlitching.value = true
  setTimeout(() => {
    isGlitching.value = false
  }, 350)
}
</script>

<style scoped>
.glitch-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-weight: bold;
  cursor: pointer;
}
.glitch-text-wrap {
  position: relative;
  display: inline-block;
}
.glitch-base {
  position: relative;
  display: inline-block;
  z-index: 1;
}
.glitch-chroma {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  z-index: 0;
  will-change: transform, opacity;
}
.glitch-motion-blur {
  position: absolute;
  inset: -4px;
  pointer-events: none;
  opacity: 0;
  z-index: 3;
  will-change: opacity, backdrop-filter;
}

/* Chroma layers on */
.is-glitching .glitch-chroma-r {
  opacity: 1;
  color: rgba(255, 60, 60, 0.7);
  mix-blend-mode: screen;
  animation: chroma-r 0.35s steps(4, end);
}
.is-glitching .glitch-chroma-g {
  opacity: 1;
  color: rgba(60, 255, 60, 0.7);
  mix-blend-mode: screen;
  animation: chroma-g 0.35s steps(4, end);
}
.is-glitching .glitch-chroma-b {
  opacity: 1;
  color: rgba(60, 60, 255, 0.7);
  mix-blend-mode: screen;
  animation: chroma-b 0.35s steps(4, end);
}
.is-glitching .glitch-chroma-c {
  opacity: 1;
  color: rgba(0, 200, 200, 0.6);
  mix-blend-mode: difference;
  animation: chroma-c 0.35s steps(4, end);
}
.is-glitching .glitch-chroma-m {
  opacity: 1;
  color: rgba(200, 0, 200, 0.6);
  mix-blend-mode: difference;
  animation: chroma-m 0.35s steps(4, end);
}
.is-glitching .glitch-chroma-y {
  opacity: 1;
  color: rgba(200, 200, 0, 0.6);
  mix-blend-mode: difference;
  animation: chroma-y 0.35s steps(4, end);
}
.is-glitching .glitch-base {
  animation: text-shake 0.35s steps(4, end);
}
.is-glitching .glitch-motion-blur {
  opacity: 0.35;
  backdrop-filter: blur(2px);
  animation: blur-pulse 0.35s steps(4, end);
}

/* RGB (screen) */
@keyframes chroma-r {
  0%   { transform: translate(0, 0); opacity: 0; }
  15%  { transform: translate(3px, -2px); opacity: 1; }
  40%  { transform: translate(-2px, 2px); opacity: 1; }
  70%  { transform: translate(4px, -1px); opacity: 0.8; }
  100% { transform: translate(0, 0); opacity: 0; }
}
@keyframes chroma-g {
  0%   { transform: translate(0, 0); opacity: 0; }
  15%  { transform: translate(-3px, 1px); opacity: 1; }
  40%  { transform: translate(2px, -2px); opacity: 1; }
  70%  { transform: translate(-1px, 3px); opacity: 0.8; }
  100% { transform: translate(0, 0); opacity: 0; }
}
@keyframes chroma-b {
  0%   { transform: translate(0, 0); opacity: 0; }
  15%  { transform: translate(2px, 3px); opacity: 1; }
  40%  { transform: translate(-3px, -1px); opacity: 1; }
  70%  { transform: translate(1px, -3px); opacity: 0.8; }
  100% { transform: translate(0, 0); opacity: 0; }
}

/* CMY (difference) */
@keyframes chroma-c {
  0%   { transform: translate(0, 0); opacity: 0; }
  15%  { transform: translate(-2px, -2px); opacity: 0.9; }
  40%  { transform: translate(3px, 2px); opacity: 0.9; }
  70%  { transform: translate(-3px, 1px); opacity: 0.7; }
  100% { transform: translate(0, 0); opacity: 0; }
}
@keyframes chroma-m {
  0%   { transform: translate(0, 0); opacity: 0; }
  15%  { transform: translate(4px, 1px); opacity: 0.9; }
  40%  { transform: translate(-2px, -3px); opacity: 0.9; }
  70%  { transform: translate(2px, 2px); opacity: 0.7; }
  100% { transform: translate(0, 0); opacity: 0; }
}
@keyframes chroma-y {
  0%   { transform: translate(0, 0); opacity: 0; }
  15%  { transform: translate(-1px, 3px); opacity: 0.9; }
  40%  { transform: translate(1px, -2px); opacity: 0.9; }
  70%  { transform: translate(-4px, -1px); opacity: 0.7; }
  100% { transform: translate(0, 0); opacity: 0; }
}

/* Base text shake */
@keyframes text-shake {
  0%   { transform: translate(0, 0); }
  15%  { transform: translate(2px, -1px); }
  35%  { transform: translate(-2px, 2px); }
  55%  { transform: translate(1px, -2px); }
  75%  { transform: translate(-1px, 1px); }
  100% { transform: translate(0, 0); }
}

/* Motion blur pulse */
@keyframes blur-pulse {
  0%   { opacity: 0; }
  15%  { opacity: 0.4; }
  40%  { opacity: 0.35; }
  70%  { opacity: 0.25; }
  100% { opacity: 0; }
}

/* Underline */
.glitch-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: linear-gradient(to right, var(--vp-c-text-2), var(--vp-c-text-1));
  transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.glitch-link:hover .glitch-underline {
  width: 100%;
}
</style>
