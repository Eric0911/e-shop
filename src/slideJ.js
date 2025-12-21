import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const SlideJ = ({ onBgChange }) => {

  return (
    <div className="slideJ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={1}
        loop={false}
        pagination={{ clickable: true }}
        className="custom-swiper">

        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideJ10.webp" alt="banner0" />
          <img src="/images/slideJ2.png" alt="banner0" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideJ;
