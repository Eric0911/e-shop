import { useEffect } from 'react';
import $ from 'jquery';

function DropDown() {
  useEffect(() => {
    $('.menu-toggle').on('click', function () {
      $('.drop-menu').toggleClass('active');
      $('.menu-toggle > img:nth-child(1)').toggleClass('active');
      $('.menu-toggle > img:nth-child(2)').toggleClass('active');
      $('.drop-menu > div > a').toggleClass('active');
    });

    // ✅ 記得清理事件
    return () => {
      $('.menu-toggle').off('click');
    };
  }, []);

  return null; // 這個 JS 不輸出任何畫面
}

export default DropDown;