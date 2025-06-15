import Image from "next/image";

import "../globals.css";


interface PanelProps {
  title?: string;
  thumbnail?: string;
  description?: string;
}


export default function Panel({title, thumbnail, description} : PanelProps) {
  return (
    <div className={`break-inside-avoid w-full transition transform m-4 hover:-translate-y-1 hover:bg-[var(--primary)] hover:text-[var(--background)]`}>
      {/* TODO: pointer cursor and trigger modal */}
      <div className={thumbnail ? "grid text-center" : "grid my-auto text-center"}>
        {thumbnail && 
          <Image
          className="mx-auto w-full"
          src={thumbnail}
          // layout="contain"
          width={1000}
          height={1000}
          // sizes="100vw"
          // style={{ width: '100%', height: 'auto' }} // optional
          alt="panel thumbnail"
          />
        }
        <h2 className="py-2">{title}</h2>
        <p className="pb-4">{description}</p>
      </div>
    </div>

  );
}
