const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Әр 28 дәстүрге өзіне тән бірегей композиция мен рәміздер
const ILLUSTRATIONS = {
  shildehana: {
    bg1: '#0f2942', bg2: '#1b4965', label: 'ШІЛДЕХАНА',
    art: `
      <circle cx="200" cy="70" r="24" fill="#facc15" opacity="0.9"/>
      <circle cx="210" cy="64" r="20" fill="#1b4965"/>
      <path d="M120 175 Q200 225 280 175" stroke="#eab308" stroke-width="8" fill="none" stroke-linecap="round"/>
      <rect x="135" y="130" width="130" height="45" rx="14" fill="#d97706" stroke="#fde047" stroke-width="3"/>
      <path d="M145 130 Q200 95 255 130" stroke="#fde047" stroke-width="4" fill="none"/>
      <circle cx="110" cy="80" r="3" fill="#fef08a"/><circle cx="290" cy="90" r="4" fill="#fef08a"/><circle cx="265" cy="55" r="2.5" fill="#fef08a"/>
    `
  },
  besik: {
    bg1: '#1e1b4b', bg2: '#312e81', label: 'БЕСІККЕ САЛУ',
    art: `
      <path d="M105 185 Q200 230 295 185" stroke="#f59e0b" stroke-width="9" fill="none" stroke-linecap="round"/>
      <rect x="120" y="135" width="160" height="50" rx="10" fill="#b45309" stroke="#fcd34d" stroke-width="3"/>
      <line x1="130" y1="105" x2="270" y2="105" stroke="#fde047" stroke-width="6" stroke-linecap="round"/>
      <path d="M130 135 Q130 105 150 105 M270 135 Q270 105 250 105" stroke="#fcd34d" stroke-width="4" fill="none"/>
      <path d="M155 135 L155 185 M200 135 L200 185 M245 135 L245 185" stroke="#fde047" stroke-width="2.5"/>
    `
  },
  qyrqyn: {
    bg1: '#064e3b', bg2: '#047857', label: 'ҚЫРҚЫНАН ШЫҒАРУ',
    art: `
      <path d="M125 140 Q200 215 275 140 Z" fill="#d97706" stroke="#fde047" stroke-width="4"/>
      <ellipse cx="200" cy="140" rx="75" ry="16" fill="#fef08a" stroke="#f59e0b" stroke-width="3"/>
      <path d="M235 135 L285 85" stroke="#e2e8f0" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="230" cy="138" rx="14" ry="8" fill="#cbd5e1" transform="rotate(-35 230 138)"/>
      <circle cx="175" cy="140" r="8" fill="#94a3b8" stroke="#fff" stroke-width="1.5"/>
      <circle cx="195" cy="143" r="7" fill="#94a3b8" stroke="#fff" stroke-width="1.5"/>
      <text x="200" y="95" fill="#fde047" font-size="22" font-weight="bold" text-anchor="middle">40</text>
    `
  },
  tusau: {
    bg1: '#3b0764', bg2: '#581c87', label: 'ТҰСАУКЕСЕР',
    art: `
      <path d="M110 155 Q155 135 200 155 T290 155" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M110 155 Q155 135 200 155 T290 155" stroke="#111827" stroke-width="10" stroke-dasharray="14 14" fill="none" stroke-linecap="round"/>
      <line x1="175" y1="85" x2="225" y2="175" stroke="#e2e8f0" stroke-width="5" stroke-linecap="round"/>
      <line x1="225" y1="85" x2="175" y2="175" stroke="#e2e8f0" stroke-width="5" stroke-linecap="round"/>
      <circle cx="172" cy="80" r="12" stroke="#facc15" stroke-width="4" fill="none"/>
      <circle cx="228" cy="80" r="12" stroke="#facc15" stroke-width="4" fill="none"/>
    `
  },
  betashar: {
    bg1: '#4c0519', bg2: '#881337', label: 'БЕТАШАР',
    art: `
      <polygon points="200,45 170,115 230,115" fill="#dc2626" stroke="#facc15" stroke-width="3"/>
      <path d="M170 115 Q140 165 145 205 L255 205 Q260 165 230 115 Z" fill="#ffffff" opacity="0.88" stroke="#fde047" stroke-width="2.5"/>
      <line x1="200" y1="30" x2="200" y2="45" stroke="#fde047" stroke-width="3"/>
      <circle cx="200" cy="85" r="8" fill="#facc15"/>
    `
  },
  kuda: {
    bg1: '#14532d', bg2: '#166534', label: 'ҚҰДА ТҮСУ',
    art: `
      <circle cx="175" cy="135" r="36" stroke="#facc15" stroke-width="7" fill="none"/>
      <circle cx="225" cy="135" r="36" stroke="#fde047" stroke-width="7" fill="none"/>
      <path d="M160 85 L200 60 L240 85" stroke="#facc15" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="200" cy="60" r="6" fill="#fef08a"/>
    `
  },
  besikkuda: {
    bg1: '#1e3a8a', bg2: '#1d4ed8', label: 'БЕСІК ҚҰДА',
    art: `
      <rect x="115" y="120" width="70" height="45" rx="8" fill="#d97706" stroke="#fde047" stroke-width="2.5"/>
      <rect x="215" y="120" width="70" height="45" rx="8" fill="#d97706" stroke="#fde047" stroke-width="2.5"/>
      <path d="M150 105 Q200 75 250 105" stroke="#facc15" stroke-width="4" fill="none" stroke-dasharray="6 4"/>
      <circle cx="200" cy="90" r="8" fill="#ef4444" stroke="#fde047" stroke-width="2"/>
    `
  },
  qalyn: {
    bg1: '#451a03', bg2: '#78350f', label: 'ҚАЛЫҢ МАЛ',
    art: `
      <rect x="130" y="110" width="140" height="80" rx="8" fill="#92400e" stroke="#facc15" stroke-width="4"/>
      <line x1="130" y1="135" x2="270" y2="135" stroke="#facc15" stroke-width="3"/>
      <rect x="188" y="126" width="24" height="20" rx="4" fill="#fde047"/>
      <circle cx="160" cy="162" r="10" stroke="#fde047" stroke-width="2.5" fill="none"/>
      <circle cx="240" cy="162" r="10" stroke="#fde047" stroke-width="2.5" fill="none"/>
    `
  },
  synsu: {
    bg1: '#311042', bg2: '#4a1d6e', label: 'СЫҢСУ',
    art: `
      <path d="M150 185 Q200 110 250 185" stroke="#facc15" stroke-width="4" fill="none"/>
      <circle cx="200" cy="105" r="24" fill="#fde047" opacity="0.25" stroke="#facc15" stroke-width="3"/>
      <path d="M135 150 Q160 135 170 155 M230 155 Q240 135 265 150" stroke="#fde047" stroke-width="3" fill="none"/>
      <circle cx="145" cy="120" r="4" fill="#93c5fd"/><circle cx="255" cy="120" r="4" fill="#93c5fd"/>
    `
  },
  emshektes: {
    bg1: '#0f766e', bg2: '#115e59', label: 'ЕМШЕКТЕС',
    art: `
      <path d="M200 180 C140 140 135 90 175 90 C192 90 200 105 200 105 C200 105 208 90 225 90 C265 90 260 140 200 180 Z" fill="#f59e0b" stroke="#fef08a" stroke-width="4"/>
      <circle cx="178" cy="122" r="7" fill="#fef08a"/><circle cx="222" cy="122" r="7" fill="#fef08a"/>
    `
  },
  jetiata: {
    bg1: '#065f46', bg2: '#047857', label: 'ЖЕТІ АТА',
    art: `
      <line x1="200" y1="195" x2="200" y2="75" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
      <path d="M200 165 L155 140 M200 165 L245 140 M200 135 L150 110 M200 135 L250 110 M200 105 L165 80 M200 105 L235 80" stroke="#fde047" stroke-width="4" stroke-linecap="round"/>
      <circle cx="200" cy="68" r="9" fill="#fef08a"/>
      <circle cx="150" cy="108" r="6" fill="#facc15"/><circle cx="250" cy="108" r="6" fill="#facc15"/>
      <circle cx="155" cy="138" r="6" fill="#facc15"/><circle cx="245" cy="138" r="6" fill="#facc15"/>
    `
  },
  zhoqtau: {
    bg1: '#1f2937', bg2: '#374151', label: 'ЖОҚТАУ',
    art: `
      <path d="M185 60 L215 60 L208 130 Q235 145 225 180 Q200 200 175 180 Q165 145 192 130 Z" fill="#92400e" stroke="#facc15" stroke-width="3.5"/>
      <line x1="196" y1="65" x2="196" y2="185" stroke="#fde047" stroke-width="2"/>
      <line x1="204" y1="65" x2="204" y2="185" stroke="#fde047" stroke-width="2"/>
      <path d="M145 155 Q200 140 255 155" stroke="#e5e7eb" stroke-width="3" fill="none"/>
    `
  },
  konak: {
    bg1: '#7c2d12', bg2: '#9a3412', label: 'ҚОНАҚАСЫ',
    art: `
      <ellipse cx="200" cy="150" rx="85" ry="32" fill="#d97706" stroke="#fde047" stroke-width="4"/>
      <ellipse cx="200" cy="144" rx="68" ry="22" fill="#fef3c7"/>
      <circle cx="180" cy="142" r="12" fill="#b45309"/><circle cx="215" cy="144" r="14" fill="#92400e"/><circle cx="200" cy="136" r="10" fill="#d97706"/>
      <path d="M175 110 Q170 95 180 85 M200 105 Q195 90 205 80 M225 110 Q220 95 230 85" stroke="#fde047" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    `
  },
  suinshi: {
    bg1: '#854d0e', bg2: '#a16207', label: 'СҮЙІНШІ',
    art: `
      <polygon points="200,55 215,105 268,105 225,135 240,185 200,155 160,185 175,135 132,105 185,105" fill="#facc15" stroke="#fef08a" stroke-width="3"/>
      <circle cx="200" cy="125" r="16" fill="#dc2626"/>
    `
  },
  bata: {
    bg1: '#1e3a8a', bg2: '#1e40af', label: 'БАТА БЕРУ',
    art: `
      <path d="M150 175 C135 135 145 95 175 95 C188 95 195 115 195 140 L195 175 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="3"/>
      <path d="M250 175 C265 135 255 95 225 95 C212 95 205 115 205 140 L205 175 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="3"/>
      <path d="M175 75 Q200 55 225 75" stroke="#facc15" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },
  asar: {
    bg1: '#14532d', bg2: '#15803d', label: 'АСАР',
    art: `
      <path d="M125 175 L125 125 Q200 75 275 125 L275 175 Z" fill="#fef3c7" stroke="#facc15" stroke-width="4"/>
      <ellipse cx="200" cy="96" rx="26" ry="9" fill="#92400e" stroke="#fde047" stroke-width="3"/>
      <line x1="125" y1="145" x2="275" y2="145" stroke="#d97706" stroke-width="3"/>
      <rect x="186" y="135" width="28" height="40" fill="#b45309" stroke="#facc15" stroke-width="2"/>
    `
  },
  zhylu: {
    bg1: '#7f1d1d', bg2: '#991b1b', label: 'ЖЫЛУ ЖИНАУ',
    art: `
      <path d="M140 140 Q200 195 260 140" stroke="#fde047" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M200 145 C165 120 165 85 188 85 C196 85 200 94 200 94 C200 94 204 85 212 85 C235 85 235 120 200 145 Z" fill="#facc15"/>
      <circle cx="140" cy="135" r="10" fill="#fde047"/><circle cx="260" cy="135" r="10" fill="#fde047"/>
    `
  },
  nauryz: {
    bg1: '#047857', bg2: '#059669', label: 'НАУРЫЗ МЕЙРАМЫ',
    art: `
      <circle cx="200" cy="105" r="32" fill="#facc15" stroke="#fef08a" stroke-width="4"/>
      <path d="M200 55 L200 65 M200 145 L200 155 M150 105 L160 105 M240 105 L250 105 M165 70 L172 77 M228 133 L235 140 M235 70 L228 77 M172 133 L165 140" stroke="#fef08a" stroke-width="4" stroke-linecap="round"/>
      <path d="M120 185 Q160 155 200 175 T280 165" stroke="#86efac" stroke-width="6" fill="none" stroke-linecap="round"/>
    `
  },
  kokpar: {
    bg1: '#1e293b', bg2: '#334155', label: 'КӨКПАР',
    art: `
      <circle cx="200" cy="130" r="56" stroke="#facc15" stroke-width="5" fill="none"/>
      <path d="M165 155 Q185 100 215 105 Q235 110 230 145 L210 165 L180 165 Z" fill="#d97706" stroke="#fde047" stroke-width="3"/>
      <circle cx="215" cy="95" r="10" fill="#fde047"/>
      <line x1="140" y1="175" x2="260" y2="175" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>
    `
  },
  zhamby: {
    bg1: '#3f6212', bg2: '#4d7c0f', label: 'ЖАМБЫ АТУ',
    art: `
      <path d="M165 65 Q235 130 165 195" stroke="#f59e0b" stroke-width="7" fill="none" stroke-linecap="round"/>
      <line x1="165" y1="65" x2="165" y2="195" stroke="#fef08a" stroke-width="2.5"/>
      <line x1="140" y1="130" x2="265" y2="130" stroke="#e2e8f0" stroke-width="4"/>
      <polygon points="272,130 256,122 256,138" fill="#facc15"/>
      <circle cx="275" cy="80" r="14" fill="#e2e8f0" stroke="#facc15" stroke-width="3"/>
    `
  },
  kusbegi: {
    bg1: '#172554', bg2: '#1e3a8a', label: 'ҚҰСБЕГІЛІК',
    art: `
      <path d="M110 115 Q155 75 200 115 Q245 75 290 115 Q245 135 200 125 Q155 135 110 115 Z" fill="#b45309" stroke="#facc15" stroke-width="3.5"/>
      <circle cx="200" cy="108" r="12" fill="#fde047"/>
      <polygon points="200,115 194,126 206,126" fill="#f97316"/>
      <path d="M182 135 L200 165 L218 135" fill="#92400e" stroke="#fde047" stroke-width="2"/>
    `
  },
  aitys: {
    bg1: '#581c87', bg2: '#6b21a8', label: 'АЙТЫС',
    art: `
      <rect x="194" y="48" width="12" height="82" rx="4" fill="#d97706" stroke="#fde047" stroke-width="2"/>
      <path d="M200 125 Q238 132 232 172 Q225 195 200 195 Q175 195 168 172 Q162 132 200 125 Z" fill="#b45309" stroke="#facc15" stroke-width="3.5"/>
      <circle cx="200" cy="158" r="7" fill="#451a03"/>
      <line x1="198" y1="52" x2="198" y2="188" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="202" y1="52" x2="202" y2="188" stroke="#fef08a" stroke-width="1.5"/>
    `
  },
  kiiz: {
    bg1: '#7c2d12', bg2: '#9a3412', label: 'КИІЗ БАСУ',
    art: `
      <rect x="125" y="80" width="150" height="100" rx="10" fill="#fef3c7" stroke="#facc15" stroke-width="4"/>
      <path d="M165 130 C165 105 195 105 195 130 C195 155 205 155 205 130 C205 105 235 105 235 130" stroke="#b91c1c" stroke-width="7" fill="none" stroke-linecap="round"/>
    `
  },
  kurak: {
    bg1: '#0f172a', bg2: '#1e293b', label: 'ҚҰРАҚ КӨРПЕ',
    art: `
      <rect x="145" y="75" width="110" height="110" stroke="#facc15" stroke-width="4" fill="none"/>
      <polygon points="145,75 200,130 145,185" fill="#dc2626"/>
      <polygon points="255,75 200,130 255,185" fill="#2563eb"/>
      <polygon points="145,75 200,130 255,75" fill="#facc15"/>
      <polygon points="145,185 200,130 255,185" fill="#059669"/>
      <rect x="182" y="112" width="36" height="36" fill="#fef08a" transform="rotate(45 200 130)"/>
    `
  },
  saukele: {
    bg1: '#881337', bg2: '#9f1239', label: 'СӘУКЕЛЕ',
    art: `
      <polygon points="200,45 162,175 238,175" fill="#dc2626" stroke="#facc15" stroke-width="4"/>
      <rect x="156" y="165" width="88" height="16" rx="4" fill="#facc15"/>
      <circle cx="200" cy="105" r="9" fill="#fde047"/><circle cx="200" cy="138" r="11" fill="#fde047"/>
      <path d="M192 45 Q200 25 208 45" stroke="#fef08a" stroke-width="3" fill="none"/>
    `
  },
  uki: {
    bg1: '#1e1b4b', bg2: '#312e81', label: 'ҮКІ ТАҒУ',
    art: `
      <path d="M200 190 Q175 120 200 55 Q225 120 200 190 Z" fill="#fef3c7" stroke="#facc15" stroke-width="3.5"/>
      <line x1="200" y1="55" x2="200" y2="200" stroke="#b45309" stroke-width="3"/>
      <circle cx="200" cy="100" r="8" fill="#78350f"/>
      <path d="M185 130 L200 120 L215 130 M182 155 L200 145 L218 155" stroke="#92400e" stroke-width="2.5" fill="none"/>
    `
  },
  tanba: {
    bg1: '#292524', bg2: '#44403c', label: 'ТАҢБА САЛУ',
    art: `
      <circle cx="200" cy="130" r="58" stroke="#facc15" stroke-width="6" fill="none"/>
      <line x1="200" y1="72" x2="200" y2="188" stroke="#fde047" stroke-width="6"/>
      <path d="M160 115 L200 140 L240 115" stroke="#fde047" stroke-width="6" fill="none" stroke-linecap="round"/>
    `
  },
  qymyz: {
    bg1: '#365314', bg2: '#3f6212', label: 'ҚЫМЫЗМҰРЫНДЫҚ',
    art: `
      <path d="M135 125 Q200 205 265 125 Z" fill="#b45309" stroke="#facc15" stroke-width="4"/>
      <ellipse cx="200" cy="125" rx="65" ry="15" fill="#ffffff" stroke="#fde047" stroke-width="3"/>
      <path d="M155 150 Q200 165 245 150" stroke="#fde047" stroke-width="2.5" fill="none"/>
      <path d="M185 100 Q180 85 190 75 M215 100 Q210 85 220 75" stroke="#fef08a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    `
  }
};

Object.entries(ILLUSTRATIONS).forEach(([id, item]) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="400" height="240">
  <defs>
    <linearGradient id="g_${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${item.bg1}"/>
      <stop offset="100%" stop-color="${item.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#g_${id})"/>
  <rect x="10" y="10" width="380" height="220" rx="14" fill="none" stroke="#facc15" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="8 6"/>
  ${item.art}
  <text x="200" y="220" fill="#fde047" font-family="Arial, sans-serif" font-size="13" font-weight="bold" letter-spacing="2" text-anchor="middle">${item.label}</text>
</svg>`;
  fs.writeFileSync(path.join(dir, `${id}.svg`), svg, 'utf8');
});

console.log('Барлық 28 бірегей дәстүр иллюстрациясы сәтті жасалды!');