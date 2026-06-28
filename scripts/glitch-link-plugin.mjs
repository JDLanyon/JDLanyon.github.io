/**
 * glitch-link-plugin.mjs
 *
 * VitePress markdown-it plugin that transforms every standard markdown link
 * `[text](url)` into a `<GlitchLink href="url">text</GlitchLink>` component.
 *
 * This means all text-based hyperlinks in markdown automatically get the
 * hover glitch effect without manual component usage.
 *
 * Usage in docs/.vitepress/config.ts:
 *   import { glitchLinkPlugin } from '../../scripts/glitch-link-plugin.mjs'
 *   export default defineConfig({
 *     markdown: { config: md => md.use(glitchLinkPlugin) }
 *   })
 */

export function glitchLinkPlugin(md) {
  // Save the original renderer
  const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  const defaultCloseRender = md.renderer.rules.link_close || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  // Override link_open to start a <GlitchLink> instead of <a>
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const href = token.attrGet('href') || '';
    // Skip anchor-only links (internal page anchors)
    if (href.startsWith('#')) {
      return defaultRender(tokens, idx, options, env, self);
    }
    // Skip mailto links
    if (href.startsWith('mailto:')) {
      return defaultRender(tokens, idx, options, env, self);
    }
    // Build GlitchLink component — the link_close will close it
    return `<GlitchLink href="${href.replace(/"/g, '&quot;')}">`;
  };

  // Override link_close to close </GlitchLink> instead of </a>
  md.renderer.rules.link_close = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    // Check if the matching open token was converted
    // by looking back for the matching link_open
    let openIdx = idx;
    while (openIdx >= 0) {
      if (tokens[openIdx].type === 'link_open' && tokens[openIdx].level === token.level) {
        break;
      }
      openIdx--;
    }
    if (openIdx >= 0) {
      const href = tokens[openIdx].attrGet('href') || '';
      if (href.startsWith('#') || href.startsWith('mailto:')) {
        return defaultCloseRender(tokens, idx, options, env, self);
      }
    }
    return `</GlitchLink>`;
  };
}
