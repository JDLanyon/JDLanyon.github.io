import Image from "next/image";
import { Modal } from "../modal"
import { Embed, LocalVideo } from "@/app/components/modal_elements";

// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div className="text-center my-2">
        <b><p>*volume warning* - check volume before playing.</p>
        <p>*epilepsy warning* - flashing images.</p></b>
      </div>
      <LocalVideo file="/motion_graphics/snippets/hiraeth_slept_through_everything/Snippet.mp4" thumbnail="/motion_graphics/snippets/hiraeth_slept_through_everything/thumbnail.png" />

      <div>
        <h1 className="text-center m-0">hiraeth - slept through everything</h1>
      </div>
    </Modal>
  )
}