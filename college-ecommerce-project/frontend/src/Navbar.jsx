import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <nav className="site-nav">
      <h1 className="site-title">CollegeStore</h1>
      <div className="nav-actions">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Cart 🛒 ({cartCount})</Link>
        <button
          className="theme-toggle"
          onClick={() => setDark(prev => !prev)}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={dark ? 'Light mode' : 'Dark mode'}
        >
          {dark ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;