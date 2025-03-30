'use client'

import "../globals.css";
import Image from "next/image";
import { useRouter } from 'next/navigation'


interface ButtonProps {
  text: string;
  href: string;
}

// TODO: Include Image as a prop somehow

export function Button({text, href = "#"} : ButtonProps) {
  const router = useRouter()
  return (
    <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <a
      onClick={() => router.push(`${href}`)}
      className="gap-4 border border-solid border-white light:border-black flex items-center justify-center hover:bg-[#ddd] light:hover:bg-[#222] hover:border-transparent hover:text-[#111] light:hover:text-[#eee] h-16 px-4"
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
      >{text}
      </a>
    </div>
  )
}

export function FooterElement({text = "button"} : {text : string}) {
  return (
    <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
    >{text}
    </a>
    )
}