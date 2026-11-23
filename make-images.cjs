const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const ITEMS = [
  ['shildehana', '#0f2942', '#1b4965', 'ШІЛДЕХАНА', 'moon'],
  ['besik', '#1e1b4b', '#312e81', 'БЕСІККЕ САЛУ', 'cradle'],
  ['qyrqyn', '#064e3b', '#047857', 'ҚЫРҚЫНАН ШЫҒАРУ', 'bowl'],
  ['tusau', '#3b0764', '#581c87', 'ТҰСАУКЕСЕР', 'scissors'],
  ['atqoy', '#1e3a8a', '#1d4ed8', 'АЗАН ШАҚЫРЫП АТ ҚОЮ', 'star'],
  ['ashamay', '#7c2d12', '#9a3412', 'АШАМАЙҒА МІНГІЗУ', 'horse'],
  ['sundet', '#14532d', '#166534', 'СҮНДЕТ ТОЙ', 'crown'],
  ['kuda', '#14532d', '#15803d', 'ҚҰДА ТҮСУ', 'rings'],
  ['syrgasalu', '#881337', '#9f1239', 'СЫРҒА САЛУ', 'jewelry'],
  ['uzatu', '#4c0519', '#881337', 'ҚЫЗ ҰЗАТУ', 'path'],
  ['betashar', '#7f1d1d', '#991b1b', 'БЕТАШАР', 'veil'],
  ['besikkuda', '#1e3a8a', '#2563eb', 'БЕСІК ҚҰДА', 'cradle'],
  ['synsu', '#311042', '#4a1d6e', 'СЫҢСУ', 'moon'],
  ['jetiata', '#065f46', '#047857', 'ЖЕТІ АТА', 'tree'],
  ['konak', '#7c2d12', '#b45309', 'ҚОНАҚАСЫ', 'feast'],
  ['suinshi', '#854d0e', '#a16207', 'СҮЙІНШІ', 'star'],
  ['bata', '#1e3a8a', '#1e40af', 'БАТА БЕРУ', 'hands'],
  ['shashu', '#6b21a8', '#7e22ce', 'ШАШУ', 'sweets'],
  ['baygazy', '#0f766e', '#115e59', 'БАЙҒАЗЫ', 'gift'],
  ['korimdik', '#9a3412', '#c2410c', 'КӨРІМДІК', 'jewelry'],
  ['sarkyt', '#365314', '#4d7c0f', 'САРҚЫТ', 'bowl'],
  ['asar', '#14532d', '#166534', 'АСАР', 'yurt'],
  ['zhylu', '#7f1d1d', '#991b1b', 'ЖЫЛУ ЖИНАУ', 'heart'],
  ['sogym', '#451a03', '#78350f', 'СОҒЫМ БАСЫ', 'feast'],
  ['erulik', '#0f766e', '#0d9488', 'ЕРУЛІК', 'yurt'],
  ['umey', '#3f6212', '#4d7c0f', 'ҮМЕ', 'sun'],
  ['tuynsyr', '#1e293b', '#334155', 'ТАМЫР БОЛУ', 'rings'],
  ['qolqabys', '#1e3a8a', '#1d4ed8', 'ҚОЛҚАБЫС ЕТУ', 'hands'],
  ['kokpar', '#1e293b', '#334155', 'КӨКПАР', 'horse'],
  ['zhamby', '#3f6212', '#4d7c0f', 'ЖАМБЫ АТУ', 'bow'],
  ['kusbegi', '#172554', '#1e3a8a', 'ҚҰСБЕГІЛІК', 'eagle'],
  ['qyzquu', '#831843', '#9d174d', 'ҚЫЗ ҚУУ', 'horse'],
  ['audaryspaq', '#7c2d12', '#9a3412', 'АУДАРЫСПАҚ', 'horse'],
  ['asyq', '#78350f', '#92400e', 'АСЫҚ АТУ', 'asyq'],
  ['togyzqumalaq', '#1e1b4b', '#312e81', 'ТОҒЫЗҚҰМАЛАҚ', 'board'],
  ['kiiz', '#7c2d12', '#9a3412', 'КИІЗ БАСУ', 'ornament'],
  ['kurak', '#0f172a', '#1e293b', 'ҚҰРАҚ КӨРПЕ', 'quilt'],
  ['saukele', '#881337', '#9f1239', 'СӘУКЕЛЕ', 'veil'],
  ['uki', '#1e1b4b', '#312e81', 'ҮКІ ТАҒУ', 'feather'],
  ['shapan', '#451a03', '#78350f', 'ШАПАН ЖАБУ', 'robe'],
  ['kimeshek', '#0f2942', '#1e3a8a', 'КИМЕШЕК КИЮ', 'veil'],
  ['zergerlik', '#064e3b', '#065f46', 'ЗЕРГЕРЛІК ӨНЕР', 'jewelry'],
  ['besbarmak', '#7c2d12', '#9a3412', 'БЕСБАРМАҚ', 'feast'],
  ['qymyz', '#365314', '#3f6212', 'ҚЫМЫЗМҰРЫНДЫҚ', 'bowl'],
  ['baursak', '#854d0e', '#a16207', 'БАУЫРСАҚ', 'sweets'],
  ['qurt', '#1e293b', '#334155', 'ҚҰРТ ЖАСАУ', 'sweets'],
  ['shubat', '#0f766e', '#115e59', 'ШҰБАТ ҰСЫНУ', 'bowl'],
  ['zhent', '#78350f', '#92400e', 'ЖЕНТ ДАЙЫНДАУ', 'sweets'],
  ['nauryzkozhe', '#047857', '#059669', 'НАУРЫЗ КӨЖЕ', 'bowl'],
  ['nauryz', '#047857', '#059669', 'НАУРЫЗ МЕЙРАМЫ', 'sun'],
  ['korisu', '#1d4ed8', '#2563eb', 'КӨРІСУ КҮНІ', 'hands'],
  ['aitys', '#581c87', '#6b21a8', 'АЙТЫС ӨНЕРІ', 'dombra'],
  ['zhoqtau', '#1f2937', '#374151', 'ҚОБЫЗ ЖӘНЕ КҮЙ', 'kobyz'],
  ['tanba', '#292524', '#44403c', 'ТАҢБА ЖӘНЕ ШЕЖІРЕ', 'tamga'],
  ['altybaqan', '#1e1b4b', '#312e81', 'АЛТЫБАҚАН ТЕБУ', 'swing'],
  ['jarapazan', '#0f2942', '#1b4965', 'ЖАРАПАЗАН', 'moon'],
];

