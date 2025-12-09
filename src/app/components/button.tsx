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
      className={`${no_border ? "" : "border border-(--primary)"} transition transform hover:backdrop-invert hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative overflow-hidden`}
      onMouseEnter={() => setBlurBackground(false)}
      onMouseLeave={() => setBlurBackground(true)}
      >
        <a
          onClick={onClick}
          className="gap-4 flex items-center justify-center h-16 px-4 text-(--primary)! relative z-10"
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