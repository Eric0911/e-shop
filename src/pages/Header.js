import React from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

function Header() {
  return (
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
              <li className='menu-bar cursor-color'><Link to="/Login">登入</Link></li>
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
  );
}

export default Header;