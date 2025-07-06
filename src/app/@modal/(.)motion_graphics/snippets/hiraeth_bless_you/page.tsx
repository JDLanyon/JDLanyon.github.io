import Image from "next/image";
import { Modal } from "../../modal";
import { Embed, LocalVideo } from "@/app/components/modal_elements";

// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div>
        <h1 className="text-center m-0">hiraeth - bless you</h1>

        <div className="text-center my-4">
          <b><p>*volume warning* - check volume before playing.</p>
          <p>*epilepsy warning* - flashing images.</p></b>
          <LocalVideo file="/motion_graphics/snippets/hiraeth_bless_you/Snippet.mp4" thumbnail="/motion_graphics/snippets/hiraeth_bless_you/thumbnail.png" />
        </div>

      </div>
    </Modal>
  )
}