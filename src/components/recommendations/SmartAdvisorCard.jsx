import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ShoppingCart, Star, CheckCircle, Eye, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const SmartAdvisorCard = ({ product, onQuickView }) => {
  const { addToCart, showToast } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`เพิ่ม ${product.name} ลงในตะกร้าแล้ว`, 'success');
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    } else {
      navigate(`/products/${product.id}`);
    }
  };

  const score = product.recommendationScore || 95;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-[#121622] border border-[#222A3B] hover:border-[#E63946]/60 shadow-md hover:shadow-xl hover:shadow-red-950/20 transition-all duration-300 overflow-hidden">
      
      {/* Top Match Score Pill */}
      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#090C12]/85 text-[10px] font-bold text-white border border-[#2B354C] backdrop-blur-sm">
        <Sparkles className="w-3 h-3 text-[#FF5722]" />
        <span className="font-mono text-[#FF6B6B]">{score}% Match</span>
      </div>

      {/* Promo badge */}
      {product.promoTag && (
        <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-md bg-[#E63946] text-white text-[10px] font-bold uppercase">
          {product.promoTag}
        </div>
      )}

      {/* Product Image Canvas */}
      <div className="relative aspect-[4/3] bg-[#0A0D14] p-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Hover Quick View Trigger */}
        <button
          type="button"
          onClick={handleQuickView}
          className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-[#141824]/90 hover:bg-[#E63946] text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-sm"
          title="ดูตัวอย่างด่วน"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col p-4">
        
        {/* Brand & Rating */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
            {product.brand}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-amber-400 font-medium">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Product Name */}
        <Link
          to={`/products/${product.id}`}
          className="text-xs sm:text-sm font-semibold text-white hover:text-[#E63946] transition-colors line-clamp-2 mb-2 leading-snug"
        >
          {product.name}
        </Link>

        {/* Highlighted Reason */}
        <div className="text-[11px] text-slate-400 line-clamp-2 mb-3 bg-[#0B0E17] px-2.5 py-1.5 rounded-lg border border-[#1E273A]">
          <span className="text-slate-300 font-medium">{product.recommendationReason || product.description}</span>
        </div>

        {/* Pricing and 1-Click Action */}
        <div className="mt-auto pt-3 border-t border-[#1C2436] flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-white font-mono">
                ฿{product.price.toLocaleString()}
              </span>
              {product.oldPrice && product.oldPrice > product.price && (
                <span className="text-[11px] text-slate-500 line-through">
                  ฿{product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#E63946] to-[#C1121F] hover:from-[#FF4D5E] hover:to-[#D62839] text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>ใส่ตะกร้า</span>
            </button>
            <Link
              to={`/products/${product.id}`}
              className="p-1.5 rounded-lg bg-[#181F2E] hover:bg-[#232C40] text-slate-300 hover:text-white transition-colors"
              title="ดูรายละเอียด"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
