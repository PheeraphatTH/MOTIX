// Email HTML templates for MOTIX Automotive E-commerce Platform
// Designed to match the REAL MOTIX Website Theme, Logo, and Realistic Automotive Imagery (No cartoons!)
// Fully responsive across Gmail, Apple Mail, Outlook, mobile devices, and browser preview.

export interface RegisterEmailData {
  name?: string;
  email: string;
  phone?: string;
  vehicleType?: string;
  vehicleModel?: string;
}

const svgToDataUri = (svgStr: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svgStr.trim())}`;

// ============================================================================
// 1. AUTHENTIC MOTIX WEBSITE LOGO (Matching MotixBrandLogo.jsx)
// ============================================================================
export const MOTIX_REAL_LOGO_SVG = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 84" width="320" height="84">
    <defs>
      <!-- 3D Chrome Gradient -->
      <linearGradient id="motixChrome" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#E2E8F0" />
        <stop offset="50%" stop-color="#94A3B8" />
        <stop offset="52%" stop-color="#475569" />
        <stop offset="80%" stop-color="#CBD5E1" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <!-- Ruby Red Performance Gradient -->
      <linearGradient id="motixRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF6B6B" />
        <stop offset="40%" stop-color="#E63946" />
        <stop offset="80%" stop-color="#9A031E" />
        <stop offset="100%" stop-color="#4A000A" />
      </linearGradient>

      <!-- Text Metallic Reflection -->
      <linearGradient id="textChrome" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="25%" stop-color="#F1F5F9" />
        <stop offset="50%" stop-color="#94A3B8" />
        <stop offset="52%" stop-color="#334155" />
        <stop offset="78%" stop-color="#CBD5E1" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="textRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF6B6B" />
        <stop offset="35%" stop-color="#E63946" />
        <stop offset="70%" stop-color="#C1121F" />
        <stop offset="100%" stop-color="#780000" />
      </linearGradient>

      <filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#E63946" flood-opacity="0.8"/>
      </filter>
    </defs>

    <!-- Tachometer RPM Arc (Dotted Background) -->
    <path d="M 22 54 A 36 36 0 0 1 88 54" fill="none" stroke="#263248" stroke-width="3.5" stroke-dasharray="3 3"/>

    <!-- Redline High RPM Zone -->
    <path d="M 60 27 A 36 36 0 0 1 87 53" fill="none" stroke="url(#motixRed)" stroke-width="4.2" filter="url(#glowRed)"/>

    <!-- Tachometer Needle -->
    <line x1="55" y1="51" x2="74" y2="30" stroke="#FF4D4D" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="55" cy="51" r="3.2" fill="#E2E8F0" stroke="#0F172A" stroke-width="1.2"/>

    <!-- Sports Coupe Car Silhouette Roofline in Chrome -->
    <path d="M 8 51 C 19 49, 33 33, 54 32 C 73 31, 86 41, 102 51" fill="none" stroke="url(#motixChrome)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 25 48 C 37 37, 51 36, 65 36 C 75 36, 82 42, 91 48" fill="none" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>

    <!-- Speed Horizontal Cut Line -->
    <line x1="6" y1="54" x2="105" y2="54" stroke="#E63946" stroke-width="2" stroke-linecap="round"/>

    <!-- Typography: MOTI + X -->
    <g transform="translate(112, 50)">
      <text x="0" y="0" font-family="'Arial Black', Impact, sans-serif" font-size="34" font-weight="900" letter-spacing="-0.5" fill="url(#textChrome)">MOTI</text>
      <text x="96" y="0" font-family="'Arial Black', Impact, sans-serif" font-size="34" font-weight="900" letter-spacing="-0.5" fill="url(#textRed)">X</text>
    </g>

    <!-- Tagline: Keep Your Ride Moving. -->
    <text x="114" y="66" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9.5" font-weight="800" font-style="italic" letter-spacing="1.2" fill="#CBD5E1">
      Keep Your Ride Moving.
    </text>

    <!-- Subtitle -->
    <text x="114" y="78" font-family="'Helvetica Neue', Arial, sans-serif" font-size="7.5" font-weight="900" letter-spacing="2" fill="#E63946">
      AUTO &amp; MOTORCYCLE PARTS STORE
    </text>
  </svg>
`);

