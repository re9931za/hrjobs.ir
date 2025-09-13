import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export default function Carousel({ data, activeStyle, otherStyle }) {
  const [realIndex, setRealIndex] = useState(0);
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        centeredSlides
        spaceBetween={10}
        // autoplay={{ delay: 3000 }}
        // scrollbar={{ draggable: true }}
        speed={300}
        loop
        onSlideChange={(slide) => {
          setRealIndex(slide.realIndex);
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-full  ${
                realIndex === index ? activeStyle : otherStyle
              }`}
            >
              <img src={slide} alt="" className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
