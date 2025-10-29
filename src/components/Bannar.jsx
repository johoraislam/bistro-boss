import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";
import img3 from "../assets/home/04.jpg";
import img4 from "../assets/home/03.png";
import img5 from "../assets/home/05.png";
import img6 from "../assets/home/06.png";

const Bannar = () => {
  const slides = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        showStatus={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="object-cover h-full w-fit object-center select-none"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Bannar;
