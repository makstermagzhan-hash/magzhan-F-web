import React from 'react';

export default function Btn({ children, variant = 'gold', onClick, type = 'button', style }) {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}