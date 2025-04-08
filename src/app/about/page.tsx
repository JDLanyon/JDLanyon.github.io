import Image from "next/image";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Panel from "../components/panel";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-32 my-12 items-center justify-items-center p-8 gap-16">

        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" description="penis music"/>
        <Panel title="test" description="even more penis music"/>
        <Panel title="test" description="even more penis music"/>
        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" />

      </div>

      <Footer />
    </div>
  );
}
