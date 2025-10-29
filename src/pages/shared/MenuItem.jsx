const MenuItem = ({ item }) => {
  return (
   
      <div className="flex space-x-3 items-center">
        <img
          className="w-24 h-20 object-cover rounded-r-4xl rounded-b-4xl border border-amber-600 p-2"
          src={item.image}
        />
        <div className="flex flex-col gap-2 mt-4 text-center text-gray-600">
          <div className="flex justify-between">
            <h3>{item.name}-------</h3>
            <p className="text-amber-600">Price: ${item.price}</p>
          </div>
          <p className="text-start">{item.recipe}</p>
        </div>
      </div>
      
    
  );
};

export default MenuItem;
