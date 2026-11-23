import React, { useEffect, useState } from 'react';
import { useFavs } from '../store/FavsContext.jsx';
import { fetchWikiInfo, fetchTraditionPhoto } from '../api/wikiApi.js';
import Btn from '../components/Btn.jsx';

export default function DetailsScreen({ item, onBack }) {
  const { isFav, toggleFav, markAsRead } = useFavs();
  const [wiki, setWiki] = useState(null);
  const [photo, setPhoto] = useState(item?.image || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!item) return;
    markAsRead(item.id);
    setPhoto(item.image);

    let active = true;
    setLoading(true);
    setWiki(null);

    Promise.all([
      fetchWikiInfo(item.title),
      fetchTraditionPhoto(item.title, item.image, item.id),
    ]).then(([wikiData, photoUrl]) => {
      if (active) {
        setWiki(wikiData);
        if (photoUrl) setPhoto(photoUrl);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [item]);

  if (!item) return null;
  const saved = isFav(item.id);

  return (
    <div className="main-wrap">
      <div className="panel">
        <div style={{ marginBottom: '18px' }}>
          <Btn variant="outline" onClick={onBack}>
            Артқа қайту
          </Btn>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '26px', alignItems: 'center' }}>
          <div
            className="featured-art"
            style={{
              width: '260px',
              height: '240px',
              padding: photo === item.image ? '18px' : '0',
              overflow: 'hidden',
            }}
          >
            <img
              src={photo}
              alt={item.title}
              onError={() => setPhoto(item.image)}
              style={
                photo === item.image
                  ? { width: '135px', height: '135px', objectFit: 'contain' }
                  : { width: '100%', height: '100%', objectFit: 'cover' }
              }
            />
          </div>

          <div style={{ flex: 1, minWidth: '260px' }}>
            <span className="badge">{item.category}</span>
            <h1 style={{ marginBottom: '10px' }}>{item.title}</h1>
            <p style={{ marginBottom: '16px' }}>{item.fullDesc}</p>

            <p
              style={{
                background: 'rgba(212, 166, 52, 0.14)',
                padding: '12px 16px',
                borderRadius: '10px',
                borderLeft: '4px solid var(--primary)',
                marginBottom: '18px',
              }}
            >
              <strong>Тәрбиелік мәні:</strong> {item.meaning}
            </p>

            <div
              style={{
                background: 'rgba(21, 94, 117, 0.1)',
                padding: '14px 16px',
                borderRadius: '10px',
                borderLeft: '4px solid var(--teal)',
                marginBottom: '18px',
              }}
            >
              <strong>Энциклопедиялық анықтама (Wikipedia API):</strong>
              {loading && (
                <p style={{ color: 'var(--muted)', marginTop: '6px' }}>
                  Деректер жүктелуде...
                </p>
              )}
              {!loading && wiki && wiki.extract && (
                <>
                  <p style={{ marginTop: '6px', fontSize: '0.93rem' }}>
                    {wiki.extract}
                  </p>
                  {wiki.pageUrl && (
                    <a
                      href={wiki.pageUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '8px',
                        color: 'var(--primary)',
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
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

            <Btn variant="gold" onClick={() => toggleFav(item.id)}>
              {saved ? 'Таңдаулылардан өшіру' : 'Таңдаулыларға қосу'}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}