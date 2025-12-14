import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide09 = ({ onBgChange }) => {

  return (
    <div className="slide09">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={5.5}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true} // ✅ 開啟左右箭頭
        className="custom-swiper">

        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide090.jpg" alt="banner0" />
          </a>
        </SwiperSlide> 
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide091.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide092.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide093.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide094.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide095.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide096.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide097.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide098.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide099.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide09A.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide09B.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide09C.png" alt="banner0" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide09D.png" alt="banner0" />
          </a>
        </SwiperSlide>    
      </Swiper>
    </div>
  );
};

export default Slide09;
