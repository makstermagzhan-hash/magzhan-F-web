import React, { useState, useEffect } from 'react';
import { TRADITIONS, CATEGORIES } from '../data/traditions.js';
import { useFavs } from '../store/FavsContext.jsx';
import { fetchTraditionPhoto } from '../api/wikiApi.js';
import TraditionCard from '../components/TraditionCard.jsx';
import Btn from '../components/Btn.jsx';

// Осы жерге кез келген YouTube видеосының ID-ін қоюға болады (мысалы: https://www.youtube.com/watch?v=VIDEO_ID)
const YOUTUBE_VIDEO_ID = 'U_hzx7rwyp8';

export default function HomeScreen({ setScreen, openDetails }) {
  const { favIds, readIds } = useFavs();

  const totalCount = TRADITIONS.length;
  const catCount = CATEGORIES.length - 1;
  const readCount = readIds.length;
  const percent = Math.round((readCount / totalCount) * 100);

  const dayIndex = new Date().getDate() % totalCount;
  const dailyTradition = TRADITIONS[dayIndex];
  const [dailyPhoto, setDailyPhoto] = useState(dailyTradition.image);

  useEffect(() => {
    let active = true;
    setDailyPhoto(dailyTradition.image);
    fetchTraditionPhoto(
      dailyTradition.title,
      dailyTradition.image,
      dailyTradition.id
    ).then((url) => {
      if (active && url) setDailyPhoto(url);
    });
    return () => {
      active = false;
    };
  }, [dailyTradition]);

  const openRandom = () => {
    const rnd = TRADITIONS[Math.floor(Math.random() * totalCount)];
    openDetails(rnd);
  };

  return (
    <div>
      <section className="hero-banner">
        <div className="hero-video-wrap" aria-hidden="true">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title="Қазақстан дәстүрлері фондық бейне"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
          <div className="hero-video-overlay" />
        </div>

        <div className="hero-content">
          <h1>Қазақстан дәстүрлері</h1>
          <p>
            Қазақ халқының ғасырлар бойы жалғасып келе жатқан салт-дәстүрлері:
            той мен мерекеден бастап қонақжайлылыққа дейін.
          </p>

          <div className="hero-btns">
            <Btn variant="gold" onClick={() => setScreen('traditions')}>
              Дәстүрлерді көру
            </Btn>
            <Btn variant="gold" onClick={openRandom}>
              Кездейсоқ дәстүр
            </Btn>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-num">{totalCount}</span>
              <span className="stat-label">дәстүр</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{catCount}</span>
              <span className="stat-label">санат</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{readCount}</span>
              <span className="stat-label">оқылған</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{favIds.length}</span>
              <span className="stat-label">таңдаулыда</span>
            </div>
          </div>
        </div>
      </section>

      <div className="main-wrap hero-overlap">
        <div className="progress-box">
          <div className="progress-head">
            <span>
              Оқу барысы: {readCount} / {totalCount} ({percent}%)
            </span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${percent}%` }} />
          </div>
        </div>

        <div className="featured-box">
          <div
            className="featured-art"
            style={{
              padding: dailyPhoto === dailyTradition.image ? '18px' : '0',
              overflow: 'hidden',
            }}
          >
            <img
              src={dailyPhoto}
              alt={dailyTradition.title}
              onError={() => setDailyPhoto(dailyTradition.image)}
              style={
                dailyPhoto === dailyTradition.image
                  ? { width: '135px', height: '135px', objectFit: 'contain' }
                  : { width: '100%', height: '100%', objectFit: 'cover' }
              }
            />
          </div>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <span className="pill-red">Күннің дәстүрі</span>
            <h2 style={{ marginBottom: '8px' }}>{dailyTradition.title}</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
              {dailyTradition.shortDesc}
            </p>
            <Btn variant="gold" onClick={() => openDetails(dailyTradition)}>
              Толығырақ оқу
            </Btn>
          </div>
        </div>

        <h2 style={{ marginBottom: '16px' }}>Танымал дәстүрлер</h2>
        <div className="grid">
          {TRADITIONS.slice(0, 6).map((item) => (
            <TraditionCard key={item.id} item={item} onSelect={openDetails} />
          ))}
        </div>
      </div>
    </div>
  );
}

