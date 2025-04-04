import Image from "next/image";
import "../globals.css";
import { SiGithub, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';


export default function Footer() {
  return (
    <footer className="flex gap-8 flex-wrap items-center justify-center">
      {/* Github */}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub color="var(--secondary)" />
        GitHub
      </a>


      {/* Youtube */}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiYoutube color="var(--secondary)" />
        YouTube
      </a>

      {/* Instagram */}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram color="var(--secondary)" />
        Instagram
      </a>

    </footer>
  )
}
