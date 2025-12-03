"use client"

import Image from "next/image";


import Button from "./components/button";
import Footer from "./components/footer";


export default function Home() {

  return (
    <div className="my-8 items-center text-center">
      <div id="hero" className="z-1">
        <p>Thanks for checking out my github.io page &lt;3</p>
        <Image
          className="invert mx-auto  light:invert-0"
          src="/lotus.svg"
          width={256}
          height={256}
          alt="lotus"
        />
        <h3 className="text-red-300">I'm currently making changes, portfolio will be back soon :&gt;</h3>
      </div>

        <main className="flex flex-col items-center text-center">
          <div className="">
            <h1>Quick links</h1>
            <div className="flex gap-4 items-center md:flex-row">
              <Button text="Portfolio" href="https://jdlanyon.dev/" target_blank/>
              <Button text="Programming" href="/programming"/>
              <Button text="Motion Graphics" href="/motion_graphics"/>
            </div>
          </div>
        </main>
      <Footer />
    </div>
  );
}
