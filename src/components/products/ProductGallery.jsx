import React, { useState } from 'react';
import { ShieldCheck, ZoomIn } from 'lucide-react';

export const ProductGallery = ({ images = [], productName = 'Product' }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activeImage = images[selectedImageIndex] || images[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Stage */}
      <div
        className="relative w-full pt-[90%] bg-white border border-[#222A3B] rounded-2xl overflow-hidden group shadow-md"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <div className="absolute inset-0 p-8 flex items-center justify-center">
          <img
            src={activeImage}
            alt={productName}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-contain transition-transform duration-300 ${
              isZoomed ? 'scale-125' : 'scale-100'
            }`}
          />
        </div>

        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] text-slate-300 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-3.5 h-3.5 text-[#E63946]" />
          <span>เลื่อนเมาส์เพื่อซูม</span>
        </div>

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-bold text-emerald-300 flex items-center gap-1.5 backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>สินค้าแท้ 100% มีรับประกัน</span>
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden bg-white border-2 transition-all shrink-0 p-1.5 ${
                selectedImageIndex === idx
                  ? 'border-[#E63946] shadow-md shadow-red-950/40'
                  : 'border-slate-300 hover:border-[#E63946] opacity-75 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
