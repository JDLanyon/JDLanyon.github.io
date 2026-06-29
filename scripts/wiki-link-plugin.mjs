/**
 * wiki-link-plugin.mjs
 *
 * VitePress markdown plugin that transforms [[slug]] wiki-links
 * into <ProjectCard> components at build time.
 *
 * Metadata comes from docs/projects/*.md frontmatter.
 *
 * This plugin only runs during the VitePress build - your
 * Obsidian notes keep clean [[wiki-link]] syntax untouched.
 *
 * Usage in docs/.vitepress/config.ts:
 *   import { wikiLinkPlugin } from '../../scripts/wiki-link-plugin.mjs'
 *   export default defineConfig({
 *     markdown: { config: md => md.use(wikiLinkPlugin) }
 *   })
 */

import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;
const PROJECTS_DIR = path.resolve(__dirname, "..", "docs", "projects");
const AUTO_DIR = path.resolve(__dirname, "..", "docs", ".vitepress", "cache", "auto-projects");

/** Metadata about a single project, gathered from frontmatter.
 *  Checks projects dir first, then auto-discovered dir. */
function getProjectMeta(slug) {
  for (const dir of [PROJECTS_DIR, AUTO_DIR]) {
    const projectFile = path.join(dir, `${slug}.md`);
  if (fs.existsSync(projectFile)) {
    const raw = fs.readFileSync(projectFile, "utf-8");
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    if (fmMatch) {
      const fm = {};
      for (const line of fmMatch[1].split("\n")) {
        const kv = line.match(/^(\w+):\s*(.+)/);
        if (!kv) continue;
        let val = kv[2].trim();
        if (val.startsWith("[")) {
          try {
            val = JSON.parse(val.replace(/'/g, '"'));
          } catch {
            val = val.slice(1, -1).split(",").map(s => s.trim().replace(/^["']|["']$/g, ""));
          }
        } else if (val.startsWith('"') && val.endsWith('"')) {
          val = val.slice(1, -1);
        }
        fm[kv[1]] = val;
      }
      return fm;
    }
  }
}
  return {};
}

/** Build a <ProjectCard /> component string from metadata. */
function buildCard(slug) {
  const meta = getProjectMeta(slug);
  const title = meta.title || slug;
  const tags = meta.tags || [];
  const repo = meta.repo || "";
  const url = meta.url || "";

  // Use description from frontmatter if it's a real description,
  // otherwise leave empty (tags are shown separately on the card).
  const description = meta.description && meta.description !== "Project detail page"
    ? meta.description
    : "";

  let card = `<ProjectCard slug="${slug}" title="${title}"`;
  card += ` description="${description}"`;
  if (tags.length > 0) {
    card += ` :tags='${JSON.stringify(tags)}'`;
  }
  if (repo) {
    card += ` repo="${repo}"`;
  }
  if (url) {
    card += ` url="${url}"`;
  }
  if (meta.date) {
    card += ` date="${meta.date}"`;
  }
  card += ` />`;
  return card;
}

export function wikiLinkPlugin(md) {
  md.core.ruler.push("wiki_links", function (state) {
    const tokens = state.tokens;
    const isProjectsPage = tokens.some(
      t => t.type === "heading_open" && t.tag === "h1"
        && tokens[tokens.indexOf(t) + 1]?.content === "Projects"
    );

    if (!isProjectsPage) return;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token.type === "inline" && token.children) {
        for (let j = 0; j < token.children.length; j++) {
          const child = token.children[j];

          if (child.type === "text" && child.content) {
            const replaced = child.content.replace(
              /\[\[([\w-]+)\]\]/g,
              (match, slug) => buildCard(slug),
            );

            if (replaced !== child.content) {
              const parts = replaced.split(/(<ProjectCard[\s\S]*?\/>)/);
              const newChildren = [];

              for (const part of parts) {
                if (!part) continue;
                if (part.startsWith("<ProjectCard")) {
                  const htmlToken = new state.Token("html_inline", "", 0);
                  htmlToken.content = part;
                  newChildren.push(htmlToken);
                } else {
                  const textToken = new state.Token("text", "", 0);
                  textToken.content = part;
                  newChildren.push(textToken);
                }
              }

              token.children.splice(j, 1, ...newChildren);
              j += newChildren.length - 1;
            }
          }
        }
      }
    }
  });
}
