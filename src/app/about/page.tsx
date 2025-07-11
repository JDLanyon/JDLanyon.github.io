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
              src="/Me.jpg"
              // layout="contain"
              width={1000}
              height={1000}
              // sizes="100vw"
              // style={{ width: '100%', height: 'auto' }} // optional
              alt="Photo of me"
            />
            <div className="w-full col-span-6 float-left md:row-1 md:col-start-1 md:col-span-3 md:col-end-4 lg:col-span-4">
              <h1>What is this site?</h1>
              <p>This is my portfolio built with NextJS (and it's responsive!), you can find more technical details about the project <Link href={`/programming/portfolio`} passHref className="font-bold underline">here</Link>.</p>
              <br />
              <p>Eventually more will be added, for now brief details on my previous projects and occasional breakdowns can be found. More breakdowns on projects should be coming soon.</p>
              <h1>Who I am</h1>
              <p>I'm Jackson Lanyon, a 24 year old with a passion for multimedia, combining several skills to give more immersive interaction.</p>
              <p>Currently I'm in my final year studying a <b>Bachelor of Interactive Environments at QUT</b>. Outside of study my focus is on motion graphics and recreational programming.</p>
              <h1>What I do</h1>
              <p>Well programming and motion graphics I suppose.</p>
              <p>I'll write more about this once I've added thorough breakdowns on my projects so I can refer to my work.</p>
              <h1>Can I find a resume?</h1>
              <p>I'm glad you asked!</p>
              <p>Please don't hesitate to contact me at <a href="mailto:jlany9@hotmail.com?subject=Resume%20Request&body=Heyo,<br/><br/>I'd%20like%20to%20request%20your%20resume,<br/>Cheers." className="font-bold underline">jlany9@hotmail.com</a> or you can find my resume by visiting my <a href="https://www.linkedin.com/in/jdlanyon/" target="_blank" className="font-bold underline">LinkedIn</a>. :)</p>
            </div>
          </div>

        </div>
      <Footer large={true}/>
    </section>
  );
}
