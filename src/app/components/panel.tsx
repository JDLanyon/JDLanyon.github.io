'use client'

import "../globals.css";
import Image from "next/image";

interface PanelProps {
    thumbnail?: string;
    title?: string;
    description?: string;
  }

function Thumbnail({tn} : {tn? : string}) {
  if (tn) {
    return <Image
    className="mx-auto w-full rounded-lg hover:rounded-none"
    src={tn}
    // layout="contain"
    width={1000}
    height={1000}
    // sizes="100vw"
    // style={{ width: '100%', height: 'auto' }} // optional
    alt="panel thumbnail"
  />;
  }
  return;
}

export default function Panel({thumbnail, title, description} : PanelProps) {
  return (
    <div className="w-[100%] h-250 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      {/* TODO: pointer cursor and trigger modal */}
      <div className="grid text-center hover:bg-[#ddd] light:hover:bg-[#222] hover:text-[#111] light:hover:text-[#eee]">
        <Thumbnail tn={thumbnail} />
        <h2 className="py-2">{title}</h2>
        <p className="pb-4">{description}</p>
      </div>
    </div>
  )
}