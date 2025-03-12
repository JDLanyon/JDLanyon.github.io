import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <Hero />

        <div className="pt-16 flex gap-4 items-center flex-col md:flex-row">
        <a
            className="sm:font-size:0.5em rounded-full border border-solid border-white light:border-black flex items-center justify-center hover:bg-[#222] light:hover:bg-[#ddd] hover:border-transparent h-12 px-8"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            suck a cock
          </a>

          <a
            className="gap-4 rounded-full border border-solid border-white light:border-black flex items-center justify-center hover:bg-[#222] light:hover:bg-[#ddd] hover:border-transparent h-12 px-8"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="light:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            eat a cock
          </a>
          <a
            className="rounded-full border border-solid border-white light:border-black flex items-center justify-center hover:bg-[#222] light:hover:bg-[#ddd] hover:border-transparent h-12 px-8"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            you get the idea
          </a>
        </div>
      </main>
      <div className="row-start-3">
        <Footer />
      </div>
    </div>
  );
}
