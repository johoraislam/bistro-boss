const SectionTitle = ({subTitle, mainTitle}) => {
  return (
    <div className="md:w-1/3 mx-auto text-center mb-12">
      <p className="text-center text-amber-700 mb-6 border-b border-gray-300 pb-6">
        {subTitle}
      </p>
      <h2 className="text-3xl font-semibold border-b border-gray-300 pb-6 text-center mb-8 uppercase">
        {mainTitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
