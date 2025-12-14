import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide10 = ({ onBgChange }) => {

  return (
    <div className="slide10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={'2'}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true} // ✅ 開啟左右箭頭
        autoplay={{
          delay: 3000, // ← 這裡是「每張幻燈片切換的間隔時間」，單位：毫秒
          disableOnInteraction: true, // 使用者滑動後是否暫停自動播放（false = 不暫停）
        }}
        className="custom-swiper">
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide100.gif" alt="banner0" />
          </a>
        </SwiperSlide> 
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide101.gif" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide102.gif" alt="banner0" />
          </a>
        </SwiperSlide>    
      </Swiper>
    </div>
  );
};

export default Slide10;
