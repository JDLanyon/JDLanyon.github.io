"use client"

import Image from "next/image";

import "../globals.css";
import Button from "./button";

import { SiGithub, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import { Circle, Eclipse, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex">
      {theme != 'light' ? 
        <Button onClick={() => setTheme('light')}>
          <Circle />
        </Button> : null
      }

      {theme != 'dark' ? 
        <Button onClick={() => setTheme('dark')}>
          <Moon  />
        </Button> : null
      }

      {theme != 'system' ? 
        <Button onClick={() => setTheme('system')} >
          <Eclipse />
        </Button> : null
      }

    </div>
  )
}

export default function Footer({large = false} : {large? : boolean}) {
  return (
    <footer className={`flex inline-flex w-full mx-auto items-center justify-center bottom-0  ${large ? "py-16 gap-[10%] text-lg  px-30 sm:px-0 sm:flex sm:flex-wrap" : "py-8 gap-8"}`}>
      {/* Github */}
      <a
        className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        href="https://github.com/JDLanyon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub color="var(--secondary)" />
        GitHub
      </a>


      {/* Youtube */}
      <a
        title="branded account"
        className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        href="https://www.youtube.com/@sausytime"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiYoutube color="var(--secondary)" />
        YouTube
      </a>

      {/* Instagram */}
      <a
        title="work in progress."
        className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram color="var(--secondary)" />
        Instagram
      </a>

      <ThemeSwitch />
    </footer>
  )
}
