#!/usr/bin/env node

/**
 * fetch-readmes.mjs
 *
 * Fetches GitHub README.md files for projects and writes them as
 * VitePress-routable pages.
 *
 * Two sources:
 *   1. CURATED — projects listed under known section headings in docs/projects.md
 *      → existing files at docs/projects/{slug}.md are never overwritten
 *   2. AUTO-DISCOVERED — public repos on GitHub not otherwise covered
 *      → written to cache dir, then promoted to docs/projects/ for routing
 *      → caller (package.json script) should run cleanup-auto.mjs after build
 *
 * Priority: local markdown in docs/projects/ > fetched README > fallback
 */

import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;
const PROJECTS_DIR = path.resolve(__dirname, "..", "docs", "projects");
const AUTO_CACHE_DIR = path.resolve(__dirname, "..", "docs", ".vitepress", "cache", "auto-projects");
const PROJECTS_MD = path.resolve(__dirname, "..", "docs", "projects.md");

const GITHUB_USER = "JDLanyon";

// Repositories to always skip during auto-discovery, even if no curated page exists.
// Add repo names here for forks, archived projects, or anything you don't want listed.
const IGNORED_REPOSITORIES = new Set([
  "FunctionalStorage",  // Minecraft mod fork — not original work
  "JDLanyon",           // GitHub profile README repo
  // Add more repos here:
]);

// Parse curated projects from docs/projects.md

const SECTION_ORDER = ["In Progress", "Featured", "More Projects"];
const CURATED_SECTIONS = new Set(SECTION_ORDER);

function parseCuratedFromProjectsMd() {
  if (!fs.existsSync(PROJECTS_MD)) {
    console.warn("  ⚠  docs/projects.md not found — no curated projects defined");
    return [];
  }

  const raw = fs.readFileSync(PROJECTS_MD, "utf-8");
  const lines = raw.split("\n");
  const curated = [];
  let currentSection = null;

  for (const line of lines) {
    const heading = line.match(/^##\s+(.+)/);
    if (heading) {
      currentSection = heading[1].trim();
      continue;
    }
    const wikiLink = line.match(/^\[\[([\w-]+)\]\]$/);
    if (wikiLink && currentSection && CURATED_SECTIONS.has(currentSection)) {
      curated.push({ slug: wikiLink[1], section: currentSection });
    }
  }

  return curated;
}

// Helpers

function readmeBaseUrl(repo) {
  const m = repo.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!m) return null;
  const [, owner, repoName] = m;
  return `https://raw.githubusercontent.com/${owner}/${repoName}`;
}

function buildFrontmatter({ title, description, tags, url, embed_ids, date }) {
  let fm = `---
title: ${title}
description: ${description || "Project detail page"}
`;
  if (date) fm += `date: "${date}"\n`;
  if (tags?.length) fm += `tags: [${tags.map(t => `"${t}"`).join(", ")}]\n`;
  if (url) fm += `url: "${url}"\n`;
  if (embed_ids?.length) fm += `embed_ids: [${embed_ids.map(id => `"${id}"`).join(", ")}]\n`;
  fm += `---\n\n<ProjectFullPage>\n\n`;
  return fm;
}

function stripExistingFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\n*/, "");
}

function resolveRelativePaths(content, repo) {
  const base = readmeBaseUrl(repo) + "/main/";
  if (!base) return content;
  return content
    .replace(/(!\[.*?\]\()((?!https?:\/\/|data:|#|\/).*?)\)/g, (_, alt, p) => `${alt}(${base}${p})`)
    .replace(/(<img[^>]*src=")((?!https?:\/\/|data:|\/).*?)(")/g, (_, pre, p, post) => `${pre}${base}${p}${post}`)
    .replace(/(<source[^>]*srcset=")((?!https?:\/\/|data:).*?)(")/g, (_, pre, p, post) => `${pre}${base}${p}${post}`);
}

function slugFromRepoName(name) {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[ _]+/g, "-")
    .replace(/[^a-z0-9-]/gi, "")
    .toLowerCase();
}

function titleFromRepoName(name) {
  return name.replace(/[-_]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b\w/g, c => c.toUpperCase());
}

async function fetchUserRepos(user) {
  const url = `https://api.github.com/users/${user}/repos?per_page=100&sort=updated&type=public`;
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/vnd.github.v3+json", "User-Agent": "jdlanyon-dev-fetch" },
    });
    if (!res.ok) { console.warn(`  ⚠  GitHub API returned ${res.status} — auto-discovery skipped`); return []; }
    return await res.json();
  } catch (err) {
    console.warn(`  ⚠  Could not fetch repos — auto-discovery skipped (${err.message})`);
    return [];
  }
}