// ============================================================================
// 2. REALISTIC AUTOMOTIVE VISUAL: PHOTOREALISTIC BREMBO HIGH-CARBON ROTOR & CALIPER
// ============================================================================
export const REALISTIC_ROTOR_VISUAL_SVG = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 280" width="540" height="280">
    <defs>
      <radialGradient id="discGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#1E2430"/>
        <stop offset="42%" stop-color="#E2E8F0"/>
        <stop offset="48%" stop-color="#CBD5E1"/>
        <stop offset="68%" stop-color="#F8FAFC"/>
        <stop offset="85%" stop-color="#CBD5E1"/>
        <stop offset="97%" stop-color="#94A3B8"/>
        <stop offset="100%" stop-color="#334155"/>
      </radialGradient>
      <radialGradient id="hubGrad" cx="45%" cy="45%" r="55%">
        <stop offset="0%" stop-color="#475569"/>
        <stop offset="65%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </radialGradient>
      <linearGradient id="caliperRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF4D5E"/>
        <stop offset="35%" stop-color="#E60000"/>
        <stop offset="75%" stop-color="#B30000"/>
        <stop offset="100%" stop-color="#730000"/>
      </linearGradient>
      <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.4"/>
      </linearGradient>
      <linearGradient id="bgBanner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#141822"/>
        <stop offset="50%" stop-color="#0E121B"/>
        <stop offset="100%" stop-color="#07090E"/>
      </linearGradient>
    </defs>

    <!-- Backdrop Plate with Subtle Motorsport Grid -->
    <rect width="540" height="280" rx="14" fill="url(#bgBanner)"/>
    <rect width="540" height="280" rx="14" fill="none" stroke="#263147" stroke-width="1.5"/>

    <!-- Dynamic Speed Light Lines -->
    <path d="M 0 220 L 280 0 L 320 0 L 40 280 Z" fill="#E63946" opacity="0.08"/>
    <path d="M 80 280 L 360 0 L 380 0 L 100 280 Z" fill="#FF5722" opacity="0.05"/>

    <!-- Left Side: Realistic Rotor Assembly -->
    <g transform="translate(145, 140)">
      <!-- Disc Shadow -->
      <ellipse cx="5" cy="115" rx="115" ry="16" fill="#000000" opacity="0.45" filter="blur(10px)"/>

      <!-- Main Steel Rotor Disc -->
      <circle cx="0" cy="0" r="116" fill="url(#discGrad)" stroke="#475569" stroke-width="3"/>
      <circle cx="0" cy="0" r="112" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="70" fill="none" stroke="#94A3B8" stroke-width="2"/>

      <!-- Precision Slotted Curved Grooves -->
      <g stroke="#334155" stroke-width="2.5" stroke-linecap="round" fill="none">
        <path d="M -42 -85 C -55 -68, -65 -48, -74 -32"/>
        <path d="M 42 85 C 55 68, 65 48, 74 32"/>
        <path d="M -85 42 C -68 55, -48 65, -32 74"/>
        <path d="M 85 -42 C 68 -55, 48 -65, 32 -74"/>
        <path d="M -70 -70 C -82 -52, -90 -30, -94 -10"/>
        <path d="M 70 70 C 82 52, 90 30, 94 10"/>
        <path d="M -70 70 C -52 82, -30 90, -10 94"/>
        <path d="M 70 -70 C 52 -82, 30 -90, 10 -94"/>
      </g>

      <!-- Precision Cross-Drilled Holes -->
      <g fill="#0F172A" stroke="#475569" stroke-width="1">
        <circle cx="-60" cy="-52" r="3.2"/>
        <circle cx="-75" cy="-38" r="3.2"/>
        <circle cx="60" cy="52" r="3.2"/>
        <circle cx="75" cy="38" r="3.2"/>
        <circle cx="-52" cy="60" r="3.2"/>
        <circle cx="-38" cy="75" r="3.2"/>
        <circle cx="52" cy="-60" r="3.2"/>
        <circle cx="38" cy="-75" r="3.2"/>
        <circle cx="-78" cy="18" r="3.2"/>
        <circle cx="78" cy="-18" r="3.2"/>
        <circle cx="18" cy="78" r="3.2"/>
        <circle cx="-18" cy="-78" r="3.2"/>
      </g>

      <!-- Center Hub Bell Hat (Black Anodized Aluminum) -->
      <circle cx="0" cy="0" r="54" fill="url(#hubGrad)" stroke="#64748B" stroke-width="2"/>
      <circle cx="0" cy="0" r="28" fill="#0A0E17" stroke="#334155" stroke-width="2"/>
      <circle cx="0" cy="0" r="16" fill="#1E293B"/>

      <!-- 5-Lug Bolt Pattern with Chrome Studs -->
      <g fill="#E2E8F0" stroke="#0F172A" stroke-width="1.5">
        <circle cx="0" cy="-40" r="4.8"/>
        <circle cx="38" cy="-12" r="4.8"/>
        <circle cx="24" cy="32" r="4.8"/>
        <circle cx="-24" cy="32" r="4.8"/>
        <circle cx="-38" cy="-12" r="4.8"/>
      </g>

      <!-- Brembo Red Monobloc 6-Piston Caliper -->
      <g transform="translate(68, -85)">
        <path d="M -45 5 C -15 -18, 30 -22, 60 5 C 68 14, 66 32, 58 48 C 42 78, 15 88, -12 85 C -28 82, -38 68, -42 50 Z" 
              fill="url(#caliperRed)" stroke="#FFFFFF" stroke-width="1.5"/>
        <!-- Caliper Specular Highlight -->
        <path d="M -38 12 C -12 -8, 25 -10, 50 12" fill="none" stroke="#FFA3AC" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
        <!-- Brembo Logo on Caliper -->
        <circle cx="6" cy="38" r="7" fill="#FFFFFF"/>
        <circle cx="6" cy="38" r="3.5" fill="#E60000"/>
        <circle cx="7.8" cy="36.5" r="1.8" fill="#FFFFFF"/>
        <text x="18" y="42" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="900" letter-spacing="-0.4" fill="#FFFFFF">brembo</text>
      </g>
    </g>

    <!-- Right Side: Real Automotive Specifications & Guarantee -->
    <g transform="translate(305, 36)">
      <!-- Genuine Parts Badge -->
      <rect x="0" y="0" width="145" height="24" rx="12" fill="rgba(230, 57, 70, 0.15)" stroke="#E63946" stroke-width="1"/>
      <circle cx="12" cy="12" r="4" fill="#E63946"/>
      <text x="24" y="16" font-family="'Prompt', sans-serif" font-size="10" font-weight="800" fill="#FF6B6B">อะไหล่แท้ 100% มีรับประกัน</text>

      <!-- Headline -->
      <text x="0" y="52" font-family="'Prompt', sans-serif" font-size="19" font-weight="900" fill="#FFFFFF">
        BREMBO HIGH CARBON
      </text>
      <text x="0" y="72" font-family="'Prompt', sans-serif" font-size="14" font-weight="800" fill="#E63946">
        จานเบรกคู่หน้าเซาะร่อง + รูระบาย
      </text>

      <!-- Specs List -->
      <g font-family="'Prompt', sans-serif" font-size="11" fill="#CBD5E1" transform="translate(0, 95)">
        <text x="0" y="0">✓ ทนความร้อนสูง ลดระยะเบรก ปลอดภัย 100%</text>
        <text x="0" y="20">✓ คัดสรรตรงรุ่นรถยนต์ยอดนิยมในไทย</text>
        <text x="0" y="40">✓ อะไหล่นำเข้าศูนย์แท้พร้อมใบรับประกัน</text>
        <text x="0" y="60">✓ จัดส่งด่วนถึงหน้าบ้านทั่วประเทศ 24-48 ชม.</text>
      </g>

      <!-- Price & Rating Box -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="205" height="42" rx="8" fill="#121824" stroke="#253046" stroke-width="1"/>
        <text x="14" y="17" font-family="'Prompt', sans-serif" font-size="9" font-weight="700" fill="#94A3B8">ราคาพิเศษสำหรับคุณ:</text>
        <text x="14" y="34" font-family="'Prompt', sans-serif" font-size="16" font-weight="900" fill="#22C55E">฿3,290.-</text>
        <text x="82" y="34" font-family="'Prompt', sans-serif" font-size="11" text-decoration="line-through" fill="#64748B">฿4,190</text>
        <rect x="135" y="10" width="58" height="22" rx="6" fill="#E63946"/>
        <text x="164" y="25" font-family="'Prompt', sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">ลด 21%</text>
      </g>
    </g>
  </svg>
