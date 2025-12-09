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
        <Button no_border onClick={() => setTheme('light')}>
          {isHovering ? <Circle /> : <Moon /> }
        </Button> : null
      }

      {theme != 'dark' ? 
        <Button no_border onClick={() => setTheme('dark')}>
          {isHovering ? <Moon /> : <Circle /> }
        </Button> : null
      }

    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-1 w-min mx-auto my-8 flex-col flex md:flex-row items-center">
      <ThemeSwitch />
    </footer>
  )
}
