import SectionTitle from "../shared/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../hooks/UseMenu";

const PopulerMenu = () => {
  const [menuItems] = useMenu();
  const populerItems = menuItems.filter((item) => item.category === "popular");
  
  return (
    <div>
      <SectionTitle subTitle="--- Check it out ---" mainTitle="From Our Menu" />
      <div>
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto my-8">
          {populerItems.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="p-2 border-b-2 rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300">View Full Menu</button>
        </div>
      </div>
    </div>
  );
};

export default PopulerMenu;
