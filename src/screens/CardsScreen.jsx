import React, { useState } from 'react';
import { TRADITIONS } from '../data/traditions.js';
import { useFavs } from '../store/FavsContext.jsx';
import Btn from '../components/Btn.jsx';

export default function CardsScreen() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { markAsRead } = useFavs();

  const current = TRADITIONS[index];

  const handleFlip = () => {
    if (!flipped) markAsRead(current.id);
    setFlipped(!flipped);
  };

  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % TRADITIONS.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + TRADITIONS.length) % TRADITIONS.length);
  };

  return (
    <div className="main-wrap" style={{ maxWidth: '640px' }}>
      <h2>
        Карточкалар ({index + 1} / {TRADITIONS.length})
      </h2>
      <p style={{ color: 'var(--muted)' }}>
        Түсіндірмесін көру үшін карточканы басыңыз.
      </p>

      <div className="flashcard" onClick={handleFlip}>
        {!flipped ? (
          <>
            <img
              src={current.image}
              alt={current.title}
              style={{ width: '110px', height: '110px', marginBottom: '14px' }}
            />
            <span className="badge">{current.category}</span>
            <h2>{current.title}</h2>
          </>
        ) : (
          <>
            <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>
              {current.title}
            </h3>
            <p style={{ marginBottom: '10px' }}>{current.fullDesc}</p>
            <small style={{ color: 'var(--muted)' }}>{current.meaning}</small>
          </>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Btn variant="outline" onClick={prevCard}>
          Алдыңғы
        </Btn>
        <Btn variant="gold" onClick={handleFlip}>
          Аудару
        </Btn>
        <Btn variant="outline" onClick={nextCard}>
          Келесі
        </Btn>
      </div>
    </div>
  );
}