import Image from "next/image";
import Hero from "../app/components/hero";
import Footer from "../app/components/footer";
import Button from "../app/components/button";
import Nav from "../app/components/nav";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="grid items-center justify-items-center min-h-screen p-8 gap-16">
      <div className="row-start-1 items-center text-center">
            <p>who the hell is this "Grey Ming" guy anyways?</p>
        </div>
        <div className="row-start-1 items-center text-center">
            <p>who the hell is this "Grey Ming" guy anyways?</p>
        </div>
        <div className="row-start-1 items-center text-center">
            <p>who the hell is this "Grey Ming" guy anyways?</p>
        </div>
        <div className="row-start-1 items-center text-center">
            <p>who the hell is this "Grey Ming" guy anyways?</p>
        </div>

        <Footer />
      </div>

    </div>
  );
}
