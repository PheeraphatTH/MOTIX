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

  Akrapovic: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" width="160" height="40">
      <rect width="160" height="40" rx="4" fill="#18181B"/>
      <!-- Akrapovic Red Scorpion Graphic / stylized curve -->
      <path d="M12 12 Q20 28 28 14 Q32 20 24 28 Z" fill="#E60000"/>
      <circle cx="28" cy="14" r="3" fill="#E60000"/>
      <text x="38" y="26" font-family="'Arial Black', Impact, sans-serif" font-size="16" font-weight="900" font-style="italic" fill="#FFFFFF" letter-spacing="0.5">AKRAPOVIČ</text>
    </svg>
  `),

  'K&N': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <rect width="140" height="40" rx="4" fill="#E31B23"/>
      <text x="70" y="28" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">K&amp;N</text>
    </svg>
  `),

  KN: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <rect width="140" height="40" rx="4" fill="#E31B23"/>
      <text x="70" y="28" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">K&amp;N</text>
    </svg>
  `),

  Enkei: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40">
      <rect width="140" height="40" rx="4" fill="#003580"/>
      <text x="70" y="28" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">ENKEI</text>
    </svg>
  `),

  Castrol: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" width="150" height="40">
      <rect width="150" height="40" rx="4" fill="#007A33"/>
      <text x="75" y="27" font-family="'Arial Black', Impact, sans-serif" font-size="20" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">Castrol</text>
      <circle cx="132" cy="20" r="4" fill="#E31B23"/>
    </svg>
  `),

  Ohlins: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" width="150" height="40">
      <rect width="150" height="40" rx="4" fill="#00529B"/>
      <text x="75" y="28" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#FFCC00" text-anchor="middle">ÖHLINS</text>
    </svg>
  `),

  'Öhlins': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" width="150" height="40">
      <rect width="150" height="40" rx="4" fill="#00529B"/>
      <text x="75" y="28" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#FFCC00" text-anchor="middle">ÖHLINS</text>
    </svg>
  `),

  Bando: toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" width="150" height="40">
      <rect width="150" height="40" rx="4" fill="#E60000"/>
      <text x="75" y="28" font-family="'Arial Black', Impact, sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">BANDO</text>
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

  // 13. Akrapovic Titanium Slip-On Motorcycle Exhaust
  'akrapovic-exhaust': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="tiGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="25%" stop-color="#94a3b8"/>
          <stop offset="50%" stop-color="#cbd5e1"/>
          <stop offset="70%" stop-color="#64748b"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
        <linearGradient id="heatBluing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8"/>
          <stop offset="40%" stop-color="#a855f7" stop-opacity="0.85"/>
          <stop offset="80%" stop-color="#3b82f6" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.9"/>
        </linearGradient>
        <linearGradient id="carbonEndCap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#27272a"/>
          <stop offset="50%" stop-color="#09090b"/>
          <stop offset="100%" stop-color="#18181b"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="500" rx="200" ry="24" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <g transform="translate(140, 200) rotate(-18)">
        <!-- Link pipe with heat bluing gradient -->
        <path d="M-50 180 C -20 180, 20 150, 40 100 L 75 100 C 55 160, 0 200, -50 200 Z" fill="url(#heatBluing)" stroke="#334155" stroke-width="2"/>
        <line x1="-20" y1="183" x2="-10" y2="197" stroke="#fbbf24" stroke-width="3"/>
        <line x1="5" y1="165" x2="18" y2="180" stroke="#c084fc" stroke-width="3"/>
        <line x1="30" y1="135" x2="45" y2="148" stroke="#38bdf8" stroke-width="3"/>

        <!-- Main Titanium Hexagonal Canister Body -->
        <path d="M40 70 L 280 40 L 300 130 L 70 150 Z" fill="url(#tiGrad)" stroke="#1e293b" stroke-width="3"/>
        
        <!-- Carbon Fiber End Cap -->
        <path d="M280 40 L 330 30 C 350 30, 365 70, 360 110 C 355 135, 335 145, 300 130 Z" fill="url(#carbonEndCap)" stroke="#09090b" stroke-width="3"/>
        
        <!-- Twin Exhaust Outlets -->
        <ellipse cx="335" cy="70" rx="14" ry="18" fill="#09090b" stroke="#3f3f46" stroke-width="2.5"/>
        <ellipse cx="335" cy="102" rx="12" ry="15" fill="#09090b" stroke="#3f3f46" stroke-width="2.5"/>
        
        <!-- Carbon Strap / Bracket Clamp -->
        <rect x="190" y="35" width="26" height="118" rx="4" fill="#18181b" stroke="#71717a" stroke-width="1.5"/>
        <circle cx="203" cy="28" r="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
        <circle cx="203" cy="28" r="3" fill="#0f172a"/>

        <!-- Akrapovic Logo Plate -->
        <g transform="translate(100, 75) rotate(-5)">
          <rect x="-10" y="-8" width="85" height="34" rx="4" fill="#09090b" stroke="#27272a" stroke-width="1.5"/>
          <path d="M-2 10 Q3 20 8 10 Q12 15 6 22 Z" fill="#E60000"/>
          <circle cx="8" cy="10" r="2.5" fill="#E60000"/>
          <text x="14" y="14" font-family="'Arial Black', sans-serif" font-size="9" font-weight="900" font-style="italic" fill="#FFFFFF">AKRAPOVIČ</text>
        </g>
      </g>
    </svg>
  `),

  // 14. K&N High-Flow Performance Cone / Drop-in Air Filter
  'kn-airfilter': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <radialGradient id="knRedCotton" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="60%" stop-color="#b91c1c"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </radialGradient>
        <linearGradient id="knRubber" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#27272a"/>
          <stop offset="50%" stop-color="#09090b"/>
          <stop offset="100%" stop-color="#18181b"/>
        </linearGradient>
        <linearGradient id="chromeCap" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="30%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="510" rx="190" ry="24" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <g transform="translate(300, 300)">
        <!-- Bottom Flange Rubber Mount & Hose Clamp -->
        <rect x="-80" y="140" width="160" height="50" rx="10" fill="url(#knRubber)" stroke="#09090b" stroke-width="3"/>
        <rect x="-85" y="150" width="170" height="18" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
        <circle cx="60" cy="159" r="6" fill="#334155"/>
        <line x1="56" y1="159" x2="64" y2="159" stroke="#ffffff" stroke-width="2"/>

        <!-- Tapered Cone Filter Body (K&N Signature Oiled Red Pleated Cotton) -->
        <path d="M-130 140 L -90 -110 L 90 -110 L 130 140 Z" fill="url(#knRedCotton)" stroke="#7f1d1d" stroke-width="3"/>
        
        <!-- Pleated Wire Mesh Vertical Lines -->
        <g stroke="#3f3f46" stroke-width="3" opacity="0.85">
          <line x1="-120" y1="140" x2="-84" y2="-110"/>
          <line x1="-95" y1="140" x2="-66" y2="-110"/>
          <line x1="-70" y1="140" x2="-48" y2="-110"/>
          <line x1="-45" y1="140" x2="-30" y2="-110"/>
          <line x1="-20" y1="140" x2="-12" y2="-110"/>
          <line x1="0" y1="140" x2="0" y2="-110"/>
          <line x1="20" y1="140" x2="12" y2="-110"/>
          <line x1="45" y1="140" x2="30" y2="-110"/>
          <line x1="70" y1="140" x2="48" y2="-110"/>
          <line x1="95" y1="140" x2="66" y2="-110"/>
          <line x1="120" y1="140" x2="84" y2="-110"/>
        </g>

        <!-- Top Chrome Cap / Embossed K&N Plate -->
        <ellipse cx="0" cy="-110" rx="90" ry="24" fill="url(#chromeCap)" stroke="#334155" stroke-width="3"/>
        <rect x="-42" y="-120" width="84" height="22" rx="4" fill="#dc2626"/>
        <text x="0" y="-105" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">K&amp;N</text>
      </g>
    </svg>
  `),

  // 15. Enkei RPF1 Lightweight Racing Alloy Wheel
  'enkei-wheel': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <radialGradient id="silverRim" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#e2e8f0"/>
          <stop offset="70%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#334155"/>
        </radialGradient>
        <radialGradient id="hubCenter" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="100%" stop-color="#09090b"/>
        </radialGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="520" rx="200" ry="24" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <g transform="translate(300, 300)">
        <!-- Outer Lip / Barrel -->
        <circle cx="0" cy="0" r="215" fill="url(#silverRim)" stroke="#475569" stroke-width="4"/>
        <circle cx="0" cy="0" r="195" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
        <circle cx="0" cy="0" r="185" fill="#334155" stroke="#1e293b" stroke-width="3"/>
        <circle cx="0" cy="0" r="175" fill="#0f172a"/>

        <!-- Dual 6-Spoke Twin Pattern (Enkei RPF1 iconic 2x6 design) -->
        <g stroke="url(#silverRim)" stroke-width="14" stroke-linecap="round">
          <!-- Spoke Pair 1 (Top) -->
          <line x1="-12" y1="-50" x2="-25" y2="-175"/>
          <line x1="12" y1="-50" x2="25" y2="-175"/>
          <!-- Spoke Pair 2 (Top Right) -->
          <line x1="42" y1="-30" x2="148" y2="-92"/>
          <line x1="52" y1="-12" x2="168" y2="-52"/>
          <!-- Spoke Pair 3 (Bottom Right) -->
          <line x1="52" y1="12" x2="168" y2="52"/>
          <line x1="42" y1="30" x2="148" y2="92"/>
          <!-- Spoke Pair 4 (Bottom) -->
          <line x1="12" y1="50" x2="25" y2="175"/>
          <line x1="-12" y1="50" x2="-25" y2="175"/>
          <!-- Spoke Pair 5 (Bottom Left) -->
          <line x1="-42" y1="30" x2="-148" y2="92"/>
          <line x1="-52" y1="12" x2="-168" y2="52"/>
          <!-- Spoke Pair 6 (Top Left) -->
          <line x1="-52" y1="-12" x2="-168" y2="-52"/>
          <line x1="-42" y1="-30" x2="-148" y2="-92"/>
        </g>

        <!-- Center Hub -->
        <circle cx="0" cy="0" r="60" fill="url(#hubCenter)" stroke="#64748b" stroke-width="3"/>
        <circle cx="0" cy="0" r="28" fill="#020617"/>

        <!-- 5 Lug Holes (5x114.3) with Chrome Acorn Lug Nuts -->
        <g fill="#e2e8f0" stroke="#0f172a" stroke-width="2">
          <circle cx="0" cy="-38" r="7"/>
          <circle cx="36" cy="-12" r="7"/>
          <circle cx="22" cy="31" r="7"/>
          <circle cx="-22" cy="31" r="7"/>
          <circle cx="-36" cy="-12" r="7"/>
        </g>

        <!-- Enkei Blue Logo Stamp on Rim Lip -->
        <g transform="translate(0, -188)">
          <rect x="-25" y="-7" width="50" height="14" rx="3" fill="#003580"/>
          <text x="0" y="3" font-family="'Arial Black', sans-serif" font-size="8" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">ENKEI</text>
        </g>
      </g>
    </svg>
  `),

  // 16. Castrol EDGE 5W-30 Advanced Full Synthetic Engine Oil 4L
  'castrol-edge': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="goldBottle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#b45309"/>
          <stop offset="25%" stop-color="#f59e0b"/>
          <stop offset="50%" stop-color="#fbbf24"/>
          <stop offset="75%" stop-color="#d97706"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>
        <linearGradient id="redCap" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#b91c1c"/>
          <stop offset="50%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#991b1b"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="520" rx="180" ry="24" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <g transform="translate(170, 110)">
        <!-- Red Pour Spout Cap -->
        <rect x="50" y="10" width="50" height="35" rx="6" fill="url(#redCap)" stroke="#7f1d1d" stroke-width="2"/>
        <line x1="60" y1="18" x2="90" y2="18" stroke="#fecaca" stroke-width="2"/>
        <line x1="60" y1="28" x2="90" y2="28" stroke="#fecaca" stroke-width="2"/>

        <!-- Premium Gold Bottle Contoured Body -->
        <path d="M 45 45 L 105 45 L 115 90 L 220 120 C 240 125, 255 145, 255 170 L 255 380 C 255 400, 240 410, 220 410 L 35 410 C 15 410, 5 400, 5 380 L 5 170 C 5 145, 20 125, 40 120 Z" fill="url(#goldBottle)" stroke="#78350f" stroke-width="3"/>

        <!-- Integrated Handle Grips -->
        <path d="M 125 150 C 125 135, 175 135, 195 150 C 205 160, 205 210, 185 220 C 165 230, 125 210, 125 150 Z" fill="#FFFFFF" stroke="#b45309" stroke-width="2"/>

        <!-- Front Label Graphic -->
        <rect x="25" y="220" width="210" height="175" rx="8" fill="#18181b" stroke="#3f3f46" stroke-width="2"/>
        
        <!-- Castrol Green & Red Header -->
        <rect x="35" y="230" width="190" height="38" rx="4" fill="#007A33"/>
        <text x="130" y="256" font-family="'Arial Black', Impact, sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">Castrol</text>
        <circle cx="188" cy="248" r="5" fill="#E31B23"/>

        <!-- EDGE Titanium FST Badge -->
        <text x="130" y="295" font-family="'Arial Black', sans-serif" font-size="24" font-weight="900" font-style="italic" fill="#fbbf24" text-anchor="middle">EDGE</text>
        <text x="130" y="318" font-family="'Arial Black', sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">5W-30 LL</text>
        <text x="130" y="340" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">FLUID TITANIUM TECHNOLOGY</text>
        <text x="130" y="360" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#a1a1aa" text-anchor="middle">FULL SYNTHETIC • 4L</text>
      </g>
    </svg>
  `),

  // 17. Ohlins Performance Rear Monoshock with Piggyback Resevoir
  'ohlins-shock': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="ohlinsGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#b45309"/>
          <stop offset="35%" stop-color="#fef08a"/>
          <stop offset="60%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#854d0e"/>
        </linearGradient>
        <linearGradient id="ohlinsYellow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ca8a04"/>
          <stop offset="40%" stop-color="#fde047"/>
          <stop offset="70%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#a16207"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="515" rx="170" ry="22" fill="#000000" opacity="0.18" filter="blur(15px)"/>

      <g transform="translate(280, 270) rotate(-12)">
        <!-- Top Mounting Eyelet -->
        <circle cx="0" cy="-180" r="32" fill="url(#ohlinsGold)" stroke="#78350f" stroke-width="3"/>
        <circle cx="0" cy="-180" r="14" fill="#0f172a"/>

        <!-- Piggyback Subtank Reservoir (Gold Anodized Aluminium) -->
        <g transform="translate(65, -160)">
          <rect x="0" y="0" width="60" height="135" rx="14" fill="url(#ohlinsGold)" stroke="#78350f" stroke-width="3"/>
          <line x1="-20" y1="30" x2="0" y2="30" stroke="#78350f" stroke-width="12" stroke-linecap="round"/>
          <rect x="8" y="15" width="44" height="28" rx="4" fill="#00529b"/>
          <text x="30" y="34" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" font-style="italic" fill="#FFCC00" text-anchor="middle">ÖHLINS</text>
          <!-- Compression Clicker Knob -->
          <circle cx="30" cy="-10" r="10" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
        </g>

        <!-- Main Damper Body & Shaft -->
        <rect x="-24" y="-150" width="48" height="260" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
        <rect x="-14" y="-30" width="28" height="150" fill="#cbd5e1"/>

        <!-- Iconic Ohlins Yellow Racing Spring -->
        <g fill="none" stroke="url(#ohlinsYellow)" stroke-width="26" stroke-linecap="round">
          <path d="M-50 -100 Q 0 -115, 50 -95"/>
          <path d="M-50 -50 Q 0 -65, 50 -45"/>
          <path d="M-50 0 Q 0 -15, 50 5"/>
          <path d="M-50 50 Q 0 35, 50 55"/>
          <path d="M-50 100 Q 0 85, 50 105"/>
        </g>

        <!-- Bottom Eyelet & Rebound Dial -->
        <circle cx="0" cy="180" r="32" fill="url(#ohlinsGold)" stroke="#78350f" stroke-width="3"/>
        <circle cx="0" cy="180" r="14" fill="#0f172a"/>
        <circle cx="0" cy="140" r="10" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
      </g>
    </svg>
  `),

  // 18. Denso Iridium TT Spark Plugs (4-Pack)
  'denso-sparkplug': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="densoSteel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="35%" stop-color="#cbd5e1"/>
          <stop offset="70%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="510" rx="160" ry="22" fill="#000000" opacity="0.18" filter="blur(15px)"/>

      <g transform="translate(300, 300) rotate(45)">
        <!-- Threaded Lower Base & 0.4mm Twin-Tip Iridium Center Electrode -->
        <rect x="-18" y="90" width="36" height="90" fill="url(#densoSteel)" stroke="#1e293b" stroke-width="2"/>
        <line x1="-18" y1="105" x2="18" y2="105" stroke="#1e293b" stroke-width="3"/>
        <line x1="-18" y1="125" x2="18" y2="125" stroke="#1e293b" stroke-width="3"/>
        <line x1="-18" y1="145" x2="18" y2="145" stroke="#1e293b" stroke-width="3"/>
        <line x1="-18" y1="165" x2="18" y2="165" stroke="#1e293b" stroke-width="3"/>

        <!-- Ground J-Gap Electrode -->
        <path d="M-8 180 L -8 205 L 4 205" stroke="#cbd5e1" stroke-width="5" fill="none" stroke-linecap="square"/>
        <!-- Fine Needle Twin Tip -->
        <rect x="-2" y="180" width="4" height="15" fill="#38bdf8"/>

        <!-- Metal Hex Nut Shell -->
        <polygon points="-32,50 32,50 40,80 32,90 -32,90 -40,80" fill="url(#densoSteel)" stroke="#1e293b" stroke-width="3"/>

        <!-- White Ceramic Insulator Ribs -->
        <rect x="-22" y="-120" width="44" height="170" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        <!-- 5 Corrugated Ribs -->
        <circle cx="0" cy="-60" r="24" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="0" cy="-80" r="24" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="0" cy="-100" r="24" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>

        <!-- Denso Red Stamping -->
        <g transform="translate(0, -10)">
          <text x="0" y="0" font-family="'Arial Black', sans-serif" font-size="11" font-weight="900" fill="#E60012" text-anchor="middle">DENSO</text>
          <text x="0" y="13" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#0284c7" text-anchor="middle">IRIDIUM TT</text>
        </g>

        <!-- Top Brass Terminal Stud -->
        <rect x="-8" y="-145" width="16" height="25" rx="4" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
      </g>
    </svg>
  `),

  // 19. Brembo GT 6-Piston Performance Big Brake Kit (BBK)
  'brembo-bbk': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <radialGradient id="discDrilled" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="45%" stop-color="#e2e8f0"/>
          <stop offset="50%" stop-color="#cbd5e1"/>
          <stop offset="75%" stop-color="#f8fafc"/>
          <stop offset="90%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#475569"/>
        </radialGradient>
        <linearGradient id="yellowCaliper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="35%" stop-color="#facc15"/>
          <stop offset="75%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="515" rx="210" ry="24" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <g transform="translate(300, 310)">
        <!-- Two-Piece Floating Rotor 355mm with Drilled Holes -->
        <circle cx="0" cy="0" r="220" fill="url(#discDrilled)" stroke="#64748b" stroke-width="3"/>
        <circle cx="0" cy="0" r="140" fill="none" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Drilled Pattern Ring -->
        <g fill="#1e293b">
          <circle cx="-130" cy="-100" r="4.5"/>
          <circle cx="-155" cy="-75" r="4.5"/>
          <circle cx="130" cy="100" r="4.5"/>
          <circle cx="155" cy="75" r="4.5"/>
          <circle cx="-100" cy="130" r="4.5"/>
          <circle cx="-75" cy="155" r="4.5"/>
          <circle cx="100" cy="-130" r="4.5"/>
          <circle cx="75" cy="-155" r="4.5"/>
          <circle cx="-160" cy="0" r="4.5"/>
          <circle cx="160" cy="0" r="4.5"/>
          <circle cx="0" cy="-160" r="4.5"/>
          <circle cx="0" cy="160" r="4.5"/>
        </g>

        <!-- Anodized Gold/Black Bell Center Hat with Floating Bobbins -->
        <circle cx="0" cy="0" r="115" fill="#0f172a" stroke="#ca8a04" stroke-width="3"/>
        <circle cx="0" cy="0" r="42" fill="#020617"/>
        
        <!-- 10 Floating Drive Bobbins -->
        <g fill="#ca8a04">
          <circle cx="0" cy="-115" r="6"/>
          <circle cx="67.5" cy="-93" r="6"/>
          <circle cx="109" cy="-35.5" r="6"/>
          <circle cx="109" cy="35.5" r="6"/>
          <circle cx="67.5" cy="93" r="6"/>
          <circle cx="0" cy="115" r="6"/>
          <circle cx="-67.5" cy="93" r="6"/>
          <circle cx="-109" cy="35.5" r="6"/>
          <circle cx="-109" cy="-35.5" r="6"/>
          <circle cx="-67.5" cy="-93" r="6"/>
        </g>
      </g>

      <!-- Brembo Racing Yellow Monobloc 6-Piston Caliper -->
      <g transform="translate(340, 110)">
        <path d="M-20 60 C 20 20, 80 0, 150 10 C 180 15, 200 40, 195 70 C 190 120, 175 180, 135 220 C 105 250, 75 255, 45 235 C 20 215, 10 180, 15 150 C -5 130, -20 100, -20 60 Z" 
              fill="url(#yellowCaliper)" stroke="#ca8a04" stroke-width="3"/>
        
        <!-- Caliper highlights & 3 Big Piston Outlines -->
        <circle cx="110" cy="75" r="22" fill="#ca8a04" stroke="#a16207" stroke-width="2"/>
        <circle cx="85" cy="130" r="22" fill="#ca8a04" stroke="#a16207" stroke-width="2"/>
        <circle cx="55" cy="185" r="22" fill="#ca8a04" stroke="#a16207" stroke-width="2"/>

        <!-- Black Brembo Signature Stamp on Caliper -->
        <g transform="translate(70, 120) rotate(52)">
          <circle cx="8" cy="8" r="6" fill="#000000"/>
          <circle cx="8" cy="8" r="3" fill="#facc15"/>
          <text x="18" y="12" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" font-weight="900" fill="#000000" letter-spacing="-0.5">brembo</text>
        </g>
      </g>
    </svg>
  `),

  // 20. DID 520 VR46 Limited Edition Gold & Black Motorcycle Chain
  'did-chain-gold': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="goldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#facc15"/>
          <stop offset="80%" stop-color="#ca8a04"/>
          <stop offset="100%" stop-color="#854d0e"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="515" rx="190" ry="24" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <g transform="translate(130, 200)">
        <!-- 4 Interlocking Gold & Black Drive Chain Links -->
        <!-- Link 1 -->
        <g transform="translate(0, 50)">
          <path d="M 30 10 C 45 10, 55 20, 55 35 C 55 50, 45 60, 30 60 L 100 60 C 115 60, 125 50, 125 35 C 125 20, 115 10, 100 10 Z" fill="url(#goldPlate)" stroke="#854d0e" stroke-width="3"/>
          <circle cx="45" cy="35" r="14" fill="#0f172a" stroke="#ca8a04" stroke-width="2"/>
          <circle cx="110" cy="35" r="14" fill="#0f172a" stroke="#ca8a04" stroke-width="2"/>
          <text x="77" y="38" font-family="'Arial Black', sans-serif" font-size="9" font-weight="900" fill="#000000" text-anchor="middle">D.I.D</text>
        </g>

        <!-- Link 2 -->
        <g transform="translate(65, 50)">
          <path d="M 30 10 C 45 10, 55 20, 55 35 C 55 50, 45 60, 30 60 L 100 60 C 115 60, 125 50, 125 35 C 125 20, 115 10, 100 10 Z" fill="#18181b" stroke="#71717a" stroke-width="3"/>
          <circle cx="45" cy="35" r="14" fill="url(#goldPlate)" stroke="#3f3f46" stroke-width="2"/>
          <circle cx="110" cy="35" r="14" fill="url(#goldPlate)" stroke="#3f3f46" stroke-width="2"/>
          <text x="77" y="38" font-family="'Arial Black', sans-serif" font-size="8" font-weight="bold" fill="#facc15" text-anchor="middle">520VX3</text>
        </g>

        <!-- Link 3 -->
        <g transform="translate(130, 50)">
          <path d="M 30 10 C 45 10, 55 20, 55 35 C 55 50, 45 60, 30 60 L 100 60 C 115 60, 125 50, 125 35 C 125 20, 115 10, 100 10 Z" fill="url(#goldPlate)" stroke="#854d0e" stroke-width="3"/>
          <circle cx="45" cy="35" r="14" fill="#0f172a" stroke="#ca8a04" stroke-width="2"/>
          <circle cx="110" cy="35" r="14" fill="#0f172a" stroke="#ca8a04" stroke-width="2"/>
          <text x="77" y="38" font-family="'Arial Black', sans-serif" font-size="9" font-weight="900" fill="#000000" text-anchor="middle">JAPAN</text>
        </g>

        <!-- Link 4 -->
        <g transform="translate(195, 50)">
          <path d="M 30 10 C 45 10, 55 20, 55 35 C 55 50, 45 60, 30 60 L 100 60 C 115 60, 125 50, 125 35 C 125 20, 115 10, 100 10 Z" fill="#18181b" stroke="#71717a" stroke-width="3"/>
          <circle cx="45" cy="35" r="14" fill="url(#goldPlate)" stroke="#3f3f46" stroke-width="2"/>
          <circle cx="110" cy="35" r="14" fill="url(#goldPlate)" stroke="#3f3f46" stroke-width="2"/>
          <text x="77" y="38" font-family="'Arial Black', sans-serif" font-size="8" font-weight="bold" fill="#facc15" text-anchor="middle">X-RING</text>
        </g>
      </g>
    </svg>
  `),

  // 21. DID 428D Chain & Sprocket Set for Wave 110i / Wave 125i
  'did-wave-kit': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <radialGradient id="sprocketGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#334155"/>
          <stop offset="60%" stop-color="#1e293b"/>
          <stop offset="90%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
        <linearGradient id="chainSteel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e2e8f0"/>
          <stop offset="50%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
        <filter id="waveShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="4" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="510" rx="220" ry="24" fill="#000000" opacity="0.16" filter="blur(16px)"/>

      <!-- Large Rear Sprocket (36T) -->
      <g transform="translate(240, 280)" filter="url(#waveShadow)">
        <circle cx="0" cy="0" r="150" fill="url(#sprocketGrad)" stroke="#64748b" stroke-width="4"/>
        <!-- Lightening Holes -->
        <circle cx="0" cy="-75" r="28" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
        <circle cx="65" cy="-37" r="28" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
        <circle cx="65" cy="37" r="28" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
        <circle cx="0" cy="75" r="28" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
        <circle cx="-65" cy="37" r="28" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
        <circle cx="-65" cy="-37" r="28" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
        <!-- Center Bore & 4 Bolt Holes for Wave Hub -->
        <circle cx="0" cy="0" r="42" fill="#FFFFFF" stroke="#475569" stroke-width="4"/>
        <circle cx="-25" cy="-25" r="7" fill="#0f172a"/>
        <circle cx="25" cy="-25" r="7" fill="#0f172a"/>
        <circle cx="25" cy="25" r="7" fill="#0f172a"/>
        <circle cx="-25" cy="25" r="7" fill="#0f172a"/>
        <text x="0" y="4" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#cbd5e1" text-anchor="middle">D.I.D 36T</text>
      </g>

      <!-- Small Front Engine Sprocket (14T) -->
      <g transform="translate(420, 340)" filter="url(#waveShadow)">
        <circle cx="0" cy="0" r="62" fill="url(#sprocketGrad)" stroke="#94a3b8" stroke-width="3"/>
        <!-- Center Spline Drive -->
        <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
        <path d="M-10 -22 L-10 22 M10 -22 L10 22 M-22 -10 L22 -10 M-22 10 L22 10" stroke="#475569" stroke-width="3"/>
        <text x="0" y="38" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#e2e8f0" text-anchor="middle">14T WAVE</text>
      </g>

      <!-- DID 428D Chain Loop Representation in Foreground -->
      <g transform="translate(180, 420)" filter="url(#waveShadow)">
        <rect x="0" y="0" width="240" height="42" rx="10" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="30" cy="21" r="12" fill="url(#chainSteel)" stroke="#0f172a" stroke-width="2"/>
        <circle cx="75" cy="21" r="12" fill="url(#chainSteel)" stroke="#0f172a" stroke-width="2"/>
        <circle cx="120" cy="21" r="12" fill="url(#chainSteel)" stroke="#0f172a" stroke-width="2"/>
        <circle cx="165" cy="21" r="12" fill="url(#chainSteel)" stroke="#0f172a" stroke-width="2"/>
        <circle cx="210" cy="21" r="12" fill="url(#chainSteel)" stroke="#0f172a" stroke-width="2"/>
        <text x="120" y="-8" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#dc2626" text-anchor="middle">D.I.D 428D - 106L (JAPAN)</text>
      </g>
    </svg>
  `),

  // 22. YSS Top-Plus Twin Shocks for Wave 110i / Wave 125i
  'yss-wave-shock': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="chromeBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="30%" stop-color="#f8fafc"/>
          <stop offset="50%" stop-color="#cbd5e1"/>
          <stop offset="80%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
        <linearGradient id="redSpring" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#991b1b"/>
          <stop offset="35%" stop-color="#ef4444"/>
          <stop offset="55%" stop-color="#f87171"/>
          <stop offset="80%" stop-color="#dc2626"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </linearGradient>
        <filter id="yssWaveShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="6" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.22"/>
        </filter>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="520" rx="180" ry="20" fill="#000000" opacity="0.18" filter="blur(14px)"/>

      <!-- Left Shock Absorber -->
      <g transform="translate(210, 80)" filter="url(#yssWaveShadow)">
        <!-- Upper Eye Mount -->
        <circle cx="40" cy="40" r="28" fill="url(#chromeBody)" stroke="#334155" stroke-width="3"/>
        <circle cx="40" cy="40" r="14" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
        <circle cx="40" cy="40" r="8" fill="#f8fafc"/>
        <!-- Upper Dust Cover with YSS Logo -->
        <rect x="15" y="70" width="50" height="60" rx="6" fill="#18181b" stroke="#27272a" stroke-width="2"/>
        <rect x="20" y="85" width="40" height="20" fill="#dc2626" rx="3"/>
        <text x="40" y="99" font-family="'Arial Black', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">YSS</text>
        <!-- Chrome Damper Shaft -->
        <rect x="32" y="130" width="16" height="220" fill="url(#chromeBody)"/>
        <!-- Red Progressive Coil Spring -->
        <g stroke="url(#redSpring)" stroke-width="16" stroke-linecap="round" fill="none">
          <path d="M 12 145 C 40 140, 68 155, 68 165 C 68 175, 12 165, 12 185"/>
          <path d="M 12 185 C 40 180, 68 195, 68 205 C 68 215, 12 205, 12 225"/>
          <path d="M 12 225 C 40 220, 68 235, 68 245 C 68 255, 12 245, 12 265"/>
          <path d="M 12 265 C 40 260, 68 275, 68 285 C 68 295, 12 285, 12 305"/>
          <path d="M 12 305 C 40 300, 68 315, 68 325 C 68 335, 12 325, 12 345"/>
          <path d="M 12 345 C 40 340, 68 355, 68 365"/>
        </g>
        <!-- Spring Preload Step Collar (Chrome) -->
        <rect x="18" y="375" width="44" height="25" rx="3" fill="url(#chromeBody)" stroke="#475569" stroke-width="2"/>
        <!-- Lower Fork / Clevis Mount for Wave Swingarm -->
        <path d="M 22 400 L 22 450 C 22 460, 58 460, 58 450 L 58 400 Z" fill="#18181b" stroke="#334155" stroke-width="2"/>
        <circle cx="40" cy="435" r="6" fill="#f8fafc"/>
      </g>

      <!-- Right Shock Absorber (Twin) -->
      <g transform="translate(310, 80)" filter="url(#yssWaveShadow)">
        <!-- Upper Eye Mount -->
        <circle cx="40" cy="40" r="28" fill="url(#chromeBody)" stroke="#334155" stroke-width="3"/>
        <circle cx="40" cy="40" r="14" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
        <circle cx="40" cy="40" r="8" fill="#f8fafc"/>
        <!-- Upper Dust Cover with YSS Logo -->
        <rect x="15" y="70" width="50" height="60" rx="6" fill="#18181b" stroke="#27272a" stroke-width="2"/>
        <rect x="20" y="85" width="40" height="20" fill="#dc2626" rx="3"/>
        <text x="40" y="99" font-family="'Arial Black', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">YSS</text>
        <!-- Chrome Damper Shaft -->
        <rect x="32" y="130" width="16" height="220" fill="url(#chromeBody)"/>
        <!-- Red Progressive Coil Spring -->
        <g stroke="url(#redSpring)" stroke-width="16" stroke-linecap="round" fill="none">
          <path d="M 12 145 C 40 140, 68 155, 68 165 C 68 175, 12 165, 12 185"/>
          <path d="M 12 185 C 40 180, 68 195, 68 205 C 68 215, 12 205, 12 225"/>
          <path d="M 12 225 C 40 220, 68 235, 68 245 C 68 255, 12 245, 12 265"/>
          <path d="M 12 265 C 40 260, 68 275, 68 285 C 68 295, 12 285, 12 305"/>
          <path d="M 12 305 C 40 300, 68 315, 68 325 C 68 335, 12 325, 12 345"/>
          <path d="M 12 345 C 40 340, 68 355, 68 365"/>
        </g>
        <!-- Spring Preload Step Collar (Chrome) -->
        <rect x="18" y="375" width="44" height="25" rx="3" fill="url(#chromeBody)" stroke="#475569" stroke-width="2"/>
        <!-- Lower Fork / Clevis Mount for Wave Swingarm -->
        <path d="M 22 400 L 22 450 C 22 460, 58 460, 58 450 L 58 400 Z" fill="#18181b" stroke="#334155" stroke-width="2"/>
        <circle cx="40" cy="435" r="6" fill="#f8fafc"/>
      </g>
    </svg>
  `),

  // 23. TRW DTEC Blue Shim Ceramic Car Brake Pads (4 Pads Box Set)
  'trw-car-brakepad': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="trwBlueShim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="50%" stop-color="#1d4ed8"/>
          <stop offset="100%" stop-color="#1e3a8a"/>
        </linearGradient>
        <linearGradient id="ceramicCompound" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#78716c"/>
          <stop offset="50%" stop-color="#57534e"/>
          <stop offset="100%" stop-color="#292524"/>
        </linearGradient>
        <linearGradient id="trwBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dc2626"/>
          <stop offset="70%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </linearGradient>
        <filter id="padCarShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="6" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.22"/>
        </filter>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="515" rx="220" ry="24" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <!-- TRW Packaging Box in Background -->
      <g transform="translate(100, 140)" filter="url(#padCarShadow)">
        <polygon points="0,70 140,20 280,70 140,120" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
        <polygon points="0,70 140,120 140,260 0,210" fill="url(#trwBoxGrad)" stroke="#7f1d1d" stroke-width="2"/>
        <polygon points="140,120 280,70 280,210 140,260" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
        <!-- TRW Box Brand Text -->
        <text x="65" y="170" transform="skewY(20)" font-family="'Arial Black', sans-serif" font-size="28" font-weight="900" fill="#FFFFFF">TRW</text>
        <text x="65" y="195" transform="skewY(20)" font-family="'Arial', sans-serif" font-size="12" font-weight="bold" fill="#fecaca">DTEC CERAMIC</text>
      </g>

      <!-- Brake Pad 1 (Standing upright facing viewer - Blue Shim side) -->
      <g transform="translate(220, 240)" filter="url(#padCarShadow)">
        <path d="M 20 20 C 50 10, 190 10, 220 20 C 240 50, 240 100, 220 130 C 190 140, 50 140, 20 130 C 0 100, 0 50, 20 20 Z" 
              fill="url(#trwBlueShim)" stroke="#1e3a8a" stroke-width="3"/>
        <!-- Acoustic Sensor Clip -->
        <rect x="10" y="60" width="8" height="30" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
        <!-- TRW Stamped Logo & Specs on Blue Shim -->
        <text x="120" y="65" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">TRW</text>
        <text x="120" y="85" font-family="'Arial', sans-serif" font-size="11" font-weight="bold" fill="#93c5fd" text-anchor="middle">DTEC COTEC CERAMIC</text>
        <text x="120" y="105" font-family="'Courier New', monospace" font-size="10" font-weight="bold" fill="#e0e7ff" text-anchor="middle">GDB3392DT / E9-90R</text>
      </g>

      <!-- Brake Pad 2 (Foreground angled - Friction Material side) -->
      <g transform="translate(180, 360) rotate(-6)" filter="url(#padCarShadow)">
        <path d="M 20 20 C 50 10, 210 10, 240 20 C 260 50, 260 110, 240 140 C 210 150, 50 150, 20 140 C 0 110, 0 50, 20 20 Z" 
              fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
        <!-- Ceramic Friction Block with Chamfers and Center Slot -->
        <path d="M 35 30 C 60 22, 200 22, 225 30 L 220 130 C 200 138, 60 138, 40 130 Z" 
              fill="url(#ceramicCompound)" stroke="#1c1917" stroke-width="2"/>
        <!-- Vertical Heat Dissipation Slot -->
        <rect x="127" y="24" width="6" height="110" rx="2" fill="#0f172a"/>
      </g>
    </svg>
  `),

  // 24. Bando Super Kevlar V-Belt for Scooter (PCX, Click, ADV, Scoopy, NMAX, XMAX)
  'bando-cvt-belt': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="beltRubber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3f3f46"/>
          <stop offset="50%" stop-color="#27272a"/>
          <stop offset="100%" stop-color="#18181b"/>
        </linearGradient>
        <linearGradient id="goldPrint" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="50%" stop-color="#fef08a"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <filter id="beltShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="6" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.24"/>
        </filter>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="515" rx="210" ry="22" fill="#000000" opacity="0.16" filter="blur(14px)"/>

      <!-- Looped CVT Drive Belt -->
      <g filter="url(#beltShadow)">
        <!-- Outer Belt Oval -->
        <path d="M 160 200 C 100 200, 90 320, 160 380 L 440 380 C 510 320, 500 200, 440 200 Z" 
              fill="none" stroke="url(#beltRubber)" stroke-width="48" stroke-linejoin="round"/>
        
        <!-- Internal Cogged Teeth Profile (Realistic V-Belt Grooves) -->
        <path d="M 175 220 C 130 220, 125 300, 175 360 L 425 360 C 475 300, 470 220, 425 220 Z" 
              fill="none" stroke="#09090b" stroke-width="12" stroke-dasharray="8,6"/>
        
        <!-- Kevlar Cord Reinforcement Layer (Gold thread edge) -->
        <path d="M 160 180 L 440 180" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,2"/>
        <path d="M 160 400 L 440 400" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,2"/>

        <!-- Bando Stamped Branding & Direction Arrows -->
        <g transform="translate(300, 198)">
          <rect x="-120" y="-14" width="240" height="28" fill="#18181b" rx="4"/>
          <!-- Bando Red Badge -->
          <rect x="-110" y="-9" width="45" height="18" fill="#dc2626" rx="2"/>
          <text x="-87" y="4" font-family="'Arial Black', sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">BANDO</text>
          <!-- Spec Text -->
          <text x="10" y="4" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="url(#goldPrint)" text-anchor="middle">SUPER KEVLAR V-BELT 23100-K0S</text>
          <!-- Direction Arrow -->
          <path d="M 90 -2 L 100 2 L 90 6 Z" fill="#facc15"/>
        </g>
      </g>
    </svg>
  `),

  // 25. Motul Scooter Power LE 10W-40 4T (Bottle + Gear Oil Tube)
  'motul-scooter-oil': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="motulBottle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3f3f46"/>
          <stop offset="50%" stop-color="#27272a"/>
          <stop offset="100%" stop-color="#18181b"/>
        </linearGradient>
        <linearGradient id="redCap" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#b91c1c"/>
          <stop offset="50%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </linearGradient>
        <linearGradient id="gearTube" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#e2e8f0"/>
          <stop offset="100%" stop-color="#94a3b8"/>
        </linearGradient>
        <filter id="motulScooterShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="6" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.22"/>
        </filter>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="515" rx="200" ry="22" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <!-- Main Motul 1L Bottle -->
      <g transform="translate(170, 110)" filter="url(#motulScooterShadow)">
        <!-- Cap & Spout -->
        <rect x="75" y="10" width="46" height="35" rx="5" fill="url(#redCap)" stroke="#7f1d1d" stroke-width="2"/>
        <rect x="79" y="45" width="38" height="15" fill="#52525b"/>
        <!-- Handle & Body Profile -->
        <path d="M 40 60 L 160 60 C 180 80, 190 120, 190 170 L 190 380 C 190 395, 175 405, 155 405 L 45 405 C 25 405, 10 395, 10 380 L 10 170 C 10 120, 20 80, 40 60 Z" 
              fill="url(#motulBottle)" stroke="#09090b" stroke-width="3"/>
        <!-- Grippy side grooves -->
        <line x1="20" y1="200" x2="20" y2="350" stroke="#52525b" stroke-width="4" stroke-linecap="round"/>
        <line x1="180" y1="200" x2="180" y2="350" stroke="#52525b" stroke-width="4" stroke-linecap="round"/>

        <!-- Motul Red Header Logo -->
        <rect x="30" y="135" width="140" height="42" fill="#dc2626" rx="4"/>
        <text x="100" y="165" font-family="'Arial Black', sans-serif" font-size="24" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">MOTUL</text>

        <!-- Product Label -->
        <rect x="30" y="185" width="140" height="180" fill="#f8fafc" rx="4"/>
        <rect x="30" y="185" width="140" height="30" fill="#ea580c"/>
        <text x="100" y="205" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SCOOTER POWER</text>
        <text x="100" y="235" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#0f172a" text-anchor="middle">10W-40</text>
        <text x="100" y="255" font-family="'Arial', sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">100% SYNTHETIC</text>
        <!-- JASO MB Badge -->
        <rect x="45" y="270" width="110" height="24" fill="#0284c7" rx="4"/>
        <text x="100" y="286" font-family="'Arial Black', sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">API SN / JASO MB</text>
        <!-- Volume -->
        <text x="100" y="340" font-family="'Arial Black', sans-serif" font-size="16" font-weight="900" fill="#1e293b" text-anchor="middle">1L (1.05 US QT)</text>
      </g>

      <!-- Motul Scooter Gear Oil Tube (120ml) Standing Beside -->
      <g transform="translate(380, 260) rotate(8)" filter="url(#motulScooterShadow)">
        <!-- Tube Nozzle Cap -->
        <polygon points="40,10 32,50 48,50" fill="#dc2626"/>
        <rect x="30" y="50" width="20" height="20" fill="#dc2626" rx="2"/>
        <!-- Tube Body -->
        <path d="M 25 70 L 55 70 L 65 220 L 15 220 Z" fill="url(#gearTube)" stroke="#64748b" stroke-width="2"/>
        <!-- Tube Crimped End -->
        <rect x="12" y="218" width="56" height="12" fill="#475569" rx="2"/>
        <!-- Gear Oil Text -->
        <rect x="22" y="100" width="36" height="16" fill="#dc2626"/>
        <text x="40" y="112" font-family="'Arial Black', sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF" text-anchor="middle">MOTUL</text>
        <text x="40" y="135" font-family="'Arial Black', sans-serif" font-size="8" font-weight="900" fill="#0f172a" text-anchor="middle">GEAR</text>
        <text x="40" y="148" font-family="'Arial', sans-serif" font-size="7" font-weight="bold" fill="#ea580c" text-anchor="middle">80W-90</text>
        <text x="40" y="180" font-family="'Arial', sans-serif" font-size="7" font-weight="bold" fill="#334155" text-anchor="middle">120 ml</text>
      </g>
    </svg>
  `),

  // 26. GS Battery Extra 135L Heavy Duty Pickup Battery (Hilux Revo, D-Max, Fortuner)
  'gs-pickup-battery': toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="gsTruckBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#27272a"/>
          <stop offset="60%" stop-color="#18181b"/>
          <stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
        <linearGradient id="gsTruckLid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#991b1b"/>
          <stop offset="50%" stop-color="#dc2626"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </linearGradient>
        <linearGradient id="leadTerminal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#cbd5e1"/>
          <stop offset="50%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
        <filter id="gsPickupShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="6" dy="20" stdDeviation="18" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>
      <rect width="600" height="600" fill="#FFFFFF"/>
      <ellipse cx="300" cy="515" rx="220" ry="24" fill="#000000" opacity="0.18" filter="blur(16px)"/>

      <g transform="translate(100, 150)" filter="url(#gsPickupShadow)">
        <!-- Top Lid Red -->
        <rect x="20" y="30" width="360" height="65" rx="8" fill="url(#gsTruckLid)" stroke="#7f1d1d" stroke-width="2"/>
        <!-- Main Battery Case Black -->
        <rect x="25" y="90" width="350" height="240" rx="6" fill="url(#gsTruckBody)" stroke="#09090b" stroke-width="3"/>
        
        <!-- Heavy Duty Red Carrying Handle -->
        <path d="M 60 40 C 60 -10, 340 -10, 340 40" fill="none" stroke="#ef4444" stroke-width="14" stroke-linecap="round"/>
        <path d="M 60 40 C 60 -10, 340 -10, 340 40" fill="none" stroke="#b91c1c" stroke-width="6" stroke-linecap="round"/>

        <!-- Positive Terminal Post (Left, with Red Ring) -->
        <rect x="70" y="10" width="32" height="24" rx="4" fill="url(#leadTerminal)" stroke="#475569" stroke-width="2"/>
        <circle cx="86" cy="22" r="7" fill="#dc2626"/>
        <text x="86" y="26" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">+</text>

        <!-- Negative Terminal Post (Right, with Black Ring) -->
        <rect x="298" y="10" width="32" height="24" rx="4" fill="url(#leadTerminal)" stroke="#475569" stroke-width="2"/>
        <circle cx="314" cy="22" r="7" fill="#0f172a"/>
        <text x="314" y="25" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">-</text>

        <!-- 6 Cell Vent Caps -->
        <circle cx="120" cy="62" r="10" fill="#18181b" stroke="#475569" stroke-width="2"/>
        <circle cx="155" cy="62" r="10" fill="#18181b" stroke="#475569" stroke-width="2"/>
        <circle cx="190" cy="62" r="10" fill="#18181b" stroke="#475569" stroke-width="2"/>
        <circle cx="225" cy="62" r="10" fill="#18181b" stroke="#475569" stroke-width="2"/>
        <circle cx="260" cy="62" r="10" fill="#18181b" stroke="#475569" stroke-width="2"/>
        <circle cx="295" cy="62" r="10" fill="#18181b" stroke="#475569" stroke-width="2"/>

        <!-- Battery Front Brand Decal -->
        <rect x="45" y="120" width="310" height="180" fill="#0f172a" rx="6" stroke="#334155" stroke-width="2"/>
        <!-- GS Logo Red -->
        <text x="65" y="175" font-family="'Arial Black', Impact, sans-serif" font-size="52" font-weight="900" fill="#dc2626">GS</text>
        <text x="155" y="155" font-family="'Arial', sans-serif" font-size="14" font-weight="900" fill="#cbd5e1">YUASA</text>
        <text x="155" y="175" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#ef4444">BATTERY</text>

        <!-- Model Specs -->
        <rect x="65" y="195" width="270" height="36" fill="#dc2626" rx="4"/>
        <text x="200" y="220" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">EXTRA 135L (12V 85Ah)</text>

        <text x="65" y="260" font-family="'Arial Black', sans-serif" font-size="13" font-weight="bold" fill="#facc15">COLD CRANKING: 680 CCA</text>
        <text x="65" y="280" font-family="'Arial', sans-serif" font-size="11" font-weight="bold" fill="#94a3b8">สำหรับ Hilux Revo / Fortuner / D-Max / MU-X</text>
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
