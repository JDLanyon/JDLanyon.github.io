"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { SiLinkerd, SiGithub, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';
import Button from "@/app/components/button";
import Footer from "@/app/components/footer";
import { useHover } from "@/app/utilities/hover_context";
import { getRandomImage, available_images } from "@/app/utilities/random_image";
import RepositoryCard from "./components/repo_card";
import Repos from "./components/repo_cards";
import { extractColoursFromImage } from '@/app/utilities/set_colours'
import ColouredIcon from "./components/coloured_icon";

export default function Home() {
  // background hover blur magic
  const { blurBackground } = useHover();
  const [randomImage, setRandomImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // repository list
  const repos = [
    'jdlanyon/jdlanyon-dev',
    'OvercaffeinatedCAB302/fish-tank',
    'jdlanyon/slimearcade',
    'jdlanyon/IFB399_BeeAware_Hive_Inspections',
    'jdlanyon/advent-of-code-2025',
  ];



  useEffect(() => {
    // Set random image on client side
    const image = getRandomImage(available_images);
    setRandomImage(image);
    setIsLoading(false);
    // Extract colors from the image
    extractColoursFromImage(image);
  }, []);
  
  // if (isLoading) return <div>Loading...</div>;
  return (
    <main className="w-screen relative">
      {/* Background Image Container */}
      <div className={`fixed inset-0 bg-cover bg-center -z-20 transition-opacity`}
      style={{backgroundImage: isLoading ? undefined : `url(${randomImage})` }}/>
      {/* Blur Overlay */}
      <div className={`${blurBackground ? 'duration-2000 delay-1000' : 'opacity-0 duration-500'} fixed inset-0 backdrop-blur-xs backdrop-brightness-90 backdrop-grayscale-10 -z-10 transition-opacity ease-in-out`} />

      <div className="items-center text-center *:z-0">
        <div id="hero" className="z-1 pt-8">
          <p>Thanks for checking out my github.io page &lt;3</p>
            <ColouredIcon name="lotus" />
          <h3 className="text-(--secondary)">I'm currently making changes, portfolio will be available soon :&gt;</h3>
        </div>

          <div className="m-4 gap-4 w-fill md:flex flex-row flex-wrap *:min-w-1/3 *:grow *:space-y-4 items-top text-center">
            <div>
              <h1>Links</h1>
              <Button text="Portfolio" href="https://jdlanyon.dev/" target_blank/>
              <Button text="GitHub" href="https://github.com/JDLanyon" target_blank><SiGithub /></Button>
              <Button text="LinkedIn" href="https://www.linkedin.com/in/jdlanyon/" target_blank><Linkedin /></Button>
              <Button text="YouTube" href="https://www.youtube.com/@sausytime" target_blank><SiYoutube /></Button>
              <Button text="Instagram" href="https://www.instagram.com/sausytime/" target_blank><SiInstagram /></Button>
            </div>
            <div>
              <h1>Projects</h1>
              {repos.map((repo, index) => (
                <RepositoryCard key={index} repo={repo} />
              ))}
              <p>This repository list uses client-side fetching</p>
            </div>
          </div>
        <Footer />
      </div>
    </main>
  );
}
