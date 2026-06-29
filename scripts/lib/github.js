/**
 * github.js
 *
 * GitHub API helpers for the project-fetch pipeline.
 *
 * Exports:
 *   fetchUserRepos(githubToken, user)
 *   fetchLatestCommitDate(githubToken, repoUrl)
 *   readmeBaseUrl(repo)
 */

/**
 * Extract the raw.githubusercontent.com base URL from a GitHub repo URL.
 * Returns null if the URL isn't a recognised github.com URL.
 */
export function readmeBaseUrl(repo) {
  const m = repo.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!m) return null;
  const [, owner, repoName] = m;
  return `https://raw.githubusercontent.com/${owner}/${repoName}`;
}

/**
 * Fetch all public repos for a GitHub user (up to 100).
 * Returns an empty array on failure (logged as warning).
 */
export async function fetchUserRepos(githubToken, user) {
  const url = `https://api.github.com/users/${user}/repos?per_page=100&sort=updated&type=public`;
  try {
    const headers = { Accept: "application/vnd.github.v3+json", "User-Agent": "jdlanyon-dev-fetch" };
    if (githubToken) headers.Authorization = `Bearer ${githubToken}`;
    const res = await fetch(url, { headers });
    if (!res.ok) { console.warn(`  ⚠  GitHub API returned ${res.status} - auto-discovery skipped`); return []; }
    return await res.json();
  } catch (err) {
    console.warn(`  ⚠  Could not fetch repos - auto-discovery skipped (${err.message})`);
    return [];
  }
}

/**
 * Fetch the latest commit date for a repo, returned as "Mon YYYY" (e.g. "Jun 2026").
 * Returns null on failure or if no commit data is found.
 */
export async function fetchLatestCommitDate(githubToken, repoUrl) {
  const m = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!m) return null;
  const [, owner, repoName] = m;
  const url = `https://api.github.com/repos/${owner}/${repoName}/commits?per_page=1`;
  try {
    const headers = { Accept: "application/vnd.github.v3+json", "User-Agent": "jdlanyon-dev-fetch" };
    if (githubToken) headers.Authorization = `Bearer ${githubToken}`;
    const res = await fetch(url, { headers });
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
