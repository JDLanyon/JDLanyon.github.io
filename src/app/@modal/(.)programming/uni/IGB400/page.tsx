import Image from "next/image";
import { Modal } from "../../modal";
import { Embed, LocalVideo } from "@/app/components/modal_elements";

// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div className="text-center my-2">
        <b><p>*volume warning* - check volume before playing.</p>
        <p>*epilepsy warning* - flashing images.</p></b>
      </div>
      <Embed uuid="j9XfWkBNZXA"/>

      {/* <div>
        <h1 className="text-center m-0 mb-8">Slime Arcade</h1>

        <div className="flex mb-4 gap-8">
          <Image
            className="w-1/3"
            src="/motion_graphics/snippets/biv_mother_father/bg_comp.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/3"
            src="/motion_graphics/snippets/biv_mother_father/foreground_comp.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/3"
            src="/motion_graphics/snippets/biv_mother_father/lyrics_comp.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
        </div>
        <div className="text-center">
          <p>The three compositions above combine into one for the full snippet.</p>
          <p>It's worth pointing out what one of 3 noise compositions look like, which is used often when displacing the text for that distorted look.</p>
        </div>
        <div className="flex mb-4 text-right gap-8">
          <Image
            className="w-1/2"
            src="/motion_graphics/snippets/biv_mother_father/main_comp.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/2"
            src="/motion_graphics/snippets/biv_mother_father/noise_comp.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
        </div>
      </div> */}
    </Modal>
  )
}