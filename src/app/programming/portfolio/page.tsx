import Image from "next/image";
import Modal, { Embed, LocalVideo } from "@/app/components/modal";


// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div>
        <h1>This Portfolio</h1>
        <div className="text-center">
          <p className="text-center my-8">More information coming soon {":>"}</p>
        </div>
      </div>
    </Modal>
  )
}