import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAW-jUPKYBi4ZmJY3L6e2QZe0at83h9QhE",
  authDomain: "e-shop-v20.firebaseapp.com",
  projectId: "e-shop-v20",
  storageBucket: "e-shop-v20.appspot.com",
  messagingSenderId: "386900684166",
  appId: "1:386900684166:web:bd91aaf8641a985cd7d007"
};

// 初始化 Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// 匯出功能提供給其他元件使用
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export default firebaseApp;