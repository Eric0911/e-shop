import './style.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className='gray-background'>
          <div className='fix-header'>
            <ul className='left-menu'>
              <li><a href='/'>回首頁</a></li>
            </ul>
            <ul className='right-menu'>
              <li className='menu-bar'><a href='/'>登入</a></li>
              <li className='menu-bar'><a href='/'>註冊</a></li>
              <li className='menu-bar'><a href='/'>會員中心</a></li>
              <li className='menu-bar'><a href='/'>查訂單</a></li>
              <li className='menu-bar'><a href='/'>追蹤清單</a></li>
              <li className='menu-bar'><a href='/'>折價券</a></li>
              <li className='menu-bar'><a href='/'>購物車</a></li>
            </ul>
          </div>
        </div>
        <div className='header'>
          <div className='search-area'>
            <div className='logo'>
              LOGO
            </div>
            <div className='search-bar'>
              <input type="text" placeholder='請輸入關鍵字或品號' />
              <button>搜尋</button>
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
            <div className='new-customer-text'>
              <a href='/'>新客好康</a>
              <a href='/'>註冊抽mo幣!</a>
            </div>
          </div>
        </div>
        <div>
          <div className='TV-shop'>
          </div>
          <div>
            <div className='TV-shop-video'>
            </div>
            <div className='TV-shop-text'>
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
          <div className='good-vender'>
            
          </div>
          <div className='member-vender'></div>
        </div>
      </div>
      <div className='friend-link coding'>
      </div>
      <div className='facebook-area coding'>
      </div>
      <div className='footer-1 coding'>
      </div>
      <div className='footer-2 coding'>
      </div>
      <div className='footer-3 coding'>
      </div>
    </div>
  );
}

export default App;
