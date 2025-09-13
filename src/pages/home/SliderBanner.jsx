import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import sliderBanner from "../../data/sliderBanner.json";

export function SliderBanner() {
  const [realIndex, setRealIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiper = useRef(null);

  return (
    <div className="h-[20vw] pb-5">
      <Swiper
        className="size-full !p-1"
        dir="ltr"
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={2}
        centeredSlides
        spaceBetween={20}
        // autoplay

        autoplay={{
          //  delay: 3000,
          pauseOnMouseEnter: true,
        }}
        // scrollbar={{ draggable: true }}
        speed={300}
        loop
        // onInit={(s) => {
        //   s.params.navigation.prevEl = prevRef.current;
        //   s.params.navigation.nextEl = nextRef.current;
        //   s.navigation.init();
        //   s.navigation.update();
        // }}
        onSlideChange={(slide) => {
          setRealIndex(slide.realIndex);
        }}
        onSwiper={(x) => (swiper.current = x)}
        // onMouseDown={() => {
        //   alert("as");
        // }}
      >
        {sliderBanner.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div
              className={`size-full   ${
                realIndex === index
                  ? " shadow-2xl shadow-black hover:border-red hover:ring-2 "
                  : "blur-sm hover:filter-none"
              }`}
            >
              <img src={slide} alt="" className="size-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-2 flex justify-center gap-10 *:cursor-pointer  *:hover:scale-125">
        <button onClick={() => swiper.current.slidePrev()}>
          <img
            src="/assets/icons/streamline-color--button-next.svg"
            alt=""
            title="بعدی"
          />
        </button>
        <button
          onClick={() => {
            swiper.current.autoplay.start();
            swiper.current.slideNext();
          }}
        >
          <img
            title="ادامه"
            src="/assets/icons/streamline-ultimate-color--button-play.svg"
            alt=""
          />
        </button>
        <button onClick={() => swiper.current.autoplay.stop()}>
          <img
            title="توقف"
            src="/assets/icons/streamline-ultimate-color--button-stop.svg"
            alt=""
          />
        </button>
        <button onClick={() => swiper.current.slideNext()}>
          <img
            title="قبلی"
            src="/assets/icons/streamline-color--button-previous.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
