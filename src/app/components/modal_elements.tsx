'use client'

import Image from "next/image";

import "../globals.css";

export function Embed({uuid} : {uuid : string}) {
  return (
    <iframe className="mx-auto" width="60%" height="70%" src={`https://www.youtube.com/embed/${uuid}`} title="YouTube video player" allow="autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"></iframe>
  )
}

export function LocalVideo({ file, thumbnail } : { file : string, thumbnail? : string }) {
  return (
    <video className="mx-auto" width="70%" controls preload="none" aria-label="Video player" poster={thumbnail}>
      <source src={file} type="video/mp4" />
      <p>{`Your browser does not support this video :<`}</p>
    </video>
  )
}

export function EmbedAndLocal({ uuid, file, thumbnail } : {uuid : string, file : string, thumbnail? : string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${uuid}&vq=hd720`} title="YouTube video player" allow="autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"></iframe>
    <video className="mx-auto" width="100%" controls preload="none" aria-label="Video player" poster={thumbnail}>
      <source src={file} type="video/mp4" />
      <p>{`Your browser does not support this video :<`}</p>
    </video>
    </div>
  )
}