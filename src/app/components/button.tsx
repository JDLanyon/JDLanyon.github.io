// Alternative Button.tsx with built-in background
'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";
import "../globals.css";
import { useHover } from '@/app/utilities/hover_context';
import Link from 'next/link';


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
    <Link
      className={`${no_border ? "" : "gap-4 flex items-center justify-center min-h-16 px-4 relative z-10 border border-(--primary) hover:border-(--primary_inverse)"}
        relative overflow-hidden transition transform p-4 cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none
        hover:text-(--secondary_inverse) hover:backdrop-invert hover:backdrop-saturate-10 hover:backdrop-brightness-150 hover:-translate-y-1
        backdrop-blur-none hover:backdrop-blur-xs`}
      onMouseEnter={() => setBlurBackground(false)}
      onMouseLeave={() => setBlurBackground(true)}
      onClick={onClick}
      href={href}
      rel="noopener noreferrer"
      target={target_blank ? "_blank" : ""}
      >
        {/* className="" */}
        {children}
        {text}
    </Link>
  );
}