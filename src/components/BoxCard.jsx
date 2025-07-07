// src/components/BoxCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BoxCard.css';

export default function BoxCard({ title, to }) {
  return (
    <Link to={to} className="box-card">
      <div className="box-thumbnail">
      </div>
      <div className="box-title">{title}</div>
    </Link>
  );
}
