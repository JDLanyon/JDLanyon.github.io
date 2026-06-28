import { createContentLoader } from 'vitepress'

export interface PostData {
  url: string
  frontmatter: Record<string, any>
  /**
   * Array of folder segments leading to this post, top-down.
   * e.g. "/blog/webdev/css/grid_layouts" → ["webdev", "css"]
   *      "/blog/hello-world"             → []            (→ "General")
   */
  segments: string[]
}

/**
 * Extract folder segments from a blog URL, excluding the post name itself.
 * e.g. "/blog/webdev/css/post" → ["webdev", "css"]
 *      "/blog/hello-world"     → []
 */
function getSegments(url: string): string[] {
  const parts = url.replace(/^\/blog\//, '').split('/')
  // parts = ["webdev", "css", "post"] or ["hello-world"]
  return parts.slice(0, -1) // drop the post filename
}

export default createContentLoader('/blog/**/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform(rawData) {
    return rawData
      // Remove the index page itself if present (the /blog/ list page)
      .filter((page) => !page.url.endsWith('/blog/'))
      .map((page) => ({
        url: page.url,
        frontmatter: page.frontmatter,
        // segments: parent folder categories, derived from the URL path
        segments: getSegments(page.url),
      }))
      // Sort posts by date descending (newest first)
      .sort((a, b) => {
        // dateA: timestamp of post 'a' from its frontmatter date (or 0 if no date)
        const dateA = a.frontmatter?.date ? new Date(a.frontmatter.date).getTime() : 0
        // dateB: timestamp of post 'b' from its frontmatter date (or 0 if no date)
        const dateB = b.frontmatter?.date ? new Date(b.frontmatter.date).getTime() : 0
        return dateB - dateA
      })
  },
})
