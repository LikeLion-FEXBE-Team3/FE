import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
    setQuery('');
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="logo">Ono</div>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="검색어를 입력하세요🔍"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}></button>
        </div>
        <span className="search-tagline">Music is my life~</span>
      </div>

      <div className="header__right">
        <a href="https://www.melon.com" target="_blank" rel="noopener noreferrer">
          Melon
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
    </header>
  );
}
