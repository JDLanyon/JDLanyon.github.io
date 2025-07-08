import Image from "next/image";

import Button from "@/app/components/button";
import Modal, { Embed, LocalVideo } from "@/app/components/modal";

import { SiGithub } from "@icons-pack/react-simple-icons";


// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div>
        <div className="flex absolute left-4 top-4 transform">
          <Button text="View on GitHub" href="https://github.com/JDLanyon/Rescreetply" target_blank><SiGithub /></Button>
        </div>
        <h1 className="text-center m-0 mb-8">Dead Bread</h1>
        <div className="flex flex-wrap [&>*]:p-2 [&>*]:mx-auto">
          <div className="w-1/4 text-right">
            <p>Dead bread is a VR game developed in Unity by myself and 3 others.</p>
            <br/>
            <p>We were tasked with futher developing a prototype made earlier in the unit, of which mine was selected {":>"}</p>
            <p>The main goal is to collect items on a pregenerated list while fending off respawning zombies.</p>
          </div>
          <Image
            className="w-1/3"
            src="/programming/uni/IGB388/start_screen.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/3"
            src="/programming/uni/IGB388/layout.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />

          <div className="w-full text-center">
            <b><p>*volume warning* - I never checked the game's volume input, best to watch on mute.</p></b>
            <Embed uuid="BzaEK7LACHo"/>

          </div>


          <Image
            className="w-1/4"
            src="/programming/uni/IGB388/cafe.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IGB388/frozen.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IGB388/fruit_and_veg.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IGB388/kitchenware.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />


          <Image
            className="w-1/2"
            src="/programming/uni/IGB388/player_collider_progression.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <div className="w-1/2">
            <p>Several areas and models were created to give a clear indication to the locations of different supplies and to add to the shopping environment.</p>
            <p>A full layout was established over time and vaguely followed initial designs.</p>
            <p>Some notable bugs included texture clipping and issues with the player collider. Initially there were two colliders, one for the head and one for the player's body, which was then moved to the head colider with rotation lock and positioning the player according to the head position (VR headset position)</p>
            <p>As for the texture clipping, this was fixed by removing overlapping objects.</p>
          </div>
          <Image
            className="w-1/4"
            src="/programming/uni/IGB388/texture_clipping.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IGB388/texture_clipping_fix.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/2"
            src="/programming/uni/IGB388/zombies.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />

        </div>
      </div>
    </Modal>
  )
}