import Image from "next/image";
import { Modal } from "../modal";
import { Embed, LocalVideo } from "@/app/components/modal_elements";

// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div className="text-center my-2">
        <b><p>*volume warning* - check volume before playing.</p>
        <p>*epilepsy warning* - flashing images.</p></b>
      </div>
      <LocalVideo file="/motion_graphics/snippets/biv_mother_father/Snippet.mp4" thumbnail="/motion_graphics/snippets/biv_mother_father/thumbnail.png" />

      <div>
        <h1 className="text-center m-0">Biv - Mother // Father</h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min text-justify gap-8">
          <div className="col-span-2">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min text-justify gap-8">
          <Image
          className="mx-auto w-full"
          src="/temp/Blue Ocean.jpg"
          width={1000}
          height={1000}
          alt="panel thumbnail"
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo excepturi fugiat mollitia consequatur, quae esse. Atque quia ad dicta, distinctio ex aliquid ut cumque dolores odio est nihil ratione porro nisi eos recusandae libero repudiandae deserunt id tempore adipisci exercitationem in ab odit voluptatum! Sit laborum illo ratione facere reprehenderit! Sequi tempore cupiditate aperiam dolorum autem temporibus repudiandae blanditiis amet repellendus eaque eum veniam provident exercitationem sit assumenda atque ratione, voluptatibus eius adipisci quas cumque incidunt doloribus iusto. Tempora rerum accusantium, dignissimos delectus obcaecati alias eaque laboriosam architecto error quibusdam quia exercitationem voluptas iusto aspernatur veritatis reiciendis omnis dolorum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident nesciunt doloremque deleniti blanditiis magnam eos necessitatibus modi repellat fugiat!</p>
        </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos, molestiae dolores aspernatur officiis doloribus dicta fugit consectetur maiores? Obcaecati vel pariatur optio, sed autem nobis tempore ex maiores quae quas sunt necessitatibus officiis maxime enim? Eum modi ea, cum sapiente distinctio id similique. Nulla repellat temporibus voluptate non, magnam voluptatem provident dolore est nemo facere nisi deleniti error mollitia dolorum velit ipsum dolor accusamus quaerat saepe. Eum dolor eaque ducimus nulla odio obcaecati quam veritatis atque non accusantium, architecto necessitatibus aperiam alias animi commodi et quo. Debitis quis non, reprehenderit fuga, dolore aliquam laudantium impedit totam adipisci facere maxime praesentium ipsa ullam! Similique molestiae vitae veniam impedit repudiandae, quibusdam voluptatem fugiat et enim voluptatibus quo, dolore eum eaque officiis ipsum assumenda! Repellendus quis animi amet sint blanditiis fuga nesciunt architecto quo qui perspiciatis suscipit praesentium sed quod voluptatibus sequi officiis at, magnam quia est dolorum impedit. Exercitationem a, mollitia accusantium adipisci consequatur doloribus eaque dicta alias dolor illo at maxime temporibus vel! Modi facilis accusantium dolor rem doloribus eius culpa pariatur voluptatum cumque molestias, incidunt quisquam ea et aut odio accusamus illum eum laborum, eligendi quaerat nam quidem consectetur unde animi. Nemo quia blanditiis illo quae aliquam ipsa, vero id fuga nisi asperiores aliquid delectus explicabo eaque consequatur aspernatur molestias voluptas ex eligendi magni reprehenderit, dolor maxime, commodi rem neque. Explicabo dolores ipsum aliquam quasi, vero quas distinctio animi expedita necessitatibus et. Explicabo repudiandae sequi cum commodi aperiam magni, facere tenetur, nemo quam veritatis vitae vel similique. Quia, molestias. Esse iste illum nulla iusto beatae ad. Officiis inventore commodi aperiam quisquam, beatae qui consequatur eligendi eum, nostrum, saepe necessitatibus quis iusto? Explicabo nulla facilis doloremque quae deserunt obcaecati velit, perferendis eum, cumque, officia ipsum blanditiis quo dolores? Possimus rerum eos maiores incidunt esse repudiandae consequuntur deserunt eum provident totam?</p>
          </div>
          <Image
          className="mx-auto w-full"
          src="/temp/Sad Skate.jpg"
          width={1000}
          height={1000}
          alt="panel thumbnail"
          />
        </div> */}
      </div>
    </Modal>
  )
}