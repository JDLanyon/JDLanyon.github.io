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
      <LocalVideo file="/motion_graphics/snippets/heylog_afraid/Snippet.mp4" thumbnail="/motion_graphics/snippets/heylog_afraid/thumbnail.png" />

      <div>
        <h1 className="text-center m-0">heylog - afraid</h1>
      </div>
    </Modal>
  )
}