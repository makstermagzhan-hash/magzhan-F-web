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

  return (
    <div className="main-wrap">
      <div className="details-card">
        <div style={{ marginBottom: '18px' }}>
          <Btn variant="outline" onClick={handleBack}>
            Артқа қайту
          </Btn>
        </div>

        <div className="details-grid">
          <div
            className="details-art"
            style={{
              padding: photo === item.image ? '24px' : '0',
              overflow: 'hidden',
            }}
          >
            <img
              src={photo}
              alt={item.title}
              onError={() => setPhoto(item.image)}
              style={
                photo === item.image
                  ? { width: '160px', height: '160px', objectFit: 'contain' }
                  : { width: '100%', height: '100%', objectFit: 'cover' }
              }
            />
          </div>

          <div>
            <span className="pill-gold">{item.category}</span>
            <h1 style={{ margin: '10px 0 12px' }}>{item.title}</h1>
            <p style={{ lineHeight: '1.6', marginBottom: '16px' }}>
              {item.fullDesc || item.shortDesc}
            </p>

            {item.meaning && (
              <div className="meaning-box">
                <strong>Тәрбиелік мәні:</strong> {item.meaning}
              </div>
            )}

            <div className="wiki-box">
              <strong>Энциклопедиялық анықтама (Wikipedia API):</strong>
              {loading && (
                <p style={{ color: 'var(--muted)', marginTop: '6px' }}>
                  Жүктелуде...
                </p>
              )}
              {!loading && wiki && wiki.extract && (
                <>
                  <p style={{ marginTop: '6px', lineHeight: '1.55' }}>
                    {wiki.extract}
                  </p>
                  {wiki.content_urls?.desktop?.page && (
                    <a
                      href={wiki.content_urls.desktop.page}
                      target="_blank"
                      rel="noreferrer"
                      className="wiki-link"
                    >
                      Мақаланы толық оқу ↗
                    </a>
                  )}
                </>
              )}
              {!loading && (!wiki || !wiki.extract) && (
                <p style={{ color: 'var(--muted)', marginTop: '6px', fontSize: '0.9rem' }}>
                  Бұл тақырып бойынша қосымша энциклопедиялық мақала табылмады.
                </p>
              )}
            </div>

            {item.id === 'tusau' && (
              <div style={{ margin: '18px 0' }}>
                <video
                  src="/videos/tusau.mp4"
                  controls
                  playsInline
                  style={{
                    width: '100%',
                    borderRadius: '14px',
                    maxHeight: '380px',
                    backgroundColor: '#000',
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