`);

// ============================================================================
// 3. PHOTOREALISTIC TITANIUM & CARBON FIBER MOTIX VIP MEMBERSHIP CARD
// ============================================================================
export const generateRealisticVipCardSvg = (memberId: string, name: string, vehicleModel: string) => svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 310" width="540" height="310">
    <defs>
      <!-- Carbon Fiber Texture Pattern -->
      <pattern id="carbonWeave" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="8" height="8" fill="#0C0F16"/>
        <rect width="4" height="4" fill="#141924"/>
        <rect x="4" y="4" width="4" height="4" fill="#181E2B"/>
        <line x1="0" y1="0" x2="8" y2="8" stroke="#07090D" stroke-width="1"/>
        <line x1="8" y1="0" x2="0" y2="8" stroke="#07090D" stroke-width="1"/>
      </pattern>

      <!-- Brushed Metal Border -->
      <linearGradient id="cardBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E63946"/>
        <stop offset="30%" stop-color="#94A3B8"/>
        <stop offset="60%" stop-color="#FF5722"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>

      <!-- Holographic Chip Gradient -->
      <linearGradient id="goldChip" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE047"/>
        <stop offset="35%" stop-color="#EAB308"/>
        <stop offset="70%" stop-color="#CA8A04"/>
        <stop offset="100%" stop-color="#854D0E"/>
      </linearGradient>
    </defs>

    <!-- Card Base Body -->
    <rect width="540" height="310" rx="18" fill="url(#carbonWeave)"/>
    <rect width="540" height="310" rx="18" fill="none" stroke="url(#cardBorderGrad)" stroke-width="2.5"/>

    <!-- High-gloss diagonal sheen overlay -->
    <path d="M 120 0 L 320 0 L 180 310 L -20 310 Z" fill="#FFFFFF" opacity="0.035"/>
    <path d="M 380 0 L 440 0 L 300 310 L 240 310 Z" fill="#E63946" opacity="0.06"/>

    <!-- TOP ROW: Brand Emblem & Membership Tier -->
    <g transform="translate(32, 28)">
      <!-- Metallic MOTIX Logo -->
      <text x="0" y="24" font-family="'Arial Black', Impact, sans-serif" font-size="24" font-weight="900" letter-spacing="1" fill="#FFFFFF">
        MOTI<tspan fill="#E63946">X</tspan>
      </text>
      <text x="2" y="38" font-family="'Helvetica Neue', Arial, sans-serif" font-size="7.5" font-weight="800" letter-spacing="1.5" fill="#94A3B8">
        VIP MOTORSPORT CLUB
      </text>
    </g>

    <!-- Top Right: Silver Racer Badge -->
    <g transform="translate(370, 30)">
      <rect x="0" y="0" width="138" height="28" rx="14" fill="#161E2D" stroke="#E63946" stroke-width="1.2"/>
      <circle cx="14" cy="14" r="5" fill="#FF5722"/>
      <text x="26" y="18" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="900" letter-spacing="1" fill="#FFFFFF">SILVER RACER</text>
    </g>

    <!-- MIDDLE: Holographic EMV Smart Chip & Contactless Wireless Waves -->
    <g transform="translate(36, 100)">
      <!-- Chip body -->
      <rect width="50" height="38" rx="6" fill="url(#goldChip)" stroke="#A16207" stroke-width="1"/>
      <rect x="6" y="5" width="38" height="28" rx="3" fill="none" stroke="#713F12" stroke-width="0.8"/>
      <line x1="25" y1="5" x2="25" y2="33" stroke="#713F12" stroke-width="0.8"/>
      <line x1="6" y1="19" x2="44" y2="19" stroke="#713F12" stroke-width="0.8"/>

      <!-- Wireless NFC Waves -->
      <path d="M 64 12 A 10 10 0 0 1 64 26" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 70 8 A 16 16 0 0 1 70 30" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 76 4 A 22 22 0 0 1 76 34" fill="none" stroke="#E63946" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <!-- Member Privileges Pill -->
    <g transform="translate(230, 106)">
      <rect x="0" y="0" width="278" height="30" rx="6" fill="#111723" stroke="#232F44" stroke-width="1"/>
      <text x="14" y="19" font-family="'Prompt', sans-serif" font-size="11" font-weight="700" fill="#22C55E">
        ✓ รับส่วนลด 15% ทันที | สะสมแต้ม 2 เท่า
      </text>
    </g>

    <!-- BOTTOM ROW: Member ID, Holder Name, Vehicle Model, Barcode -->
    <g transform="translate(36, 178)">
      <!-- Member ID -->
      <text x="0" y="0" font-family="'Courier New', Courier, monospace" font-size="20" font-weight="900" letter-spacing="3" fill="#FFFFFF">
        ${memberId}
      </text>

      <!-- Label -->
      <text x="0" y="24" font-family="'Prompt', sans-serif" font-size="9" font-weight="700" fill="#94A3B8" letter-spacing="1">MEMBER NAME</text>
      <text x="0" y="44" font-family="'Prompt', sans-serif" font-size="15" font-weight="800" fill="#F8FAFC">
        ${name || 'MOTIX VIP MEMBER'}
      </text>

      <!-- Registered Vehicle -->
      <text x="260" y="24" font-family="'Prompt', sans-serif" font-size="9" font-weight="700" fill="#94A3B8" letter-spacing="1">REGISTERED VEHICLE</text>
      <text x="260" y="44" font-family="'Prompt', sans-serif" font-size="14" font-weight="800" fill="#FF6B6B">
        ${vehicleModel || 'รถยนต์ & มอเตอร์ไซค์'}
      </text>
    </g>

    <!-- Bottom Laser Cut Barcode Representation -->
    <g transform="translate(36, 260)">
      <rect x="0" y="0" width="468" height="24" fill="#070A0F" rx="4"/>
      <!-- Realistic Barcode Stripes -->
      <g fill="#CBD5E1">
        <rect x="14" y="4" width="3" height="16"/>
        <rect x="20" y="4" width="1.5" height="16"/>
        <rect x="24" y="4" width="4.5" height="16"/>
        <rect x="32" y="4" width="2" height="16"/>
        <rect x="37" y="4" width="1" height="16"/>
        <rect x="42" y="4" width="3.5" height="16"/>
        <rect x="48" y="4" width="2" height="16"/>
        <rect x="54" y="4" width="4" height="16"/>
        <rect x="62" y="4" width="1.5" height="16"/>
        <rect x="67" y="4" width="3" height="16"/>
        <rect x="74" y="4" width="2" height="16"/>
        <rect x="80" y="4" width="5" height="16"/>
        <rect x="88" y="4" width="2" height="16"/>
        <rect x="94" y="4" width="1" height="16"/>
        <rect x="100" y="4" width="3" height="16"/>
        <rect x="106" y="4" width="2" height="16"/>
        <rect x="112" y="4" width="4" height="16"/>
        <rect x="120" y="4" width="1" height="16"/>
        <rect x="125" y="4" width="3.5" height="16"/>
        <rect x="132" y="4" width="2" height="16"/>
      </g>
      <text x="160" y="16" font-family="'Courier New', Courier, monospace" font-size="10" font-weight="700" fill="#94A3B8">
        AUTHENTICATED MOTORSPORT MEMBER &bull; KEEP YOUR RIDE MOVING.
      </text>
    </g>
  </svg>
`);

