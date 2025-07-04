import Image from "next/image";
import { Modal } from "../modal";
import { Embed, LocalVideo } from "@/app/components/modal_elements";

// export default async function Project({
//   params,
// }: {
//   params: Promise<{ project: string }>
// }) {
//   const { project } = await params
//   return (
//     <Modal>
//       <div className="text-center my-2">
//         <b><p>*volume warning* - check volume before playing.</p>
//         <p>*epilepsy warning* - flashing images.</p></b>
//       </div>
//       <LocalVideo file={`/motion_graphics/snippets/${project}/Snippet.mp4`} thumbnail={`/motion_graphics/snippets/${project}/thumbnail.png`} />

//       <div>
//         <h1 className="text-center m-0">Biv - Mother // Father</h1>
//       </div>
//     </Modal>
//   )
// }

export default async function Project() {
  return (
    <Modal>
      <div>
        <h1>Whoops</h1>
        <p>{`Looks there isn't any information for this one yet :<`}</p>
      </div>
    </Modal>
  )
}