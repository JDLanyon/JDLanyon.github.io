import Image from "next/image";
import Modal, { Embed, LocalVideo } from "@/app/components/modal";


// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div>
        <h1 className="text-center m-0">sadeyes - poison</h1>
      
        <div className="text-center my-4">
          <b><p>*volume warning* - check volume before playing.</p>
          <p>*epilepsy warning* - flashing images.</p></b>
          <Embed uuid="ONyRAY_Xkb0" />
        </div>

      </div>
    </Modal>
  )
}