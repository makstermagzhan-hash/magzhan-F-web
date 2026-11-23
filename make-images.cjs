const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const ITEMS = [
  ['shildehana', '#0f2942', '#1b4965', 'ШІЛДЕХАНА', 'shildehana'],
  ['besik', '#1e1b4b', '#312e81', 'БЕСІККЕ САЛУ', 'besik'],
  ['qyrqyn', '#064e3b', '#047857', 'ҚЫРҚЫНАН ШЫҒАРУ', 'qyrqyn'],
  ['tusau', '#3b0764', '#581c87', 'ТҰСАУКЕСЕР', 'tusau'],
  ['atqoy', '#1e3a8a', '#1d4ed8', 'АЗАН ШАҚЫРЫП АТ ҚОЮ', 'atqoy'],
  ['ashamay', '#7c2d12', '#9a3412', 'АШАМАЙҒА МІНГІЗУ', 'ashamay'],
  ['sundet', '#14532d', '#166534', 'СҮНДЕТ ТОЙ', 'sundet'],

  ['kuda', '#14532d', '#15803d', 'ҚҰДА ТҮСУ', 'kuda'],
  ['syrgasalu', '#881337', '#9f1239', 'СЫРҒА САЛУ', 'syrgasalu'],
  ['uzatu', '#4c0519', '#881337', 'ҚЫЗ ҰЗАТУ', 'uzatu'],
  ['betashar', '#7f1d1d', '#991b1b', 'БЕТАШАР', 'betashar'],
  ['besikkuda', '#1e3a8a', '#2563eb', 'БЕСІК ҚҰДА', 'besikkuda'],
  ['synsu', '#311042', '#4a1d6e', 'СЫҢСУ', 'synsu'],
  ['jetiata', '#065f46', '#047857', 'ЖЕТІ АТА', 'jetiata'],

  ['konak', '#7c2d12', '#b45309', 'ҚОНАҚАСЫ', 'konak'],
  ['suinshi', '#854d0e', '#a16207', 'СҮЙІНШІ', 'suinshi'],
  ['bata', '#1e3a8a', '#1e40af', 'БАТА БЕРУ', 'bata'],
  ['shashu', '#6b21a8', '#7e22ce', 'ШАШУ', 'shashu'],
  ['baygazy', '#0f766e', '#115e59', 'БАЙҒАЗЫ', 'baygazy'],
  ['korimdik', '#9a3412', '#c2410c', 'КӨРІМДІК', 'korimdik'],
  ['sarkyt', '#365314', '#4d7c0f', 'САРҚЫТ', 'sarkyt'],

  ['asar', '#14532d', '#166534', 'АСАР', 'asar'],
  ['zhylu', '#7f1d1d', '#991b1b', 'ЖЫЛУ ЖИНАУ', 'zhylu'],
  ['sogym', '#451a03', '#78350f', 'СОҒЫМ БАСЫ', 'sogym'],
  ['erulik', '#0f766e', '#0d9488', 'ЕРУЛІК', 'erulik'],
  ['umey', '#3f6212', '#4d7c0f', 'ҮМЕ', 'umey'],
  ['tuynsyr', '#1e293b', '#334155', 'ТАМЫР БОЛУ', 'tuynsyr'],
  ['qolqabys', '#1e3a8a', '#1d4ed8', 'ҚОЛҚАБЫС ЕТУ', 'qolqabys'],

  ['kokpar', '#1e293b', '#334155', 'КӨКПАР', 'kokpar'],
  ['zhamby', '#3f6212', '#4d7c0f', 'ЖАМБЫ АТУ', 'zhamby'],
  ['kusbegi', '#172554', '#1e3a8a', 'ҚҰСБЕГІЛІК', 'kusbegi'],
  ['qyzquu', '#831843', '#9d174d', 'ҚЫЗ ҚУУ', 'qyzquu'],
  ['audaryspaq', '#7c2d12', '#9a3412', 'АУДАРЫСПАҚ', 'audaryspaq'],
  ['asyq', '#78350f', '#92400e', 'АСЫҚ АТУ', 'asyq'],
  ['togyzqumalaq', '#1e1b4b', '#312e81', 'ТОҒЫЗҚҰМАЛАҚ', 'togyzqumalaq'],

  ['kiiz', '#7c2d12', '#9a3412', 'КИІЗ БАСУ', 'kiiz'],
  ['kurak', '#0f172a', '#1e293b', 'ҚҰРАҚ КӨРПЕ', 'kurak'],
  ['saukele', '#881337', '#9f1239', 'СӘУКЕЛЕ', 'saukele'],
  ['uki', '#1e1b4b', '#312e81', 'ҮКІ ТАҒУ', 'uki'],
  ['shapan', '#451a03', '#78350f', 'ШАПАН ЖАБУ', 'shapan'],
  ['kimeshek', '#0f2942', '#1e3a8a', 'КИМЕШЕК КИЮ', 'kimeshek'],
  ['zergerlik', '#064e3b', '#065f46', 'ЗЕРГЕРЛІК ӨНЕР', 'zergerlik'],

  ['besbarmak', '#7c2d12', '#9a3412', 'БЕСБАРМАҚ', 'besbarmak'],
  ['qymyz', '#365314', '#3f6212', 'ҚЫМЫЗМҰРЫНДЫҚ', 'qymyz'],
  ['baursak', '#854d0e', '#a16207', 'БАУЫРСАҚ', 'baursak'],
  ['qurt', '#1e293b', '#334155', 'ҚҰРТ ЖАСАУ', 'qurt'],
  ['shubat', '#0f766e', '#115e59', 'ШҰБАТ ҰСЫНУ', 'shubat'],
  ['zhent', '#78350f', '#92400e', 'ЖЕНТ ДАЙЫНДАУ', 'zhent'],
  ['nauryzkozhe', '#047857', '#059669', 'НАУРЫЗ КӨЖЕ', 'nauryzkozhe'],

  ['nauryz', '#047857', '#059669', 'НАУРЫЗ МЕЙРАМЫ', 'nauryz'],
  ['korisu', '#1d4ed8', '#2563eb', 'КӨРІСУ КҮНІ', 'korisu'],
  ['aitys', '#581c87', '#6b21a8', 'АЙТЫС ӨНЕРІ', 'aitys'],
  ['zhoqtau', '#1f2937', '#374151', 'ҚОБЫЗ ЖӘНЕ КҮЙ', 'zhoqtau'],
  ['tanba', '#292524', '#44403c', 'ТАҢБА ЖӘНЕ ШЕЖІРЕ', 'tanba'],
  ['altybaqan', '#1e1b4b', '#312e81', 'АЛТЫБАҚАН ТЕБУ', 'altybaqan'],
  ['jarapazan', '#0f2942', '#1b4965', 'ЖАРАПАЗАН', 'jarapazan'],
];

