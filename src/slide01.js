import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide01 = ({ onBgChange }) => {

  return (
    <div className="slide01">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={8}
        loop={false}
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
        <SwiperSlide><img src="/images/slide01_7.png" alt="banner7" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_8.png" alt="banner8" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_9.png" alt="banner9" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_A.png" alt="bannerA" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_B.png" alt="bannerB" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_C.png" alt="bannerC" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide01_D.png" alt="bannerD" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide01;
