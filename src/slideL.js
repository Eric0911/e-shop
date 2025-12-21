import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const SlideL = ({ onBgChange }) => {

  return (
    <div className="slideL">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={1}
        loop={false}
        pagination={{ clickable: true }}
        className="custom-swiper">

        <SwiperSlide>
          <img src="/images/slideL0.png" alt="banner0" />
          <img src="/images/slideL10.webp" alt="banner0" />  
          <img src="/images/slideL2.png" alt="banner0" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideL11.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideL12.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideL13.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideL14.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideL15.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideL;
