import React, { useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'; // 官方 CSS 樣式
import { auth } from '../firebase'; // 引入你在 src/firebase.js 匯出的 auth

// 1. 設定 FirebaseUI 的登入選項 (uiConfig)
const uiConfig = {
  // 登入成功後的重導向頁面
  signInSuccessUrl: '/', 
  // 顯示哪些登入方式（如 Email、Google 登入）
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // 也可以設定服務條款或隱私權政策連結
  tosUrl: '<YOUR_TOS_URL>',
  privacyPolicyUrl: '<YOUR_PRIVACY_POLICY_URL>'
};

function Login() {
    const elementRef = useRef(null);

    useEffect(() => {
      // 取得或建立單一 AuthUI 實例
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
      
      // 將 FirebaseUI 渲染到 DOM 節點上
      if (elementRef.current) {
        ui.start(elementRef.current, uiConfig);
      }
  
      // 元件卸載時清理，防止衝突
      return () => {
        ui.reset();
      };
    }, []);

    return (   
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明黑底
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999999 // 確保放在所有舊有 div 的最上層
          }}>
        
            <div style={{
                maxWidth: '400px',
                margin: '50px auto',
                padding: '30px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 20,
                minHeight: 'fit-content', // 1. 確保卡片會根據內容自動撐高 

                justifyContent: 'center', // 水平置中
                alignItems: 'center',     // 垂直置中
                width: '100%',
            }}>
                <h2 style={{ marginBottom: '20px', color: '#333' }}>會員登入</h2>
                {/* 提供 DOM 節點供 FirebaseUI 掛載 */}
                <div ref={elementRef} />
            </div>
        </div>
    );
}

export default Login;