// ============================================================================
// 4. REALISTIC PRODUCT CATALOG GRID ITEMS (Brembo, Motul, Ohlins, NGK)
// ============================================================================
export const REALISTIC_PRODUCTS = [
  {
    brand: 'Brembo',
    badgeColor: '#E60000',
    name: 'จานเบรกคู่หน้า Brembo High Carbon',
    carType: 'ตรงรุ่น Civic, City, Altis, Mazda 2/3',
    price: '฿3,290',
    originalPrice: '฿4,190',
    discount: 'ลด 21%',
  },
  {
    brand: 'Motul',
    badgeColor: '#E60012',
    name: 'น้ำมันเครื่อง Motul 300V Factory Line 10W-40',
    carType: 'เทคโนโลยี Ester Core สูตรเรซซิ่งแท้ 100%',
    price: '฿890',
    originalPrice: '฿1,050',
    discount: 'ลด 15%',
  },
  {
    brand: 'Öhlins',
    badgeColor: '#F59E0B',
    name: 'โช้คอัพหลัง Öhlins Performance Shock',
    carType: 'ปรับระดับพรีโหลด ซับแทงค์แท้ ปลอดภัยสูงสุด',
    price: '฿8,900',
    originalPrice: '฿10,500',
    discount: 'ลด 15%',
  },
  {
    brand: 'NGK',
    badgeColor: '#E31B23',
    name: 'หัวเทียน NGK Laser Iridium (ชุด 4 หัว)',
    carType: 'จุดระเบิดแม่นยำ ประหยัดน้ำมัน อัตราเร่งดี',
    price: '฿1,480',
    originalPrice: '฿1,850',
    discount: 'ลด 20%',
  },
];

// ============================================================================
// 5. OFFICIAL BRAND LOGOS STRIP (Brembo, Motul, Ohlins, Akrapovic, NGK, TRW)
// ============================================================================
export const BRAND_STRIP_SVG = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 40" width="580" height="40">
    <!-- Brembo -->
    <g transform="translate(15, 8)">
      <circle cx="10" cy="12" r="9" fill="#E60000"/>
      <circle cx="10" cy="12" r="4.5" fill="#090B10"/>
      <circle cx="12" cy="10" r="2.2" fill="#E60000"/>
      <text x="24" y="17" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" font-weight="900" letter-spacing="-0.5" fill="#FFFFFF">brembo</text>
    </g>

    <!-- Motul -->
    <g transform="translate(135, 9)">
      <rect width="70" height="22" rx="4" fill="#E60012"/>
      <text x="35" y="16" font-family="'Arial Black', Impact, sans-serif" font-size="14" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">MOTUL</text>
    </g>

    <!-- Ohlins -->
    <g transform="translate(235, 9)">
      <text x="0" y="16" font-family="'Arial Black', Impact, sans-serif" font-size="15" font-weight="900" fill="#F59E0B">ÖHLINS</text>
    </g>

    <!-- Akrapovic -->
    <g transform="translate(325, 9)">
      <text x="0" y="16" font-family="'Arial Black', Impact, sans-serif" font-size="14" font-weight="900" font-style="italic" fill="#E63946">AKRAPOVIČ</text>
    </g>

    <!-- NGK -->
    <g transform="translate(440, 9)">
      <rect width="50" height="22" rx="3" fill="#E31B23"/>
      <text x="25" y="16" font-family="'Arial Black', Impact, sans-serif" font-size="14" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle">NGK</text>
    </g>

    <!-- TRW -->
    <g transform="translate(515, 9)">
      <text x="0" y="16" font-family="'Arial Black', Impact, sans-serif" font-size="15" font-weight="900" font-style="italic" fill="#E31B23">TRW</text>
    </g>
  </svg>
