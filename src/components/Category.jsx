import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";
import SectionTitle from "../pages/shared/SectionTitle";

const categories = [
  { id: 1, title: "Salad", image: img1 },
  { id: 2, title: "Pizza", image: img2 },
  { id: 3, title: "Soup", image: img3 },
  { id: 4, title: "Dessert", image: img4 },
  { id: 5, title: "Drinks", image: img5 },
];

const Category = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto">
        <SectionTitle subTitle="--- From 11:00am to 10:00pm ---" mainTitle="Order Online"/>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="relative">
              <img
                src={category.image}
                alt={category.title}
                className="rounded-xl"
              />
              <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-2xl font-bold uppercase  bg-opacity-50 px-4 py-2 rounded-lg">
                {category.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
