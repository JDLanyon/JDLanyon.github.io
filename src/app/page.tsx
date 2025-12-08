"use client"

import Image from "next/image";
import { SiLinkerd, SiGithub, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';
import Button from "./components/button";
import Footer from "./components/footer";


export default function Home() {

  return (
    <div className="my-8 items-center text-center">
      <div id="hero" className="z-1">
        <p>Thanks for checking out my github.io page &lt;3</p>
        <Image
          className="invert mx-auto w-16 md:w-32 light:invert-0"
          src="/lotus.svg"
          width={256}
          height={256}
          alt="lotus"
        />
        <h3 className="text-red-300">I'm currently making changes, portfolio will be back soon :&gt;</h3>
      </div>

        <main className="m-4 gap-4 flex flex-col md:flex-row items-center text-center">
          <div className="w-full space-y-4">
            <h1>Links</h1>
            <Button text="Portfolio" href="https://jdlanyon.dev/" target_blank/>
            <Button text="GitHub" href="https://github.com/JDLanyon" target_blank><SiGithub /></Button>
            <Button text="LinkedIn" href="https://www.linkedin.com/in/jdlanyon/" target_blank><Linkedin /></Button>
            <Button text="YouTube" href="https://www.youtube.com/@sausytime" target_blank><SiYoutube /></Button>
            <Button text="Instagram" href="https://www.instagram.com/sausytime/" target_blank><SiInstagram /></Button>
          </div>
          <div className="w-full space-y-4">
            <h1>Projects</h1>
            <Button text="Portfolio" href="https://jdlanyon.dev/" target_blank/>
            <Button text="Programming" href="/programming"/>
            <Button text="Motion Graphics" href="/motion_graphics"/>
          </div>
        </main>
      <Footer />
    </div>
  );
}
