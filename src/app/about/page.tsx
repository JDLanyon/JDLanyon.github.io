import Image from "next/image";
import Link from 'next/link'

import Footer from "../components/footer";
import Nav from "../components/nav";
import Panel from "../components/panel";


export default function About() {
  return (
    <section className="min-h-[100vh] flex flex-col">
      <Nav />
      <div id="content" className="px-8 py-12 lg:px-32 grow-1">

        <div className="grid grid-cols-1 md:grid-cols-6 items-start justify-items-center p-8 gap-8">
          <Image
              className="mx-auto w-full col-span-6 md:row-1 md:col-span-3 md:col-start-4 lg:col-span-2 lg:col-start-5"
              src="/temp/Black Butterfly.jpg"
              // layout="contain"
              width={1000}
              height={1000}
              // sizes="100vw"
              // style={{ width: '100%', height: 'auto' }} // optional
              alt="Photo of me"
            />
            <div className="w-full col-span-6 float-left md:row-1 md:col-start-1 md:col-span-3 md:col-end-4 lg:col-span-4">
              <h1>What is this site?</h1>
              <p>This is my portfolio, you can find more technical details about the project <Link href={`/projects/portfolio`} passHref className="font-bold underline">here</Link>.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sint repellendus repellat nesciunt magni odio eos! Soluta, accusantium. Consectetur, quidem reiciendis doloribus beatae voluptatibus suscipit voluptatem incidunt eos neque tempora impedit animi facere, excepturi, quis officiis quod modi sequi magni rem praesentium at nostrum? Exercitationem adipisci modi in veritatis doloremque?</p>
              <h1>Who am I</h1>
              <p>I'm Jackson Lanyon, a 24 year old uni student who thoroughly enjoys multimedia.</p>
              <h1>What do I do?</h1>
            </div>
          </div>

        </div>
      <Footer expand={true}/>
    </section>
  );
}
