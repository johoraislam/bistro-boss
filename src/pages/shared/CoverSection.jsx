
const CoverSection = ({bgImg,title,subTitle}) => {
  return (
       <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          className="mb-20 p-18 rounded-lg text-white max-w-7xl mx-auto min-h-[500px] flex items-center justify-center"
        >
           <div className="bg-black/50 text-white w-3/4 mx-auto p-10 rounded-lg flex flex-col  items-center justify-center gap-6">
             <h1 className="w-2/3 text-center text-4xl font-semibold text-white">{title}</h1>
            <p className=" text-center text-white">{subTitle}</p>
           </div>
        </div>
  );
}

export default CoverSection