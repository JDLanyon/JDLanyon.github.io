'use client'

import "../globals.css";
import Image from "next/image";

interface PanelProps {
    thumbnail: string;
    title: string;
    description?: string;
  }

export default function Panel({thumbnail, title, description} : PanelProps) {
  return (
    <div className="grid rounded-lg border-solid outline-1 outline-colour-[--var(primary)] items-center text-center">
        <Image
          className="mx-auto w-full"
          src={thumbnail}
          // layout="contain"
          width={1000}
          height={1000}
          // sizes="100vw"
          // style={{ width: '100%', height: 'auto' }} // optional
          alt="panel thumbnail"
        />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}