import Footer from "../components/footer";
import Image from "next/image";
import Nav from "../components/nav";
import Panel from "../components/panel";


export default function MotionGraphics() {
  return (
    <div>
      <Nav />
      <div id="content" className="px-32 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min items-center justify-items-center p-8 gap-16">
          <Panel title="test" thumbnail="/Liverpool.jpg" />
          <Panel title="test" thumbnail="/Liverpool.jpg" description=""/>
          <Panel title="test" thumbnail="/Liverpool.jpg" />
          <Panel title="test" thumbnail="/Liverpool.jpg" />
          <Panel title="test" thumbnail="/Liverpool.jpg" />
        </div>

      </div>
      <Footer />
    </div>
  );
}
