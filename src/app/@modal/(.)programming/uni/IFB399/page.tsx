import Image from "next/image";
import { Modal } from "../../modal";
import { Embed, LocalVideo } from "@/app/components/modal_elements";
import Button from "@/app/components/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div>
        <div className="flex absolute left-4 top-4 transform">
          <Button text="View on GitHub" href="https://github.com/JDLanyon/IFB399_BeeAware_Hive_Inspections" target_blank><SiGithub /></Button>
        </div>
        <h1 className="text-center m-0 mb-8">BeeAware Hive Inspections Plugin</h1>

        <div className="flex flex-wrap [&>*]:p-2">
          <Image
            className="w-1/2"
            src="/programming/uni/IFB399/landing_page.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <div className="w-1/2">
            <p>There's not much to be said about this project as most of it was backend work and report writing, if you'd like to learn more feel free to <a href="https://github.com/JDLanyon/IFB399_BeeAware_Hive_Inspections" target="_blank" className="font-bold underline">view on GitHub</a></p>
            <br/>
            <p>A module/plugin was to be written for a beekeeping platform which handled the information tied to bee hives. There was a lot to be desired as despite working within a group of 4, I was the only one to submit a working product.</p>
            <p>The module was written in HTML, CSS and JavaScript. SQL queries were made through the root project using C#.</p>
            <br/><br/>
            <p>I'll write more on this one day I swear</p>
            <p>(I probably won't, being left alone on this assignment was awful lol)</p>
          </div>
          <Image
            className="w-1/2"
            src="/programming/uni/IFB399/agile_board.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/2"
            src="/programming/uni/IFB399/agile_board_2.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />

          <Image
            className="w-fill"
            src="/programming/uni/IFB399/risk_register.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />
          <Image
            className="w-1/4"
            src="/programming/uni/IFB399/user_stories.png"
            width={1000}
            height={1000}
            alt="panel thumbnail"
          />

        </div>
      </div>
    </Modal>
  )
}