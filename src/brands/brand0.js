import React, { useState } from "react";

const Brand0 = () => {
  const [images, setImages] = useState([
    "/images/sales-promotion_1.png",
    "/images/sales-promotion_1.png",
    "/images/sales-promotion_1.png",
  ]);

  // 每組按鈕對應的圖片組
  const imageSets = {
    set1: [
      "/images/sales-promotion_1.png",
      "/images/sales-promotion_1.png",
      "/images/sales-promotion_1.png",
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
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <div className="buttons">
        <button onMouseEnter={() => handleMouseEnter("set1")}>圖片組 1</button>
        <button onMouseEnter={() => handleMouseEnter("set2")}>圖片組 2</button>
        <button onMouseEnter={() => handleMouseEnter("set3")}>圖片組 3</button>
      </div>

      <div className="brand" style={{ width: "400px", height: "300px" }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`圖片 ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Brand0;