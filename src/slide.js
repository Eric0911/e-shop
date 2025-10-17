import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css"; // 確保這行有引入 CSS

const Slide = ({onBgChange}) => {
  // 用 useState 來記錄目前背景顏色
  const [bgColor, setBgColor] = useState("#000000");

  // 每張幻燈片對應的背景顏色，可自行修改
  const bgColors = [
    "#F1E9DA",
    "#023090",
    "#FAD24F",
    "#6B7B92",
    "#7646FE",
    "#F6DCC1",
    "#8A1213",
  ];

  
  return (

    <div className="carousel-wrapper" style={{ backgroundColor: bgColor }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, }}
        className="custom-swiper"
        onSlideChange={(swiper) => {
          const index = swiper.realIndex; // 真實索引（排除 loop）
          const newColor = bgColors[index % bgColors.length];
          setBgColor(newColor);
          if (onBgChange) onBgChange(newColor); // ✅ 回傳給父層
        }}
      >
        <SwiperSlide><img src="/images/banner_0.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_1.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_2.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_3.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_4.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_5.jpg" alt="/" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner_6.jpg" alt="/" /></SwiperSlide>
      </Swiper>
    </div>
  );
};
  
export default Slide;
