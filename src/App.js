import './style.css';
import React from "react";
import DropDown from './DropDown';
import Slide01 from "./slide01";
import Slide02 from "./slide02";
import Slide03 from "./slide03";

function App() {
  
  return (
    <div className="App">
      <header>
        <div className='gray-background'>
          <div className='fix-header'>
            <ul className='left-menu'>
              <li className='cursor-color'><a href='/'>回首頁</a></li>
              <div className='buried-search'>
                <input id="buried-input" type="text" placeholder='請輸入關鍵字或品號' />
                <button>搜尋</button>
              </div>
            </ul>
            <ul className='right-menu'>
              <li className='menu-bar cursor-color'><a href='/'>登入</a></li>
              <li className='menu-bar cursor-color'><a href='/'>註冊</a></li>
              <li className='menu-bar cursor-color'><a href='/'>會員中心</a></li>
              <li className='menu-bar cursor-color'><a href='/'>查訂單</a></li>
              <li className='menu-bar cursor-color'><a href='/'>追蹤清單</a></li>
              <li className='menu-bar cursor-color'><a href='/'>折價券</a></li>
              <li className='menu-bar cursor-color'><a href='/'>購物車</a></li>
            </ul>
          </div>
        </div>
        <div className='header'>
          <div className='search-area'>
            <div className='logo'>
              <img src="/images/logo.png" alt="/"></img>
            </div>
            <div>
              <div className='search-bar'>
                <input id="search-input" type="text" placeholder='請輸入關鍵字或品號' />
                <button>搜尋</button>
              </div>
              <div className='under-search'>
                <li>熱門 &gt;</li>
                <li><a href='/'>買一送一</a></li>
                <li><a href='/'>即享券</a></li>
                <li><a href='/'>月餅</a></li>
                <li><a href='/'>飛利浦</a></li>
                <li><a href='/'>BTP</a></li>
                <li><a href='/'>CK</a></li>
              </div>
            </div>
            <div className='sales-promotion'>
              <li>
                <a href='/'>
                  <img src="/images/sales-promotion_1.png" alt="/"></img>
                </a>
              </li><li>
                <a href='/'>
                  <img src="/images/sales-promotion_2.png" alt="/"></img>
                </a>
              </li>
              <li>
                <a href='/'>
                  <img src="/images/sales-promotion_3.png" alt="/"></img>
                </a>
              </li>
            </div>
          </div>
          <DropDown />
          <div className='tab-area'>
            <div className='menu-tab'>
              <li>首頁</li>
              <li>限時搶購</li>
              <li>直播</li>
              <li>OO店+</li>
              <li>看看買</li>
              <li>家電</li>
              <li>電玩</li>
              <li>手機/相機</li>
              <li>電腦/組件</li>
              <li>3C周邊</li>
              <li>保健/醫療</li>
              <li>食品/飲料</li>
              <li>生鮮</li>
              <li>女時尚</li>
              <li>男時尚</li>
              <button className='menu-toggle'>
                <img src="/images/down-arrow.png" alt="/"></img>
                <img src="/images/up-arrow.png" alt="/"></img>
              </button>
            </div>  
          </div>
          <div className='drop-menu'>
            <div>
              <a href='/'>首頁</a>
            </div>
            <div>
              <a href='/'>限時搶購</a>
            </div>
            <div>
              <a href='/'>直播</a>
            </div>
            <div>
              <a href='/'>wo店+</a>
            </div>
            <div>
              <a href='/'>看看買</a>
            </div>
            <div>
              <a href='/'>家電</a>
            </div>
            <div>
              <a href='/'>電玩</a>
            </div>
            <div>
              <a href='/'>手機/相機</a>
            </div>
            <div>
              <a href='/'>電腦/組件</a>
            </div>
            <div>
              <a href='/'>3C週邊</a>
            </div>
            <div>
              <a href='/'>保健/醫療</a>
            </div>
            <div>
              <a href='/'>食品/飲料</a>
            </div>
            <div>
              <a href='/'>生鮮</a>
            </div>
            <div>
              <a href='/'>女時尚</a>
            </div>
            <div>
              <a href='/'>男時尚</a>
            </div>
            <div>
              <a href='/'>精品/飾品</a>
            </div>
            <div>
              <a href='/'>彩妝保養</a>
            </div>
            <div>
              <a href='/'>個人清潔</a>
            </div>
            <div>
              <a href='/'>日用/紙品</a>
            </div>
            <div>
              <a href='/'>母嬰/玩具</a>
            </div>
            <div>
              <a href='/'>餐廚</a>
            </div>
            <div>
              <a href='/'>家具收納</a>
            </div>
            <div>
              <a href='/'>修繕園藝</a>
            </div>
            <div>
              <a href='/'>傢飾寢具</a>
            </div>
            <div>
              <a href='/'>寵物</a>
            </div>
            <div>
              <a href='/'>運動/按摩</a>
            </div>
            <div>
              <a href='/'>戶外</a>
            </div>
            <div>
              <a href='/'>車類</a>
            </div>
            <div>
              <a href='/'>圖書影音</a>
            </div>
            <div>
              <a href='/'>文具樂器</a>
            </div>
            <div>
              <a href='/'>藝術宗教</a>
            </div>
            <div>
              <a href='/'>旅遊/住宿</a>
            </div>
            <div>
              <a href='/'>票券</a>
            </div>
            <div>
              <a href='/'>加值/軟體</a>
            </div>
            <div>
              <a href='/'>綠色生活</a>
            </div>
            <div>
              <a href='/'>跨境好物</a>
            </div>
            <div>
              <a href='/'>wowo富立綜合保代</a>
            </div>
            <div>
              <a href='/'>樂公益</a>
            </div>
            <div>
              <a href='/'>品牌旗艦館</a>
            </div>            
          </div>
        </div>
      </header>
      <div className='main-content'>
        <div className='banner'>
          <img src="/images/banner00.jpg" alt="/"></img>
          <img src="/images/banner01.jpg" alt="/"></img>
          <img src="/images/banner02.jpg" alt="/"></img>
          <img src="/images/banner03.jpg" alt="/"></img>
          <img src="/images/banner10.jpg" alt="/"></img>
          <img src="/images/banner11.jpg" alt="/"></img>
          <img src="/images/banner12.jpg" alt="/"></img>
          <img src="/images/banner13.jpg" alt="/"></img>
        </div>
        <Slide01 />
        <div className='content0'>
          <div>
            <img src="/images/content0_00.png" alt="bannerD" />
            <img src="/images/content0_01.png" alt="bannerD" />
            <img src="/images/content0_02.png" alt="bannerD" />
            <img src="/images/content0_03.png" alt="bannerD" />
            <img src="/images/content0_04.png" alt="bannerD" />
          </div>
          <div>
            <div className='content0-search'>wowo熱搜榜</div>
            <div className='list-items'>
              <div>
                <div>
                  <div className='item-logo'>1</div>
                  <a href="/">麥當勞</a>
                </div>
                <div>熱度3731萬</div>
              </div>
              <div>
                <div>
                  <div className='item-logo'>2</div>
                  <a href="/">即期品買一送一</a>
                </div>
                <div>熱度3435萬</div>
              </div>
              <div>
                <div>
                  <div className='item-logo'>3</div>
                  <a href="/">new balance</a>
                </div>
                <div>熱度3010萬</div>
              </div>
              <div>
                <div>
                  <div className='item-logo'>4</div>
                  <a href="/">iphone 17 pro max</a>
                </div>
                <div>熱度2796萬
                </div>
              </div>
              <div>
                <div>
                  <div className='item-logo'>5</div>
                  <a href="/">衛生紙</a>
                </div>
                <div>熱度2773萬</div>
              </div>
              <div>
                <div>
                  <div className='item-logo'>6</div>
                  <a href="/">洗衣球</a>
                </div>
                <div>熱度2772萬</div>
              </div>
              <div>
                <div>
                  <div className='item-logo'>7</div>
                  <a href="/">除濕機</a>
                </div>
                <div>熱度2734萬</div>
              </div>
              <div>
                <div>
                  <div className='item-logo'>8</div>
                  <a href="/">滿意寶寶</a>
                </div>
                <div>熱度2681萬</div>
              </div>
              <div>
                <div>
                  <div className='item-logo'>9</div>
                  <a href="/">行李箱</a>
                </div>
                <div>熱度2666萬</div>
              </div>
            </div>
          </div>      
        </div>
        <div className='content1'>
          <div>
            <Slide02 />
            <div className='brand-union'>
              <img src="/images/brand-union0.png" alt="/"></img>
              <img src="/images/brand-union1.png" alt="/"></img>
              <img src="/images/brand-union2.png" alt="/"></img>
              <img src="/images/brand-union3.png" alt="/"></img>
            </div>
          </div>
          <div>
            <img src="/images/banner.gif" alt="/"></img>
          </div>
        </div>
        <div className='content2'>
          <div>
            <img src="/images/discounted-goods.png" alt="/"></img>
          </div>
          <div>
            <Slide03 />
          </div>
        </div>
      </div>
      <div className='facebook-area'>
        <button>
          <img src="/images/praise.png" alt="/"></img>
          <a href='/'>讚</a>
        </button>
        <a href='/'>152萬人說這個讚。成為朋友中第一個說讚的人。</a>
      </div>
      <div className='footer-1'>
        <div>
          <div>
            <div className='anti-fraud'>防詐騙提醒：yoyo絕不會以電話或簡訊通知訂單/分期出錯、或變更付款方式，更不會要您前往ATM進行任何操作！不應在yoyo以外的任何地方輸入yoyo帳密(例如非政府官方的電子發票app)，以免權益受損！</div>
            <div className='detail-list'>
              <div className='about-us cursor-color'>
                <div>關於我們</div>
                <a href='/'>yoyo官網</a>
                <a href='/'>招商專區</a>
                <a href='/'>人才招募</a>
              </div>
              <div className='feature-service cursor-color'>
                <div>特色服務</div>
                <a href='/'>大宗採購方案</a>
                <a href='/'>異業合作</a>
                <a href='/'>yoyo幣企業採購</a>
              </div>
              <div className='member-rights cursor-color'>
                <div>會員權益</div>
                <a href='/'>客戶隱私權政策</a>
                <a href='/'>客戶權利義務</a>
                <a href='/'>網路安全標章</a>
                <a href='/'>包裝減量標章</a>
                <a href='/'>防詐騙宣導</a>
                <a href='/'>碳足跡標籤</a>
              </div>
              <div className='series-webs cursor-color'>
                <div>系列網站</div>
                <a href='/'>momoFB粉絲團</a>
                <a href='/'>momo好物交流社團</a>
                <a href='/'>momo官方IG</a>
                <a href='/'>momo富立保險</a>
              </div>
              <div className='customer-service cursor-color'>
                <div>客戶服務</div>
                <a href='/'>訂單/配送進度查詢</a>
                <a href='/'>取消訂單/退貨</a>
                <a href='/'>更改配送地址</a>
                <a href='/'>追蹤清單</a>
                <a href='/'>快速到貨服務</a>
                <a href='/'>折價券說明</a>
                <a href='/'>FAQ 常見問題</a>
                <a href='/'>聯絡我們</a>
              </div>
              <div className='app cursor-color'>
                <div>行動購物APP</div>
                <div>
                  <img src="/images/App-QRcode.jpg" alt="/"></img>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/shopping-cart.png" alt="/"></img>
          </div>
        </div>
      </div>
      <div className='footer-2  cursor-color'>
          <a href='/'>關於我們</a>
          <a href='/'>人才招募</a>
          <a href='/'>招商專區</a>
          <a href='/'>電腦版</a>
          <a href='/'>手機版</a>
          <a href='/'>Facebook</a>
          <a href='/'>加入line</a>
          <a href='/'>Instagram</a>
      </div>
      <div className='footer-3'>
        <span>富邦媒體科技股份有限公司 統編：27365925 台北市 114 內湖區洲子街 96 號 4 樓 富邦momo通過ISO/IEC27001認證，食品業者登錄字號：A-127365925-00000-7</span>
        <span>版權所有 copyright © 2006 momo.com Inc. All Rights Reserved.</span>
        <span>網站中旅遊行程商品由富昇旅行社股份有限公司提供 註冊編號：交觀綜2152號 旅遊專線電話：0800-777-616 地址：台北市內湖區洲子街92號7樓</span>
      </div>
      <div className='digital-CS'>
        <img src="/images/digital-CS.png" alt="/"></img>
      </div>
    </div>
  );
}

export default App;
