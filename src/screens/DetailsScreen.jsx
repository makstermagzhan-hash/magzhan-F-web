import React, { useState, useEffect } from 'react';
import { useFavs } from '../store/FavsContext.jsx';
import { fetchTraditionPhoto } from '../api/wikiApi.js';
import Btn from '../components/Btn.jsx';

export default function DetailsScreen(props) {
  const { item, onBack, goBack, setScreen } = props;
  const favs = useFavs() || {};
  const favIds = favs.favIds || [];
  const toggleFav = favs.toggleFav || favs.toggleFavorite;
  const markRead = favs.markRead || favs.toggleRead || favs.addRead;

  const [wiki, setWiki] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState(item?.image || '');

  const saved = item ? favIds.includes(item.id) : false;

  useEffect(() => {
    if (!item) return;
    if (typeof markRead === 'function') {
      markRead(item.id);
    }
    setPhoto(item.image);
    setLoading(true);
    setWiki(null);

    let active = true;

    fetchTraditionPhoto(item.title, item.image, item.id).then((url) => {
      if (active && url) setPhoto(url);
    });

    const query = encodeURIComponent(item.title);
    fetch(`https://kk.wikipedia.org/api/rest_v1/page/summary/${query}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active) {
          setWiki(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [item]);

  if (!item) return null;

  const handleBack = () => {
    if (typeof onBack === 'function') onBack();
    else if (typeof goBack === 'function') goBack();
    else if (typeof setScreen === 'function') setScreen('traditions');
  };

  const isFallbackImg = !photo || photo === item.image;

  return (
    <div style={{ maxWidth: '1040px', margin: '32px auto', padding: '0 20px' }}>
      <div
        style={{
          background: 'var(--card, var(--surface, var(--bg-card, #131d2b)))',
          color: 'var(--text, inherit)',
          border: '1px solid var(--border, rgba(148, 163, 184, 0.18))',
          borderRadius: '20px',
          padding: '28px 34px 36px',
          boxShadow: '0 14px 40px rgba(0, 0, 0, 0.18)',
        }}
      >
        <div style={{ marginBottom: '26px' }}>
          <Btn variant="outline" onClick={handleBack}>
            Артқа қайту
          </Btn>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '38px',
            alignItems: 'center',
          }}
        >
          {/* Сол жақтағы сурет блогы */}
          <div
            style={{
              background: isFallbackImg
                ? 'linear-gradient(135deg, #c25917 0%, #8f3906 100%)'
                : 'rgba(15, 23, 42, 0.12)',
              borderRadius: '16px',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 10px 26px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={photo}
              alt={item.title}
              onError={() => setPhoto(item.image)}
              style={
                isFallbackImg
                  ? {
                      width: '150px',
                      height: '100px',
                      objectFit: 'contain',
                      borderRadius: '6px',
                      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
                    }
                  : {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }
              }
            />
          </div>

          {/* Оң жақтағы ақпарат бөлімі */}
          <div>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(217, 155, 38, 0.18)',
                color: '#d99b26',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 700,
              }}
            >
              {item.category}
            </span>

            <h1
              style={{
                margin: '10px 0 12px',
                fontSize: '2.05rem',
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              {item.title}
            </h1>

            <p
              style={{
                opacity: 0.85,
                lineHeight: '1.65',
                fontSize: '0.96rem',
                marginBottom: '18px',
              }}
            >
              {item.fullDesc || item.shortDesc}
            </p>

            {item.meaning && (
              <div
                style={{
                  background: 'rgba(217, 155, 38, 0.12)',
                  borderLeft: '4px solid #d99b26',
                  borderRadius: '10px',
                  padding: '13px 16px',
                  marginBottom: '14px',
                  fontSize: '0.93rem',
                  lineHeight: 1.55,
                }}
              >
                <strong>Тәрбиелік мәні:</strong> {item.meaning}
              </div>
            )}

            <div
              style={{
                background: 'rgba(14, 116, 144, 0.12)',
                borderLeft: '4px solid #0ea5e9',
                borderRadius: '10px',
                padding: '15px 18px',
                marginBottom: '20px',
                fontSize: '0.92rem',
              }}
            >
              <strong style={{ display: 'block', marginBottom: '8px', fontSize: '0.96rem' }}>
                Энциклопедиялық анықтама (Wikipedia API):
              </strong>

              {loading && (
                <p style={{ opacity: 0.75, margin: 0 }}>Жүктелуде...</p>
              )}

              {!loading && wiki && wiki.extract && (
                <>
                  <p style={{ margin: '0 0 12px', lineHeight: '1.6', opacity: 0.9 }}>
                    {wiki.extract}
                  </p>
                  {wiki.content_urls?.desktop?.page && (
                    <a
                      href={wiki.content_urls.desktop.page}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-block',
                        color: '#d99b26',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        textDecoration: 'none',
                      }}
                    >
                      Мақаланы толық оқу ↗
                    </a>
                  )}
                </>
              )}

              {!loading && (!wiki || !wiki.extract) && (
                <p style={{ opacity: 0.75, margin: 0, fontSize: '0.88rem' }}>
                  Бұл тақырып бойынша қосымша энциклопедиялық мақала табылмады.
                </p>
              )}
            </div>

            {/* Тек Тұсаукесерге ғана арналған видео */}
            {item.id === 'tusau' && (
              <div
                style={{
                  marginBottom: '20px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(217, 155, 38, 0.35)',
                  backgroundColor: '#000',
                  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.25)',
                }}
              >
                <video
                  src="/videos/tusau.mp4"
                  controls
                  playsInline
                  style={{
                    width: '100%',
                    maxHeight: '340px',
                    display: 'block',
                  }}
                />
              </div>
            )}

            <Btn
              variant="gold"
              onClick={() => typeof toggleFav === 'function' && toggleFav(item.id)}
            >
              {saved ? 'Таңдаулылардан өшіру' : 'Таңдаулыларға қосу'}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
