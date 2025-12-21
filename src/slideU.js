import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const SlideU = ({ onBgChange }) => {

  return (
    <div className="slideU">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={1}
        loop={false}
        pagination={{ clickable: true }}
        className="custom-swiper">

        <SwiperSlide>
          <img src="/images/slideU0.png" alt="banner0" />
          <img src="/images/slideU10.webp" alt="banner0" />
          <img src="/images/slideU2.png" alt="banner0" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideU11.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideU12.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideU13.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideU14.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideU15.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideU16.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideU;