const SHAPES = {
  moon: `<circle cx="200" cy="110" r="36" fill="#facc15"/><circle cx="215" cy="100" r="30" fill="#1b4965"/><circle cx="135" cy="85" r="4" fill="#fef08a"/><circle cx="265" cy="95" r="5" fill="#fef08a"/>`,
  cradle: `<path d="M115 170 Q200 215 285 170" stroke="#facc15" stroke-width="8" fill="none" stroke-linecap="round"/><rect x="130" y="120" width="140" height="45" rx="10" fill="#d97706" stroke="#fde047" stroke-width="3"/><line x1="140" y1="95" x2="260" y2="95" stroke="#fef08a" stroke-width="5"/>`,
  bowl: `<path d="M130 120 Q200 200 270 120 Z" fill="#d97706" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="120" rx="70" ry="15" fill="#fef3c7" stroke="#fde047" stroke-width="3"/>`,
  scissors: `<path d="M115 150 Q200 130 285 150" stroke="#fff" stroke-width="9" fill="none"/><path d="M115 150 Q200 130 285 150" stroke="#111" stroke-width="9" stroke-dasharray="14 14" fill="none"/><line x1="175" y1="80" x2="225" y2="170" stroke="#e2e8f0" stroke-width="5"/><line x1="225" y1="80" x2="175" y2="170" stroke="#e2e8f0" stroke-width="5"/>`,
  star: `<polygon points="200,55 216,105 268,105 225,135 240,185 200,155 160,185 175,135 132,105 184,105" fill="#facc15" stroke="#fef08a" stroke-width="3"/>`,
  horse: `<circle cx="200" cy="125" r="54" stroke="#facc15" stroke-width="5" fill="none"/><path d="M165 150 Q185 95 215 100 Q235 105 230 140 L210 160 L180 160 Z" fill="#d97706" stroke="#fde047" stroke-width="3"/>`,
  crown: `<polygon points="140,165 150,95 180,125 200,80 220,125 250,95 260,165" fill="#facc15" stroke="#fef08a" stroke-width="3"/>`,
  robe: `<path d="M155 72 L180 65 L200 82 L220 65 L245 72 L278 125 L258 142 L242 112 L248 188 L152 188 L158 112 L142 142 L122 125 Z" fill="#991b1b" stroke="#facc15" stroke-width="4" stroke-linejoin="round"/><line x1="200" y1="82" x2="200" y2="188" stroke="#facc15" stroke-width="5"/><path d="M180 65 L200 95 L220 65" fill="none" stroke="#fde047" stroke-width="4"/><circle cx="178" cy="145" r="6" fill="none" stroke="#facc15" stroke-width="2.5"/><circle cx="222" cy="145" r="6" fill="none" stroke="#facc15" stroke-width="2.5"/>`,
  rings: `<circle cx="175" cy="128" r="36" stroke="#facc15" stroke-width="7" fill="none"/><circle cx="225" cy="128" r="36" stroke="#fde047" stroke-width="7" fill="none"/>`,
  jewelry: `<circle cx="200" cy="125" r="46" stroke="#facc15" stroke-width="8" fill="none"/><circle cx="200" cy="79" r="10" fill="#ef4444" stroke="#fde047" stroke-width="2"/>`,
  path: `<path d="M130 180 Q200 90 270 180" stroke="#facc15" stroke-width="6" fill="none"/><circle cx="200" cy="95" r="18" fill="#fde047"/>`,
  veil: `<polygon points="200,45 165,165 235,165" fill="#dc2626" stroke="#facc15" stroke-width="4"/><rect x="160" y="158" width="80" height="14" rx="4" fill="#facc15"/>`,
  tree: `<line x1="200" y1="185" x2="200" y2="70" stroke="#facc15" stroke-width="6"/><path d="M200 155 L155 130 M200 155 L245 130 M200 120 L155 95 M200 120 L245 95" stroke="#fde047" stroke-width="4"/><circle cx="200" cy="65" r="10" fill="#fef08a"/>`,
  feast: `<ellipse cx="200" cy="145" rx="85" ry="32" fill="#d97706" stroke="#fde047" stroke-width="4"/><ellipse cx="200" cy="138" rx="66" ry="20" fill="#fef3c7"/><circle cx="185" cy="136" r="12" fill="#92400e"/><circle cx="215" cy="138" r="13" fill="#b45309"/>`,
  hands: `<path d="M150 170 C135 130 145 95 175 95 C188 95 195 115 195 140 L195 170 Z" fill="#fde68a"/><path d="M250 170 C265 130 255 95 225 95 C212 95 205 115 205 140 L205 170 Z" fill="#fde68a"/>`,
  sweets: `<circle cx="170" cy="135" r="18" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/><circle cx="205" cy="115" r="18" fill="#d97706" stroke="#fef08a" stroke-width="3"/><circle cx="230" cy="142" r="18" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/>`,
  gift: `<rect x="150" y="105" width="100" height="75" rx="8" fill="#dc2626" stroke="#facc15" stroke-width="3"/><line x1="200" y1="105" x2="200" y2="180" stroke="#facc15" stroke-width="6"/><line x1="150" y1="140" x2="250" y2="140" stroke="#facc15" stroke-width="6"/>`,
  yurt: `<path d="M125 175 L125 125 Q200 75 275 125 L275 175 Z" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="96" rx="26" ry="9" fill="#92400e" stroke="#fde047" stroke-width="3"/>`,
  heart: `<path d="M200 175 C140 135 135 85 175 85 C192 85 200 100 200 100 C200 100 208 85 225 85 C265 85 260 135 200 175 Z" fill="#facc15" stroke="#fef08a" stroke-width="3"/>`,
  sun: `<circle cx="200" cy="120" r="34" fill="#facc15" stroke="#fef08a" stroke-width="4"/><path d="M200 65 L200 78 M200 162 L200 175 M145 120 L158 120 M242 120 L255 120" stroke="#fef08a" stroke-width="4" stroke-linecap="round"/>`,
  bow: `<path d="M165 65 Q235 125 165 185" stroke="#f59e0b" stroke-width="6" fill="none"/><line x1="165" y1="65" x2="165" y2="185" stroke="#fef08a" stroke-width="2"/><line x1="140" y1="125" x2="265" y2="125" stroke="#e2e8f0" stroke-width="4"/>`,
  eagle: `<path d="M110 115 Q155 75 200 115 Q245 75 290 115 Q245 135 200 125 Q155 135 110 115 Z" fill="#b45309" stroke="#facc15" stroke-width="3.5"/><circle cx="200" cy="108" r="11" fill="#fde047"/>`,
  asyq: `<rect x="165" y="95" width="70" height="60" rx="18" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><circle cx="200" cy="125" r="12" fill="#d97706"/>`,
  board: `<rect x="125" y="95" width="150" height="65" rx="10" fill="#92400e" stroke="#facc15" stroke-width="3"/><circle cx="160" cy="127" r="10" fill="#fde047"/><circle cx="200" cy="127" r="10" fill="#fde047"/><circle cx="240" cy="127" r="10" fill="#fde047"/>`,
  ornament: `<rect x="130" y="80" width="140" height="95" rx="10" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><path d="M165 128 C165 103 195 103 195 128 C195 153 205 153 205 128 C205 103 235 103 235 128" stroke="#b91c1c" stroke-width="7" fill="none"/>`,
  quilt: `<rect x="145" y="75" width="110" height="105" stroke="#facc15" stroke-width="4" fill="none"/><polygon points="145,75 200,127 145,180" fill="#dc2626"/><polygon points="255,75 200,127 255,180" fill="#2563eb"/><polygon points="145,75 200,127 255,75" fill="#facc15"/><polygon points="145,180 200,127 255,180" fill="#059669"/>`,
  feather: `<path d="M200 185 Q175 115 200 55 Q225 115 200 185 Z" fill="#fef3c7" stroke="#facc15" stroke-width="3.5"/><line x1="200" y1="55" x2="200" y2="195" stroke="#b45309" stroke-width="3"/>`,
  dombra: `<rect x="194" y="48" width="12" height="80" rx="4" fill="#d97706" stroke="#fde047" stroke-width="2"/><path d="M200 123 Q238 130 232 168 Q225 190 200 190 Q175 190 168 168 Q162 130 200 123 Z" fill="#b45309" stroke="#facc15" stroke-width="3.5"/>`,
  kobyz: `<path d="M185 60 L215 60 L208 128 Q235 143 225 176 Q200 194 175 176 Q165 143 192 128 Z" fill="#92400e" stroke="#facc15" stroke-width="3.5"/>`,
  tamga: `<circle cx="200" cy="128" r="56" stroke="#facc15" stroke-width="6" fill="none"/><line x1="200" y1="72" x2="200" y2="184" stroke="#fde047" stroke-width="6"/><path d="M160 113 L200 138 L240 113" stroke="#fde047" stroke-width="6" fill="none"/>`,
  swing: `<line x1="155" y1="65" x2="135" y2="185" stroke="#facc15" stroke-width="5"/><line x1="245" y1="65" x2="265" y2="185" stroke="#facc15" stroke-width="5"/><line x1="155" y1="65" x2="245" y2="65" stroke="#fde047" stroke-width="5"/><line x1="180" y1="65" x2="180" y2="145" stroke="#fff" stroke-width="2"/><line x1="220" y1="65" x2="220" y2="145" stroke="#fff" stroke-width="2"/><rect x="172" y="145" width="56" height="8" rx="4" fill="#facc15"/>`,
};

ITEMS.forEach(([id, bg1, bg2, label, shapeKey]) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="400" height="240">
  <defs><linearGradient id="g_${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${bg1}"/><stop offset="100%" stop-color="${bg2}"/></linearGradient></defs>
  <rect width="400" height="240" fill="url(#g_${id})"/>
  <rect x="10" y="10" width="380" height="220" rx="14" fill="none" stroke="#facc15" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="8 6"/>
  ${SHAPES[shapeKey] || SHAPES.star}
  <text x="200" y="220" fill="#fde047" font-family="Arial, sans-serif" font-size="12" font-weight="bold" letter-spacing="1.5" text-anchor="middle">${label}</text>
</svg>`;
  fs.writeFileSync(path.join(dir, `${id}.svg`), svg, 'utf8');
});

console.log('56 сурет сәтті жасалды!');

