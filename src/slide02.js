import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide02 = ({ onBgChange }) => {

  return (
    <div className="slide02">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={2.55}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true} // ✅ 開啟左右箭頭
        autoplay={{
          delay: 3000, // ← 這裡是「每張幻燈片切換的間隔時間」，單位：毫秒
          disableOnInteraction: true, // 使用者滑動後是否暫停自動播放（false = 不暫停）
        }}
        className="custom-swiper">

        <SwiperSlide><img src="/images/slide02_0.jpg" alt="banner0" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide02_1.jpg" alt="banner1" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide02_2.jpg" alt="banner2" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide02_3.jpg" alt="banner3" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide02_4.jpg" alt="banner4" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide02_5.jpg" alt="banner5" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide02_6.jpg" alt="banner6" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide02_7.jpg" alt="banner7" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide02;
