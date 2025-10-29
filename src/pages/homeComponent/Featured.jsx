import featuredIImg from "../../assets/home/featured.jpg";
import SectionTitle from "../shared/SectionTitle";

const Featured = () => {
  return (
    <div
    className="text-white my-12"
      style={{
        backgroundImage: `url(${featuredIImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black opacity-80 p-10">
        <SectionTitle
          subTitle="---Check it out---"
          mainTitle="FROM OUR MENU"
        />
        <div className="max-w-3xl flex gap-6 items-center mx-auto text-center ">
          <div>
            <img src={featuredIImg} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-start text-xl">March 20, 2026</h5>
            <h4 className="text-start text-xl">WHERE CAN I GET SOME?</h4>
            <p className="text-start text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <div className="flex justify-start">
                <button className="text-white bg-transparent outline-none p-2.5 rounded-xl border-b-2 hover:bg-blue-600">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
