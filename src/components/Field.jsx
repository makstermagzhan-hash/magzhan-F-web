import React from 'react';

export default function Field({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="field-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}