`);

// ============================================================================
// TEMPLATE 1: NEWSLETTER SUBSCRIBE CONFIRMATION EMAIL
// Matching the authentic MOTIX website theme, real logo, and realistic parts showcase
// ============================================================================
export function generateSubscribeEmailHtml(email: string): string {
  const currentYear = new Date().getFullYear();
  const couponCode = 'MOTIX-NEWS10';

  return `
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ยินดีต้อนรับสู่ MOTIX - ขอบคุณที่สมัครรับข่าวสาร</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800;900&display=swap');
    body {
      font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #05070B;
      color: #F1F5F9;
      -webkit-font-smoothing: antialiased;
    }
    a { text-decoration: none; }
    @media only screen and (max-width: 620px) {
      .responsive-table { width: 100% !important; }
      .mobile-stack { display: block !important; width: 100% !important; }
      .mobile-center { text-align: center !important; }
      .hero-title { font-size: 24px !important; }
      .product-card-col { width: 100% !important; display: block !important; margin-bottom: 12px; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #05070B;">
  <center style="width: 100%; table-layout: fixed; background-color: #05070B; padding: 24px 8px 40px 8px;">
    
    <!-- MAIN CONTAINER (600px Standard Email Width) -->
    <div style="max-width: 620px; margin: 0 auto; background-color: #090B10; border: 1px solid #1C2433; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.85); text-align: left;">

      <!-- TOP RED MOTORSPORT STRIPE -->
      <div style="height: 4px; background: linear-gradient(90deg, #E63946 0%, #FF5722 50%, #C1121F 100%);"></div>

      <!-- 1. AUTHENTIC WEBSITE NAVBAR (Same as MOTIX Website) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 16px 22px; background-color: #0A0D14; border-bottom: 1px solid #161D2A;">
        <tr>
          <!-- Real MOTIX Logo -->
          <td valign="middle" align="left">
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app" target="_blank" style="display: inline-block;">
              <img src="${MOTIX_REAL_LOGO_SVG}" alt="MOTIX Auto &amp; Motorcycle Parts" width="220" height="58" style="display: block; border: 0;" />
            </a>
          </td>
          <!-- Top Right Store Status -->
          <td valign="middle" align="right">
            <div style="background-color: #121824; border: 1px solid #233044; border-radius: 20px; padding: 6px 12px; display: inline-block; text-align: right;">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: #22C55E; margin-right: 5px; vertical-align: middle;"></span>
              <span style="font-size: 11px; font-weight: 700; color: #CBD5E1;">ศูนย์รวมอะไหล่แท้ 100%</span>
            </div>
          </td>
        </tr>
      </table>

      <!-- STORE NAVIGATION CATEGORIES BAR (Realistic Website UI) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0E121A; padding: 8px 18px; border-bottom: 1px solid #161D2A;">
        <tr>
          <td align="center" style="font-size: 11px; font-weight: 700; color: #94A3B8;">
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/categories" style="color: #CBD5E1; margin: 0 10px;">🚗 อะไหล่รถยนต์</a>
            <span style="color: #334155;">|</span>
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/categories" style="color: #CBD5E1; margin: 0 10px;">🏍️ อะไหล่มอเตอร์ไซค์</a>
            <span style="color: #334155;">|</span>
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/products" style="color: #CBD5E1; margin: 0 10px;">🛢️ น้ำมันเครื่อง &amp; ของเหลว</a>
            <span style="color: #334155;">|</span>
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/products" style="color: #FF5722; margin: 0 10px;">⚡ โปรโมชั่นลด 20%</a>
          </td>
        </tr>
      </table>

      <!-- 2. HERO WELCOME SECTION: Realistic E-Commerce Style -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: radial-gradient(circle at 80% 25%, #250B0F 0%, #0F131D 65%, #080A0F 100%); padding: 26px 22px 20px 22px;">
        <tr>
          <td>
            
            <!-- Category Tag -->
            <div style="display: inline-block; background: rgba(230, 57, 70, 0.15); border: 1px solid rgba(230, 57, 70, 0.4); border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
              <span style="color: #FF4D5E; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                MOTIX NEWSLETTER SUBSCRIBER
              </span>
            </div>

            <!-- Headline -->
            <h1 class="hero-title" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 900; line-height: 1.2; color: #FFFFFF;">
              ยินดีต้อนรับคุณสู่<br>
              ครอบครัว <span style="font-family: 'Arial Black', Impact, sans-serif; color: #FFFFFF; letter-spacing: 0.5px;">MOTI<span style="color: #E63946;">X</span></span>
            </h1>

            <p style="color: #CBD5E1; font-size: 13.5px; line-height: 1.6; margin: 0 0 20px 0;">
              ขอบคุณที่ร่วมติดตามข่าวสารกับ <strong style="color: #FFFFFF;">MOTIX</strong> คุณจะได้รับสิทธิ์เข้าถึงสินค้าอะไหล่แท้ตรงรุ่น โปรโมชั่น Flash Sale ประจำสัปดาห์ และสาระการดูแลรักษารถก่อนใคร
            </p>

            <!-- 10% Welcome Coupon Voucher (Realistic E-Commerce Ticket) -->
            <div style="background: linear-gradient(135deg, #181115 0%, #0E131E 100%); border: 1.5px dashed #E63946; border-radius: 12px; padding: 16px 20px; margin-bottom: 22px; box-shadow: 0 4px 20px rgba(230, 57, 70, 0.2);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="color: #FF6B6B; font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
                      🎁 คูปองต้อนรับผู้ติดตามใหม่:
                    </div>
                    <div style="font-size: 18px; font-weight: 900; color: #FFFFFF; margin-bottom: 4px;">
                      รับส่วนลดทันที 10% ไม่มีขั้นต่ำ
                    </div>
                    <div style="color: #94A3B8; font-size: 11px;">
                      ใช้ได้กับอะไหล่รถยนต์ มอเตอร์ไซค์ และน้ำมันเครื่องทุกรายการในร้าน
                    </div>
                  </td>
                  <td align="right" valign="middle" style="padding-left: 12px;">
                    <div style="font-family: 'Courier New', Courier, monospace; font-size: 19px; font-weight: 900; letter-spacing: 2px; color: #FFFFFF; background-color: #06080C; border: 1px solid #334155; padding: 8px 16px; border-radius: 8px; white-space: nowrap;">
                      [<span style="color: #FF4D5E;">${couponCode}</span>]
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <!-- CTA Shop Button -->
            <div>
              <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/products" 
                 target="_blank"
                 style="display: inline-block; background: linear-gradient(90deg, #E63946 0%, #C1121F 100%); color: #FFFFFF; text-decoration: none; font-size: 14px; font-weight: 800; padding: 12px 28px; border-radius: 25px; box-shadow: 0 6px 20px rgba(230, 57, 70, 0.4); text-transform: uppercase; letter-spacing: 0.5px;">
                🛒 เข้าสู่หน้าร้านและใช้โค้ด &rarr;
              </a>
            </div>

          </td>
        </tr>
      </table>

      <!-- 3. REALISTIC AUTOMOTIVE SHOWCASE (Brembo Rotor & Real Specs - No Cartoons!) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 18px 22px; background-color: #07090E; border-top: 1px solid #182030;">
        <tr>
          <td>
            <div style="margin-bottom: 10px;">
              <span style="color: #FF5722; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                FEATURED GENUINE PERFORMANCE PART
              </span>
              <div style="font-size: 16px; font-weight: 900; color: #FFFFFF; margin-top: 2px;">
                อะไหล่แท้ระดับโลก พร้อมจัดส่งด่วนทั่วไทย
              </div>
            </div>

            <!-- High-Definition Realistic Rotor Graphic -->
            <div style="border-radius: 12px; overflow: hidden; border: 1px solid #222C3E; box-shadow: 0 8px 30px rgba(0,0,0,0.8);">
              <img src="${REALISTIC_ROTOR_VISUAL_SVG}" width="576" height="298" alt="Brembo High Carbon Rotor & Caliper" style="display: block; width: 100%; height: auto; border: 0;" />
            </div>
          </td>
        </tr>
      </table>

      <!-- 4. OFFICIAL BRAND PARTNERS STRIP (Matching Website) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 16px 22px; background-color: #090C12; border-top: 1px solid #161D2A;">
        <tr>
          <td>
            <div style="font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; text-align: center;">
              OFFICIAL BRANDS AT MOTIX STORE
            </div>
            <div style="text-align: center;">
              <img src="${BRAND_STRIP_SVG}" width="560" height="38" alt="Brembo, Motul, Ohlins, Akrapovic, NGK, TRW" style="display: block; width: 100%; max-width: 560px; margin: 0 auto; border: 0;" />
            </div>
          </td>
        </tr>
      </table>

      <!-- 5. REAL PRODUCT RECOMMENDATIONS GRID -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 18px 22px; background-color: #0B0E15; border-top: 1px solid #182030;">
        <tr>
          <td>
            <div style="font-size: 15px; font-weight: 900; color: #FFFFFF; margin-bottom: 12px;">
              ⚡ สินค้ายอดนิยมประจำสัปดาห์
            </div>

            <!-- 2x2 Products Table -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                ${REALISTIC_PRODUCTS.slice(0, 2).map((prod) => `
                  <td class="product-card-col" width="48%" valign="top" style="background-color: #101520; border: 1px solid #202B3C; border-radius: 12px; padding: 14px; margin-bottom: 10px;">
                    <div style="display: inline-block; background-color: ${prod.badgeColor}; color: #FFFFFF; font-size: 9px; font-weight: 900; padding: 2px 7px; border-radius: 4px; margin-bottom: 6px;">
                      ${prod.brand}
                    </div>
                    <div style="font-size: 12.5px; font-weight: 800; color: #FFFFFF; line-height: 1.35; margin-bottom: 4px;">
                      ${prod.name}
                    </div>
                    <div style="font-size: 10px; color: #94A3B8; margin-bottom: 10px;">
                      ${prod.carType}
                    </div>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="left">
                          <span style="font-size: 15px; font-weight: 900; color: #22C55E;">${prod.price}</span>
                          <span style="font-size: 10px; color: #64748B; text-decoration: line-through; margin-left: 4px;">${prod.originalPrice}</span>
                        </td>
                        <td align="right">
                          <span style="background-color: #E63946; color: #FFFFFF; font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">
                            ${prod.discount}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                `).join('<td width="4%"></td>')}
              </tr>
            </table>

          </td>
        </tr>
      </table>

      <!-- 6. STORE VALUE GUARANTEE HIGHLIGHTS -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 16px 22px; background-color: #07090D; border-top: 1px solid #161D2A;">
        <tr>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="33%" align="center" style="padding: 4px;">
                  <div style="font-size: 16px;">🛡️</div>
                  <div style="font-size: 11px; font-weight: 800; color: #E2E8F0; margin-top: 2px;">อะไหล่แท้ 100%</div>
                  <div style="font-size: 9px; color: #94A3B8;">รับประกันศูนย์ตรง</div>
                </td>
                <td width="33%" align="center" style="padding: 4px;">
                  <div style="font-size: 16px;">🚚</div>
                  <div style="font-size: 11px; font-weight: 800; color: #E2E8F0; margin-top: 2px;">จัดส่งไว 24-48 ชม.</div>
                  <div style="font-size: 9px; color: #94A3B8;">ส่งด่วนทั่วประเทศ</div>
                </td>
                <td width="33%" align="center" style="padding: 4px;">
                  <div style="font-size: 16px;">🔍</div>
                  <div style="font-size: 11px; font-weight: 800; color: #E2E8F0; margin-top: 2px;">ตรงรุ่น 100%</div>
                  <div style="font-size: 9px; color: #94A3B8;">ใส่ไม่ได้ยินดีคืนเงิน</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- 7. FOOTER (Matching MOTIX Real Website Footer) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 22px 22px 26px 22px; background-color: #05070B; border-top: 1px solid #141A26;">
        <tr>
          <!-- Logo & Slogan -->
          <td valign="top" width="50%" class="mobile-stack">
            <img src="${MOTIX_REAL_LOGO_SVG}" alt="MOTIX" width="160" height="42" style="display: block; border: 0;" />
            <p style="font-size: 10px; color: #94A3B8; margin: 8px 0 0 0; line-height: 1.5;">
              ศูนย์รวมอะไหล่และอุปกรณ์ยานยนต์ออนไลน์ยุคใหม่ อะไหล่แท้ ครบ จบ พร้อมส่งด่วนทั่วไทย
            </p>
          </td>

          <!-- Contact info -->
          <td valign="top" width="50%" align="right" class="mobile-stack mobile-center" style="padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 700; color: #CBD5E1;">
              ติดต่อสอบถามทีมงาน MOTIX:
            </div>
            <div style="font-size: 12px; font-weight: 800; color: #FFFFFF; margin-top: 2px;">
              LINE Official: <span style="color: #06C755;">@motix</span>
            </div>
            <div style="font-size: 10px; color: #94A3B8; margin-top: 2px;">
              อีเมล: contact@motix.com | โทร: 02-XXX-XXXX
            </div>
            <!-- Social Link Placeholders -->
            <div style="margin-top: 8px; font-size: 10px; color: #64748B;">
              <a href="https://facebook.com" style="color: #94A3B8;">Facebook</a> &bull;
              <a href="https://instagram.com" style="color: #94A3B8;">Instagram</a> &bull;
              <a href="https://tiktok.com" style="color: #94A3B8;">TikTok</a>
            </div>
          </td>
        </tr>

        <tr>
          <td colspan="2" align="center" style="padding-top: 16px; border-top: 1px solid #111622; margin-top: 12px;">
            <p style="color: #475569; font-size: 9px; margin: 0;">
              &copy; ${currentYear} MOTIX Automotive Store. All rights reserved. Keep Your Ride Moving.
            </p>
          </td>
        </tr>
      </table>

    </div>
  </center>
</body>
</html>
  `;
}

// ============================================================================
// TEMPLATE 2: MEMBER CLUB REGISTRATION CONFIRMATION EMAIL
// Matching the authentic MOTIX website theme, real logo, and Titanium VIP Card (No Cartoons!)
// ============================================================================
export function generateRegisterEmailHtml(data: RegisterEmailData): string {
  const currentYear = new Date().getFullYear();
  const couponCode = 'MOTIX-WELCOME15';
  const randomMemberNum = Math.floor(1000 + Math.random() * 9000);
  const memberId = `MTX-${currentYear}-${randomMemberNum}`;
  
  // Sanitize user name: Never display or default to 'พีรพัฒน์'
  const rawName = (data.name || '').trim();
  const hasCustomName = rawName && !rawName.includes('พีรพัฒน์') && rawName !== 'undefined';
  
  const greetingHeadline = hasCustomName
    ? `ยินดีต้อนรับคุณ <span style="color: #FF5722;">${rawName}</span><br>สู่ครอบครัว <span style="font-family: 'Arial Black', Impact, sans-serif; color: #FFFFFF; letter-spacing: 0.5px;">MOTI<span style="color: #E63946;">X</span></span>`
    : `ยินดีต้อนรับคุณสู่<br>ครอบครัว <span style="font-family: 'Arial Black', Impact, sans-serif; color: #FFFFFF; letter-spacing: 0.5px;">MOTI<span style="color: #E63946;">X</span></span>`;

  const vehicleModelClean = data.vehicleModel || 'รถยนต์ / มอเตอร์ไซค์';

  return `
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ยินดีต้อนรับสู่ ครอบครัว MOTIX - บัตรสมาชิก Silver Racer</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800;900&display=swap');
    body {
      font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #05070B;
      color: #F1F5F9;
      -webkit-font-smoothing: antialiased;
    }
    a { text-decoration: none; }
    @media only screen and (max-width: 620px) {
      .responsive-table { width: 100% !important; }
      .mobile-stack { display: block !important; width: 100% !important; }
      .mobile-center { text-align: center !important; }
      .hero-title { font-size: 24px !important; }
      .product-card-col { width: 100% !important; display: block !important; margin-bottom: 12px; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #05070B;">
  <center style="width: 100%; table-layout: fixed; background-color: #05070B; padding: 24px 8px 40px 8px;">
    
    <!-- MAIN CONTAINER (600px Standard Email Width) -->
    <div style="max-width: 620px; margin: 0 auto; background-color: #090B10; border: 1px solid #1C2433; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.85); text-align: left;">

      <!-- TOP RED MOTORSPORT STRIPE -->
      <div style="height: 4px; background: linear-gradient(90deg, #E63946 0%, #FF5722 50%, #C1121F 100%);"></div>

      <!-- 1. AUTHENTIC WEBSITE NAVBAR (Same as MOTIX Website) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 16px 22px; background-color: #0A0D14; border-bottom: 1px solid #161D2A;">
        <tr>
          <!-- Real MOTIX Logo -->
          <td valign="middle" align="left">
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app" target="_blank" style="display: inline-block;">
              <img src="${MOTIX_REAL_LOGO_SVG}" alt="MOTIX Auto &amp; Motorcycle Parts" width="220" height="58" style="display: block; border: 0;" />
            </a>
          </td>
          <!-- Top Right Membership Tier -->
          <td valign="middle" align="right">
            <div style="background-color: #161E2D; border: 1px solid #E63946; border-radius: 20px; padding: 5px 12px; display: inline-block; text-align: right;">
              <span style="color: #FF5722; font-size: 11px; font-weight: 900; letter-spacing: 0.5px;">VIP MEMBER</span>
            </div>
          </td>
        </tr>
      </table>

      <!-- STORE NAVIGATION CATEGORIES BAR -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0E121A; padding: 8px 18px; border-bottom: 1px solid #161D2A;">
        <tr>
          <td align="center" style="font-size: 11px; font-weight: 700; color: #94A3B8;">
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/categories" style="color: #CBD5E1; margin: 0 10px;">🚗 อะไหล่รถยนต์</a>
            <span style="color: #334155;">|</span>
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/categories" style="color: #CBD5E1; margin: 0 10px;">🏍️ อะไหล่มอเตอร์ไซค์</a>
            <span style="color: #334155;">|</span>
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/products" style="color: #CBD5E1; margin: 0 10px;">🛢️ น้ำมันเครื่อง &amp; ของเหลว</a>
            <span style="color: #334155;">|</span>
            <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/products" style="color: #22C55E; margin: 0 10px;">★ สิทธิพิเศษสมาชิก VIP</a>
          </td>
        </tr>
      </table>

      <!-- 2. HERO WELCOME & REGISTRATION CONFIRMATION -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: radial-gradient(circle at 75% 20%, #22090C 0%, #0F131D 65%, #080A0F 100%); padding: 26px 22px 18px 22px;">
        <tr>
          <td>
            
            <!-- Category Tag -->
            <div style="display: inline-block; background: rgba(230, 57, 70, 0.15); border: 1px solid rgba(230, 57, 70, 0.4); border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
              <span style="color: #FF4D5E; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                MOTIX MEMBER CLUB &bull; OFFICIAL WELCOME
              </span>
            </div>

            <!-- Headline -->
            <h1 class="hero-title" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 900; line-height: 1.2; color: #FFFFFF;">
              ${greetingHeadline}
            </h1>

            <p style="color: #CBD5E1; font-size: 13.5px; line-height: 1.6; margin: 0 0 20px 0;">
              การสมัครสมาชิกของคุณเสร็จสมบูรณ์เรียบร้อยแล้ว! ขอมอบบัตรสมาชิกดิจิทัลระดับ <strong>Silver Racer</strong> และโค้ดส่วนลด 15% ให้คุณใช้เลือกซื้ออะไหล่แท้เพื่อรถคันโปรดของคุณได้ทันที
            </p>

            <!-- 3. REALISTIC TITANIUM & CARBON FIBER MEMBER CARD (No Cartoons!) -->
            <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.85); border: 1px solid #2A364E; margin-bottom: 22px;">
              <img 
                src="${generateRealisticVipCardSvg(memberId, rawName || 'MOTIX VIP MEMBER', vehicleModelClean)}" 
                width="576" 
                height="330" 
                alt="MOTIX Titanium VIP Member Card" 
                style="display: block; width: 100%; height: auto; border: 0;" 
              />
            </div>

            <!-- 15% Welcome Coupon Box (Realistic Design) -->
            <div style="background: linear-gradient(135deg, #181115 0%, #0E131E 100%); border: 1.5px dashed #FF5722; border-radius: 12px; padding: 16px 20px; margin-bottom: 20px; box-shadow: 0 4px 20px rgba(255, 87, 34, 0.2);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="color: #FF5722; font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
                      🎉 โค้ดส่วนลดสมาชิกใหม่ 15%:
                    </div>
                    <div style="font-size: 18px; font-weight: 900; color: #FFFFFF; margin-bottom: 4px;">
                      รับส่วนลด 15% ไม่มีขั้นต่ำ (ลดสูงสุด ฿1,000)
                    </div>
                    <div style="color: #94A3B8; font-size: 11px;">
                      ใช้ได้กับสินค้าทุกชิ้นในร้าน MOTIX &bull; จัดส่งด่วน 24-48 ชม.
                    </div>
                  </td>
                  <td align="right" valign="middle" style="padding-left: 12px;">
                    <div style="font-family: 'Courier New', Courier, monospace; font-size: 19px; font-weight: 900; letter-spacing: 2px; color: #FFFFFF; background-color: #06080C; border: 1px solid #334155; padding: 8px 16px; border-radius: 8px; white-space: nowrap;">
                      [<span style="color: #FF5722;">${couponCode}</span>]
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <!-- CTA Shop Button -->
            <div>
              <a href="https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app/products" 
                 target="_blank"
                 style="display: inline-block; background: linear-gradient(90deg, #E63946 0%, #C1121F 100%); color: #FFFFFF; text-decoration: none; font-size: 14px; font-weight: 800; padding: 12px 28px; border-radius: 25px; box-shadow: 0 6px 20px rgba(230, 57, 70, 0.4); text-transform: uppercase; letter-spacing: 0.5px;">
                🛒 ช้อปสินค้าตรงรุ่นรถของคุณ &rarr;
              </a>
            </div>

          </td>
        </tr>
      </table>

      <!-- 4. OFFICIAL BRAND PARTNERS STRIP -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 16px 22px; background-color: #07090E; border-top: 1px solid #161D2A;">
        <tr>
          <td>
            <div style="font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; text-align: center;">
              OFFICIAL BRANDS AT MOTIX STORE
            </div>
            <div style="text-align: center;">
              <img src="${BRAND_STRIP_SVG}" width="560" height="38" alt="Brembo, Motul, Ohlins, Akrapovic, NGK, TRW" style="display: block; width: 100%; max-width: 560px; margin: 0 auto; border: 0;" />
            </div>
          </td>
        </tr>
      </table>

      <!-- 5. REAL PRODUCT RECOMMENDATIONS GRID (Matching Website Store) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 18px 22px; background-color: #0B0E15; border-top: 1px solid #182030;">
        <tr>
          <td>
            <div style="font-size: 15px; font-weight: 900; color: #FFFFFF; margin-bottom: 12px;">
              ⚡ อะไหล่แนะนำสำหรับสมาชิก (ใช้โค้ดลดเพิ่ม 15%)
            </div>

            <!-- 2x2 Products Table -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                ${REALISTIC_PRODUCTS.slice(0, 2).map((prod) => `
                  <td class="product-card-col" width="48%" valign="top" style="background-color: #101520; border: 1px solid #202B3C; border-radius: 12px; padding: 14px; margin-bottom: 10px;">
                    <div style="display: inline-block; background-color: ${prod.badgeColor}; color: #FFFFFF; font-size: 9px; font-weight: 900; padding: 2px 7px; border-radius: 4px; margin-bottom: 6px;">
                      ${prod.brand}
                    </div>
                    <div style="font-size: 12.5px; font-weight: 800; color: #FFFFFF; line-height: 1.35; margin-bottom: 4px;">
                      ${prod.name}
                    </div>
                    <div style="font-size: 10px; color: #94A3B8; margin-bottom: 10px;">
                      ${prod.carType}
                    </div>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="left">
                          <span style="font-size: 15px; font-weight: 900; color: #22C55E;">${prod.price}</span>
                          <span style="font-size: 10px; color: #64748B; text-decoration: line-through; margin-left: 4px;">${prod.originalPrice}</span>
                        </td>
                        <td align="right">
                          <span style="background-color: #E63946; color: #FFFFFF; font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">
                            ${prod.discount}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                `).join('<td width="4%"></td>')}
              </tr>
            </table>

          </td>
        </tr>
      </table>

      <!-- 6. VIP MEMBER BENEFITS (4 CARDS) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 16px 22px; background-color: #080A0F; border-top: 1px solid #181F2E;">
        <tr>
          <td>
            <div style="font-size: 13.5px; font-weight: 800; color: #FFFFFF; margin-bottom: 10px;">
              สิทธิประโยชน์สำหรับสมาชิก MOTIX Silver Racer:
            </div>

            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="23%" valign="top" style="background-color: #0E121B; border: 1px solid #1E273A; border-radius: 8px; padding: 10px 6px; text-align: center;">
                  <div style="font-size: 14px; color: #FF4D5E; font-weight: 900;">%</div>
                  <div style="font-size: 9.5px; font-weight: 700; color: #CBD5E1; margin-top: 4px;">ลด 15% ทุกบิล</div>
                </td>
                <td width="2%"></td>
                <td width="23%" valign="top" style="background-color: #0E121B; border: 1px solid #1E273A; border-radius: 8px; padding: 10px 6px; text-align: center;">
                  <div style="font-size: 14px; color: #F59E0B; font-weight: 900;">★</div>
                  <div style="font-size: 9.5px; font-weight: 700; color: #CBD5E1; margin-top: 4px;">สะสมแต้ม 2x</div>
                </td>
                <td width="2%"></td>
                <td width="23%" valign="top" style="background-color: #0E121B; border: 1px solid #1E273A; border-radius: 8px; padding: 10px 6px; text-align: center;">
                  <div style="font-size: 14px; color: #22C55E; font-weight: 900;">✓</div>
                  <div style="font-size: 9.5px; font-weight: 700; color: #CBD5E1; margin-top: 4px;">อะไหล่แท้ 100%</div>
                </td>
                <td width="2%"></td>
                <td width="23%" valign="top" style="background-color: #0E121B; border: 1px solid #1E273A; border-radius: 8px; padding: 10px 6px; text-align: center;">
                  <div style="font-size: 14px; color: #38BDF8; font-weight: 900;">⚡</div>
                  <div style="font-size: 9.5px; font-weight: 700; color: #CBD5E1; margin-top: 4px;">ส่งด่วน 24-48h</div>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>

      <!-- 7. FOOTER (Matching MOTIX Real Website Footer) -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 22px 22px 26px 22px; background-color: #05070B; border-top: 1px solid #141A26;">
        <tr>
          <!-- Logo & Slogan -->
          <td valign="top" width="50%" class="mobile-stack">
            <img src="${MOTIX_REAL_LOGO_SVG}" alt="MOTIX" width="160" height="42" style="display: block; border: 0;" />
            <p style="font-size: 10px; color: #94A3B8; margin: 8px 0 0 0; line-height: 1.5;">
              ศูนย์รวมอะไหล่และอุปกรณ์ยานยนต์ออนไลน์ยุคใหม่ อะไหล่แท้ ครบ จบ พร้อมส่งด่วนทั่วไทย
            </p>
          </td>

          <!-- Contact info -->
          <td valign="top" width="50%" align="right" class="mobile-stack mobile-center" style="padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 700; color: #CBD5E1;">
              ติดต่อฝ่ายบริการสมาชิก MOTIX:
            </div>
            <div style="font-size: 12px; font-weight: 800; color: #FFFFFF; margin-top: 2px;">
              LINE Official: <span style="color: #06C755;">@motix</span>
            </div>
            <div style="font-size: 10px; color: #94A3B8; margin-top: 2px;">
              อีเมล: contact@motix.com | โทร: 02-XXX-XXXX
            </div>
            <!-- Social Link Placeholders -->
            <div style="margin-top: 8px; font-size: 10px; color: #64748B;">
              <a href="https://facebook.com" style="color: #94A3B8;">Facebook</a> &bull;
              <a href="https://instagram.com" style="color: #94A3B8;">Instagram</a> &bull;
              <a href="https://tiktok.com" style="color: #94A3B8;">TikTok</a>
            </div>
          </td>
        </tr>

        <tr>
          <td colspan="2" align="center" style="padding-top: 16px; border-top: 1px solid #111622; margin-top: 12px;">
            <p style="color: #475569; font-size: 9px; margin: 0;">
              &copy; ${currentYear} MOTIX Automotive Store. All rights reserved. Keep Your Ride Moving.
            </p>
          </td>
        </tr>
      </table>

    </div>
  </center>
</body>
</html>
  `;
}
