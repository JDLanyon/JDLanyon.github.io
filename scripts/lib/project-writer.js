/**
 * project-writer.js
 *
 * Writing individual project pages and promoting auto-discovered pages
 * from cache into the VitePress routing directory.
 *
 * Exports:
 *   slugFromRepoName(name)
 *   titleFromRepoName(name)
 *   writeProject({ slug, title, description, repo, tags, url, embed_ids, isAuto, date, projectsDir, autoCacheDir })
 *   promoteAutoFiles(slugs, autoCacheDir, projectsDir)
 */

import fs from "fs";
import path from "path";
import { readmeBaseUrl } from "./github.js";
import { buildFrontmatter, stripExistingFrontmatter, resolveRelativePaths } from "./frontmatter.js";

/**
 * Convert a GitHub repo name to a URL-friendly slug.
 * "MyCoolProject" → "my-cool-project", "my_repo" → "my-repo"
 */
export function slugFromRepoName(name) {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[ _]+/g, "-")
    .replace(/[^a-z0-9-]/gi, "")
    .toLowerCase();
}

/**
 * Derive a human-readable title from a repo name.
 * "my-cool-project" → "My Cool Project", "MyCoolProject" → "My Cool Project"
 */
export function titleFromRepoName(name) {
  return name.replace(/[-_]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * Write a single project page as a VitePress `.md` file.
 *
 * Behaviour depends on combination of flags:
 *  - Curated pages (isAuto=false) that already exist are never overwritten.
 *  - If repo is null/empty, writes a placeholder.
 *  - If repo is provided, fetches README.md from GitHub (tries main, then master).
 *  - Fallback content if fetch fails.
 *
 * Returns { log: string, slug: string } for reporting.
 */
export async function writeProject({ slug, title, description, repo, tags, url = null, embed_ids = [], isAuto = false, date = null, projectsDir, autoCacheDir }) {
  const outDir = isAuto ? autoCacheDir : projectsDir;
  const outPath = path.join(outDir, `${slug}.md`);
  const prefix = isAuto ? "↻" : " ";

  // Curated pages with existing files are never touched
  if (!isAuto && fs.existsSync(outPath)) {
    return { log: `${prefix} ✓ ${slug} (local markdown)`, slug };
  }

  // No repo URL → write a placeholder
  if (!repo) {
    const body = `More details coming soon.\n\n<YouTubeEmbeds />\n`;
    fs.writeFileSync(outPath, buildFrontmatter({ title, description, tags, url, embed_ids, date, repo }) + body + "\n</ProjectFullPage>\n", "utf-8");
    return { log: `${prefix} ○ ${slug} (placeholder)`, slug };
  }

  const baseUrl = readmeBaseUrl(repo);
  if (!baseUrl) return { log: `${prefix} ⚠  ${slug}: could not parse repo URL`, slug };

  // Fetch README — try main branch first, then master
  let body = null;
  for (const branch of ["main", "master"]) {
    try {
      const res = await fetch(`${baseUrl}/${branch}/README.md`);
      if (res.ok) { body = await res.text(); break; }
    } catch { /* try next branch */ }
  }

  if (body) {
    const cleaned = stripExistingFrontmatter(body);
    const sanitized = resolveRelativePaths(cleaned, repo);
    const fm = buildFrontmatter({ title, description, tags, url, embed_ids, date, repo });
    const c = sanitized.replace(/^(# .+)/m, `$1\n\n<YouTubeEmbeds />\n\n<p class="subtle" style="text-align:right;font-size:0.8rem;">README fetched from GitHub.</p>\n`);
    fs.writeFileSync(outPath, fm + c + "\n\n</ProjectFullPage>\n", "utf-8");
    return { log: `${prefix} ✓ ${slug} (fetched)`, slug };
  }

  // Fallback when README could not be fetched
  const fallback = buildFrontmatter({ title, description, tags, url, embed_ids, date })
    + `<p class="subtle" style="text-align:right;font-size:0.8rem;">README could not be fetched from GitHub.</p>\n`
    + `<YouTubeEmbeds />\n`
    + `[View on GitHub](${repo})\n`
    + `\n</ProjectFullPage>\n`;
  fs.writeFileSync(outPath, fallback, "utf-8");
  return { log: `${prefix} ⚠  ${slug} (fetch failed)`, slug };
}

/**
 * Copy auto-discovered markdown files from the cache directory into
 * docs/projects/ so VitePress can route them during build.
 *
 * Returns the list of successfully promoted slugs.
 */
export function promoteAutoFiles(slugs, autoCacheDir, projectsDir) {
  const promoted = [];
  for (const slug of slugs) {
    const src = path.join(autoCacheDir, `${slug}.md`);
    const dest = path.join(projectsDir, `${slug}.md`);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      promoted.push(slug);
    }
  }
  if (promoted.length > 0)
    console.log(`  📋 Promoted ${promoted.length} auto page(s) to docs/projects/`);

  return promoted;
}
