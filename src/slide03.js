import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide03 = ({ onBgChange }) => {

  return (
    <div className="slide03">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={8.5}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true} // ✅ 開啟左右箭頭
        className="custom-swiper">

        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide030.webp" alt="banner0" />
            <div>
              <div>【萊爾富】11/16偷殺!Hi Cafe 冰/熱台茶18紅玉茶拿鐵 大杯(好禮即享券)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>33</span>
                </div> 
                <div>$60</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide031.webp" alt="banner0" />
            <div>
              <div>【PASEO】4層柔霜面紙PEFC(70抽4包/串)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>99</span>
                </div> 
                <div>$250</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide032.webp" alt="banner0" />
            <div>
              <div>【3M】除塵紙拖把特惠組(可任選)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>399</span>
                </div> 
                <div>$499</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide033.webp" alt="banner0" />
            <div>
              <div>【MENS Biore】保濕控油洗面乳(100g)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>109</span>
                </div> 
                <div>$135</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide034.webp" alt="banner0" />
            <div>
              <div>【康乃馨】醫療口罩30片盒裝 未滅菌(一般耳帶SOU SOU 可愛大象黃)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>62</span>
                </div> 
                <div>$330</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide035.webp" alt="banner0" />
            <div>
              <div>【米蘭精品】現貨+預購 衝鋒衣連帽夾克防水耐磨舒適滑雪男女衝鋒外套10色74db60</div>
              <div>
                <div>
                  <span>$</span>
                  <span>2,304</span>
                </div> 
                <div>$10,122</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide036.webp" alt="banner0" />
            <div>
              <div>【全家】中冰經典美式好禮即享券(企業)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>35</span>
                </div> 
                <div>$35</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide037.webp" alt="banner0" />
            <div>
              <div>【麥當勞】蕈菇安格斯牛肉堡+可樂中杯(好禮即享券)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>120</span>
                </div> 
                <div>$170</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide038.webp" alt="banner0" />
            <div>
              <div>【曼黛瑪璉】包覆提托經典 低腰三角內褲(天青藍)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>420</span>
                </div> 
                <div>$420</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide039.webp" alt="banner0" />
            <div>
              <div>怪獸8號（15）</div>
              <div>
                <div>
                  <span>$</span>
                  <span>88</span>
                </div> 
                <div>$110</div>              
              </div>
            </div>
          </a>
        </SwiperSlide> 
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide03A.webp" alt="banner0" />
            <div>
              <div>心理 書本熊 網路成癮：評估及治療指引手冊 / Kimberly S. Young：9789861915715教育心理</div>
              <div>
                <div>
                  <span>$</span>
                  <span>450</span>
                </div> 
                <div>$450</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide03B.webp" alt="banner0" />
            <div>
              <div>【ABEL 力大牌】標準切割墊  B5/A4/A3</div>
              <div>
                <div>
                  <span>$</span>
                  <span>36</span>
                  <span>起</span>
                </div> 
                <div>$60起</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide03C.webp" alt="banner0" />
            <div>
              <div>【3M】3M   810R隱形膠帶補充包(多款)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>36</span>
                  <span>起</span>
                </div> 
                <div></div>              
              </div>
            </div>
          </a>
        </SwiperSlide>        
      </Swiper>
    </div>
  );
};

export default Slide03;
