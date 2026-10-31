import React from 'react';
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
      </header>
  );
}

export default Header;