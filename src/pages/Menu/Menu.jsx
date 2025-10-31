import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import CoverSection from "../shared/CoverSection";
import useMenu from "../../hooks/UseMenu";
import SectionTitle from "../shared/SectionTitle";
import MenuCategory from "./MenuComponents/MenuCategory";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg"; 

const Menu = () => {
  const [menuItems]= useMenu();
  const dessertItems = menuItems.filter((item) => item.category === "dessert");
  const pizzaItems = menuItems.filter((item) => item.category === "pizza");
  const saladItems = menuItems.filter((item) => item.category === "salad");
  const soupItems = menuItems.filter((item) => item.category === "soup");
  const offeredItems = menuItems.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <meta
          name="description"
          content="Menu page of Bistro Boss Restaurant"
        />
      </Helmet>
      <CoverSection
        bgImg={menuImg}
        title="Our Menu"
        subTitle="Would you like to try our special dishes?"
      />
      {/* offered section */}
      <SectionTitle subTitle="---Don't miss---" mainTitle="TODAY'S OFFER" />
      {/* offered items */}
      <MenuCategory items={offeredItems} title="DESSERTS" bgImg={dessert} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

      <MenuCategory items={dessertItems} title="DESSERTS" bgImg={dessert} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
      <MenuCategory items={pizzaItems} title="PIZZAS" bgImg={pizza} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
      <MenuCategory items={saladItems} title="SALADS" bgImg={salad} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
      <MenuCategory items={soupItems} title="SOUPS" bgImg={soup} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
    </div>
  );
};

export default Menu;
