import React from 'react';

export const MotixBrandLogo = ({
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  showTagline = true,
  showSlogan = false,
  className = '',
}) => {
  const sizeMap = {
    sm: { height: 28, fontSize: 'text-lg', svgWidth: 56 },
    md: { height: 38, fontSize: 'text-2xl', svgWidth: 76 },
    lg: { height: 48, fontSize: 'text-3xl', svgWidth: 96 },
    xl: { height: 62, fontSize: 'text-4xl sm:text-5xl', svgWidth: 124 },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 group select-none ${className}`}>
      {/* Original MOTIX Emblem: Tachometer Arc + Car Silhouette + RPM Needle + Speed Cut */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 160 80"
          className="overflow-visible"
          style={{
            height: `${currentSize.height}px`,
            width: `${currentSize.svgWidth}px`,
          }}
        >
          <defs>
            {/* 3D Chrome Gradient */}
            <linearGradient id="motixChrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="52%" stopColor="#475569" />
              <stop offset="80%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Ruby Red Performance Gradient */}
            <linearGradient id="motixRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="40%" stopColor="#E63946" />
              <stop offset="80%" stopColor="#9A031E" />
              <stop offset="100%" stopColor="#4A000A" />
            </linearGradient>

            {/* Glowing Red Drop Shadow */}
            <filter id="motixRedGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#E63946" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Tachometer RPM Arc (Dotted Background) */}
          <path
            d="M 32 60 A 52 52 0 0 1 128 60"
            fill="none"
            stroke="#263248"
            strokeWidth="4"
            strokeDasharray="4 4"
          />

          {/* Redline High RPM Zone */}
          <path
            d="M 88 23 A 52 52 0 0 1 126 58"
            fill="none"
            stroke="url(#motixRed)"
            strokeWidth="5"
            filter="url(#motixRedGlow)"
          />

          {/* Tachometer Needle */}
          <line
            x1="80"
            y1="56"
            x2="108"
            y2="28"
            stroke="#FF4D4D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="80" cy="56" r="4" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />

          {/* Sports Coupe Car Silhouette Roofline in Chrome */}
          <path
            d="M 12 56 C 28 54, 48 32, 78 31 C 106 30, 124 44, 148 56"
            fill="none"
            stroke="url(#motixChrome)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 36 52 C 54 37, 74 36, 94 36 C 108 36, 118 44, 132 52"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Speed horizontal cut line */}
          <line
            x1="8"
            y1="60"
            x2="152"
            y2="60"
            stroke="#E63946"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography: MOTI + X & Slogan */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight leading-none">
          {/* Metallic Chrome MOTI */}
          <span
            className={`font-heading font-black tracking-tight ${currentSize.fontSize}`}
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 25%, #94A3B8 50%, #334155 52%, #CBD5E1 78%, #0F172A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.8))',
            }}
          >
            MOTI
          </span>

          {/* Glowing Ruby Red X */}
          <span
            className={`font-heading font-black tracking-tight ${currentSize.fontSize} -ml-0.5`}
            style={{
              background: 'linear-gradient(135deg, #FF6B6B 0%, #E63946 35%, #C1121F 70%, #780000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 12px rgba(230, 57, 70, 0.8))',
            }}
          >
            X
          </span>
        </div>

        {/* Tagline: Keep Your Ride Moving. */}
        {showTagline && (
          <span className="text-[9px] sm:text-[10px] font-bold text-slate-300 tracking-wide italic mt-0.5 whitespace-nowrap">
            Keep Your Ride Moving.
          </span>
        )}

        {/* Extended Slogan */}
        {showSlogan && (
          <span className="text-[8px] sm:text-[9px] font-bold text-[#E63946] tracking-wider mt-0.5 uppercase">
            ให้รถของคุณพร้อมเดินทางต่อ
          </span>
        )}
      </div>
    </div>
  );
};
