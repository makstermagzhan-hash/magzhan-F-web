import React, { useState } from 'react';
import { TRADITIONS, CATEGORIES } from '../data/traditions.js';
import Field from '../components/Field.jsx';
import TraditionCard from '../components/TraditionCard.jsx';

export default function TraditionsScreen({ openDetails }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Барлығы');

  const filtered = TRADITIONS.filter((item) => {
    const matchCat = category === 'Барлығы' || item.category === category;
    const q = search.toLowerCase().trim();
    const matchSearch =
      item.title.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="main-wrap">
      <h2 style={{ marginBottom: '14px' }}>Барлық дәстүрлер ({filtered.length})</h2>

      <Field
        value={search}
        onChange={setSearch}
        placeholder="Дәстүр атауы бойынша іздеу..."
      />

      <div className="chips">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`chip ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>Сұраныс бойынша ештеңе табылмады.</p>
      ) : (
        <div className="grid">
          {filtered.map((item) => (
            <TraditionCard key={item.id} item={item} onSelect={openDetails} />
          ))}
        </div>
      )}
    </div>
  );
}