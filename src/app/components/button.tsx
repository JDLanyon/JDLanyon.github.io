'use client'

import "../globals.css";
import { useHover } from '@/app/utilities/hover_context';
import Link from 'next/link';


interface ButtonProps {
  text?: string;
  href?: string;
  no_border?: boolean;
  target_blank?: boolean;
  highlight?: boolean;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

export default function Button({
  text, 
  href = "#", 
  no_border, 
  target_blank,
  highlight,
  onClick, 
  children
}: ButtonProps) {
  
  const { setBlurBackground } = useHover();

  return (
    <Link
      className={`min-h-16 py-4 z-10 gap-4 ${no_border ? "" : highlight ? "border-2 border-(--primary)" : "border border-(--secondary)"}
        flex items-center justify-center relative overflow-hidden transition transform cursor-pointer
        ${highlight ? "py-8 text-xl! text-(--primary)" : ""} motion-reduce:transition-none motion-reduce:hover:transform-none
        hover:backdrop-invert hover:text-(--primary) hover:border-(--background) hover:drop-shadow-2xl hover:backdrop-saturate-10 hover:backdrop-brightness-150 hover:-translate-y-1
        backdrop-brightness-95 backdrop-blur-none hover:backdrop-blur-sm`}
      onMouseEnter={() => setBlurBackground(false)}
      onMouseLeave={() => setBlurBackground(true)}
      onClick={onClick}
      href={href}
      rel="noopener noreferrer"
      target={target_blank ? "_blank" : ""}
      >
        {children}
        {text}
    </Link>
  );
}