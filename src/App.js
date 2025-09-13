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
        <div className='header coding'>
          <div className='logo'>
            Logo
          </div>
          <div className='search-bar'>
            <input type="text" placeholder='請輸入關鍵字或品號' />
            <button>搜尋</button>
          </div>
          <div className='sales-promotion'>
            <li>
              <a href='/'>
                <img src="../images/sales-promotion_1.png"></img>
              </a>
            </li><li>
              <a href='/'>
                <img src="../images/sales-promotion_2.png"></img>
              </a>
            </li>
            <li>
              <a href='/'>
                <img src="../images/sales-promotion_3.png"></img>
              </a>
            </li>
          </div>
        </div>
      </header>
      <div className='banner coding'>
      </div>
      <div className='content-1 coding'>
      </div>
      <div className='content-2 coding'>
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
