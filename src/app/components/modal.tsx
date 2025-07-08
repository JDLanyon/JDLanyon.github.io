'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

import Button from '@/app/components/button';

import "@/app/globals.css";


export default function Modal({ children } : { children : React.ReactNode }) {
 
  const router = useRouter();

  function close() {
    router.back();
    router.refresh();
  }

  return (
    <div>
      {/* empty div for closing the modal */}
      <div onClick={close} className="fixed w-full h-full z-10 m-0">
      </div>
      {/* modal */}
      <div className="fixed inset-0 flex m-0 md:m-8 transition-all z-100 bg-[var(--background)]/80 border-solid border-[var(--primary)] border-1">

          <div className="absolute top-4 right-4 transform z-101">
            <Button onClick={close} text="x" />
          </div>

        <div className="flex-auto overflow-y-auto relative p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:none [&::-webkit-scrollbar-thumb]:bg-[var(--primary)]">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Embed({uuid} : {uuid : string}) {
  return (
    <iframe className="mx-auto aspect-2/1" width="60%" src={`https://www.youtube.com/embed/${uuid}`} title="YouTube video player" allow="autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"></iframe>
  )
}

export function LocalVideo({ file, thumbnail } : { file : string, thumbnail? : string }) {
  return (
    <video className="mx-auto" width="60%" controls preload="none" aria-label="Video player" poster={thumbnail}>
      <source src={file} type="video/mp4" />
      <p>{`Your browser does not support this video :<`}</p>
    </video>
  )
}

export function EmbedAndLocal({ uuid, file, thumbnail } : {uuid : string, file : string, thumbnail? : string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <iframe className="mx-auto aspect-2/1" width="100%" src={`https://www.youtube.com/embed/${uuid}`} title="YouTube video player" allow="autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"></iframe>
    <video className="mx-auto" width="100%" controls preload="none" aria-label="Video player" poster={thumbnail}>
      <source src={file} type="video/mp4" />
      <p>{`Your browser does not support this video :<`}</p>
    </video>
    </div>
  )
}