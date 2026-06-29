/**
 * projects-md.js
 *
 * Reads the curated catalogue from docs/projects.md and generates it back out
 * after auto-discovery adds new slugs.
 *
 * Exports:
 *   parseCuratedFromProjectsMd(projectsMdPath)
 *   generateProjectsPage(projectsMdPath, curated, autoSlugs)
 */

import fs from "fs";

/** Sections that count as "curated" (vs. "Automatically Fetched"). */
const SECTION_ORDER = ["In Progress", "Featured", "More Projects"];
const CURATED_SECTIONS = new Set(SECTION_ORDER);

/**
 * Parse docs/projects.md for curated project entries and previously-known
 * auto-discovered slugs.
 *
 * Returns { curated: [{ slug, section }], autoSlugs: [string] }
 */
export function parseCuratedFromProjectsMd(projectsMdPath) {
  if (!fs.existsSync(projectsMdPath)) {
    console.warn("  ⚠  docs/projects.md not found — no curated projects defined");
    return { curated: [], autoSlugs: [] };
  }

  const raw = fs.readFileSync(projectsMdPath, "utf-8");
  const lines = raw.split("\n");
  const curated = [];
  const autoSlugs = [];
  let currentSection = null;

  for (const line of lines) {
    const heading = line.match(/^##\s+(.+)/);
    if (heading) {
      currentSection = heading[1].trim();
      continue;
    }
    const wikiLink = line.match(/^\[\[([\w-]+)\]\]$/);
    if (wikiLink && currentSection) {
      if (CURATED_SECTIONS.has(currentSection)) {
        curated.push({ slug: wikiLink[1], section: currentSection });
      } else if (currentSection === "Automatically Fetched") {
        autoSlugs.push(wikiLink[1]);
      }
    }
  }

  return { curated, autoSlugs };
}

/**
 * Regenerate docs/projects.md from curated entries and auto-discovered slugs.
 */
export function generateProjectsPage(projectsMdPath, curated, autoSlugs) {
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

  fs.writeFileSync(projectsMdPath, content, "utf-8");
  console.log(`  📄 projects.md written: ${curated.length} curated + ${autoSlugs.length} auto`);
}
