import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';                
import Post from './pages/Post';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import OnePost from './pages/OnePost';

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
          <Route path="/"   element={<Home/>} />
          <Route path="/post"   element={<Post/>} />
          <Route path="/newPost"   element={<NewPost/>} />
          <Route path="/onePost"   element={<OnePost/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
