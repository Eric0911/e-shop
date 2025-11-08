import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide = ({ onBgChange }) => {

  return (
    <div className="slide01">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={8}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true} // ✅ 開啟左右箭頭
        className="custom-swiper">

        <SwiperSlide><img src="/images/slide01_0.png" alt="banner0" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_1.png" alt="banner1" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_2.png" alt="banner2" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_3.png" alt="banner3" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_4.png" alt="banner4" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_5.png" alt="banner5" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_6.png" alt="banner6" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_7.png" alt="banner0" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_8.png" alt="banner1" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_9.png" alt="banner2" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_A.png" alt="banner3" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_B.png" alt="banner4" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_C.png" alt="banner5" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_D.png" alt="banner6" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
