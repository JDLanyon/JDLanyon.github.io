import "../globals.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="z-1">
      <Image
        className="dark:invert mx-auto"
        src="/lotus.svg"
        width={256}
        height={256}
        alt="lotus"
      />
      {/* <h1 className="!font-[family-name:var(--font-doto)]">Home of epic B)</h1> */}
      <a>Thanks for visiting my portfolio, start exploring with the options below!</a>
    </div>
  )
}
