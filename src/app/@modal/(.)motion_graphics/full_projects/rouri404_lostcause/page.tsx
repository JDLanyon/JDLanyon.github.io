import Image from "next/image";
import { Modal } from "../../modal"
import { Embed, LocalVideo } from "@/app/components/modal_elements";

// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div className="text-center my-2">
        <b><p>*volume warning* - check volume before playing.</p>
        <p>*epilepsy warning* - flashing images.</p></b>
      </div>
      <Embed uuid="FcapvbVGHZo" />

      <div>
        <h1 className="text-center m-0">rouri404 ft. heylog - lostcause</h1>
      </div>
    </Modal>
  )
}