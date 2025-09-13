import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import data from "../../data/sliderProducts.json";

export function SliderProducts() {
  const [realIndex, setRealIndex] = useState(0);
  return (
    <>
      <Swiper
        className="h-[20vw] rounded-xl"
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        centeredSlides
        spaceBetween={10}
        autoplay={{ delay: 2000 }}
        scrollbar={{ draggable: true }}
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
                realIndex === index ? "transition-transform " : ""
              }`}
            >
              <img src={slide} alt="" className=" size-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
