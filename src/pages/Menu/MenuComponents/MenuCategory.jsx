import CoverSection from "../../shared/CoverSection";
import MenuItem from "../../shared/MenuItem";

const MenuCategory = ({ items, title, bgImg, subTitle }) => {
  return (
    <div>
      {title && <CoverSection bgImg={bgImg} title={title} subTitle={subTitle} />}

      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto my-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
