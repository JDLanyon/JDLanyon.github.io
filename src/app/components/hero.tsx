import Image from "next/image";

import "../globals.css";


export default function Hero() {
  return (
    <div id="hero" className="z-1">
      <Image
        className="invert mx-auto light:invert-0"
        src="/lotus.svg"
        width={256}
        height={256}
        alt="lotus"
      />
      {/* <h1 className="!font-[family-name:var(--font-doto)]">Home of epic B)</h1> */}
      <p>Thanks for visiting my portfolio, start exploring with the options below!</p>
    </div>
  )
}
