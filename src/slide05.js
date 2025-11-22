import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide05 = ({ onBgChange }) => {

  return (
    <div className="slide05">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        slidesPerView={3.5}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true} // ✅ 開啟左右箭頭
        className="custom-swiper">

        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide050.webp" alt="banner0" />
            <div>
              <div>石墨烯與羊毛黃金組合</div>
              <div>【Blue Cat 藍貓】買1送1石墨烯銀離子發熱羊毛被 ( 添加抗菌銀離子 冬被 被胎 發熱被 藍貓)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>1,111</span>
                  <span></span>
                </div> 
                <div>$3,380</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide051.webp" alt="banner0" />
            <div>
              <div>100%純棉 柔軟親膚</div>
              <div>【不賴床】多款任選 純棉床包枕套組 單人 雙人 加大 床單 三件組</div>
              <div>
                <div>
                  <span>$</span>
                  <span>450</span>
                  <span>起</span>
                </div> 
                <div>$1099 起</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide052.webp" alt="banner0" />
            <div>
              <div></div>
              <div>【SW 左鄰右舍】久美 MIT木心板雙吊4尺七抽衣櫃 長120x寬60x高200cm</div>
              <div>
                <div>
                  <span>$</span>
                  <span>5,411</span>
                  <span></span>
                </div> 
                <div>$21,740</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide053.webp" alt="banner0" />
            <div>
              <div>雙開門自由堆疊  透明磁吸收納</div>
              <div>【HEY!】超大75/65cm免安裝折疊衣服收納櫃衣櫥塑膠家用零食儲物櫃收納箱 寶寶衣服收納櫃 儲物櫃 衣櫃</div>
              <div>
                <div>
                  <span>$</span>
                  <span>799</span>
                  <span>起</span>
                </div> 
                <div>$2,697 起</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide054.webp" alt="banner0" />
            <div>
              <div>最新2025全新戰鬥板第三代</div>
              <div>【Everlight 億光】(10入組)13W高光效三代最新戰鬥版 LED燈泡 超節能 全電壓 球泡燈 E27 (黃光/自然光/白光)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>599</span>
                  <span></span>
                </div> 
                <div>$900</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide055.webp" alt="banner0" />
            <div>
              <div></div>
              <div>【JP】2件組 戶外機能加絨加厚保暖平口褲/束口褲 刷毛保暖褲 直筒長褲 男碼M-6XL大尺碼</div>
              <div>
                <div>
                  <span>$</span>
                  <span>399</span>
                  <span></span>
                </div> 
                <div>$1,000</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide056.jpg" alt="banner0" />
            <div>
              <div>時尚好穿搭</div>
              <div>【NIKE 耐吉】Nike Air Jordan 10 Retro 影子黑灰 磨砂皮 休閒鞋 運動鞋 男鞋 HJ6779-001</div>
              <div>
                <div>
                  <span>$</span>
                  <span>6,054</span>
                  <span></span>
                </div> 
                <div>$7,200</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide057.jpg" alt="banner0" />
            <div>
              <div>衝鋒連帽外套</div>
              <div>【J.Malo】加絨刷毛防潑水登山外套(登山服 防風外套 夾克 連帽風衣外套 男外套 外套男 厚外套)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>539</span>
                  <span></span>
                </div> 
                <div>$1,550</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide058.webp" alt="banner0" />
            <div>
              <div>秋冬最豐盛的暖心湯鍋</div>
              <div>【良品開飯】熱銷小份量湯品任選 (林聰明 沙鍋魚頭 砂鍋 酸菜白肉 酸菜魚 佛跳牆 牛肉爐 鴨血 臭豆腐)</div>
              <div>
                <div>
                  <span>$</span>
                  <span>28</span>
                  <span>起</span>
                </div> 
                <div>$35 起</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide059.webp" alt="banner0" />
            <div>
              <div>雜誌&日韓文青必到台北時寓</div>
              <div>時寓。 冬日干貝鍋物溫補賞 任選組合</div>
              <div>
                <div>
                  <span>$</span>
                  <span>380</span>
                  <span>起</span>
                </div> 
                <div>$550 起</div>              
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide05;
