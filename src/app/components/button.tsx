// Alternative Button.tsx with built-in background
'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";
import "../globals.css";

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
  return (
    <div 
      className={`${no_border ? "" : "border-1 border-[var(--primary)]"} transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative overflow-hidden group`}>
      {/* Background layer that shows on hover */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 hover:drop-shadow-xl"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)',
          filter: 'blur(0) brightness(100%) grayscale(0)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />
      
      <a
        onClick={onClick}
        className="gap-4 flex items-center justify-center h-16 px-4 text-[var(--primary)]! relative z-10"
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