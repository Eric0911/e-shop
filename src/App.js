import './style.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className='gray-background'>
          <div className='fix-header'>
            <ul className='left-menu'>
              <li className='cursor-color'><a href='/'>回首頁</a></li>
              <div className='buried-search'>
                <input type="text" placeholder='請輸入關鍵字或品號' />
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
              LOGO
            </div>
            <div>
              <div className='search-bar'>
                <input type="text" placeholder='請輸入關鍵字或品號' />
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
          <div className='tab-area'>
            <div className='menu-tab'>
              <li>Plus訂閱</li>
              <li>站長推薦</li>
              <li>重磅新品</li>
              <li>樂公益</li>
              <li>保險館</li>
              <li>看看買</li>
              <li>週期訂購</li>
              <li>品牌旗艦</li>
              <li>綠色生活</li>
              <li>賺代幣</li>
            </div>  
          </div> 
        </div>
      </header>
      <div className='banner'>
        <div className='banner-left'>
          <div className='menu-title'>
            <img src="/images/menu-title.png" alt="/"></img>
          </div> 
          <div className='menu-list'>
            <li>家電・電玩・視聽・廚三機</li>
            <li>手機・平板・耳機・攝相機</li>
            <li>電腦・電競・週邊・零組件</li>
            <li className='group-divider'></li>
            <li>保健・醫療用品・保險套</li>
            <li>食品・零食・飲料・生鮮</li>
            <li className='group-divider'></li>
            <li>彩妝・保養・洗沐・香氛</li>
            <li>女時尚・男時尚・運動</li>
            <li>珠寶・精品・配飾</li>
            <li className='group-divider'></li>
            <li>日用品・清潔・餐廚・寵物</li>
            <li>母嬰・童裝・尿布・玩具</li>
            <li className='group-divider'></li>
            <li>家具・寢具・傢飾・修繕</li>
            <li>運動・按摩・戶外・車類</li>
            <li className='group-divider'></li>
            <li>圖書・文具・影音・樂器</li>
            <li>旅遊・票券・加值・軟體</li>
          </div> 
        </div>
        <div className='banner-middle'>
          <img src="/images/banner_0.jpg" alt="/"></img>
        </div> 
        <div className='banner-right'>
          <div className='banner-right-title'>
          </div>
          <div className='banner-right-promo'>
            <img src="/images/banner-promo_1.png" alt="/"></img>
          </div>
          <div className='banner-right-promo'>
            <img src="/images/banner-promo_2.png" alt="/"></img>
          </div>
          <div className='banner-right-promo'>
            <img src="/images/banner-promo_3.png" alt="/"></img>
          </div>
          <div className='banner-right-bottom'>
          </div>
        </div>
      </div>
      <div className='content-1'>
        <div>
          <img src="/images/content-note.png" alt="/"></img>
        </div>
        <div>
          <div className='new-customer'>
          </div>
          <div>
            <div className='new-customer-video'>
            </div>
            <div className='new-customer-text cursor-color'>
              <a href='/'>
                <span>新客好康</span>
                <span>註冊抽mo幣!</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className='TV-shop'>
          </div>
          <div>
            <div className='TV-shop-video'>
            </div>
            <div className='TV-shop-text cursor-color'>
              <a href='/'>
                <span className='TV-shop-text-1'>01台LIVE</span>
                <span className='TV-shop-text-2'>細胞能量 高效養護修復神褲2入</span>
                <span className='TV-shop-text-3'>$3,860</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='content-2'>
        <div className='content-2-row1'>
          <div className='flash-sale'>
            <div className='flash-sale-title'></div>
            <div className='flash-sale-content'></div>
          </div>
          <div  className='hot-today'>
            <div className='hot-sale'>
              <div className='hot-sale-title'></div>
              <div className='hot-sale-content'></div>
            </div>
            <div className='hot-item'></div>
          </div>
        </div>
        <div className='content-2-row2'>
          <div className='may-like'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div  className=''>
            <div className='everyone-buy'>
              <div className=''></div>
              <div className=''></div>
            </div>
            <div className='hot-track'></div>
          </div>
        </div>
        <div className='content-2-row3'></div>
        <div className='content-2-row4'>
          <div className='hot-menu'>
            <li>生活家電</li>
            <li>3C資訊</li>
            <li>生活用品</li>
            <li>居家餐廚</li>
            <li>保健樂活</li>
            <li>美妝保養</li>
            <li>流行精品</li>
            <li>團購美食</li>
            <li>休閒旅遊</li>
            <li>電視購物</li>
            <li>暢銷書榜</li>
          </div>
          <div className='hot-contect'></div>
        </div>
        <div className='content-2-row5'>
          <div className='bank-new'>
            <img src="/images/bank-new.png" alt="/"></img>
          </div>
          <div className='bank-contect'></div>
        </div>
        <div className='content-2-row6'>
          <div className='good-venue'>
            <div></div>
            <div className='venue-banner'>
              <div className='banner-run'>
                <img src="/images/banner-run.jpg" alt="/"></img>
              </div>
              <div className='banner-fix'>
                <img src="/images/banner-fix_1.jpg" alt="/"></img>
                <img src="/images/banner-fix_2.jpg" alt="/"></img>
                <img src="/images/banner-fix_3.jpg" alt="/"></img>
                <img src="/images/banner-fix_4.jpg" alt="/"></img>
              </div>
            </div>
          </div>
          <div>
            <div className='member-benefit'>
              <div></div>
              <div></div>
            </div>
            <div className='select-brand'>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='content-2-row7'>
          <div className='mouth-promotion'>
            <div className='title'>
              <div>
                <img src="/images/mouth-promotion.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='life-goods'>
            <div className='title'>
              <div>
                <img src="/images/life-goods.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='beauty-care'>
            <div className='title'>
              <div>
                <img src="/images/beauty-care.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='furniture'>
            <div className='title'>
              <div>
                <img src="/images/furniture.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='vedio-book'>
            <div className='title'>
              <div>
                <img src="/images/vedio-book.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='health-care'>
            <div className='title'>
              <div>
                <img src="/images/health-care.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='entertainment'>
            <div className='title'>
              <div>
                <img src="/images/entertainment.jpg" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='home-appliances'>
            <div className='title'>
              <div>
                <img src="/images/home-appliances.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='CCC'>
            <div className='title'>
              <div>
                <img src="/images/3C.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='shoes-bags'>
            <div className='title'>
              <div>
                <img src="/images/shoes-bags.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='clothes'>
            <div className='title'>
              <div>
                <img src="/images/clothes.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='food'>
            <div className='title'>
              <div>
                <img src="/images/food.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
          <div className='large-furniture'>
            <div className='title'>
              <div>
                <img src="/images/large-furniture.png" alt="/"></img>
              </div>
              <div></div>
            </div>
            <div className='content'></div>
          </div>
        </div>
        <div className='content-2-row8'>
          <div className='promotion'>
            <span>好康特賣</span>
            <img src="/images/promotion1.jpg" alt="/"></img>
          </div>
          <div className='promotion'>
            <span>精選推薦</span>
            <img src="/images/promotion2.jpg" alt="/"></img>
          </div>
          <div className='promotion'>
            <span>銀行好康</span>
            <img src="/images/promotion3.jpg" alt="/"></img>
          </div>
          <div className='promotion'>
            <span>momo同樂會</span>
            <img src="/images/promotion4.jpg" alt="/"></img>
          </div>
        </div>
        <div className='content-2-row9'>
            <img src="/images/policy-advocacy.png" alt="/"></img>
        </div>
      </div>
      <div className='friend-link'>
        <div>
          <img src="/images/friend-link1.jpg" alt="/"></img>
          <img src="/images/friend-link2.jpg" alt="/"></img>
          <img src="/images/friend-link3.jpg" alt="/"></img>
          <img src="/images/friend-link4.jpg" alt="/"></img>
          <img src="/images/friend-link5.jpg" alt="/"></img>
          <img src="/images/friend-link6.jpg" alt="/"></img>
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
