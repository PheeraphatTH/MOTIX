// High-Definition Automotive Parts & Brand Logo Visual Assets
// Provides crisp, scalable SVG Data URIs matching genuine automotive parts & brand identities

const toSvgDataUri = (svgString) => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
};

// ==========================================
// 1. BRAND LOGOS (SVG Data URIs)
// ==========================================
export const BRAND_LOGOS = {
  Brembo: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" width="160" height="40">
      <g fill="#E60000">
        <!-- Brembo Lowercase 'b' Circle mark -->
        <circle cx="16" cy="20" r="14" fill="#E60000"/>
        <circle cx="16" cy="20" r="7" fill="#FFFFFF"/>
        <circle cx="19" cy="17" r="3.5" fill="#E60000"/>
        <!-- Text 'brembo' -->
        <text x="36" y="27" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="900" letter-spacing="-0.5" fill="#E60000">brembo</text>
      </g>
    </svg>
  `),

  Motul: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" width="160" height="40">
      <rect width="160" height="40" rx="6" fill="#E60012"/>
      <text x="80" y="28" font-family="'Arial Black', Impact, sans-serif" font-size="24" font-weight="900" font-style="italic" letter-spacing="1" fill="#FFFFFF" text-anchor="middle">MOTUL</text>
    </svg>
  `),

  NGK: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <rect width="140" height="40" rx="4" fill="#E31B23"/>
      <text x="70" y="29" font-family="'Arial Black', Impact, sans-serif" font-size="26" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">NGK</text>
    </svg>
  `),

  'GS Battery': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <g fill="#E31B23">
        <text x="10" y="30" font-family="'Arial Black', Impact, sans-serif" font-size="30" font-weight="900" fill="#E31B23">GS</text>
        <text x="65" y="20" font-family="Arial, sans-serif" font-size="11" font-weight="900" fill="#111111">YUASA</text>
        <text x="65" y="32" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#E31B23">BATTERY</text>
      </g>
    </svg>
  `),

  GS: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <text x="10" y="30" font-family="'Arial Black', Impact, sans-serif" font-size="30" font-weight="900" fill="#E31B23">GS</text>
      <text x="65" y="20" font-family="Arial, sans-serif" font-size="11" font-weight="900" fill="#111111">YUASA</text>
      <text x="65" y="32" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#E31B23">BATTERY</text>
    </svg>
  `),

  YSS: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <text x="10" y="28" font-family="'Arial Black', Impact, sans-serif" font-size="26" font-weight="900" font-style="italic" fill="#E60000">YSS</text>
      <line x1="10" y1="33" x2="130" y2="33" stroke="#E60000" stroke-width="3"/>
      <text x="75" y="25" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#333333">SUSPENSION</text>
    </svg>
  `),

  TRW: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <text x="10" y="30" font-family="'Arial Black', Impact, sans-serif" font-size="28" font-weight="900" font-style="italic" fill="#E31B23">TRW</text>
      <text x="85" y="28" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#555555">BRAKES</text>
    </svg>
  `),

  Bosch: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" width="150" height="40">
      <!-- Bosch Magneto Symbol -->
      <circle cx="20" cy="20" r="14" fill="none" stroke="#E21A1A" stroke-width="3"/>
      <line x1="10" y1="20" x2="30" y2="20" stroke="#E21A1A" stroke-width="3"/>
      <line x1="20" y1="10" x2="20" y2="30" stroke="#E21A1A" stroke-width="3"/>
      <!-- Text 'BOSCH' -->
      <text x="44" y="28" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" fill="#E21A1A" letter-spacing="1">BOSCH</text>
    </svg>
  `),

  DID: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <text x="10" y="29" font-family="'Arial Black', Impact, sans-serif" font-size="26" font-weight="900" font-style="italic" fill="#D31820">D.I.D</text>
      <text x="75" y="26" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#444444">DRIVE CHAIN</text>
    </svg>
  `),

  Profender: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" width="160" height="40">
      <text x="10" y="27" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" font-style="italic" fill="#E60000">PROFENDER</text>
      <text x="10" y="36" font-family="Arial, sans-serif" font-size="7" font-weight="bold" fill="#666666">PREMIUM 4X4 SUSPENSION</text>
    </svg>
  `),

  Denso: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <text x="10" y="28" font-family="'Arial Black', Impact, sans-serif" font-size="24" font-weight="900" fill="#E60012">DENSO</text>
      <text x="10" y="37" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#006699">Cool Gear</text>
    </svg>
  `),

  Michelin: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" width="160" height="40">
      <rect width="160" height="40" rx="4" fill="#003580"/>
      <text x="80" y="27" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" font-style="italic" fill="#FCEB00" text-anchor="middle">MICHELIN</text>
    </svg>
  `),

  Yuasa: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <text x="10" y="29" font-family="'Arial Black', Impact, sans-serif" font-size="24" font-weight="900" fill="#E60000">YUASA</text>
      <text x="100" y="27" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#333333">BATTERY</text>
    </svg>
  `),

  Osram: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <rect width="140" height="40" rx="4" fill="#FF6600"/>
      <text x="70" y="27" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">OSRAM</text>
    </svg>
  `),
};

// ==========================================
// 2. AUTO PARTS STUDIO RENDER ASSETS (SVG Data URIs)
// ==========================================

