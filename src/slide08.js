import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide08 = ({ onBgChange }) => {

  return (
    <div className="slide08">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={3.5}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true} // ✅ 開啟左右箭頭
        className="custom-swiper">

        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide080.jpg" alt="banner0" />
            <div>
              <div>滿1件折202</div>
              <div>【金車】雪淨Pure Drip鹼性離子水600mlx2箱(共48入;官方直營)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>638</span>
                  <span></span>
                </div> 
                <div>$1,056</div>              
              </div>
            </div>
          </a>
        </SwiperSlide> 
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide081.jpg" alt="banner0" />
            <div>
              <div>滿1件折1000</div>
              <div>【Apple】iPhone 17 Pro(256G/6.3吋)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>38,900</span>
                  <span></span>
                </div> 
                <div>$39,900</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide082.jpg" alt="banner0" />
            <div>
              <div>滿1件折17789</div>
              <div>【Samsung 三星】Galaxy S24 Ultra 5G 6.8吋(12G/256G/高通驍龍8 Gen3/2億鏡頭畫素/AI手機)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>26,111</span>
                  <span></span>
                </div> 
                <div>$43,900</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide083.jpg" alt="banner0" />
            <div>
              <div>全新升級版</div>
              <div>【dyson 戴森】V8 SV25 強勁無線吸塵器(經典熱銷款)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>7,912</span>
                  <span></span>
                </div> 
                <div>$16,900</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide084.jpg" alt="banner0" />
            <div>
              <div>限時優惠★即買即用</div>
              <div>【麥當勞】12/12限搶!豬肉滿福堡加蛋送冰經典美式咖啡中杯(好禮即享券)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>58</span>
                  <span></span>
                </div> 
                <div>$110</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide085.jpg" alt="banner0" />
            <div>
              <div>售完不補★穿著中持續抗臭</div>
              <div>【ARIEL】4D抗菌洗衣膠囊60顆x4包/30顆x8包(抗菌去漬/室內晾衣/自然微香)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>1,312</span>
                  <span></span>
                </div> 
                <div>$2,316</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide086.jpg" alt="banner0" />
            <div>
              <div>自動感應、捕捉並鎖住污染物</div>
              <div>【dyson 戴森】HP10 Purifier Hot+Cool Gen1 三合一涼暖空氣清淨機 循環風扇 電暖器</div>
              <div>
                <div>
                  <span>$</span>
                  <span>11,112</span>
                  <span></span>
                </div> 
                <div>$20,900</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide087.jpg" alt="banner0" />
            <div>
              <div>滿1件折160</div>
              <div>【倍潔雅】花漾柔感抽取式衛生紙PEFC(150抽x84包/箱)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>979</span>
                  <span></span>
                </div> 
                <div>$1,680</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide088.jpg" alt="banner0" />
            <div>
              <div>滿1件折2087</div>
              <div>【Roborock 石頭科技】MOMO獨家限定! Qrevo EdgeC掃拖機器人(零纏繞/18500Pa/75度熱水洗/熱烘)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>15,912</span>
                  <span></span>
                </div> 
                <div>$42,999</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide089.jpg" alt="banner0" />
            <div>
              <div>限時優惠★即買即用</div>
              <div>【王品集團】12/13限搶!1000元抵用券《寵粉感謝祭》全集團通用券(限內用/一次抵用型)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>888</span>
                  <span></span>
                </div> 
                <div>$1,000</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>   
      </Swiper>
    </div>
  );
};

export default Slide08;
