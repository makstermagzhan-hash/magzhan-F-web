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
      <style>{`
        .dt-card {
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 20px;
          padding: 28px 34px 36px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.14);
        }
        .dt-desc { color: #374151; }
        .dt-meaning {
          background: rgba(217, 155, 38, 0.13);
          border-left: 4px solid #d99b26;
          color: #1f2937;
        }
        .dt-wiki {
          background: rgba(14, 116, 144, 0.08);
          border-left: 4px solid #0e7490;
          color: #1f2937;
        }
        .dt-wiki-text { color: #334155; }

        body.dark .dt-card, [data-theme="dark"] .dt-card, .dark .dt-card {
          background: #131d2b;
          color: #f8fafc;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
        }
        body.dark .dt-desc, [data-theme="dark"] .dt-desc, .dark .dt-desc {
          color: #cbd5e1;
        }
        body.dark .dt-meaning, [data-theme="dark"] .dt-meaning, .dark .dt-meaning {
          background: rgba(242, 201, 76, 0.1);
          border-left-color: #f2c94c;
          color: #f1f5f9;
        }
        body.dark .dt-wiki, [data-theme="dark"] .dt-wiki, .dark .dt-wiki {
          background: rgba(14, 116, 144, 0.16);
          border-left-color: #38bdf8;
          color: #f1f5f9;
        }
        body.dark .dt-wiki-text, [data-theme="dark"] .dt-wiki-text, .dark .dt-wiki-text {
          color: #cbd5e1;
        }
      `}</style>

      <div className="dt-card">
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
              boxShadow: '0 10px 26px rgba(0, 0, 0, 0.18)',
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
                      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.28)',
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
              className="dt-desc"
              style={{
                lineHeight: '1.65',
                fontSize: '0.96rem',
                marginBottom: '18px',
              }}
            >
              {item.fullDesc || item.shortDesc}
            </p>

            {item.meaning && (
              <div
                className="dt-meaning"
                style={{
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
              className="dt-wiki"
              style={{
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
                <p className="dt-wiki-text" style={{ margin: 0 }}>Жүктелуде...</p>
              )}

              {!loading && wiki && wiki.extract && (
                <>
                  <p className="dt-wiki-text" style={{ margin: '0 0 12px', lineHeight: '1.6' }}>
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
                <p className="dt-wiki-text" style={{ margin: 0, fontSize: '0.88rem' }}>
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