// Fetch latest commit date from GitHub

async function fetchLatestCommitDate(repoUrl) {
  const m = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!m) return null;
  const [, owner, repoName] = m;
  const url = `https://api.github.com/repos/${owner}/${repoName}/commits?per_page=1`;
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/vnd.github.v3+json", "User-Agent": "jdlanyon-dev-fetch" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0 && data[0].commit?.committer?.date) {
      const d = new Date(data[0].commit.committer.date);
      const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      return `${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
    }
    return null;
  } catch {
    return null;
  }
}

// Write a project page

async function writeProject(slug, title, description, repo, tags, url = null, embed_ids = [], isAuto = false, date = null) {
  const outDir = isAuto ? AUTO_CACHE_DIR : PROJECTS_DIR;
  const outPath = path.join(outDir, `${slug}.md`);
  const prefix = isAuto ? "↻" : " ";

  if (!isAuto && fs.existsSync(outPath)) {
    return { log: `${prefix} ✓ ${slug} (local markdown)`, slug };
  }

  if (!repo) {
    const body = `More details coming soon.\n\n<YouTubeEmbeds />\n`;
    fs.writeFileSync(outPath, buildFrontmatter({ title, description, tags, url, embed_ids, date }) + body + "\n</ProjectFullPage>\n", "utf-8");
    return { log: `${prefix} ○ ${slug} (placeholder)`, slug };
  }

  const baseUrl = readmeBaseUrl(repo);
  if (!baseUrl) return { log: `${prefix} ⚠  ${slug}: could not parse repo URL`, slug };

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
    const fm = buildFrontmatter({ title, description, tags, url, embed_ids, date });
    const c = sanitized.replace(/^(# .+)/m, `$1\n\n<YouTubeEmbeds />\n\n<p class="subtle" style="text-align:right;font-size:0.8rem;">README fetched from GitHub.</p>\n`);
    fs.writeFileSync(outPath, fm + c + "\n\n</ProjectFullPage>\n", "utf-8");
    return { log: `${prefix} ✓ ${slug} (fetched)`, slug };
  }

  const fallback = buildFrontmatter({ title, description, tags, url, embed_ids, date })
    + `<p class="subtle" style="text-align:right;font-size:0.8rem;">README could not be fetched from GitHub.</p>\n`
    + `<YouTubeEmbeds />\n`
    + `[View on GitHub](${repo})\n`
    + `\n</ProjectFullPage>\n`;
  fs.writeFileSync(outPath, fallback, "utf-8");
  return { log: `${prefix} ⚠  ${slug} (fetch failed)`, slug };
}

// Generate docs/projects.md

function generateProjectsPage(curated, autoSlugs) {
  const sections = {};
  for (const { slug, section } of curated) {
    if (!sections[section]) sections[section] = [];
    sections[section].push(slug);
  }

  let content = `# Projects

<p class="subtle">Things I've built, contributed to, and learned from.</p>

`;

  const ordered = [...SECTION_ORDER];
  const extra = Object.keys(sections).filter(s => !CURATED_SECTIONS.has(s));
  for (const section of [...ordered, ...extra]) {
    const slugs = sections[section];
    if (!slugs || slugs.length === 0) continue;
    content += `## ${section}\n\n`;
    for (const slug of slugs) content += `[[${slug}]]\n`;
    content += `\n`;
  }

  if (autoSlugs.length > 0) {
    content += `## Automatically Fetched\n\n`;
    for (const slug of autoSlugs) content += `[[${slug}]]\n`;
    content += `\n`;
  }

  fs.writeFileSync(PROJECTS_MD, content, "utf-8");
  console.log(`  📄 projects.md written: ${curated.length} curated + ${autoSlugs.length} auto`);
}

// Promote auto files → docs/projects/ for routing

function promoteAutoFiles(slugs) {
  const promoted = [];
  for (const slug of slugs) {
    const src = path.join(AUTO_CACHE_DIR, `${slug}.md`);
    const dest = path.join(PROJECTS_DIR, `${slug}.md`);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      promoted.push(slug);
    }
  }
  if (promoted.length > 0)
    console.log(`  📋 Promoted ${promoted.length} auto page(s) to docs/projects/`);

  return promoted;
}

// Main

const curated = parseCuratedFromProjectsMd();
const curatedSlugs = new Set(curated.map(c => c.slug));

