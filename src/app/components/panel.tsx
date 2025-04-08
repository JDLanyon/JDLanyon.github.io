'use client'

import "../globals.css";
import Image from "next/image";

interface PanelProps {
  thumbnail?: string;
  title?: string;
  description?: string;
  allowhover?: boolean;
}

// Conditional image
function Thumbnail({thumbnail} : PanelProps) {
  if (thumbnail) {
    return <Image
      className="mx-auto w-full"
      src={thumbnail}
      // layout="contain"
      width={1000}
      height={1000}
      // sizes="100vw"
      // style={{ width: '100%', height: 'auto' }} // optional
      alt="panel thumbnail"
    />;
  }
}

export default function Panel({thumbnail, title, description, allowhover = true} : PanelProps) {
  return (
    <div className={`grid w-[100%] h-[100%] transition transform ${allowhover ? 'hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#ddd] light:hover:bg-[#222] hover:text-[#111] light:hover:text-[#eee]' : ''}`}>
      {/* TODO: pointer cursor and trigger modal */}
      <div className={thumbnail ? "grid text-center" : "grid my-auto text-center"}>
        <Thumbnail thumbnail={thumbnail} />
        <h2 className="py-2">{title}</h2>
        <p className="pb-4">{description}</p>
      </div>
    </div>

  );
}
