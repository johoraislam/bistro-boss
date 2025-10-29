import bannarImage from "../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="my-20 p-18 rounded-lg text-white max-w-7xl mx-auto"
    >
       <div className="bg-white/75 text-black w-3/4 mx-auto p-10 rounded-lg flex flex-col  items-center justify-center gap-6">
         <h1 className="w-2/3 text-center text-4xl font-extralight text-gray-700">Bistro Boss</h1>
        <p className=" text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
       </div>
    </div>
  );
};

export default BistroBoss;
