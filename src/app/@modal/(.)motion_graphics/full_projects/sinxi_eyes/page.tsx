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
      <Embed uuid="uOajuQK7Qiw" />

      <div>
        <h1 className="text-center m-0">sinxi - eyes</h1>
      </div>
    </Modal>
  )
}