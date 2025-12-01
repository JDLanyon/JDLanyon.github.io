"use client"

import "@/app/globals.css";
import Button from "./button";

import { SiGithub, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import { Circle, Moon, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from "next/link";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div id="theme_switch"
      className="transition"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>

      {theme != 'light' ? 
        <Button onClick={() => setTheme('light')}>
          {isHovering ? <Circle /> : <Moon /> }
        </Button> : null
      }

      {theme != 'dark' ? 
        <Button onClick={() => setTheme('dark')}>
          {isHovering ? <Moon /> : <Circle /> }
        </Button> : null
      }

    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-1 w-min mx-auto flex-col flex md:flex-row items-center">
      {/* Github */}
      <Link
        className="flex gap-2 p-2 hover:underline hover:underline-offset-4 text-(--secondary)"
        href="https://github.com/JDLanyon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub color="var(--secondary)" />
        <p>GitHub</p>
      </Link>

      {/* LinkedIn */}
      <Link
        className="flex gap-2 p-2 hover:underline hover:underline-offset-4 text-(--secondary)"
        href="https://www.linkedin.com/in/jdlanyon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin color="var(--secondary)" />
        <p>LinkedIn</p>
      </Link>

      {/* Youtube */}
      <Link
        className="flex gap-2 p-2 hover:underline hover:underline-offset-4 text-(--secondary)"
        href="https://www.youtube.com/@sausytime"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiYoutube color="var(--secondary)" />
        <p>YouTube</p>
      </Link>

      {/* Instagram */}
      <Link
        className="flex gap-2 p-2 hover:underline hover:underline-offset-4 text-(--secondary)"
        href="https://www.instagram.com/sausytime/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram color="var(--secondary)" />
        <p>Instagram</p>
      </Link>

      <ThemeSwitch />
    </footer>
  )
}
