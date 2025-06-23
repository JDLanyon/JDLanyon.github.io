import { MOTION_GRAPHICS } from "../project_data"
import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";
import Nav from "../components/nav";
import Panel, {PanelsFromData} from "../components/panel";



export default function MotionGraphics() {
  return (
    <section className="min-h-[100vh] flex flex-col">
      <Nav />
      <div id="content" className="px-32 py-16">


        {/* <Panels heading="Snippets" category={MG_SNIPPETS} />
        <Panels heading="Full Projects" category={MG_FULL_PROJECTS} /> */}

        {/* TODO: Replace the project_data.tsx with dynamically searching in /public/ */}

        <PanelsFromData heading="Full Projects" thumbnails_path="/motion_graphics/full_projects/" data={MOTION_GRAPHICS.FULL_PROJECTS} />
        <PanelsFromData heading="Snippets" thumbnails_path="/motion_graphics/snippets/" data={MOTION_GRAPHICS.SNIPPETS} />
        
      </div>
      <Footer />
    </section>
  );
}
