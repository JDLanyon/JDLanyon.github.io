import Image from "next/image";
import Hero from "../app/components/hero";
import Footer from "../app/components/footer";
import Button from "../app/components/button";
import Nav from "../app/components/nav";
import Panel from "../app/components/panel";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-32 items-center justify-items-center min-h-screen p-8 gap-16 background-red">

        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" />

      </div>

      <Footer />
    </div>
  );
}