export const PRODUCT_ASSETS = {
  // 1. Brembo High Carbon Front Brake Rotor with Red Caliper
  'brembo-rotor': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <radialGradient id="discGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2c3038"/>
          <stop offset="45%" stop-color="#e2e8f0"/>
          <stop offset="48%" stop-color="#cbd5e1"/>
          <stop offset="70%" stop-color="#f8fafc"/>
          <stop offset="85%" stop-color="#cbd5e1"/>
          <stop offset="97%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#475569"/>
        </radialGradient>
        <radialGradient id="hubGrad" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="60%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </radialGradient>
        <linearGradient id="caliperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff3333"/>
          <stop offset="30%" stop-color="#e60000"/>
          <stop offset="70%" stop-color="#b30000"/>
          <stop offset="100%" stop-color="#800000"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.22"/>
        </filter>
        <filter id="caliperShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="-6" dy="12" stdDeviation="10" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
      </defs>

      <!-- Background clean plate -->
      <rect width="600" height="600" fill="#FFFFFF"/>

      <!-- Shadow under rotor -->
      <ellipse cx="300" cy="510" rx="220" ry="32" fill="#000000" opacity="0.16" filter="blur(16px)"/>

      <!-- ROTOR GROUP -->
      <g transform="translate(300, 310)" filter="url(#shadow)">
        <!-- Outer Disc Ring -->
        <circle cx="0" cy="0" r="220" fill="url(#discGrad)" stroke="#64748b" stroke-width="4"/>
        
        <!-- Ventilated Slotted Tracks & Grooves -->
        <circle cx="0" cy="0" r="215" fill="none" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="0" cy="0" r="135" fill="none" stroke="#94a3b8" stroke-width="3"/>

        <!-- Slotted Curves -->
        <path d="M-80 -160 C -100 -130, -120 -90, -140 -60" stroke="#334155" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M80 160 C 100 130, 120 90, 140 60" stroke="#334155" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M-160 80 C -130 100, -90 120, -60 140" stroke="#334155" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M160 -80 C 130 -100, 90 -120, 60 -140" stroke="#334155" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M-130 -130 C -150 -100, -165 -60, -175 -20" stroke="#334155" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M130 130 C 150 100, 165 60, 175 20" stroke="#334155" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M-130 130 C -100 150, -60 165, -20 175" stroke="#334155" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M130 -130 C 100 -150, 60 -165, 20 -175" stroke="#334155" stroke-width="3.5" stroke-linecap="round" fill="none"/>

        <!-- Drilled Holes -->
        <g fill="#1e293b" stroke="#64748b" stroke-width="1.5">
          <circle cx="-120" cy="-100" r="4.5"/>
          <circle cx="-145" cy="-80" r="4.5"/>
          <circle cx="-165" cy="-55" r="4.5"/>
          <circle cx="120" cy="100" r="4.5"/>
          <circle cx="145" cy="80" r="4.5"/>
          <circle cx="165" cy="55" r="4.5"/>
          <circle cx="-100" cy="120" r="4.5"/>
          <circle cx="-80" cy="145" r="4.5"/>
          <circle cx="-55" cy="165" r="4.5"/>
          <circle cx="100" cy="-120" r="4.5"/>
          <circle cx="80" cy="-145" r="4.5"/>
          <circle cx="55" cy="-165" r="4.5"/>
          <circle cx="0" cy="170" r="4.5"/>
          <circle cx="0" cy="-170" r="4.5"/>
          <circle cx="-170" cy="0" r="4.5"/>
          <circle cx="170" cy="0" r="4.5"/>
        </g>

        <!-- Center Hub (Black High Carbon Aluminum Hat) -->
        <circle cx="0" cy="0" r="110" fill="url(#hubGrad)" stroke="#475569" stroke-width="4"/>
        <circle cx="0" cy="0" r="92" fill="#0f172a" stroke="#334155" stroke-width="3"/>
        
        <!-- Center Axle Hole -->
        <circle cx="0" cy="0" r="42" fill="#020617" stroke="#1e293b" stroke-width="4"/>

        <!-- Lug Bolt Holes (5x114.3) -->
        <g fill="#020617" stroke="#94a3b8" stroke-width="2.5">
          <circle cx="0" cy="-68" r="9"/>
          <circle cx="64.6" cy="-21" r="9"/>
          <circle cx="39.9" cy="55" r="9"/>
          <circle cx="-39.9" cy="55" r="9"/>
          <circle cx="-64.6" cy="-21" r="9"/>
        </g>
        
        <!-- High Carbon Stamping Text -->
        <text x="0" y="85" font-family="'Helvetica Neue', Arial" font-size="8" font-weight="bold" fill="#64748b" text-anchor="middle" letter-spacing="1">BREMBO HIGH CARBON 282mm</text>
      </g>

      <!-- RED BREMBO 6-PISTON BRAKE CALIPER (Mounted top-right) -->
      <g transform="translate(340, 110)" filter="url(#caliperShadow)">
        <!-- Caliper Body Outline -->
        <path d="M-20 60 C 20 20, 80 0, 150 10 C 180 15, 200 40, 195 70 C 190 120, 175 180, 135 220 C 105 250, 75 255, 45 235 C 20 215, 10 180, 15 150 C -5 130, -20 100, -20 60 Z" 
              fill="url(#caliperGrad)" stroke="#ff4d4d" stroke-width="2"/>
        
        <!-- Caliper highlights & 3 Piston Bulges -->
        <path d="M0 70 C 35 35, 90 20, 145 30" stroke="#ff9999" stroke-width="4" stroke-linecap="round" fill="none"/>
        <circle cx="110" cy="75" r="22" fill="#990000" stroke="#ff4d4d" stroke-width="2"/>
        <circle cx="85" cy="130" r="22" fill="#990000" stroke="#ff4d4d" stroke-width="2"/>
        <circle cx="55" cy="185" r="22" fill="#990000" stroke="#ff4d4d" stroke-width="2"/>

        <!-- Bleed Screw & Banjo Bolt -->
        <polygon points="160,15 170,10 175,22 165,27" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
        <circle cx="167" cy="18" r="4" fill="#cbd5e1"/>

        <!-- White Brembo Logo on Caliper -->
        <g transform="translate(70, 120) rotate(52)">
          <circle cx="8" cy="8" r="6" fill="#FFFFFF"/>
          <circle cx="8" cy="8" r="3" fill="#B30000"/>
          <text x="18" y="12" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">brembo</text>
        </g>
      </g>
    </svg>
  `),

  // 2. Motul 300V Power 5W-40 Synthetic Racing Oil 4L Can
  'motul-300v': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="canBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#18181b"/>
          <stop offset="25%" stop-color="#3f3f46"/>
          <stop offset="50%" stop-color="#18181b"/>
          <stop offset="85%" stop-color="#27272a"/>
          <stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
        <linearGradient id="canSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.0"/>
        </linearGradient>
        <linearGradient id="goldCap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#facc15"/>
          <stop offset="50%" stop-color="#ca8a04"/>
          <stop offset="100%" stop-color="#713f12"/>
        </linearGradient>
        <filter id="canShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>

      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="540" rx="190" ry="24" fill="#000000" opacity="0.18" filter="blur(14px)"/>

      <g transform="translate(150, 60)" filter="url(#canShadow)">
        <!-- Can Top Handle -->
        <path d="M 50 70 C 50 15, 230 15, 230 70" fill="none" stroke="#27272a" stroke-width="24" stroke-linecap="round"/>
        <path d="M 60 70 C 60 28, 220 28, 220 70" fill="none" stroke="#52525b" stroke-width="6" stroke-linecap="round"/>

        <!-- Pouring Spout Cap -->
        <rect x="70" y="45" width="44" height="28" rx="6" fill="url(#goldCap)" stroke="#a16207" stroke-width="2"/>
        <line x1="70" y1="53" x2="114" y2="53" stroke="#fef08a" stroke-width="2"/>
        <line x1="70" y1="62" x2="114" y2="62" stroke="#fef08a" stroke-width="2"/>

        <!-- Main Can Container -->
        <rect x="25" y="70" width="250" height="420" rx="28" fill="url(#canBody)" stroke="#52525b" stroke-width="3"/>
        
        <!-- Can Edge Chamfer & Corner Grips -->
        <path d="M 35 100 L 35 460" stroke="#71717a" stroke-width="3" fill="none" opacity="0.6"/>
        <path d="M 265 100 L 265 460" stroke="#27272a" stroke-width="4" fill="none"/>

        <!-- Motul 300V Front Label -->
        <rect x="42" y="110" width="216" height="340" rx="14" fill="#09090b" stroke="#3f3f46" stroke-width="2"/>

        <!-- Top Red MOTUL Brand Badge -->
        <rect x="52" y="125" width="196" height="50" rx="8" fill="#E60012"/>
        <text x="150" y="160" font-family="'Arial Black', Impact, sans-serif" font-size="34" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">MOTUL</text>

        <!-- Big '300V' Trophy Graphic -->
        <text x="150" y="245" font-family="'Arial Black', Impact, sans-serif" font-size="64" font-weight="900" font-style="italic" fill="#E60012" text-anchor="middle" letter-spacing="-2">300V</text>
        <text x="150" y="275" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#FACC15" text-anchor="middle" letter-spacing="2">POWER</text>

        <!-- Viscosity 5W-40 -->
        <rect x="70" y="295" width="160" height="36" rx="6" fill="#18181b" stroke="#FACC15" stroke-width="2"/>
        <text x="150" y="321" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">5W-40</text>

        <!-- ESTER Core Technology Badge -->
        <text x="150" y="365" font-family="'Arial', sans-serif" font-size="13" font-weight="bold" fill="#38BDF8" text-anchor="middle" letter-spacing="1">ESTER Core® TECHNOLOGY</text>
        <text x="150" y="385" font-family="'Arial', sans-serif" font-size="11" font-weight="bold" fill="#94A3B8" text-anchor="middle">100% SYNTHETIC RACING MOTOR OIL</text>

        <!-- 4L Volume Badge -->
        <rect x="62" y="405" width="65" height="26" rx="4" fill="#27272a"/>
        <text x="94" y="423" font-family="'Arial Black', sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">4L / 4.22 Qt</text>

        <!-- Motorsport Flag Line -->
        <rect x="150" y="410" width="85" height="18" fill="#E60012" rx="3"/>
        <text x="192" y="423" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">RACING LINE</text>
      </g>
    </svg>
  `),

  // 3. NGK Laser Iridium Spark Plug DPR8EIX-9 (with Ceramic & Spark Glow)
  'ngk-sparkplug': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="ceramic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="50%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#cbd5e1"/>
        </linearGradient>
        <linearGradient id="chrome" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="35%" stop-color="#f1f5f9"/>
          <stop offset="65%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
        <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.9"/>
          <stop offset="60%" stop-color="#3b82f6" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0"/>
        </radialGradient>
        <filter id="plugShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="-8" dy="16" stdDeviation="14" flood-color="#000000" flood-opacity="0.22"/>
        </filter>
      </defs>

      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="330" cy="510" rx="180" ry="24" fill="#000000" opacity="0.16" filter="blur(14px)"/>

      <!-- NGK Box in Background (slanted) -->
      <g transform="translate(110, 240) rotate(-18)" opacity="0.95">
        <rect x="0" y="0" width="180" height="260" rx="8" fill="#E31B23" stroke="#990000" stroke-width="3"/>
        <rect x="10" y="10" width="160" height="240" rx="4" fill="#FFFFFF"/>
        <rect x="20" y="25" width="140" height="42" rx="4" fill="#E31B23"/>
        <text x="90" y="55" font-family="'Arial Black', Impact, sans-serif" font-size="28" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">NGK</text>
        <text x="90" y="95" font-family="'Arial Black', sans-serif" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">IRIDIUM IX</text>
        <text x="90" y="125" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#E31B23" text-anchor="middle">DPR8EIX-9</text>
        <circle cx="90" cy="180" r="32" fill="#0284c7" opacity="0.15"/>
        <text x="90" y="185" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="middle">JAPAN</text>
      </g>

      <!-- Spark Plug (Angled 32 deg) -->
      <g transform="translate(320, 290) rotate(34)" filter="url(#plugShadow)">
        <!-- Top Terminal Stud -->
        <rect x="-10" y="-230" width="20" height="35" rx="5" fill="url(#chrome)" stroke="#334155" stroke-width="1.5"/>
        <circle cx="0" cy="-228" r="7" fill="#cbd5e1"/>

        <!-- Ceramic Ribbed Insulator -->
        <rect x="-16" y="-195" width="32" height="120" rx="8" fill="url(#ceramic)" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Ribs -->
        <path d="M-19 -175 C -19 -180, 19 -180, 19 -175 C 19 -170, -19 -170, -19 -175 Z" fill="#e2e8f0"/>
        <path d="M-19 -155 C -19 -160, 19 -160, 19 -155 C 19 -150, -19 -150, -19 -155 Z" fill="#e2e8f0"/>
        <path d="M-19 -135 C -19 -140, 19 -140, 19 -135 C 19 -130, -19 -130, -19 -135 Z" fill="#e2e8f0"/>

        <!-- NGK Logo on Ceramic -->
        <text x="0" y="-105" font-family="'Arial Black', Impact, sans-serif" font-size="14" font-weight="900" font-style="italic" fill="#0284c7" text-anchor="middle" transform="rotate(-90 0 -105)">NGK R</text>

        <!-- Metal Hex Nut -->
        <polygon points="-26,-75 26,-75 32,-45 26,-15 -26,-15 -32,-45" fill="url(#chrome)" stroke="#334155" stroke-width="2"/>
        <line x1="-12" y1="-75" x2="-12" y2="-15" stroke="#f8fafc" stroke-width="2"/>
        <line x1="12" y1="-75" x2="12" y2="-15" stroke="#475569" stroke-width="2"/>

        <!-- Threaded Metal Body -->
        <rect x="-20" y="-15" width="40" height="100" fill="url(#chrome)" stroke="#334155" stroke-width="2"/>
        <!-- Threads -->
        <g stroke="#1e293b" stroke-width="3">
          <line x1="-20" y1="0" x2="20" y2="5"/>
          <line x1="-20" y1="15" x2="20" y2="20"/>
          <line x1="-20" y1="30" x2="20" y2="35"/>
          <line x1="-20" y1="45" x2="20" y2="50"/>
          <line x1="-20" y1="60" x2="20" y2="65"/>
          <line x1="-20" y1="75" x2="20" y2="80"/>
        </g>

        <!-- Gasket Washer -->
        <rect x="-24" y="-15" width="48" height="8" rx="2" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5"/>

        <!-- Ceramic Nose & Iridium Electrode -->
        <path d="M-10 85 L 10 85 L 6 125 L -6 125 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <rect x="-1.5" y="125" width="3" height="18" fill="#38bdf8" stroke="#0284c7" stroke-width="0.5"/>

        <!-- Ground Electrode (L-shape bent over center tip) -->
        <path d="M -18 85 L -18 148 L 4 148" fill="none" stroke="url(#chrome)" stroke-width="7" stroke-linecap="square"/>

        <!-- Spark Flash Visual Glow -->
        <circle cx="0" cy="138" r="28" fill="url(#sparkGlow)"/>
        <path d="M -2 135 L 2 139 L -1 142 L 3 146" stroke="#ffffff" stroke-width="2" fill="none"/>
      </g>
    </svg>
  `),

  // 4. GS Battery MF 55B24L (12V 45Ah)
  'gs-battery': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="batteryBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#18181b"/>
          <stop offset="30%" stop-color="#27272a"/>
          <stop offset="70%" stop-color="#18181b"/>
          <stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
        <linearGradient id="topCover" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#dc2626"/>
          <stop offset="60%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </linearGradient>
        <linearGradient id="brassTerminal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="50%" stop-color="#f1f5f9"/>
          <stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
        <filter id="batShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>

      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="530" rx="200" ry="24" fill="#000000" opacity="0.2" filter="blur(14px)"/>

      <g transform="translate(100, 110)" filter="url(#batShadow)">
        <!-- Terminals (+ and -) -->
        <!-- Positive Terminal (Red Ring, Left) -->
        <rect x="50" y="10" width="34" height="30" rx="6" fill="url(#brassTerminal)" stroke="#334155" stroke-width="2"/>
        <circle cx="67" cy="12" r="14" fill="#dc2626"/>
        <text x="67" y="17" font-family="'Arial Black', sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">+</text>

        <!-- Negative Terminal (Black Ring, Right) -->
        <rect x="316" y="10" width="34" height="30" rx="6" fill="url(#brassTerminal)" stroke="#334155" stroke-width="2"/>
        <circle cx="333" cy="12" r="14" fill="#1e293b"/>
        <text x="333" y="16" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">-</text>

        <!-- Carry Handle in Stowed Position -->
        <path d="M 60 40 C 60 -10, 340 -10, 340 40" fill="none" stroke="#dc2626" stroke-width="12" stroke-linecap="round"/>
        <path d="M 80 40 C 80 5, 320 5, 320 40" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>

        <!-- Battery Top Lid (Red) -->
        <rect x="20" y="40" width="360" height="60" rx="10" fill="url(#topCover)" stroke="#7f1d1d" stroke-width="2"/>
        
        <!-- Cell Vent Plugs / Magic Eye -->
        <circle cx="90" cy="70" r="12" fill="#18181b" stroke="#7f1d1d" stroke-width="2"/>
        <circle cx="140" cy="70" r="12" fill="#18181b" stroke="#7f1d1d" stroke-width="2"/>
        <!-- Magic Eye Indicator (Green Ball) -->
        <circle cx="200" cy="70" r="14" fill="#022c22" stroke="#4ade80" stroke-width="3"/>
        <circle cx="200" cy="70" r="6" fill="#22c55e"/>
        
        <circle cx="260" cy="70" r="12" fill="#18181b" stroke="#7f1d1d" stroke-width="2"/>
        <circle cx="310" cy="70" r="12" fill="#18181b" stroke="#7f1d1d" stroke-width="2"/>

        <!-- Main Battery Casing (Black Matte) -->
        <rect x="20" y="95" width="360" height="290" rx="14" fill="url(#batteryBody)" stroke="#3f3f46" stroke-width="2"/>
        
        <!-- Structural Ribs -->
        <line x1="20" y1="150" x2="380" y2="150" stroke="#27272a" stroke-width="2"/>
        <line x1="20" y1="340" x2="380" y2="340" stroke="#27272a" stroke-width="2"/>

        <!-- Front Label Plate -->
        <rect x="40" y="165" width="320" height="155" rx="8" fill="#09090b" stroke="#27272a" stroke-width="2"/>

        <!-- Big GS LOGO -->
        <text x="60" y="240" font-family="'Arial Black', Impact, sans-serif" font-size="70" font-weight="900" fill="#E31B23" letter-spacing="-2">GS</text>
        <text x="175" y="210" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF">MAINTENANCE FREE</text>
        <text x="175" y="235" font-family="'Arial Black', sans-serif" font-size="28" font-weight="900" fill="#FACC15">MF 55B24L</text>
        <text x="175" y="260" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#94a3b8">12V 45Ah • CCA 430</text>

        <!-- Red & Silver Racing Strip -->
        <rect x="40" y="280" width="320" height="20" fill="#E31B23"/>
        <text x="200" y="295" font-family="'Arial Black', sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">PREMIUM JAPAN QUALITY • READY TO USE</text>
      </g>
    </svg>
  `),

  // 5. YSS G-Series Rear Shock Absorber with Red Spring & Gold Canister
  'yss-shock': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="goldCan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ca8a04"/>
          <stop offset="35%" stop-color="#fef08a"/>
          <stop offset="70%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#854d0e"/>
        </linearGradient>
        <linearGradient id="redSpring" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#991b1b"/>
          <stop offset="30%" stop-color="#ef4444"/>
          <stop offset="70%" stop-color="#dc2626"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </linearGradient>
        <linearGradient id="billetAlu" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#64748b"/>
          <stop offset="40%" stop-color="#f8fafc"/>
          <stop offset="80%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
        <filter id="shockShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="-10" dy="16" stdDeviation="16" flood-color="#000000" flood-opacity="0.22"/>
        </filter>
      </defs>

      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="320" cy="520" rx="150" ry="22" fill="#000000" opacity="0.16" filter="blur(14px)"/>

      <g transform="translate(300, 300) rotate(22)" filter="url(#shockShadow)">
        <!-- Top Mounting Eyelet (Billet Aluminum) -->
        <circle cx="0" cy="-210" r="32" fill="url(#billetAlu)" stroke="#334155" stroke-width="3"/>
        <circle cx="0" cy="-210" r="15" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
        <rect x="-20" y="-180" width="40" height="35" rx="4" fill="url(#billetAlu)" stroke="#334155" stroke-width="2"/>

        <!-- Piggyback Gold Gas Canister (Side Mount) -->
        <g transform="translate(45, -190)">
          <rect x="0" y="0" width="55" height="110" rx="14" fill="url(#goldCan)" stroke="#854d0e" stroke-width="2"/>
          <rect x="5" y="-10" width="45" height="14" rx="4" fill="#1e293b"/>
          <!-- YSS Stamping on Canister -->
          <text x="28" y="65" font-family="'Arial Black', Impact, sans-serif" font-size="16" font-weight="900" font-style="italic" fill="#dc2626" text-anchor="middle" transform="rotate(-90 28 65)">YSS</text>
        </g>
        <path d="M 15 -165 L 45 -165" stroke="url(#billetAlu)" stroke-width="16" stroke-linecap="round"/>

        <!-- Damper Rod (Chrome Shaft) -->
        <rect x="-10" y="-150" width="20" height="280" fill="url(#billetAlu)"/>

        <!-- Red Heavy Duty Coil Spring (Coiled Rings) -->
        <g fill="none" stroke="url(#redSpring)" stroke-width="22" stroke-linecap="round">
          <!-- Coil segments -->
          <path d="M-40 -120 Q 0 -135, 40 -115"/>
          <path d="M-40 -80 Q 0 -95, 40 -75"/>
          <path d="M-40 -40 Q 0 -55, 40 -35"/>
          <path d="M-40 0 Q 0 -15, 40 5"/>
          <path d="M-40 40 Q 0 25, 40 45"/>
          <path d="M-40 80 Q 0 65, 40 85"/>
          <path d="M-40 120 Q 0 105, 40 125"/>
        </g>

        <!-- Spring Preload Adjuster Rings (Black & Red Anodized) -->
        <rect x="-42" y="-140" width="84" height="16" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <rect x="-40" y="-126" width="80" height="12" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>

        <!-- Bottom Shock Mount & Rebound Dial -->
        <rect x="-24" y="140" width="48" height="40" rx="6" fill="url(#billetAlu)" stroke="#334155" stroke-width="2"/>
        <circle cx="0" cy="200" r="30" fill="url(#billetAlu)" stroke="#334155" stroke-width="3"/>
        <circle cx="0" cy="200" r="14" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
        <!-- Red Rebound Dial -->
        <circle cx="0" cy="155" r="8" fill="#dc2626"/>
      </g>
    </svg>
  `),

  // 6. TRW Motorcycle Brake Pads (Pair, Copper/Gold Metallic)
  'trw-brakepad': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="padBacking" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d97706"/>
          <stop offset="50%" stop-color="#b45309"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>
        <linearGradient id="frictionMaterial" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#57534e"/>
          <stop offset="50%" stop-color="#44403c"/>
          <stop offset="100%" stop-color="#292524"/>
        </linearGradient>
        <filter id="padShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="-6" dy="16" stdDeviation="14" flood-color="#000000" flood-opacity="0.22"/>
        </filter>
      </defs>

      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="510" rx="200" ry="24" fill="#000000" opacity="0.16" filter="blur(14px)"/>

      <!-- First Brake Pad (Left) -->
      <g transform="translate(180, 290) rotate(-15)" filter="url(#padShadow)">
        <!-- Backing Plate -->
        <path d="M-90 -120 C -40 -140, 40 -140, 90 -120 C 110 -110, 120 -80, 110 -50 L 85 100 C 80 120, -80 120, -85 100 L -110 -50 C -120 -80, -110 -110, -90 -120 Z" 
              fill="url(#padBacking)" stroke="#92400e" stroke-width="3"/>
        
        <!-- Mounting Holes -->
        <circle cx="-65" cy="-95" r="14" fill="#ffffff" stroke="#78350f" stroke-width="3"/>
        <circle cx="65" cy="-95" r="14" fill="#ffffff" stroke="#78350f" stroke-width="3"/>

        <!-- Sintered Friction Pad Layer -->
        <path d="M-70 -60 C -30 -75, 30 -75, 70 -60 L 60 80 C 40 90, -40 90, -60 80 Z" 
              fill="url(#frictionMaterial)" stroke="#1c1917" stroke-width="2"/>

        <!-- Heat Dissipation Slots -->
        <line x1="0" y1="-65" x2="0" y2="85" stroke="#1c1917" stroke-width="4"/>
        
        <!-- Stamped Model Mark -->
        <text x="0" y="30" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#78716c" text-anchor="middle">TRW MCB817</text>
      </g>

      <!-- Second Brake Pad (Right, overlapping) -->
      <g transform="translate(390, 310) rotate(18)" filter="url(#padShadow)">
        <!-- Backing Plate -->
        <path d="M-90 -120 C -40 -140, 40 -140, 90 -120 C 110 -110, 120 -80, 110 -50 L 85 100 C 80 120, -80 120, -85 100 L -110 -50 C -120 -80, -110 -110, -90 -120 Z" 
              fill="url(#padBacking)" stroke="#92400e" stroke-width="3"/>
        
        <!-- Mounting Holes -->
        <circle cx="-65" cy="-95" r="14" fill="#ffffff" stroke="#78350f" stroke-width="3"/>
        <circle cx="65" cy="-95" r="14" fill="#ffffff" stroke="#78350f" stroke-width="3"/>

        <!-- Sintered Friction Pad Layer -->
        <path d="M-70 -60 C -30 -75, 30 -75, 70 -60 L 60 80 C 40 90, -40 90, -60 80 Z" 
              fill="url(#frictionMaterial)" stroke="#1c1917" stroke-width="2"/>

        <!-- Heat Dissipation Slots -->
        <line x1="0" y1="-65" x2="0" y2="85" stroke="#1c1917" stroke-width="4"/>
        
        <!-- Stamped Model Mark -->
        <text x="0" y="30" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#78716c" text-anchor="middle">TRW MCB817</text>
      </g>
    </svg>
  `),

  // 7. Bosch Engine Air Filter A-3012 (Black Frame & Pleated Paper Media)
  'bosch-airfilter': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="rubberFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#27272a"/>
          <stop offset="50%" stop-color="#18181b"/>
          <stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
        <linearGradient id="filterMedia" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#fef9c3"/>
          <stop offset="100%" stop-color="#eab308"/>
        </linearGradient>
        <filter id="filterShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>

      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="510" rx="210" ry="26" fill="#000000" opacity="0.18" filter="blur(14px)"/>

      <g transform="translate(100, 140) rotate(-4)" filter="url(#filterShadow)">
        <!-- Outer Black Polyurethane Gasket Frame -->
        <rect x="0" y="0" width="400" height="280" rx="24" fill="url(#rubberFrame)" stroke="#3f3f46" stroke-width="4"/>
        
        <!-- White Pull-Tab for easy extraction -->
        <path d="M -15 120 L 5 120 L 5 160 L -15 160 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <text x="-5" y="145" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#0284c7" transform="rotate(-90 -5 145)">PULL</text>

        <!-- Inner Recessed Filter Chamber -->
        <rect x="35" y="30" width="330" height="220" rx="12" fill="#451a03" stroke="#27272a" stroke-width="3"/>

        <!-- Pleated Accordion Filter Media (Yellow/Cream Microfiber) -->
        <g stroke="#78350f" stroke-width="2.5" fill="none">
          <!-- Array of Pleats -->
          <path d="M 45 40 L 45 240 M 55 40 L 55 240 M 65 40 L 65 240 M 75 40 L 75 240 M 85 40 L 85 240 M 95 40 L 95 240 M 105 40 L 105 240 M 115 40 L 115 240 M 125 40 L 125 240 M 135 40 L 135 240 M 145 40 L 145 240 M 155 40 L 155 240 M 165 40 L 165 240 M 175 40 L 175 240 M 185 40 L 185 240 M 195 40 L 195 240 M 205 40 L 205 240 M 215 40 L 215 240 M 225 40 L 225 240 M 235 40 L 235 240 M 245 40 L 245 240 M 255 40 L 255 240 M 265 40 L 265 240 M 275 40 L 275 240 M 285 40 L 285 240 M 295 40 L 295 240 M 305 40 L 305 240 M 315 40 L 315 240 M 325 40 L 325 240 M 335 40 L 335 240 M 345 40 L 345 240 M 355 40 L 355 240" stroke="#ca8a04" stroke-width="4"/>
          <rect x="35" y="30" width="330" height="220" fill="url(#filterMedia)" opacity="0.45"/>
        </g>

        <!-- Stamped Bosch Logo & Part Number on Frame -->
        <text x="200" y="22" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#E21A1A" text-anchor="middle" letter-spacing="1">BOSCH A-3012 AIR FILTER</text>
      </g>
    </svg>
  `),

  // 8. D.I.D Racing Chain 428VX / 520VR46 & Steel Sprocket Kit
  'did-chain-sprocket': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <radialGradient id="sprocketSteel" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="60%" stop-color="#cbd5e1"/>
          <stop offset="90%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#334155"/>
        </radialGradient>
        <linearGradient id="goldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#eab308"/>
          <stop offset="80%" stop-color="#ca8a04"/>
          <stop offset="100%" stop-color="#854d0e"/>
        </linearGradient>
        <filter id="chainShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>

      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="520" rx="210" ry="24" fill="#000000" opacity="0.18" filter="blur(14px)"/>

      <!-- Large Steel Rear Sprocket in Background -->
      <g transform="translate(380, 280)" filter="url(#chainShadow)">
        <!-- Outer Teeth Ring -->
        <circle cx="0" cy="0" r="160" fill="url(#sprocketSteel)" stroke="#334155" stroke-width="4"/>
        
        <!-- CNC Lightening Cutout Windows -->
        <g fill="#FFFFFF" stroke="#475569" stroke-width="3">
          <circle cx="0" cy="-80" r="28"/>
          <circle cx="76" cy="-25" r="28"/>
          <circle cx="47" cy="65" r="28"/>
          <circle cx="-47" cy="65" r="28"/>
          <circle cx="-76" cy="-25" r="28"/>
        </g>

        <!-- Center Mounting Hub -->
        <circle cx="0" cy="0" r="45" fill="#FFFFFF" stroke="#1e293b" stroke-width="4"/>
        
        <!-- Bolt Holes -->
        <circle cx="0" cy="-55" r="7" fill="#1e293b"/>
        <circle cx="52" cy="-18" r="7" fill="#1e293b"/>
        <circle cx="32" cy="45" r="7" fill="#1e293b"/>
        <circle cx="-32" cy="45" r="7" fill="#1e293b"/>
        <circle cx="-52" cy="-18" r="7" fill="#1e293b"/>
        
        <text x="0" y="90" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#334155" text-anchor="middle">DID 428-45T</text>
      </g>

      <!-- Coiled Gold DID 428VX / 520 Chain in Foreground -->
      <g transform="translate(180, 320)" filter="url(#chainShadow)">
        <!-- Outer Loop Chain Links -->
        <rect x="-80" y="-120" width="160" height="240" rx="80" fill="none" stroke="#1e293b" stroke-width="38"/>
        <rect x="-80" y="-120" width="160" height="240" rx="80" fill="none" stroke="url(#goldPlate)" stroke-width="32"/>

        <!-- Gold Plates & Pins Detail -->
        <g fill="#1e293b" stroke="#fef08a" stroke-width="1.5">
          <circle cx="-80" cy="-120" r="6"/>
          <circle cx="-80" cy="-80" r="6"/>
          <circle cx="-80" cy="-40" r="6"/>
          <circle cx="-80" cy="0" r="6"/>
          <circle cx="-80" cy="40" r="6"/>
          <circle cx="-80" cy="80" r="6"/>
          <circle cx="-80" cy="120" r="6"/>
          <circle cx="80" cy="-120" r="6"/>
          <circle cx="80" cy="-80" r="6"/>
          <circle cx="80" cy="-40" r="6"/>
          <circle cx="80" cy="0" r="6"/>
          <circle cx="80" cy="40" r="6"/>
          <circle cx="80" cy="80" r="6"/>
          <circle cx="80" cy="120" r="6"/>
        </g>

        <!-- Red DID Logo Plate in Center -->
        <rect x="-60" y="-22" width="120" height="44" rx="8" fill="#D31820" stroke="#990000" stroke-width="2"/>
        <text x="0" y="8" font-family="'Arial Black', Impact, sans-serif" font-size="24" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">D.I.D</text>
        <text x="0" y="40" font-family="'Arial Black', sans-serif" font-size="11" font-weight="900" fill="#ca8a04" text-anchor="middle">428VX GOLD</text>
      </g>
    </svg>
  `),

  // 9. Profender X-Series Monotube Shock Absorber
  'profender-shock': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="proAlu" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#334155"/>
          <stop offset="40%" stop-color="#e2e8f0"/>
          <stop offset="80%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
        <linearGradient id="proSpring" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="50%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="520" rx="160" ry="20" fill="#000000" opacity="0.16" filter="blur(14px)"/>

      <g transform="translate(300, 300) rotate(-28)">
        <!-- Top Eyelet Mount -->
        <circle cx="0" cy="-210" r="32" fill="url(#proAlu)" stroke="#1e293b" stroke-width="3"/>
        <circle cx="0" cy="-210" r="14" fill="#0f172a"/>

        <!-- Aluminum Monotube Cylinder Body -->
        <rect x="-30" y="-170" width="60" height="150" rx="6" fill="url(#proAlu)" stroke="#1e293b" stroke-width="3"/>
        
        <!-- Profender Red Logo Badge on Cylinder -->
        <rect x="-24" y="-120" width="48" height="40" rx="4" fill="#E60000"/>
        <text x="0" y="-95" font-family="'Arial Black', sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">PROFENDER</text>

        <!-- Chrome Shaft -->
        <rect x="-12" y="-20" width="24" height="220" fill="url(#proAlu)"/>

        <!-- Silver Tuned Spring -->
        <g fill="none" stroke="url(#proSpring)" stroke-width="22" stroke-linecap="round">
          <path d="M-45 -80 Q 0 -95, 45 -75"/>
          <path d="M-45 -30 Q 0 -45, 45 -25"/>
          <path d="M-45 20 Q 0 5, 45 25"/>
          <path d="M-45 70 Q 0 55, 45 75"/>
          <path d="M-45 120 Q 0 105, 45 125"/>
        </g>

        <!-- Bottom Eyelet Mount -->
        <circle cx="0" cy="210" r="32" fill="url(#proAlu)" stroke="#1e293b" stroke-width="3"/>
        <circle cx="0" cy="210" r="14" fill="#0f172a"/>
        <!-- 8-Step Rebound Adjuster Dial (Blue) -->
        <circle cx="0" cy="170" r="12" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
      </g>
    </svg>
  `),

  // 10. Michelin Pilot Street 2 Motorcycle Tire
  'michelin-tire': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <radialGradient id="tireRubber" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#3f3f46"/>
          <stop offset="50%" stop-color="#18181b"/>
          <stop offset="90%" stop-color="#09090b"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="520" rx="180" ry="24" fill="#000000" opacity="0.2" filter="blur(14px)"/>

      <g transform="translate(300, 290)">
        <!-- Outer Tire Ring -->
        <circle cx="0" cy="0" r="210" fill="url(#tireRubber)" stroke="#27272a" stroke-width="4"/>
        
        <!-- Tread Shoulder -->
        <circle cx="0" cy="0" r="195" fill="none" stroke="#27272a" stroke-width="6"/>

        <!-- Directional Water Siping Grooves (V-grooves) -->
        <g stroke="#09090b" stroke-width="5" stroke-linecap="round" fill="none">
          <path d="M -50 -185 Q 0 -195, 50 -185"/>
          <path d="M -130 -140 Q -90 -165, -50 -140"/>
          <path d="M 130 -140 Q 90 -165, 50 -140"/>
          <path d="M -185 -50 Q -195 0, -185 50"/>
          <path d="M 185 -50 Q 195 0, 185 50"/>
          <path d="M -130 140 Q -90 165, -50 140"/>
          <path d="M 130 140 Q 90 165, 50 140"/>
          <path d="M -50 185 Q 0 195, 50 185"/>
        </g>

        <!-- Inner Rim Cutout (Transparent Studio Look) -->
        <circle cx="0" cy="0" r="125" fill="#FFFFFF" stroke="#27272a" stroke-width="6"/>
        <circle cx="0" cy="0" r="130" fill="none" stroke="#3f3f46" stroke-width="2"/>

        <!-- Michelin Yellow/Blue Stamping -->
        <g transform="translate(0, -150)">
          <rect x="-45" y="-12" width="90" height="24" rx="4" fill="#003580"/>
          <text x="0" y="4" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" font-style="italic" fill="#FCEB00" text-anchor="middle">MICHELIN</text>
        </g>
        <text x="0" y="165" font-family="'Arial Black', sans-serif" font-size="11" font-weight="bold" fill="#71717a" text-anchor="middle">PILOT STREET 2</text>
      </g>
    </svg>
  `),

  // 11. Yuasa YTZ6V Motorcycle Battery
  'yuasa-battery': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="yuasaCase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#18181b"/>
          <stop offset="40%" stop-color="#27272a"/>
          <stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="520" rx="160" ry="20" fill="#000000" opacity="0.18" filter="blur(14px)"/>

      <g transform="translate(160, 150)">
        <!-- Terminals -->
        <rect x="30" y="10" width="30" height="25" rx="4" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
        <rect x="220" y="10" width="30" height="25" rx="4" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>

        <!-- Top Cap -->
        <rect x="15" y="30" width="250" height="40" rx="8" fill="#27272a" stroke="#3f3f46" stroke-width="2"/>

        <!-- Main Body -->
        <rect x="15" y="65" width="250" height="260" rx="10" fill="url(#yuasaCase)" stroke="#3f3f46" stroke-width="2"/>

        <!-- Orange / White Yuasa Front Label -->
        <rect x="30" y="100" width="220" height="180" rx="6" fill="#09090b" stroke="#27272a" stroke-width="2"/>

        <rect x="40" y="115" width="200" height="42" rx="6" fill="#E60000"/>
        <text x="140" y="145" font-family="'Arial Black', Impact, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">YUASA</text>

        <text x="140" y="195" font-family="'Arial Black', sans-serif" font-size="24" font-weight="900" fill="#F97316" text-anchor="middle">YTZ6V</text>
        <text x="140" y="225" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">12V 5Ah (10HR)</text>
        <text x="140" y="250" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#94A3B8" text-anchor="middle">VRLA / GEL BATTERY</text>
      </g>
    </svg>
  `),

  // 12. Osram LED Headlight Bulb Gen2 (H4 / LEDriving)
  'osram-led': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="ledAlu" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="35%" stop-color="#f8fafc"/>
          <stop offset="70%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
        <radialGradient id="ledLightGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="#bae6fd" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="510" rx="160" ry="20" fill="#000000" opacity="0.16" filter="blur(14px)"/>

      <g transform="translate(300, 300) rotate(32)">
        <!-- Cooling Fan Base & Heatsink Fins (Bottom) -->
        <rect x="-45" y="110" width="90" height="70" rx="12" fill="#1e293b" stroke="#334155" stroke-width="3"/>
        <line x1="-35" y1="125" x2="35" y2="125" stroke="#475569" stroke-width="3"/>
        <line x1="-35" y1="145" x2="35" y2="145" stroke="#475569" stroke-width="3"/>
        <line x1="-35" y1="165" x2="35" y2="165" stroke="#475569" stroke-width="3"/>

        <!-- H4 Flange Mounting Ring -->
        <circle cx="0" cy="95" r="50" fill="url(#ledAlu)" stroke="#1e293b" stroke-width="3"/>
        <rect x="-55" y="90" width="110" height="12" rx="4" fill="url(#ledAlu)"/>

        <!-- Aviation Aluminum Core Stem -->
        <rect x="-18" y="-120" width="36" height="215" rx="6" fill="url(#ledAlu)" stroke="#334155" stroke-width="2"/>

        <!-- High-Power CSP LED Chips (Top) -->
        <rect x="-10" y="-95" width="20" height="35" rx="2" fill="#facc15" stroke="#eab308" stroke-width="1.5"/>
        <circle cx="0" cy="-78" r="28" fill="url(#ledLightGlow)"/>

        <!-- Top Glare Shield / Hood -->
        <path d="M -16 -120 L 16 -120 L 12 -145 L -12 -145 Z" fill="#475569" stroke="#1e293b" stroke-width="2"/>

        <!-- Osram Orange Logo Stamp -->
        <g transform="translate(0, 40)">
          <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FF6600"/>
          <text x="0" y="4" font-family="'Arial Black', sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">OSRAM</text>
        </g>
      </g>
    </svg>
  `),
};

// Helper function to get product asset image with fallback
export const getProductAsset = (key) => {
  return PRODUCT_ASSETS[key] || PRODUCT_ASSETS['brembo-rotor'];
};

// Helper function to get brand logo SVG
export const getBrandLogo = (brandName) => {
  return BRAND_LOGOS[brandName] || null;
};
