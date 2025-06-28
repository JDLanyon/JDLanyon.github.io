'use client'

import Image from "next/image";

import "../globals.css";
import "../video_player.css"

export function Embed({uuid} : {uuid : string}) {
  return (
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${uuid}`} title="YouTube video player" allow="autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"></iframe>
  )
}

export function LocalVideo({ file } : { file : string }) {
  return (
    <video controls preload="none" aria-label="Video player">
      <source src={file} type="video/mp4" />
      Your browser does not support the video tag :(.
    </video>
  )
}