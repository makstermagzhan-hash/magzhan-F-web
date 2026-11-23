import React from 'react';
import { TRADITIONS } from '../data/traditions.js';
import { useFavs } from '../store/FavsContext.jsx';
import TraditionCard from '../components/TraditionCard.jsx';

export default function FavouritesScreen({ openDetails }) {
  const { favIds } = useFavs();
  const savedItems = TRADITIONS.filter((item) => favIds.includes(item.id));

  return (
    <div className="main-wrap">
      <h2 style={{ marginBottom: '16px' }}>
        Таңдаулылар ({savedItems.length})
      </h2>
      {savedItems.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>
          Әзірге сақталған дәстүрлер жоқ.
        </p>
      ) : (
        <div className="grid">
          {savedItems.map((item) => (
            <TraditionCard key={item.id} item={item} onSelect={openDetails} />
          ))}
        </div>
      )}
    </div>
  );
}