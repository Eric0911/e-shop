import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const SlideR = ({ onBgChange }) => {

  return (
    <div className="slideR">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={1}
        loop={false}
        pagination={{ clickable: true }}
        className="custom-swiper">

        <SwiperSlide>
          <img src="/images/slideR0.png" alt="banner0" />
          <img src="/images/slideR10.webp" alt="banner0" />  
          <img src="/images/slideR2.png" alt="banner0" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideR11.jpg" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideR12.jpg" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideR13.jpg" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideR;