// Build a set of slugs that already have a file in docs/projects/,
// so auto-discovery doesn't re-generate pages for repos that already
// have a hand-written page (even if not listed in projects.md).
const existingProjectSlugs = new Set();
const coveredRepoUrls = new Set();
for (const f of fs.readdirSync(PROJECTS_DIR)) {
  if (f.endsWith(".md") && f !== "index.md") {
    const slug = f.replace(/\.md$/, "");
    existingProjectSlugs.add(slug);

    // Check frontmatter for a repo: field to prevent duplicate coverage
    const filePath = path.join(PROJECTS_DIR, f);
    const raw = fs.readFileSync(filePath, "utf-8");
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    if (fmMatch) {
      for (const line of fmMatch[1].split("\n")) {
        const kv = line.match(/^repo:\s*(.+)/);
        if (kv) {
          const repoUrl = kv[1].trim().replace(/^["']|["']$/g, "");
          coveredRepoUrls.add(repoUrl);
        }
      }
    }
  }
}

fs.mkdirSync(PROJECTS_DIR, { recursive: true });

// Phase 1: Fetch all repos from GitHub (used for auto-discover)
const repos = await fetchUserRepos(GITHUB_USER);

// Phase 2: Curated — verify files exist, inject date into frontmatter
// Uses repo URL already in the file's frontmatter (added by author)
for (const { slug } of curated) {
  const outPath = path.join(PROJECTS_DIR, `${slug}.md`);
  if (fs.existsSync(outPath)) {
    let content = fs.readFileSync(outPath, "utf-8");
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    let repoUrl = null;
    if (fmMatch) {
      for (const line of fmMatch[1].split("\n")) {
        const kv = line.match(/^repo:\s*(.+)/);
        if (kv) repoUrl = kv[1].trim().replace(/^["']|["']$/g, "");
      }
    }
    if (repoUrl) {
      const date = await fetchLatestCommitDate(repoUrl);
      if (date) {
        if (fmMatch) {
          if (fmMatch[1].includes("date:")) {
            content = content.replace(/^date:.*$/m, `date: "${date}"`);
          } else {
            content = content.replace(/^(title:.*)$/m, `$1\ndate: "${date}"`);
          }
          fs.writeFileSync(outPath, content, "utf-8");
        }
      }
      console.log(`   ✓ ${slug}${date ? ` (${date})` : ""} (local markdown)`);
    } else {
      console.log(`   ✓ ${slug} (local markdown, no repo in frontmatter)`);
    }
  } else {
    const r = await writeProject(slug, slug, "", null, [], [], [], false);
    console.log(`  ${r.log}`);
  }
}

// Phase 3: Auto-discover — only for repos without an existing curated page
fs.mkdirSync(AUTO_CACHE_DIR, { recursive: true });
fs.readdirSync(AUTO_CACHE_DIR).forEach(f => {
  if (f.endsWith(".md")) fs.unlinkSync(path.join(AUTO_CACHE_DIR, f));
});

const autoResults = [];

for (const repo of repos) {
  const slug = slugFromRepoName(repo.name);

  // Skip if already curated or if a markdown file already exists
  if (curatedSlugs.has(slug)) continue;
  // Skip if any existing file references this repo URL
  if (coveredRepoUrls.has(repo.html_url)) continue;
  if (existingProjectSlugs.has(slug)) continue;
  if (IGNORED_REPOSITORIES.has(repo.name)) continue;
  if (repo.archived || repo.fork) continue;

  const tags = repo.language ? [repo.language] : [];
  const ghDesc = (repo.description || "").trim();
  const description = ghDesc.length > 0 ? ghDesc : "";
  const title = titleFromRepoName(repo.name);
  const date = await fetchLatestCommitDate(repo.html_url);

  const r = await writeProject(slug, title, description, repo.html_url, tags, null, [], true, date);
  autoResults.push(r);
}

// Phase 4: Promote auto files for VitePress routing
const autoSlugs = autoResults.map(r => r.slug);
promoteAutoFiles(autoSlugs);

// Phase 5: Generate projects.md catalogue
generateProjectsPage(curated, autoSlugs);

// Phase 6: Summary
console.log(`\nDone: ${curated.length} curated, ${autoResults.length} auto-discovered`);

// Phase 7: Write auto slugs list for cleanup-auto.mjs
fs.writeFileSync(path.join(AUTO_CACHE_DIR, ".auto-slugs.json"), JSON.stringify(autoSlugs, null, 2));
