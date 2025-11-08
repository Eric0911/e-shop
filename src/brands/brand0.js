import React, { useState } from "react";

const Brand0 = () => {
  const [images, setImages] = useState([
    "/images/brand_00_0_0.jpg",
    "/images/brand_00_0_1.jpg",
    "/images/brand_00_0_2.jpg",
    "/images/brand_00_0_3.jpg",
    "/images/brand_00_0_4.jpg",
    "/images/brand_00_0_5.jpg",
  ]);

  // 每組按鈕對應的圖片組
  const imageSets = {
    set1: [
      "/images/brand_00_0_0.jpg",
      "/images/brand_00_0_1.jpg",
      "/images/brand_00_0_2.jpg",
      "/images/brand_00_0_3.jpg",
      "/images/brand_00_0_4.jpg",
      "/images/brand_00_0_5.jpg",
    ],
    set2: [
      "/images/sales-promotion_2.png",
      "/images/sales-promotion_2.png",
      "/images/sales-promotion_2.png",
    ],
    set3: [
      "/images/sales-promotion_3.png",
      "/images/sales-promotion_3.png",
      "/images/sales-promotion_3.png",
    ],
  };

  // 滑鼠移上去的時候切換整組圖片
  const handleMouseEnter = (setKey) => {
    setImages(imageSets[setKey]);
  };

  return (
    <div className='content'>
      <div className="content-list">
        <a href='/' onMouseEnter={() => handleMouseEnter("set1")}>熱銷榜</a>
        <a href='/' onMouseEnter={() => handleMouseEnter("set2")}>3C資訊</a>
        <a href='/'>生活用品</a>
        <a href='/'>家庭婦幼</a>
        <a href='/'>精品鞋包</a>
        <a href='/'>流行</a>
        <a href='/'>家電</a>
        <a href='/'>美妝</a>
        <a href='/'>保健</a>
        <a href='/'>食品</a>
      </div>

      <div className="brand">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`圖片 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Brand0;