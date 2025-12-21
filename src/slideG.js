import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const SlideG = ({ onBgChange }) => {

  return (
    <div className="slideG">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={1}
        loop={false}
        pagination={{ clickable: true }}
        className="custom-swiper">

        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideG10.webp" alt="banner0" />  
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideG11.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideG12.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideG13.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideG14.webp" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideG15.jpg" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideG16.jpg" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt=""/>
          <img src="/images/slideG17.jpg" alt="banner0" />
          <img alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideG;
