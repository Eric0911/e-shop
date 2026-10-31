import './style.css';
import React, { useState } from 'react';
import Header from './pages/Header';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
// 1. 引入你在 src/firebase.js 匯出的 db
import './firebase'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
