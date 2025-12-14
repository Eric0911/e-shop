import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"; // 確保這行有引入 CSS

const Slide11 = ({ onBgChange }) => {

  return (
    <div className="slide11">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ✅ 加入 Navigation 模組
        loop={false}
        navigation={true} // ✅ 開啟左右箭頭
        className="custom-swiper">

        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide110.jpg" alt="banner0" />
            <div>
              <div>【GOMOTO官方直營】機車行車記錄器G2大眾機(贈32GB記憶卡)</div>
              <div>
                <div>$</div>
                <div>1790</div>
              </div>
              <div></div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide111.jpg" alt="banner0" />
            <div>
              <div>【Kolin 歌林】金蛇發財AI極靜音智慧聲控循環扇(KFC-XK3097)</div>
              <div>
                <div>$</div>
                <div>1821</div>
              </div>
              <div>$1980</div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide112.jpg" alt="banner0" />
            <div>
              <div>【職人の】超導磁療石墨烯能量被(180X210CM)</div>
              <div>
                <div>$</div>
                <div>2990</div>
              </div>
              <div></div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide113.jpg" alt="banner0" />
            <div>
              <div>【Kolin 歌林】小金龍限定款AI極靜音智慧聲控循環扇(KFC-XK3097)</div>
              <div>
                <div>$</div>
                <div>1821</div>
              </div>
              <div>$1980</div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide114.jpg" alt="banner0" />
            <div>
              <div>【Kolin 歌林】2入初夏限定AI極靜音智慧聲控循環扇(KFC-XK3097)</div>
              <div>
                <div>$</div>
                <div>3477</div>
              </div>
              <div>$3780</div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide112.jpg" alt="banner0" />
            <div>
              <div>【職人の】超導磁療石墨烯能量被2入(180X210CM)</div>
              <div>
                <div>$</div>
                <div>5275</div>
              </div>
              <div>$5880</div>
              <div>更多+</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/'>
            <img src="/images/slide112.jpg" alt="banner0" />
            <div>
              <div>【職人の】超導磁療石墨烯能量被2入(180X210CM)</div>
              <div>
                <div>$</div>
                <div>5275</div>
              </div>
              <div>$5880</div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide111.jpg" alt="banner0" />
            <div>
              <div>【Kolin 歌林】金蛇發財AI極靜音智慧聲控循環扇(KFC-XK3097)</div>
              <div>
                <div>$</div>
                <div>1821</div>
              </div>
              <div>$1980</div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide112.jpg" alt="banner0" />
            <div>
              <div>【職人の】超導磁療石墨烯能量被(180X210CM)</div>
              <div>
                <div>$</div>
                <div>2990</div>
              </div>
              <div></div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide113.jpg" alt="banner0" />
            <div>
              <div>【Kolin 歌林】小金龍限定款AI極靜音智慧聲控循環扇(KFC-XK3097)</div>
              <div>
                <div>$</div>
                <div>1821</div>
              </div>
              <div>$1980</div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide110.jpg" alt="banner0" />
            <div>
              <div>【GOMOTO官方直營】機車行車記錄器G2大眾機(贈32GB記憶卡)</div>
              <div>
                <div>$</div>
                <div>1790</div>
              </div>
              <div></div>
              <div>更多+</div>
            </div>
          </a>
          <a href='/'>
            <img src="/images/slide114.jpg" alt="banner0" />
            <div>
              <div>【Kolin 歌林】2入初夏限定AI極靜音智慧聲控循環扇(KFC-XK3097)</div>
              <div>
                <div>$</div>
                <div>3477</div>
              </div>
              <div>$3780</div>
              <div>更多+</div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide11;
