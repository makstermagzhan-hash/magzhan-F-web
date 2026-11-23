import React from 'react';
import { useFavs } from '../store/FavsContext.jsx';
import Btn from './Btn.jsx';

export default function TraditionCard({ item, onSelect }) {
  const { isFav, toggleFav } = useFavs();
  const saved = isFav(item.id);

  return (
    <div className="card">
      <div className="card-top" style={{ padding: 0, height: '165px', overflow: 'hidden' }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="card-body">
        <span className="badge">{item.category}</span>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.shortDesc}</p>
        <div className="card-actions">
          <Btn variant="gold" onClick={() => onSelect(item)}>
            Толығырақ
          </Btn>
          <Btn variant="outline" onClick={() => toggleFav(item.id)}>
            {saved ? 'Сақталды' : 'Сақтау'}
          </Btn>
        </div>
      </div>
    </div>
  );
}