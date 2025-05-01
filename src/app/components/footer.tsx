import Image from "next/image";

import "../globals.css";
import { SiGithub, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';


export default function Footer({expand = false} : {expand? : boolean}) {
  return (
    <footer className={`flex inline-flex w-full mx-auto items-center justify-center bottom-0  ${expand ? "py-16 gap-[10%] text-lg  px-30 sm:px-0 sm:flex sm:flex-wrap" : "py-8 gap-8"}`}>
      {/* Github */}
      <a
        className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        href="https://github.com/JDLanyon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub color="var(--secondary)" />
        GitHub
      </a>


      {/* Youtube */}
      <a
        title="branded account"
        className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        href="https://www.youtube.com/@sausytime"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiYoutube color="var(--secondary)" />
        YouTube
      </a>

      {/* Instagram */}
      <a
        title="work in progress."
        className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram color="var(--secondary)" />
        Instagram
      </a>

    </footer>
  )
}
