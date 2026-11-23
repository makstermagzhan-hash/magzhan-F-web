import React from 'react';
import { TRADITIONS } from '../data/traditions.js';

export default function AboutScreen() {
  return (
    <div className="main-wrap">
      <div className="panel">
        <h2 style={{ marginBottom: '12px' }}>Жоба туралы</h2>
        <p style={{ marginBottom: '12px' }}>
          <strong>«Қазақстан дәстүрлері»</strong> — қазақ халқының ұлттық әдет-ғұрыптарын,
          салт-дәстүрлерін және мәдени мұраларын насихаттайтын интерактивті веб-қосымша.
        </p>
        <ul style={{ paddingLeft: '20px', color: 'var(--muted)' }}>
          <li>Барлығы {TRADITIONS.length} дәстүр мен 5 санат қамтылған.</li>
          <li>Оқу барысы мен таңдаулылар тізімі сақталады.</li>
          <li>Есте сақтау карточкалары мен викторина бөлімдері бар.</li>
        </ul>
      </div>
    </div>
  );
}