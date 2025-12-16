import { Metadata } from 'next';
import RepositoryCard from './repo_card';

// Define the type for repository data
interface GitHubRepoData {
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  license?: {
    name: string;
  };
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// This function runs at build time for static generation
async function getRepoData(repo: string): Promise<GitHubRepoData | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      // Force cache for static generation
      cache: 'force-cache',
      // if there's a GitHub API, add to headers
      headers: process.env.GITHUB_TOKEN ? {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      } : {},
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch ${repo}: ${response.status}`);
      return null;
    }
    
    return response.json();
  } catch (error) {
    console.error(`Error fetching ${repo}:`, error);
    return null;
  }
}

export const metadata: Metadata = {
  title: 'GitHub Repositories',
  description: 'A collection of interesting GitHub repositories',
};

// This page will be statically generated at build time
export default function Repos() {
  // Define repositories to fetch
  const repos = [
    'vercel/next.js',
    'tailwindlabs/tailwindcss',
    'microsoft/typescript',
    'facebook/react',
    'jdlanyon/jdlanyon-dev',
  ];

  // Fetch data for all repos at build time
  const repoDataPromises = repos.map(repo => getRepoData(repo));
  // const repoDataResults = await Promise.all(repoDataPromises);
  
  // Filter out null results
  // const validRepoData = repoDataResults.filter((data): data is GitHubRepoData => data !== null);

  return (
    <div className="space-y-6">
      {/* Dynamic cards that fetch client-side */}
      {repos.map((repo, index) => (
        <RepositoryCard key={index} repo={repo} />
      ))}
      <p>This repository list uses client-side fetching</p>
    </div>
  );
}

// Optional: Generate static params if you have dynamic routes
// export async function generateStaticParams() {
//   return [
//     { slug: 'vercel-next-js' },
//     { slug: 'tailwind-css' },
//   ];
// }