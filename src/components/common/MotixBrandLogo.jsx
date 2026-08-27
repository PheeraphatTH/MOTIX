import React from 'react';

export const MotixBrandLogo = ({
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  showTagline = true,
  showSlogan = false,
  className = '',
}) => {
  // Dimensions and scaling based on size prop
  const sizeMap = {
    sm: { height: 32, fontSize: 'text-xl', iconSize: 20 },
    md: { height: 42, fontSize: 'text-2xl sm:text-3xl', iconSize: 26 },
    lg: { height: 56, fontSize: 'text-3xl sm:text-4xl', iconSize: 34 },
    xl: { height: 72, fontSize: 'text-4xl sm:text-5xl', iconSize: 44 },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* 3D Automotive Tachometer & Silhouette Logo Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 80"
          className="overflow-visible"
          style={{ height: `${currentSize.height}px`, width: `${(currentSize.height * 100) / 80}px` }}
        >
          <defs>
            {/* Metallic Chrome Gradient */}
            <linearGradient id="motiChrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="52%" stopColor="#475569" />
              <stop offset="75%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Metallic Ruby Red Gradient for 'X' and Tachometer */}
            <linearGradient id="redMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="30%" stopColor="#E63946" />
              <stop offset="70%" stopColor="#C1121F" />
              <stop offset="100%" stopColor="#780000" />
            </linearGradient>

            {/* Gauge Redline Glow */}
            <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#E63946" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Tachometer Arcs / RPM Gauge */}
          <path
            d="M 18 68 A 46 46 0 0 1 82 22"
            fill="none"
            stroke="#334155"
            strokeWidth="3.5"
            strokeDasharray="2.5 3.5"
          />
          <path
            d="M 50 14 A 46 46 0 0 1 86 36"
            fill="none"
            stroke="url(#redMetallic)"
            strokeWidth="4.5"
            filter="url(#redGlow)"
          />
          {/* Gauge Needle Pointing to Redline */}
          <line
            x1="52"
            y1="46"
            x2="80"
            y2="24"
            stroke="#FF4D4D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="52" cy="46" r="3.5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1" />

          {/* Sleek Aerodynamic Car Silhouette Roofline */}
          <path
            d="M 8 56 C 22 52, 34 34, 52 33 C 68 32, 78 44, 94 54"
            fill="none"
            stroke="url(#motiChrome)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 22 51 C 34 38, 48 37, 60 37 C 68 37, 74 44, 82 50"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Dynamic Speed Slash under silhouette */}
          <line x1="4" y1="59" x2="96" y2="59" stroke="#E63946" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Typography: MOTIX + AUTO & MOTORCYCLE PARTS */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-wider leading-none">
          {/* 3D Chrome Effect MOTI */}
          <span
            className={`font-heading font-black tracking-tight ${currentSize.fontSize}`}
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 30%, #94A3B8 50%, #475569 52%, #CBD5E1 75%, #1E293B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.8))',
            }}
          >
            MOTI
          </span>

          {/* Dynamic 3D Ruby Red Metallic X */}
          <span
            className={`font-heading font-black tracking-tight ${currentSize.fontSize} -ml-0.5`}
            style={{
              background: 'linear-gradient(135deg, #FF6B6B 0%, #E63946 35%, #C1121F 70%, #780000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 8px rgba(230, 57, 70, 0.6))',
            }}
          >
            X
          </span>
        </div>

        {/* Subtitle: AUTO & MOTORCYCLE PARTS */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="h-[1px] w-2 sm:w-3 bg-gradient-to-r from-transparent to-[#E63946]" />
            <span className="text-[8px] sm:text-[9px] font-black tracking-[0.18em] text-[#FF6B6B] uppercase whitespace-nowrap">
              AUTO & MOTORCYCLE PARTS
            </span>
            <div className="h-[1px] w-2 sm:w-3 bg-gradient-to-l from-transparent to-[#E63946]" />
          </div>
        )}

        {/* Slogan: KEEP YOUR RIDE MOVING */}
        {showSlogan && (
          <span className="text-[9px] font-bold text-slate-300 tracking-wider uppercase mt-1">
            KEEP YOUR RIDE MOVING.
          </span>
        )}
      </div>
    </div>
  );
};
