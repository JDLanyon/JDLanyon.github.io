import Image from "next/image";
import Hero from "../app/components/hero";
import Footer from "../app/components/footer";
import {Button} from "../app/components/elements";

export default function About() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1>About :)</h1>

        <div className="pt-16 flex gap-4 items-center flex-col md:flex-row">
          <Button text="About" href="/about"/>
          <Button text="Programming" href="/programming"/>
          <Button text="Motion Graphics" href="/motion_graphics"/>

        {/* <a
            className="sm:font-size:0.5em rounded-full border border-solid border-white light:border-black flex items-center justify-center hover:bg-[#222] light:hover:bg-[#ddd] hover:border-transparent h-12 px-8"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            suck a cock
          </a> */}


        </div>
      </main>
      <div className="row-start-3">
        <Footer />
      </div>
    </div>
  );
}
