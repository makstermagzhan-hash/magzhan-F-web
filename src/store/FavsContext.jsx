import React, { createContext, useContext, useState, useEffect } from 'react';

const FavsContext = createContext();

export function FavsProvider({ children }) {
  const [favIds, setFavIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kz_favs')) || [];
    } catch {
      return [];
    }
  });

  const [readIds, setReadIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kz_read')) || [];
    } catch {
      return [];
    }
  });

  const [dark, setDark] = useState(() => localStorage.getItem('kz_theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('kz_favs', JSON.stringify(favIds));
  }, [favIds]);

  useEffect(() => {
    localStorage.setItem('kz_read', JSON.stringify(readIds));
  }, [readIds]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('kz_theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleFav = (id) => {
    setFavIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const markAsRead = (id) => {
    setReadIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const isFav = (id) => favIds.includes(id);

  return (
    <FavsContext.Provider
      value={{ favIds, toggleFav, isFav, readIds, markAsRead, dark, setDark }}
    >
      {children}
    </FavsContext.Provider>
  );
}

export function useFavs() {
  return useContext(FavsContext);
}