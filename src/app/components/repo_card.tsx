'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link'
import "../globals.css";
import { useHover } from '@/app/utilities/hover_context';
import { useEffect, useState, ReactNode } from 'react';

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

interface RepoCardProps {
  repo: string; // "owner/repo-name"
  no_border?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler;
}


export default function RepositoryCard({ repo, className = "", no_border, onClick }: RepoCardProps): ReactNode {
  const [repoData, setRepoData] = useState<GitHubRepoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setBlurBackground } = useHover();

  // fetch repo data
  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          // For static export, handle caching
          cache: 'force-cache',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        setRepoData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repository data');
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [repo]);

  // handle components without repo data (loading, error and no data)

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-(--background) opacity-50 py-16">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    console.log("Error loading repository: ", error)
    return null;
  }

  if (!repoData) {
    console.log("Error getting repository data.")
    return null;
  }
  // Format the date
  const updatedDate = new Date(repoData.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });


  return (
    <div 
      className={`${no_border ? "" : "border border-(--primary) hover:border-(--primary_inverse)"}
        relative overflow-hidden transition transform p-4 cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none
        hover:text-(--secondary_inverse) hover:backdrop-invert hover:backdrop-saturate-10 hover:backdrop-brightness-150 hover:-translate-y-1
        backdrop-blur-xs backdrop-saturate-110 hover:backdrop-blur-none`}
      onMouseEnter={() => setBlurBackground(false)}
      onMouseLeave={() => setBlurBackground(true)}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4">
          <div className="flex items-center space-x-3">
            <img
              src={repoData.owner.avatar_url}
              alt={`${repoData.owner.login}'s avatar`}
              className="w-10 h-10 rounded-full border"
            />
            <div>
              <h3 className="font-bold text-lg">
                <a 
                  href={repoData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repoData.full_name}
                </a>
              </h3>
              <p className="text-sm">By {repoData.owner.login}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mb-6">
          {repoData.description || 'No description provided'}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4">

        {/* Stats */}
          {/* <div className="flex items-center">
            <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">{repoData.stargazers_count.toLocaleString()}</span>
          </div> */}

          {repoData.language && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-1.5"></div>
              <span className="font-medium">{repoData.language}</span>
            </div>
          )}

          {repoData.license && (
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{repoData.license.name}</span>
            </div>
          )}
        
          <span className="text-sm">
            Updated {updatedDate}
          </span>
          <a
            href={repoData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
          >
            View on GitHub
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
    </div>
  );
}