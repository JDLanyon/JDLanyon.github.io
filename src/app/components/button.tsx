'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";

import "../globals.css";


interface ButtonProps {
  text?: string;
  href?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

// TODO: auto generate buttons based on existing headings


export default function Button({text, href = "#", onClick, children} : ButtonProps) {
  return (
    <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <a
      onClick={onClick}
      className="gap-4 flex items-center justify-center h-16 px-4 text-[var(--primary)]! hover:backdrop-invert hover:text-[var(--background)]!"
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
      >{text}
      {children}
      </a>
    </div>
  )
}