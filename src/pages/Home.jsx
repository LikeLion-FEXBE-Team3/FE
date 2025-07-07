import React from 'react';
import BoxCard from '../components/BoxCard';
import './Home.css';

const boxes = [
  { title: '댄스', to: '/artist' },
  { title: '랩/힙합',     to: '/genre' },
  { title: '발라드',     to: '/chart' },
  { title: '자유게시판',   to: '/recommend' },
];

export default function Home() {
  return (
    <div className="home-grid">
      {boxes.map(b => (
        <BoxCard key={b.to} title={b.title} to={b.to} />
      ))}
    </div>
  );
}
