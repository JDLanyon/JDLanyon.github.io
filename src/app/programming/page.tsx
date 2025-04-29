import Image from "next/image";
import Link from "next/link";
import React from "react";

import { projects_programming } from "../project_data"
import Footer from "../components/footer";
import Nav from "../components/nav";
import Panel from "../components/panel";


export default function Programming() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-32 my-12 items-center justify-items-center p-8 gap-16">
        {projects_programming.map(p => (
          <Link href={`/projects/${p.title}`} passHref>
            <Panel title={p.title} thumbnail={p.thumbnail} description={p.description} />
          </Link>
      ))}
        {/* <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" description=""/>
        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" />
        <Panel title="test" thumbnail="/Liverpool.jpg" /> */}

      </div>

      <Footer />
    </div>
  );
}
