import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ShoppingCart,
  Eye,
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const SmartAdvisorCard = ({ product, onQuickView }) => {
  const { addToCart, showToast } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`เพิ่ม "${product.name}" ลงในตะกร้าเรียบร้อยแล้ว`, 'success');
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  const score = product.recommendationScore || 95;
  const scoreColor =
    score >= 97
      ? 'from-emerald-500 to-teal-600 border-emerald-400/40 text-emerald-100'
      : score >= 94
      ? 'from-amber-500 to-orange-600 border-amber-400/40 text-amber-100'
      : 'from-blue-500 to-indigo-600 border-blue-400/40 text-blue-100';

  return (
    <div className="group relative flex flex-col rounded-2xl bg-[#141824] border border-[#262F42] hover:border-red-500/60 shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* Top Match Score Pill */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r shadow-lg text-[11px] font-black border backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span className="text-white font-mono">{score}% MATCH</span>
        <span className="text-white/80 hidden sm:inline text-[10px] font-medium">แนะนำสูงสุด</span>
      </div>

      {/* Stock or Promo badge */}
      {product.promoTag && (
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-[#E63946] text-white text-[10px] font-extrabold uppercase shadow-md">
          {product.promoTag}
        </div>
      )}

      {/* Product Image Canvas */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-[#1E2538] to-[#121622] p-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Quick View Trigger */}
        <button
          type="button"
          onClick={handleQuickView}
          className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-[#E63946] text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all shadow-md cursor-pointer"
          title="ดูตัวอย่างด่วน"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col p-4 sm:p-5">
        
        {/* Brand & Rating */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-xs font-bold text-[#FF6B6B] uppercase tracking-wider">
            {product.brand}
          </span>
          <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-500 font-normal">({product.reviewCount || 90})</span>
          </div>
        </div>

        {/* Product Name */}
        <Link
          to={`/products/${product.id}`}
          className="text-sm sm:text-base font-bold text-white hover:text-[#FF6B6B] transition-colors line-clamp-2 mb-2.5 leading-snug"
        >
          {product.name}
        </Link>

        {/* Highlighted Recommendation Reason Box (Teacher & Customer UX Highlight) */}
        <div className="p-3 rounded-xl bg-[#0C0F17] border border-[#1F273A] mb-3">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 mb-1">
            <Zap className="w-3 h-3 text-amber-400 shrink-0" />
            <span>เหตุผลที่ระบบแนะนำชิ้นนี้:</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {product.recommendationReason || product.description}
          </p>
        </div>

        {/* Recommendation Tags */}
        {product.recommendationTags && product.recommendationTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.recommendationTags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-[#1B2233] text-[10px] font-semibold text-slate-300 border border-[#2B354D]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Pricing and 1-Click Action */}
        <div className="mt-auto pt-3 border-t border-[#1F273A] flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-semibold">ราคาพิเศษ</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-black text-white font-mono">
                ฿{product.price.toLocaleString()}
              </span>
              {product.oldPrice && product.oldPrice > product.price && (
                <span className="text-xs text-slate-500 line-through">
                  ฿{product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#E63946] to-[#C1121F] hover:brightness-110 text-white text-xs font-bold shadow-lg shadow-red-950/40 transition-all cursor-pointer active:scale-95"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>ใส่ตะกร้า</span>
            </button>
            <Link
              to={`/products/${product.id}`}
              className="p-2.5 rounded-xl bg-[#1D2436] hover:bg-[#28324A] text-slate-300 hover:text-white transition-colors"
              title="ดูรายละเอียดสินค้า"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
