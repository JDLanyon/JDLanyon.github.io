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
          <Button text="View on GitHub" href="https://github.com/JDLanyon/IGB200" target_blank><SiGithub /></Button>
        </div>
        <h1 className="text-center m-0 mb-8">Rafted</h1>

        <div className="flex flex-wrap [&>*]:p-2 [&>*]:mx-auto">
          <div className="w-2/3">
            <p>There's not much to be said about this project as most of it was backend work and report writing, if you'd like to learn more feel free to <a href="https://github.com/JDLanyon/IFB399_BeeAware_Hive_Inspections" target="_blank" className="font-bold underline">view on GitHub</a></p>
            <br/>
            <p>A module/plugin was to be written for a beekeeping platform which handled the information tied to bee hives. There was a lot to be desired as despite working within a group of 4, I was the only one to submit a working product.</p>
            <p>The module was written in HTML, CSS and JavaScript. SQL queries were made through the root project using C#.</p>
            <br/><br/>
            <p>I'll write more on this one day I swear</p>
            <p>(I probably won't, being left alone on this assignment was awful lol)</p>
          </div>
          <Image
            className="w-1/3"
            src="/programming/uni/IGB200/rafted.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IGB200/2023-08-25 17_10_22-Rafted.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IGB200/2023-08-25 17_10_22-Rafted.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IGB200/2023-08-25 17_12_30-Rafted.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IGB200/2023-08-25 17_13_41-Rafted.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />

          <div className="w-full mx-8">
            <p>In honesty the execution could have been much better as this project did not fit the initial scope of the project we were given and was based off some random unity template.</p>
            <p>The game itself was however functional and showed unique gameplay over others, most notably being a tile-based game</p>
          </div>

          <Image
            className="w-1/3"
            src="/programming/uni/IGB200/2023-08-25 17_13_27-Rafted.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/3"
            src="/programming/uni/IGB200/2023-08-25 17_13_56-Rafted.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/3"
            src="/programming/uni/IGB200/2023-08-25 17_14_15-Rafted.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />

          <div className="w-full mx-8">
            <p>The character asset was made by another member and felt out of place from the rest of the assets.</p>
            <p>One of the biggest issues was I was responsible for almost all asset creation and a lot of the core gameplay mechanics. If I had the option to chose one I would have stuck with asset creation to make the game look and feel as smooth as possible.</p>
            <p>A game like this with tweaks made to remove the initial theme of O'Week has high potential, and could be worked on or even rewritten in future.</p>
          </div>
          

          <Image
            className="w-fit"
            src="/programming/uni/IGB200/Beach.gif"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <div className="w-1/3 my-auto text-justify">
            <p>Eventually textures were added along with the ability to collect multiple items. A title screen was finally created and cleaner UI was added after.</p>
            <p>I created a campfire along with several assets to make the environment more engaging.</p>
            <br />
            <p>Personally my favourite contribution is the dynamic tiles where each water tile would connect and be animated along with the tiling nature of everything else.</p>
          </div>
          <Image
            className="h-1/4 w-1/4 my-auto"
            src="/programming/uni/IGB200/Campfire.gif"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />

          <Image
            className="w-fit"
            src="/programming/uni/IGB200/Stones.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-fit"
            src="/programming/uni/IGB200/Trees.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-fit"
            src="/programming/uni/IGB200/Water.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-fit"
            src="/programming/uni/IGB200/GroundTiles.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
        </div>
      </div>
    </Modal>
  )
}