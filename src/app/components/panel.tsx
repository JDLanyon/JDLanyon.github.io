import Image from "next/image";

import "../globals.css";


interface PanelProps {
  title?: string;
  thumbnail?: string;
  description?: string;
}

// Conditional image
function Thumbnail({thumbnail} : PanelProps) {
  if (thumbnail) {
    return <Image
      className="mx-auto w-full"
      src={thumbnail}
      // layout="contain"
      width={1000}
      height={1000}
      // sizes="100vw"
      // style={{ width: '100%', height: 'auto' }} // optional
      alt="panel thumbnail"
    />;
  }
}

export default function Panel({thumbnail, title, description} : PanelProps) {
  return (
    <div className={`break-inside-avoid w-full transition transform ${thumbnail || title ? 'hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#ddd] light:hover:bg-[#222] hover:text-[#111] light:hover:text-[#eee]' : ''}`}>
      {/* TODO: pointer cursor and trigger modal */}
      <div className={thumbnail ? "grid text-center" : "grid my-auto text-center"}>
        <Thumbnail thumbnail={thumbnail} />
        <h2 className="py-2">{title}</h2>
        <p className="pb-4">{description}</p>
      </div>
    </div>

  );
}
