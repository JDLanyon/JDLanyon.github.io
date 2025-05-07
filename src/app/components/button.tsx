'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";

import "../globals.css";


interface ButtonProps {
  text: string;
  href?: string;
  onclick?: React.MouseEventHandler;
}

// TODO: Include Image as a prop somehow

export default function Button({text, href = "#", onclick} : ButtonProps) {
  return (
    <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <a
      onClick={onclick}
      className="gap-4 flex items-center justify-center h-16 px-4 text-[var(--primary)]! hover:backdrop-invert hover:text-[var(--background)]!"
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
      >{text}
      </a>
    </div>
  )
}