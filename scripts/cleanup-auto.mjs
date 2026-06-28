#!/usr/bin/env node

/**
 * cleanup-auto.mjs
 *
 * Removes auto-discovered project pages from docs/projects/
 * that were promoted by fetch-readmes.mjs.
 *
 * Reads .auto-slugs.json from the cache dir (written by fetch-readmes.mjs)
 * and removes matching .md files from docs/projects/.
 *
 * Called after VitePress build to keep the working tree clean.
 */

import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;
const PROJECTS_DIR = path.resolve(__dirname, "..", "docs", "projects");
const AUTO_CACHE_DIR = path.resolve(__dirname, "..", "docs", ".vitepress", "cache", "auto-projects");
const SLUGS_FILE = path.join(AUTO_CACHE_DIR, ".auto-slugs.json");

if (!fs.existsSync(SLUGS_FILE)) {
  process.exit(0);
}

const autoSlugs = JSON.parse(fs.readFileSync(SLUGS_FILE, "utf-8"));
fs.unlinkSync(SLUGS_FILE);

if (!Array.isArray(autoSlugs) || autoSlugs.length === 0) {
  process.exit(0);
}

let removed = 0;
for (const slug of autoSlugs) {
  const p = path.join(PROJECTS_DIR, `${slug}.md`);
  try {
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      removed++;
    }
  } catch { /* best effort */ }
}

if (removed > 0) {
  console.log(`  🧹 Cleaned up ${removed} auto page(s) from docs/projects/`);
}
