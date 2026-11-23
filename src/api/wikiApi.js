export async function fetchWikiInfo(title) {
  try {
    const encoded = encodeURIComponent(title.trim());
    const url = `https://kk.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) return null;

    const data = await res.json();
    return {
      extract: data.extract || '',
      pageUrl: data.content_urls?.desktop?.page || '',
    };
  } catch {
    return null;
  }
}

export async function fetchTraditionPhoto(title, fallbackImage) {
  return fallbackImage;
}