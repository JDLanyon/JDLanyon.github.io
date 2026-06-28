declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// VitePress data loaders (.data.ts) — processed at build time.
// The 'data' named export is injected by VitePress at build time from the default export.
declare module '*.data' {
  import type { ContentData } from 'vitepress'
  export const data: ContentData[]
}

// Explicit match for the blog data loader (TypeScript needs this for file-specific resolution)
declare module '*/components/blog.data' {
  import type { ContentData } from 'vitepress'
  export const data: ContentData[]
}

// VitePress markdown modules via import.meta.glob
declare module '*.md' {
  import type { Component } from 'vue'
  const component: Component
  export default component
}
