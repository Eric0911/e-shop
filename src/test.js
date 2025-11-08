import React, { useState } from "react";

const HoverImage = ({ defaultImg, hoverImg, alt }) => {
  const [imgSrc, setImgSrc] = useState(defaultImg);

  return (
    <div
      onMouseEnter={() => setImgSrc(hoverImg)}
      onMouseLeave={() => setImgSrc(defaultImg)}
      style={{ display: "inline-block", margin: "10px" }}
    >
      <img src={imgSrc} alt={alt} width="200" />
    </div>
  );
};

export default function BrandTurn() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>滑鼠移入切換圖片</h2>

      <HoverImage
        defaultImg="/images/brand_00_0_0.jpg"
        hoverImg="/images/brand_00_0_1.jpg"
        alt="第一張圖片"
      />

      <HoverImage
        defaultImg="/images/brand_00_0_0.jpg"
        hoverImg="/images/brand_00_0_1.jpg"
        alt="貓咪圖片"
      />

      <HoverImage
        defaultImg="/images/brand_00_0_0.jpg"
        hoverImg="/images/brand_00_0_1.jpg"
        alt="狗狗圖片"
      />
    </div>
  );
}