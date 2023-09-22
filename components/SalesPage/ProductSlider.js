import React, { useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

export default function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
      <div className="swiper-container mx-auto">
        <Swiper
          slidesPerView="1"
          spaceBetween={10}
          // navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // grabCursor={true}
          className="mySwiper2 mb-3"
        >
          <SwiperSlide>
            <img
              src="/Images/Sales/slide-1.png"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/Sales/slide-2.png"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/Sales/slide-3.jpg"
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/Sales/slide-4.jpg"
              alt="Slide 4"
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          autoPlay={true}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/Images/Sales/slide-1.png" alt="slide-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Images/Sales/slide-2.png" alt="slide-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Images/Sales/slide-3.jpg" alt="slide-3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Images/Sales/slide-4.jpg" alt="slide-4"/>
          </SwiperSlide>
        </Swiper>
      </div>
  );
}
