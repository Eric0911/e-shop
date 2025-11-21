import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide04 = ({ onBgChange }) => {

  return (
    <div className="slide04">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={5.5}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true} // ✅ 開啟左右箭頭
        className="custom-swiper">

        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide040.png" alt="banner0" />
          </a>
        </SwiperSlide> 
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide041.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide042.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide043.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide044.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide045.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide046.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide047.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide048.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide049.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide04A.png" alt="banner0" />
          </a>
        </SwiperSlide>    
      </Swiper>
    </div>
  );
};

export default Slide04;
