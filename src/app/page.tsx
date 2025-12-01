"use client"

import Image from "next/image";


import Button from "./components/button";
import Footer from "./components/footer";


export default function Home() {

  return (
    <div className="w-screen relative">
        <main className="flex flex-col gap-8 items-center text-center">
          <div id="hero" className="z-1">
            <Image
              className="invert mx-auto w-32 light:invert-0"
              src="/lotus.svg"
              width={256}
              height={256}
              alt="lotus"
            />
            <h1>Thanks for visiting my github page!</h1>
            <div className="pt-8 flex md:gap-4 items-center flex-col md:flex-row">
              <Button text="About" href="/about"/>
              <Button text="Programming" href="/programming"/>
              <Button text="Motion Graphics" href="/motion_graphics"/>
            </div>
          </div>
        </main>
      <Footer />
    </div>
  );
}
