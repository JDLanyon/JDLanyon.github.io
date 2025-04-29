'use client'

import Image from "next/image";

import "../globals.css";
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation'


function NavButton({text, href} : {text : string, href : string}) {
  if (href == usePathname()) {
    return (<a
    className="flex items-center text-[var(--primary)] font-bold"
    rel="noopener noreferrer"
  >
    {text}
  </a>);
  } {
    return (<a
    className="flex items-center hover:underline hover:underline-offset-4 text-[var(--secondary)]"
    href={href}
    rel="noopener noreferrer"
  >
    {text}
  </a>);
  }
}

export default function Nav() {
  return (
    <nav className="z-10 grid grid-cols-7 w-screen gap-8 items-center justify-center text-center fixed top-0">
      {/* left side */}
      <div className="col-start-2 col-span-2 mx-auto gap-16 hidden md:relative md:flex">
        <NavButton text="Home" href="/" />
        <NavButton text="About" href="/about" />
      </div>

      {/* Lotus */}
      <a className="col-start-4 mx-auto col-300" href="/">
        <Image
          className="dark:invert"
          src="/lotus.svg"
          width={64}
          height={64}
          alt="lotus"
        />
      </a>

      {/* right side */}
      <div className="col-start-5 col-span-2 mx-auto gap-16 hidden md:relative md:flex">
      <NavButton text="Programming" href="/programming" />
      <NavButton text="Motion Graphics" href="/motion_graphics" />

      </div>
      

      {/* mobile options */}

      {/* burger menu */}
      <div className="col-start-7 mx-auto gap-16 md:hidden">
        <button onClick={async () => {
          console.log("hi");
        }}>
        <Menu color="var(--secondary)" />

        </button>
      </div>


    </nav>
  )
}