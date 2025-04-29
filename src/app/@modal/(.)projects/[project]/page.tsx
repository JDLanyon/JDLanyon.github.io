import Image from "next/image";

import { Modal } from '../modal'


// TODO: dynamically fetch existing information
export default async function Project() {
  return (
    <Modal>
      <div>
        <h1>Whoops</h1>
        <p>looks like I haven't put any info on this one yet :c</p>
      </div>
    </Modal>
  )
}