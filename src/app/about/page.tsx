import Image from "next/image";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Panel from "../components/panel";
import Link from 'next/link'


export default function About() {
  return (
    <section className="h-max">
      <Nav />
      <div className="columns-1 md:columns-2 lg:columns-3 mx-32 my-12 items-center justify-items-center p-8 gap-16">

        <Link href={`/projects/${0}`} passHref>
            <p>open modal</p>
        </Link>
        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" description="penis music"/>
        <Panel title="test" thumbnail="/Liverpool.jpg" description="penis music"/>
        <Panel title="test" description="even more penis music"/>
        <Panel title="test" description="even more penis music"/>
        <Panel title="test" description="even more penis music"/>
        <Panel title="test" description="even more penis music"/>
        <Panel title="test" description="even more penis music"/>
        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Link href="/">Open modal</Link>
      </div>

      <Footer />
    </section>
  );
}
