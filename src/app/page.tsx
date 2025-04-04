import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <Hero />

        <div className="pt-16 flex gap-4 items-center flex-col md:flex-row">
          <Button text="About" href="/about"/>
          <Button text="Programming" href="/programming"/>
          <Button text="Motion Graphics" href="/motion_graphics"/>

        </div>
      </main>
      <div className="row-start-3">
        <Footer />
      </div>
    </div>
  );
}
