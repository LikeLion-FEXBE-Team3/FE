import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';                
import Post from './components/Post';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div
        style={{
          marginTop: '60px',   
          marginLeft: '200px',
          padding: '20px'
        }}
      >
        <Routes>
          <Route path="/about"   element={<Post />} />
          <Route path="/search"  element={<div>검색 결과: {new URLSearchParams(window.location.search).get('query')}</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

