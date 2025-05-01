import Image from "next/image";
import Link from "next/link";
import React from "react";

import { projects_programming } from "../project_data"
import Footer from "../components/footer";
import Nav from "../components/nav";
import Panel from "../components/panel";


export default function Programming() {
  return (
    <section className="min-h-[100vh] flex flex-col">
      <Nav />
        <div id="content" className="px-32 py-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center p-8 gap-16">
            {projects_programming.map(p => (
              <Link key={p.id} href={`/projects/${p.id}`} passHref>
                <Panel title={p.title} thumbnail={p.thumbnail} description={p.description} />
              </Link>
          ))}

          </div>
        </div>
      <Footer />
    </section>
  );
}
