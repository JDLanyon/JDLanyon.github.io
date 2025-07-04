import Image from "next/image";
import { Modal } from "../modal"
import { Embed, EmbedAndLocal, LocalVideo } from "@/app/components/modal_elements";

// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div className="text-center my-2">
        <b><p>*volume warning* - check volume before playing.</p>
        <p>*epilepsy warning* - flashing images.</p></b>
      </div>
      <EmbedAndLocal file="/motion_graphics/snippets/guccihighwaters_i_aint_feeling_better/Snippet.mp4" thumbnail="/motion_graphics/snippets/guccihighwaters_i_aint_feeling_better/thumbnail.png" />

      <div>
        <h1 className="text-center m-0">guccihighwaters - I ain't feeling better</h1>
      </div>
    </Modal>
  )
}