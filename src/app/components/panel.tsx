import Image from "next/image";
import Link from "next/link";

import "../globals.css";


interface PanelProps {
  id?: string;
  title?: string;
  thumbnail?: string;
  description?: string;
}


const imageExists = async (path : string) => {
  return await fetch(`http://localhost:3000${path}`, {
    method: "HEAD",
  });
};

// the PanelProps[] datatype was big brain fr
export function PanelsFromData({heading, thumbnails_path, data} : {heading? : string, thumbnails_path? : string, data : PanelProps[]}) {
  return (
    <>
      <h2>{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min items-center justify-items-center p-8 gap-16">
      {data.map(p => (
        <Link key={`${p.id}`} href={`/projects/${p.id}`} passHref>
        
        {thumbnails_path ? 
        <Panel id={p.id} title={p.title} description={p.description} thumbnail={`${thumbnails_path}${p.id}/${p.thumbnail ? p.thumbnail : "thumbnail.png"}`} /> :
        <Panel id={p.id} title={p.title} description={p.description} /> }

        {/* <Panel id={p.id} title={p.title} description={p.description} thumbnail={`${thumbnails_path}${p.id}/thumbnail.png`} /> */}
      </Link>
      ))}
      </div>
    </>
  );
}

export default async function Panel({id, title, thumbnail, description} : PanelProps) {
  // if there's no title use id
  if (!title && id) title=id;

  console.log(thumbnail)

  // if a thumbnail was provided, try rendering with the thumbnail
  if (thumbnail) {
    // thumbnail was provided, check that the image itself exists
    const result = await imageExists(thumbnail)
    if (result.status == 200) {
      // image actually exists, return with thumbnail
      return (
        <div className={`break-inside-avoid w-full transition transform m-4 hover:-translate-y-1 hover:bg-[var(--primary)] hover:text-[var(--background)]`}>
          {/* TODO: pointer cursor and trigger modal */}
          <div className={thumbnail ? "grid text-center" : "grid my-auto text-center"}>
            {thumbnail && result.status === 200 ? 
              <Image
              className="mx-auto w-full"
              src={thumbnail}
              // layout="contain"
              width={1000}
              height={1000}
              // sizes="100vw"
              // style={{ width: '100%', height: 'auto' }} // optional
              alt="panel thumbnail"
              /> : null
            }
            <h2 className="py-2">{title}</h2>
            <p className="pb-4">{description}</p>
          </div>
        </div>
      );
    }
  }

  // no thumbnail
  return (
    <div className={`break-inside-avoid w-full transition transform m-4 hover:-translate-y-1 hover:bg-[var(--primary)] hover:text-[var(--background)]`}>
      {/* TODO: pointer cursor and trigger modal */}
      <div className="grid my-auto text-center">
        <h2 className="py-2">{title}</h2>
        <p className="pb-4">{description}</p>
      </div>
    </div>
  );
}
