// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Autoplay, Pagination } from "swiper/modules";
// import "./style.css"; // 確保這行有引入 CSS

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css"; // 確保這行有引入 CSS

const Slide = () => {
  
    return (

    <div className="carousel-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, }}
        className="custom-swiper"
      >
        <SwiperSlide><img src="/images/banner_0.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_1.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_2.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_3.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_4.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_5.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_6.jpg" alt="/" /></SwiperSlide>
      </Swiper>
    </div>
    );
};
  
export default Slide;
