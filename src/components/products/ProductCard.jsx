import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShoppingCart,
  Heart,
  Eye,
  CheckCircle2,
  Car,
  Bike,
  Star,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getBrandLogo } from '../../data/productAssets';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, selectedVehicle } = useCart();

  const isFavorite = isInWishlist(product?.id);
  const isCompatibleWithSelected = selectedVehicle && selectedVehicle.model
    ? (product?.compatibleVehicles || []).some(v =>
        typeof v === 'string' && v.toLowerCase().includes(String(selectedVehicle.model).toLowerCase())
      )
    : true;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  const brandLogo = product.brandLogo || getBrandLogo(product.brand);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative flex flex-col bg-[#131722] border border-[#242C3D] hover:border-[#E63946]/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-300"
    >
      {/* 1. Image Container (Clean White Studio Canvas matching reference mockup) */}
      <div className="relative w-full pt-[88%] bg-white overflow-hidden rounded-t-2xl">
        {/* Brand Logo on Top-Left */}
        <div className="absolute top-3 left-3 z-10 max-h-7 flex items-center pointer-events-none">
          {brandLogo ? (
            <img
              src={brandLogo}
              alt={product.brand}
              referrerPolicy="no-referrer"
              className="h-5 sm:h-6 w-auto object-contain max-w-[90px]"
            />
          ) : (
            <span className="text-xs font-black uppercase tracking-wider text-[#E60000]">
              {product.brand}
            </span>
          )}
        </div>

        {/* Product Image */}
        <Link to={`/products/${product.id}`} className="absolute inset-0 flex items-center justify-center p-5 pt-8">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500"
          />
        </Link>

        {/* Action Overlay Buttons (Wishlist & Quick View) Top-Right */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`w-8 h-8 rounded-xl flex items-center justify-center backdrop-blur-md transition-all shadow-sm ${
              isFavorite
                ? 'bg-red-500 text-white'
                : 'bg-black/10 hover:bg-black/20 text-slate-700 hover:text-slate-900'
            }`}
            title="เพิ่มในรายการโปรด"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-8 h-8 rounded-xl bg-black/10 hover:bg-black/20 text-slate-700 hover:text-slate-900 flex items-center justify-center backdrop-blur-md transition-all shadow-sm opacity-0 group-hover:opacity-100"
            title="ดูตัวอย่างด่วน"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Compatible Vehicle Match Indicator */}
        {selectedVehicle.model && isCompatibleWithSelected && (
          <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-emerald-950/90 border border-emerald-600/60 backdrop-blur-sm flex items-center gap-1.5 text-[10px] font-bold text-emerald-300 shadow-sm z-10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">ใส่ได้ตรงรุ่น {selectedVehicle.model}</span>
          </div>
        )}
      </div>

      {/* 2. Product Information */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
        <div>
          {/* Product Name */}
          <Link to={`/products/${product.id}`} className="block group-hover:text-[#FF6B6B] transition-colors mb-2">
            <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug min-h-[2.5rem]">
              {product.name}
            </h3>
          </Link>

          {/* Compatible Vehicles */}
          <p className="text-[11px] text-slate-400 line-clamp-1 mb-2.5">
            <span className="text-slate-400 font-medium">ตรงรุ่น:</span> {product.compatibleVehicles?.slice(0, 3).join(', ')}...
          </p>

          {/* Rating and Stock Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-slate-200">{product.rating}</span>
              <span className="text-xs text-slate-500">({product.reviewCount})</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">
              {product.stock > 0 ? 'พร้อมส่ง' : 'สินค้าหมด'}
            </span>
          </div>
        </div>

        {/* 3. Price & Add to Cart Row (Exact layout from reference mockup) */}
        <div className="pt-2 border-t border-[#22293A] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg sm:text-xl font-extrabold text-white font-mono">
              ฿{formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-slate-500 line-through font-mono">
                ฿{formatPrice(product.oldPrice)}
              </span>
            )}
            {product.discount > 0 && (
              <span className="text-xs font-extrabold text-[#E63946]">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1);
            }}
            disabled={product.stock <= 0}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white flex items-center justify-center hover:brightness-110 active:scale-95 transition-all shadow-md shadow-red-950/40 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
            title="เพิ่มลงตะกร้า"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
