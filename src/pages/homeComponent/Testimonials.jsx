import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [views, setViews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setViews(data));
  }, []);
  console.log(views);
  return (
    <section>
      <SectionTitle
        subTitle={"---What Our Clients Say---"}
        mainTitle={"TESTIMONIALS"}
      />
      <div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {views.map((review) => (
            <SwiperSlide
              key={review._id}
              className="text-center space-y-4 py-8 px-18"
            >
              <div className="flex flex-col text-center justify-center items-center space-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-6xl text-gray-900"
                />

                <p className="text-lg italic text-gray-600">
                  "{review.details}"
                </p>
                <h3 className="text-xl font-semibold text-yellow-700">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
