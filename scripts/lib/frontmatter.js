/**
 * frontmatter.js
 *
 * Building and manipulating YAML frontmatter for VitePress project pages.
 *
 * Exports:
 *   buildFrontmatter({ title, description, tags, url, embed_ids, date, repo })
 *   stripExistingFrontmatter(content)
 *   resolveRelativePaths(content, repo)
 */

import { readmeBaseUrl } from "./github.js";

/**
 * Build YAML frontmatter block for a VitePress project page.
 * All fields are optional; only non-null, non-empty fields are included.
 */
export function buildFrontmatter({ title, description, tags, url, embed_ids, date, repo }) {
  let fm = `---
title: ${title}
description: ${description || "Project detail page"}
`;
  if (date) fm += `date: "${date}"\n`;
  if (repo) fm += `repo: "${repo}"\n`;
  if (tags?.length) fm += `tags: [${tags.map(t => `"${t}"`).join(", ")}]\n`;
  if (url) fm += `url: "${url}"\n`;
  if (embed_ids?.length) fm += `embed_ids: [${embed_ids.map(id => `"${id}"`).join(", ")}]\n`;
  fm += `---\n\n<ProjectFullPage>\n\n`;
  return fm;
}

/**
 * Remove any existing YAML frontmatter from a markdown string.
 */
export function stripExistingFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\n*/, "");
}

/**
 * Resolve relative image/src URLs in markdown to absolute GitHub raw URLs.
 * Handles markdown images, <img> tags, and <source> tags.
 */
export function resolveRelativePaths(content, repo) {
  const base = readmeBaseUrl(repo) + "/main/";
  if (!base) return content;
  return content
    .replace(/(!\[.*?\]\()((?!https?:\/\/|data:|#|\/).*?)\)/g, (_, alt, p) => `${alt}(${base}${p})`)
    .replace(/(<img[^>]*src=")((?!https?:\/\/|data:|\/).*?)(")/g, (_, pre, p, post) => `${pre}${base}${p}${post}`)
    .replace(/(<source[^>]*srcset=")((?!https?:\/\/|data:).*?)(")/g, (_, pre, p, post) => `${pre}${base}${p}${post}`);
}
