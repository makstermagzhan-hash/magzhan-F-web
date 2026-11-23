import React from 'react';
import { useFavs } from '../store/FavsContext.jsx';

export default function Header({ screen, setScreen }) {
  const { favIds, dark, setDark } = useFavs();

  const navItems = [
    { id: 'home', label: 'Басты бет' },
    { id: 'traditions', label: 'Дәстүрлер' },
    { id: 'cards', label: 'Карточкалар' },
    { id: 'favs', label: `Таңдаулылар (${favIds.length})` },
    { id: 'quiz', label: 'Викторина' },
    { id: 'about', label: 'Жоба туралы' },
  ];

  return (
    <header className="navbar">
      <div className="brand" onClick={() => setScreen('home')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span>Қазақстан дәстүрлері</span>
      </div>

      <nav className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${screen === item.id ? 'active' : ''}`}
            onClick={() => setScreen(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
          title="Тақырыпты ауыстыру"
        >
          {dark ? '☀' : '◐'}
        </button>
      </nav>
    </header>
  );
}