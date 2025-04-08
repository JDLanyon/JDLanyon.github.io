'use client'

import "../globals.css";
import Image from "next/image";
import { useRouter } from 'next/navigation'


interface ButtonProps {
  text: string;
  href: string;
}

// TODO: Include Image as a prop somehow

export default function Button({text, href = "#"} : ButtonProps) {
  const router = useRouter()
  return (
    <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <a
      // onClick={() => router.push(`${href}`)}
      className="gap-4 flex items-center justify-center h-16 px-4 hover:bg-[#ddd] light:hover:bg-[#222] hover:text-[#111] light:hover:text-[#eee]"
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
      >{text}
      </a>
    </div>
  )
}