const SHAPES = {
  shildehana: `<path d="M185 65 A45 45 0 1 0 235 125 A36 36 0 1 1 185 65 Z" fill="#facc15"/><polygon points="240,68 244,78 255,78 246,84 249,95 240,88 231,95 234,84 225,78 236,78" fill="#fef08a"/><circle cx="135" cy="95" r="4" fill="#fef08a"/><circle cx="265" cy="135" r="4" fill="#fef08a"/><path d="M140 165 Q200 185 260 165" stroke="#fde047" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  besik: `<path d="M115 168 Q200 205 285 168" stroke="#facc15" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="135" y="112" width="130" height="48" rx="8" fill="#b45309" stroke="#fde047" stroke-width="3.5"/><path d="M142 112 L142 82 M258 112 L258 82 M136 82 L264 82" stroke="#facc15" stroke-width="5" stroke-linecap="round"/><path d="M155 112 L175 160 M225 112 L245 160" stroke="#fef08a" stroke-width="3"/>`,
  qyrqyn: `<path d="M135 115 Q135 178 200 178 Q265 178 265 115 Z" fill="#d97706" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="115" rx="65" ry="14" fill="#38bdf8" stroke="#fef3c7" stroke-width="3"/><path d="M225 112 L262 76" stroke="#fde047" stroke-width="5" stroke-linecap="round"/><ellipse cx="222" cy="114" rx="12" ry="7" fill="#facc15"/><circle cx="185" cy="145" r="9" fill="none" stroke="#e2e8f0" stroke-width="3"/>`,
  tusau: `<path d="M110 148 Q200 128 290 148" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M110 148 Q200 128 290 148" stroke="#111827" stroke-width="10" stroke-dasharray="14 14" fill="none" stroke-linecap="round"/><line x1="175" y1="88" x2="222" y2="165" stroke="#e2e8f0" stroke-width="5" stroke-linecap="round"/><line x1="225" y1="88" x2="178" y2="165" stroke="#e2e8f0" stroke-width="5" stroke-linecap="round"/><circle cx="172" cy="80" r="11" fill="none" stroke="#facc15" stroke-width="4"/><circle cx="228" cy="80" r="11" fill="none" stroke="#facc15" stroke-width="4"/>`,
  atqoy: `<path d="M145 78 L255 78 L255 168 Q200 155 145 168 Z" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><line x1="168" y1="102" x2="232" y2="102" stroke="#b45309" stroke-width="4" stroke-linecap="round"/><line x1="168" y1="122" x2="232" y2="122" stroke="#b45309" stroke-width="4" stroke-linecap="round"/><line x1="168" y1="142" x2="210" y2="142" stroke="#b45309" stroke-width="4" stroke-linecap="round"/><polygon points="242,56 246,66 257,66 248,72 251,82 242,76 233,82 236,72 227,66 238,66" fill="#facc15"/>`,
    ashamay: `<path d="M135 148 Q120 155 116 175" fill="none" stroke="#facc15" stroke-width="5" stroke-linecap="round"/><path d="M140 132 L225 132 L245 96 L262 104 L245 145 L235 182 L224 182 L224 152 L162 152 L152 182 L140 182 Z" fill="#b45309" stroke="#facc15" stroke-width="3" stroke-linejoin="round"/><path d="M226 128 Q236 105 245 96" fill="none" stroke="#fde047" stroke-width="5" stroke-linecap="round"/><circle cx="188" cy="96" r="10" fill="#fde68a"/><path d="M178 132 L188 108 L198 132 Z" fill="#dc2626" stroke="#facc15" stroke-width="2"/>`,
  sundet: `<path d="M148 158 C148 112 252 112 252 158 Z" fill="#047857" stroke="#facc15" stroke-width="4"/><rect x="144" y="152" width="112" height="16" rx="4" fill="#facc15"/><path d="M200 118 Q185 82 200 58 Q215 82 200 118 Z" fill="#fef3c7" stroke="#fde047" stroke-width="2.5"/>`,

  kuda: `<circle cx="176" cy="126" r="34" fill="none" stroke="#facc15" stroke-width="7"/><circle cx="224" cy="126" r="34" fill="none" stroke="#fde047" stroke-width="7"/><polygon points="200,66 208,78 200,90 192,78" fill="#ef4444" stroke="#fde047" stroke-width="2"/>`,
  syrgasalu: `<path d="M170 72 Q170 55 180 72" fill="none" stroke="#fde047" stroke-width="3"/><polygon points="175,75 188,105 175,135 162,105" fill="#facc15" stroke="#fef08a" stroke-width="2.5"/><circle cx="175" cy="148" r="7" fill="#ef4444" stroke="#fde047" stroke-width="2"/><path d="M220 72 Q220 55 230 72" fill="none" stroke="#fde047" stroke-width="3"/><polygon points="225,75 238,105 225,135 212,105" fill="#facc15" stroke="#fef08a" stroke-width="2.5"/><circle cx="225" cy="148" r="7" fill="#ef4444" stroke="#fde047" stroke-width="2"/>`,
  uzatu: `<path d="M135 185 L178 88 L222 88 L265 185 Z" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><path d="M172 155 C172 135 196 135 196 155 C196 175 204 175 204 155 C204 135 228 135 228 155" fill="none" stroke="#d97706" stroke-width="5"/><circle cx="200" cy="68" r="14" fill="#facc15"/>`,
  betashar: `<polygon points="200,56 172,132 228,132" fill="#dc2626" stroke="#facc15" stroke-width="3.5"/><path d="M168 132 L152 186 L248 186 L232 132 Z" fill="rgba(254,243,199,0.85)" stroke="#fde047" stroke-width="3"/><rect x="168" y="128" width="64" height="10" rx="3" fill="#facc15"/>`,
  besikkuda: `<rect x="122" y="116" width="66" height="36" rx="6" fill="#d97706" stroke="#fde047" stroke-width="3"/><path d="M114 156 Q155 178 196 156" stroke="#facc15" stroke-width="5" fill="none"/><rect x="212" y="116" width="66" height="36" rx="6" fill="#d97706" stroke="#fde047" stroke-width="3"/><path d="M204 156 Q245 178 286 156" stroke="#facc15" stroke-width="5" fill="none"/><path d="M200 94 C190 82 178 90 200 106 C222 90 210 82 200 94 Z" fill="#ef4444" stroke="#fde047" stroke-width="2"/>`,
  synsu: `<circle cx="165" cy="112" r="24" fill="none" stroke="#facc15" stroke-width="5"/><path d="M185 100 Q220 75 255 95 Q230 125 265 135" fill="none" stroke="#fde047" stroke-width="4" stroke-linecap="round"/><circle cx="255" cy="95" r="6" fill="#facc15"/><circle cx="265" cy="135" r="6" fill="#facc15"/>`,
  jetiata: `<line x1="200" y1="184" x2="200" y2="66" stroke="#facc15" stroke-width="6" stroke-linecap="round"/><path d="M200 162 L150 142 M200 162 L250 142 M200 132 L155 112 M200 132 L245 112 M200 102 L165 82 M200 102 L235 82" stroke="#fde047" stroke-width="4" stroke-linecap="round"/><circle cx="200" cy="62" r="9" fill="#fef08a"/><circle cx="150" cy="142" r="6" fill="#facc15"/><circle cx="250" cy="142" r="6" fill="#facc15"/><circle cx="155" cy="112" r="6" fill="#facc15"/><circle cx="245" cy="112" r="6" fill="#facc15"/><circle cx="165" cy="82" r="6" fill="#facc15"/><circle cx="235" cy="82" r="6" fill="#facc15"/>`,

  konak: `<ellipse cx="200" cy="148" rx="84" ry="26" fill="#d97706" stroke="#facc15" stroke-width="4"/><path d="M168 128 Q168 92 200 92 Q232 92 232 128 Z" fill="#b45309" stroke="#fde047" stroke-width="3"/><circle cx="200" cy="85" r="8" fill="#facc15"/>`,
  suinshi: `<polygon points="200,56 218,104 270,104 228,134 244,182 200,152 156,182 172,134 130,104 182,104" fill="#facc15" stroke="#fef08a" stroke-width="3.5"/><circle cx="200" cy="122" r="18" fill="#dc2626"/>`,
  bata: `<path d="M142 174 C132 132 145 92 176 92 C190 92 196 112 196 138 L196 174 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="3"/><path d="M258 174 C268 132 255 92 224 92 C210 92 204 112 204 138 L204 174 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="3"/><path d="M185 72 Q200 58 215 72" fill="none" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>`,
  shashu: `<circle cx="162" cy="138" r="14" fill="#fef3c7" stroke="#facc15" stroke-width="3"/><circle cx="200" cy="108" r="16" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/><circle cx="238" cy="136" r="14" fill="#ef4444" stroke="#fde047" stroke-width="3"/><circle cx="182" cy="158" r="12" fill="#facc15"/><circle cx="220" cy="160" r="12" fill="#fef3c7"/><circle cx="145" cy="95" r="5" fill="#fde047"/><circle cx="255" cy="92" r="5" fill="#fde047"/>`,
  baygazy: `<rect x="148" y="106" width="104" height="72" rx="8" fill="#dc2626" stroke="#facc15" stroke-width="3.5"/><rect x="142" y="92" width="116" height="18" rx="5" fill="#b91c1c" stroke="#fde047" stroke-width="3"/><line x1="200" y1="92" x2="200" y2="178" stroke="#facc15" stroke-width="7"/><path d="M200 92 C175 68 165 88 200 92 C235 88 225 68 200 92 Z" fill="#facc15"/>`,
  korimdik: `<path d="M115 156 Q155 142 192 158 L182 174 Q145 164 115 172 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="2.5"/><path d="M285 156 Q245 142 208 158 L218 174 Q255 164 285 172 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="2.5"/><path d="M168 82 Q200 128 232 82" fill="none" stroke="#facc15" stroke-width="4" stroke-linecap="round"/><circle cx="168" cy="82" r="5" fill="#fde047"/><circle cx="232" cy="82" r="5" fill="#fde047"/><polygon points="200,104 214,122 200,140 186,122" fill="#ef4444" stroke="#facc15" stroke-width="3"/><circle cx="200" cy="122" r="4" fill="#fef08a"/><polygon points="154,102 157,110 165,110 158,115 161,123 154,118 147,123 150,115 143,110 151,110" fill="#fde047"/><polygon points="246,102 249,110 257,110 250,115 253,123 246,118 239,123 242,115 235,110 243,110" fill="#fde047"/>`,
  sarkyt: `<path d="M150 118 L250 118 L238 178 L162 178 Z" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><path d="M178 118 C178 88 222 88 222 118" fill="none" stroke="#d97706" stroke-width="6" stroke-linecap="round"/><path d="M172 148 C172 135 196 135 196 148 C196 161 204 161 204 148 C204 135 228 135 228 148" fill="none" stroke="#dc2626" stroke-width="4"/>`,

  asar: `<path d="M138 118 Q200 72 262 118" fill="none" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="86" rx="26" ry="8" fill="#92400e" stroke="#fde047" stroke-width="3"/><line x1="154" y1="114" x2="154" y2="178" stroke="#fde047" stroke-width="3"/><line x1="184" y1="98" x2="184" y2="178" stroke="#fde047" stroke-width="3"/><line x1="216" y1="98" x2="216" y2="178" stroke="#fde047" stroke-width="3"/><line x1="246" y1="114" x2="246" y2="178" stroke="#fde047" stroke-width="3"/><circle cx="114" cy="128" r="9" fill="#fde68a"/><path d="M100 178 L104 140 L124 140 L128 178 Z" fill="#facc15"/><line x1="122" y1="144" x2="146" y2="122" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/><circle cx="152" cy="134" r="9" fill="#fde68a"/><path d="M138 178 L142 146 L162 146 L166 178 Z" fill="#38bdf8"/><line x1="158" y1="148" x2="176" y2="124" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/><circle cx="200" cy="136" r="9" fill="#fde68a"/><path d="M186 178 L190 148 L210 148 L214 178 Z" fill="#ef4444"/><line x1="194" y1="148" x2="194" y2="120" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/><line x1="206" y1="148" x2="206" y2="120" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/><circle cx="248" cy="134" r="9" fill="#fde68a"/><path d="M234 178 L238 146 L258 146 L262 178 Z" fill="#fb923c"/><line x1="242" y1="148" x2="224" y2="124" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/><circle cx="286" cy="128" r="9" fill="#fde68a"/><path d="M272 178 L276 140 L296 140 L300 178 Z" fill="#a855f7"/><line x1="278" y1="144" x2="254" y2="122" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/>`,
  zhylu: `<path d="M200 176 C138 134 132 82 174 82 C192 82 200 98 200 98 C200 98 208 82 226 82 C268 82 262 134 200 176 Z" fill="#ef4444" stroke="#facc15" stroke-width="4"/><path d="M168 122 L200 98 L232 122 L232 148 L168 148 Z" fill="#fef3c7"/>`,
  sogym: `<path d="M135 108 Q135 178 200 178 Q265 178 265 108 Z" fill="#1f2937" stroke="#facc15" stroke-width="4"/><rect x="122" y="102" width="156" height="12" rx="5" fill="#d97706"/><path d="M175 88 Q182 72 175 58 M200 84 Q207 68 200 54 M225 88 Q232 72 225 58" fill="none" stroke="#fef08a" stroke-width="3.5" stroke-linecap="round"/>`,
  erulik: `<path d="M128 176 L128 126 Q200 76 272 126 L272 176 Z" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="148" rx="42" ry="14" fill="#d97706" stroke="#fde047" stroke-width="2.5"/><ellipse cx="200" cy="96" rx="24" ry="8" fill="#92400e"/>`,
  umey: `<circle cx="200" cy="108" r="28" fill="#facc15" stroke="#fef08a" stroke-width="4"/><path d="M135 176 Q165 132 200 152 Q235 132 265 176" fill="none" stroke="#fde047" stroke-width="6" stroke-linecap="round"/><line x1="200" y1="62" x2="200" y2="74" stroke="#fef08a" stroke-width="4"/><line x1="152" y1="108" x2="164" y2="108" stroke="#fef08a" stroke-width="4"/><line x1="236" y1="108" x2="248" y2="108" stroke="#fef08a" stroke-width="4"/>`,
  tuynsyr: `<path d="M105 116 L152 106 L162 146 L115 158 Z" fill="#7c2d12" stroke="#facc15" stroke-width="3" stroke-linejoin="round"/><path d="M295 116 L248 106 L238 146 L285 158 Z" fill="#1e3a8a" stroke="#facc15" stroke-width="3" stroke-linejoin="round"/><path d="M154 114 L195 106 L222 126 L212 138 L190 124 L176 134 L214 156 L202 170 L160 142 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round"/><path d="M244 112 L204 106 L182 124 L192 134 L212 122 L236 142 L216 168 L204 160 L186 172 L174 160 L164 152" fill="#fcd34d" stroke="#d97706" stroke-width="2.5" stroke-linejoin="round"/><line x1="184" y1="150" x2="196" y2="160" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/><line x1="194" y1="144" x2="206" y2="154" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/><line x1="204" y1="138" x2="216" y2="148" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>`,
  qolqabys: `<path d="M140 162 C140 125 175 115 200 135 C225 115 260 125 260 162 Z" fill="#facc15" stroke="#fef08a" stroke-width="3.5"/><circle cx="172" cy="96" r="16" fill="#fde68a"/><circle cx="228" cy="96" r="16" fill="#fde68a"/>`,

    kokpar: `<path d="M132 145 Q116 152 112 174" fill="none" stroke="#facc15" stroke-width="5" stroke-linecap="round"/><path d="M138 130 L228 130 L248 92 L266 100 L248 144 L238 182 L226 182 L226 150 L160 150 L150 182 L138 182 Z" fill="#b45309" stroke="#facc15" stroke-width="3" stroke-linejoin="round"/><path d="M228 126 Q238 102 248 92" fill="none" stroke="#fde047" stroke-width="5" stroke-linecap="round"/><circle cx="186" cy="94" r="10" fill="#fde68a"/><path d="M174 130 L186 106 L202 126 L216 120" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/><circle cx="200" cy="132" r="76" fill="none" stroke="#facc15" stroke-width="2.5" stroke-dasharray="8 6"/>`,
  zhamby: `<path d="M158 64 Q232 125 158 186" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/><line x1="158" y1="64" x2="158" y2="186" stroke="#fef08a" stroke-width="2.5"/><line x1="138" y1="125" x2="255" y2="125" stroke="#e2e8f0" stroke-width="4"/><polygon points="268,125 250,117 250,133" fill="#facc15"/><circle cx="268" cy="125" r="14" fill="none" stroke="#fde047" stroke-width="3"/>`,
  kusbegi: `<path d="M108 118 Q154 72 200 116 Q246 72 292 118 Q246 138 200 128 Q154 138 108 118 Z" fill="#92400e" stroke="#facc15" stroke-width="3.5"/><circle cx="200" cy="108" r="12" fill="#fef3c7"/><polygon points="200,114 194,126 206,126" fill="#facc15"/>`,
    qyzquu: `<path d="M106 135 L164 135 L178 110 L190 116 L178 144 L170 172 L162 172 L162 150 L122 150 L114 172 L106 172 Z" fill="#92400e" stroke="#facc15" stroke-width="2.5" stroke-linejoin="round"/><circle cx="138" cy="110" r="8" fill="#fde68a"/><path d="M214 132 L274 132 L288 106 L300 112 L288 142 L280 172 L272 172 L272 148 L230 148 L222 172 L214 172 Z" fill="#fef3c7" stroke="#facc15" stroke-width="2.5" stroke-linejoin="round"/><circle cx="246" cy="106" r="8" fill="#fde68a"/><polygon points="246,84 238,100 254,100" fill="#dc2626"/><line x1="234" y1="116" x2="195" y2="96" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>`,
    audaryspaq: `<path d="M108 138 L168 138 L182 112 L194 118 L182 148 L174 176 L166 176 L166 154 L124 154 L116 176 L108 176 Z" fill="#92400e" stroke="#facc15" stroke-width="2.5" stroke-linejoin="round"/><path d="M292 138 L232 138 L218 112 L206 118 L218 148 L226 176 L234 176 L234 154 L276 154 L284 176 L292 176 Z" fill="#b45309" stroke="#fde047" stroke-width="2.5" stroke-linejoin="round"/><circle cx="164" cy="102" r="9" fill="#fde68a"/><circle cx="236" cy="102" r="9" fill="#fde68a"/><path d="M164 114 L200 108 L236 114" fill="none" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>`,
  asyq: `<path d="M162 94 Q182 82 200 94 Q218 82 238 94 Q246 125 236 156 Q218 168 200 156 Q182 168 164 156 Q154 125 162 94 Z" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><path d="M175 125 Q200 112 225 125 Q200 138 175 125 Z" fill="#d97706"/>`,
  togyzqumalaq: `<rect x="122" y="92" width="156" height="68" rx="10" fill="#78350f" stroke="#facc15" stroke-width="3.5"/><circle cx="152" cy="114" r="9" fill="#fde047"/><circle cx="184" cy="114" r="9" fill="#fde047"/><circle cx="216" cy="114" r="9" fill="#fde047"/><circle cx="248" cy="114" r="9" fill="#fde047"/><circle cx="152" cy="138" r="9" fill="#facc15"/><circle cx="184" cy="138" r="9" fill="#facc15"/><circle cx="216" cy="138" r="9" fill="#facc15"/><circle cx="248" cy="138" r="9" fill="#facc15"/>`,

  kiiz: `<rect x="128" y="78" width="144" height="96" rx="10" fill="#fef3c7" stroke="#facc15" stroke-width="4"/><path d="M162 126 C162 98 194 98 194 126 C194 154 206 154 206 126 C206 98 238 98 238 126" fill="none" stroke="#b91c1c" stroke-width="7" stroke-linecap="round"/><path d="M200 95 L200 157" stroke="#b91c1c" stroke-width="6"/>`,
  kurak: `<rect x="145" y="74" width="110" height="106" fill="none" stroke="#facc15" stroke-width="4"/><polygon points="145,74 200,127 145,180" fill="#dc2626"/><polygon points="255,74 200,127 255,180" fill="#2563eb"/><polygon points="145,74 200,127 255,74" fill="#facc15"/><polygon points="145,180 200,127 255,180" fill="#059669"/>`,
  saukele: `<polygon points="200,58 168,168 232,168" fill="#991b1b" stroke="#facc15" stroke-width="4"/><rect x="164" y="160" width="72" height="14" rx="4" fill="#facc15"/><circle cx="200" cy="118" r="8" fill="#fde047"/><circle cx="200" cy="142" r="9" fill="#38bdf8" stroke="#fde047" stroke-width="2"/><path d="M200 58 Q190 42 200 34 Q210 42 200 58 Z" fill="#fef3c7"/>`,
  uki: `<path d="M200 184 Q172 115 200 54 Q228 115 200 184 Z" fill="#fef3c7" stroke="#facc15" stroke-width="3.5"/><line x1="200" y1="54" x2="200" y2="192" stroke="#92400e" stroke-width="3.5"/><path d="M200 95 L182 82 M200 115 L218 102 M200 135 L180 122" stroke="#d97706" stroke-width="2.5"/>`,
  shapan: `<path d="M155 72 L180 65 L200 82 L220 65 L245 72 L278 125 L258 142 L242 112 L248 188 L152 188 L158 112 L142 142 L122 125 Z" fill="#991b1b" stroke="#facc15" stroke-width="4" stroke-linejoin="round"/><line x1="200" y1="82" x2="200" y2="188" stroke="#facc15" stroke-width="5"/><path d="M180 65 L200 95 L220 65" fill="none" stroke="#fde047" stroke-width="4"/><circle cx="178" cy="145" r="6" fill="none" stroke="#facc15" stroke-width="2.5"/><circle cx="222" cy="145" r="6" fill="none" stroke="#facc15" stroke-width="2.5"/>`,
  kimeshek: `<path d="M152 178 L162 96 Q200 66 238 96 L248 178 Z" fill="#ffffff" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="116" rx="22" ry="26" fill="#0f2942" stroke="#d97706" stroke-width="3"/><path d="M174 148 L200 166 L226 148" fill="none" stroke="#dc2626" stroke-width="3.5"/>`,
  zergerlik: `<circle cx="200" cy="126" r="46" fill="none" stroke="#e2e8f0" stroke-width="9"/><circle cx="200" cy="126" r="46" fill="none" stroke="#facc15" stroke-width="2" stroke-dasharray="6 6"/><circle cx="200" cy="80" r="11" fill="#dc2626" stroke="#fde047" stroke-width="2.5"/>`,

  besbarmak: `<ellipse cx="200" cy="146" rx="86" ry="30" fill="#b45309" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="138" rx="68" ry="20" fill="#fef3c7"/><circle cx="182" cy="136" r="13" fill="#78350f"/><circle cx="216" cy="138" r="14" fill="#92400e"/><circle cx="198" cy="130" r="10" fill="#b45309"/>`,
  qymyz: `<path d="M132 122 Q132 180 200 180 Q268 180 268 122 Z" fill="#d97706" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="122" rx="68" ry="14" fill="#ffffff" stroke="#fde047" stroke-width="3"/><path d="M152 146 L168 136 L184 146 L200 136 L216 146 L232 136 L248 146" fill="none" stroke="#fde047" stroke-width="3"/>`,
  baursak: `<ellipse cx="172" cy="138" rx="22" ry="16" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/><ellipse cx="205" cy="116" rx="22" ry="16" fill="#d97706" stroke="#fef08a" stroke-width="3"/><ellipse cx="232" cy="142" rx="22" ry="16" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/><ellipse cx="198" cy="154" rx="22" ry="16" fill="#b45309" stroke="#fde047" stroke-width="3"/>`,
  qurt: `<circle cx="165" cy="136" r="18" fill="#ffffff" stroke="#facc15" stroke-width="3"/><circle cx="202" cy="114" r="19" fill="#f8fafc" stroke="#facc15" stroke-width="3"/><circle cx="236" cy="138" r="18" fill="#ffffff" stroke="#facc15" stroke-width="3"/><circle cx="198" cy="152" r="17" fill="#f1f5f9" stroke="#fde047" stroke-width="3"/>`,
  shubat: `<path d="M168 96 L232 96 L224 176 L176 176 Z" fill="#ffffff" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="96" rx="32" ry="8" fill="#fef3c7" stroke="#fde047" stroke-width="2.5"/><path d="M174 136 L226 136" stroke="#0d9488" stroke-width="4"/>`,
  zhent: `<polygon points="150,158 200,92 250,158" fill="#92400e" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="160" rx="68" ry="14" fill="#d97706" stroke="#fde047" stroke-width="3"/><circle cx="200" cy="126" r="7" fill="#fde047"/>`,
  nauryzkozhe: `<path d="M135 120 Q135 178 200 178 Q265 178 265 120 Z" fill="#047857" stroke="#facc15" stroke-width="4"/><ellipse cx="200" cy="120" rx="65" ry="14" fill="#fef3c7" stroke="#fde047" stroke-width="3"/><circle cx="182" cy="120" r="5" fill="#92400e"/><circle cx="202" cy="118" r="5" fill="#d97706"/><circle cx="218" cy="122" r="5" fill="#059669"/>`,

  nauryz: `<circle cx="200" cy="122" r="32" fill="#facc15" stroke="#fef08a" stroke-width="4"/><path d="M200 66 L200 80 M200 164 L200 178 M144 122 L158 122 M242 122 L256 122 M160 82 L170 92 M230 152 L240 162 M240 82 L230 92 M170 152 L160 162" stroke="#fde047" stroke-width="4" stroke-linecap="round"/><path d="M145 178 Q200 152 255 178" fill="none" stroke="#34d399" stroke-width="5" stroke-linecap="round"/>`,
  korisu: `<path d="M105 112 L152 102 L162 142 L115 154 Z" fill="#1e3a8a" stroke="#facc15" stroke-width="3" stroke-linejoin="round"/><path d="M295 112 L248 102 L238 142 L285 154 Z" fill="#047857" stroke="#facc15" stroke-width="3" stroke-linejoin="round"/><path d="M154 110 L195 102 L222 122 L212 134 L190 120 L176 130 L214 152 L202 166 L160 138 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round"/><path d="M244 108 L204 102 L182 120 L192 130 L212 118 L236 138 L216 164 L204 156 L186 168 L174 156 L164 148" fill="#fcd34d" stroke="#d97706" stroke-width="2.5" stroke-linejoin="round"/><line x1="184" y1="146" x2="196" y2="156" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/><line x1="194" y1="140" x2="206" y2="150" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/><line x1="204" y1="134" x2="216" y2="144" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/><path d="M200 78 C191 67 180 74 200 89 C220 74 209 67 200 78 Z" fill="#ef4444" stroke="#fde047" stroke-width="2"/>`,
  aitys: `<rect x="194" y="46" width="12" height="82" rx="4" fill="#d97706" stroke="#fde047" stroke-width="2"/><path d="M200 122 Q238 130 232 168 Q225 188 200 188 Q175 188 168 168 Q162 130 200 122 Z" fill="#b45309" stroke="#facc15" stroke-width="3.5"/><line x1="198" y1="50" x2="198" y2="180" stroke="#fef08a" stroke-width="1.5"/><line x1="202" y1="50" x2="202" y2="180" stroke="#fef08a" stroke-width="1.5"/>`,
  zhoqtau: `<path d="M185 58 L215 58 L208 126 Q235 142 225 176 Q200 192 175 176 Q165 142 192 126 Z" fill="#78350f" stroke="#facc15" stroke-width="3.5"/><line x1="152" y1="152" x2="248" y2="132" stroke="#fde047" stroke-width="3.5" stroke-linecap="round"/>`,
  tanba: `<circle cx="200" cy="126" r="56" fill="none" stroke="#facc15" stroke-width="6"/><line x1="200" y1="70" x2="200" y2="182" stroke="#fde047" stroke-width="6"/><path d="M162 112 L200 138 L238 112" fill="none" stroke="#fde047" stroke-width="6" stroke-linecap="round"/>`,
  altybaqan: `<line x1="152" y1="64" x2="132" y2="184" stroke="#facc15" stroke-width="5" stroke-linecap="round"/><line x1="248" y1="64" x2="268" y2="184" stroke="#facc15" stroke-width="5" stroke-linecap="round"/><line x1="152" y1="64" x2="248" y2="64" stroke="#fde047" stroke-width="5" stroke-linecap="round"/><line x1="180" y1="64" x2="180" y2="146" stroke="#ffffff" stroke-width="2.5"/><line x1="220" y1="64" x2="220" y2="146" stroke="#ffffff" stroke-width="2.5"/><rect x="170" y="146" width="60" height="9" rx="4" fill="#facc15"/>`,
  jarapazan: `<path d="M188 62 A44 44 0 1 0 236 122 A35 35 0 1 1 188 62 Z" fill="#facc15"/><rect x="186" y="128" width="28" height="38" rx="6" fill="#d97706" stroke="#fde047" stroke-width="3"/><line x1="200" y1="112" x2="200" y2="128" stroke="#fde047" stroke-width="3"/><circle cx="200" cy="147" r="6" fill="#fef08a"/>`,
};

ITEMS.forEach(([id, bg1, bg2, label, shapeKey]) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="400" height="240">
  <defs><linearGradient id="g_${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${bg1}"/><stop offset="100%" stop-color="${bg2}"/></linearGradient></defs>
  <rect width="400" height="240" fill="url(#g_${id})"/>
  <rect x="10" y="10" width="380" height="220" rx="14" fill="none" stroke="#facc15" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="8 6"/>
  ${SHAPES[shapeKey]}
  <text x="200" y="220" fill="#fde047" font-family="Arial, sans-serif" font-size="12" font-weight="bold" letter-spacing="1.5" text-anchor="middle">${label}</text>
</svg>`;
  fs.writeFileSync(path.join(dir, `${id}.svg`), svg, 'utf8');
});

console.log('Барлық 56 дәстүрдің бірегей суреттері сәтті жаңартылды!');




