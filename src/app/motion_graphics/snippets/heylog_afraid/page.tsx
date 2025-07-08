import Image from "next/image";
import Modal, { Embed, LocalVideo } from "@/app/components/modal";


// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div>
        <h1 className="text-center m-0">heylog - afraid</h1>

        <div className="text-center my-4">
          <b><p>*volume warning* - check volume before playing.</p>
          <p>*epilepsy warning* - flashing images.</p></b>
          <LocalVideo file="/motion_graphics/snippets/heylog_afraid/Snippet.mp4" thumbnail="/motion_graphics/snippets/heylog_afraid/thumbnail.png" />
        </div>

      </div>
    </Modal>
  )
}