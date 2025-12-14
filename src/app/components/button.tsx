// Alternative Button.tsx with built-in background
'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";
import "../globals.css";
import { useHover } from '@/app/utilities/hover_context';


interface ButtonProps {
  text?: string;
  href?: string;
  no_border?: boolean;
  target_blank?: boolean;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

export default function Button({
  text, 
  href = "#", 
  no_border, 
  target_blank, 
  onClick, 
  children
}: ButtonProps) {
  
  const { setBlurBackground } = useHover();
  return (
    <div 
      className={`${no_border ? "" : "border border-(--primary) hover:border-(--primary_inverse)"}
        relative overflow-hidden transition transform p-4 cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none
        hover:text-(--secondary_inverse) hover:backdrop-invert hover:backdrop-saturate-10 hover:backdrop-brightness-150 hover:-translate-y-1
        backdrop-blur-xs backdrop-saturate-110 hover:backdrop-blur-none`}
      onMouseEnter={() => setBlurBackground(false)}
      onMouseLeave={() => setBlurBackground(true)}
      >
        <a
          onClick={onClick}
          className="gap-4 flex items-center justify-center h-16 px-4 relative z-10"
          href={href}
          target={target_blank ? "_blank" : ""}
          rel="noopener noreferrer"
        >
          {children}
          {text}
        </a>
    </div>
  );
}