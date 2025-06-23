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
              <p>This is my portfolio built with NextJS, you can find more technical details about the project <Link href={`/projects/portfolio`} passHref className="font-bold underline">here</Link>.</p>
              <h2>There doesn't seem to be much info here</h2>
              <p>Yeah look, I'll be adding more but for now I just wanted to get this on github pages. Breakdowns on most projects should (hopefully) exist soon!</p>
              <h1>Who's portfolio is this?</h1>
              <p>I'm Jackson, a 24 year old who thoroughly enjoys multimedia, combining several skills to give more immersive interaction.</p>
              <p>Currently I'm in my final year studying a Bachelor of Interactive Environments at QUT. Outside of that I focus on motion graphics and recreational programming.</p>
              <h1>What do I do?</h1>
              <p>Well programming and motion graphics I suppose.</p>
              <h1>Can I find a resume?</h1>
              <p>I'm glad you asked!</p>
              <p>Please don't hesitate to contact me at <a href="mailto:jlany9@hotmail.com?subject=Resume%20Request&body=Heyo,<br/><br/>I'd%20like%20to%20request%20your%20resume,<br/>Cheers.">jlany9@hotmail.com</a> or you can find my resume by visiting my <a href="https://www.linkedin.com/in/jdlanyon/" target="_blank">LinkedIn</a>. :)</p>
            </div>
          </div>

        </div>
      <Footer large={true}/>
    </section>
  );
}
