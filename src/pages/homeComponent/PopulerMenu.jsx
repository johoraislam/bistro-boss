import React, { useEffect } from "react";
import SectionTitle from "../shared/SectionTitle";
import { useState } from "react";
import MenuItem from "../shared/MenuItem";

const PopulerMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => {
        const populerItems = data.filter((item) => item.category === "popular");
        setMenuItems(populerItems);
      });
  }, []);
  console.log(menuItems);
  return (
    <div>
      <SectionTitle subTitle="--- Check it out ---" mainTitle="From Our Menu" />
      <div>
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto my-8">
          {menuItems.map((item) => (
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
