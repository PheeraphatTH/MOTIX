import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  ShoppingCart,
  Heart,
  CheckCircle2,
  Car,
  Bike,
  ShieldCheck,
  Truck,
  ExternalLink,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { RatingStars } from '../common/RatingStars';
import { Button } from '../common/Button';

export const QuickViewModal = () => {
  const navigate = useNavigate();
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isFavorite = isInWishlist(product.id);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuickViewProduct(null);
  };

  const handleViewFullDetails = () => {
    setQuickViewProduct(null);
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#11151F] border border-[#262E40] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/60 hover:bg-black text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Container */}
        <div className="w-full md:w-1/2 p-6 bg-white flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full max-h-72 object-contain"
          />
          {product.brandLogo && (
            <div className="absolute top-4 left-4 max-h-7">
              <img src={product.brandLogo} alt={product.brand} className="h-6 w-auto object-contain" />
            </div>
          )}
          {product.discount > 0 && (
            <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-[#E63946] text-white font-extrabold text-xs shadow-md">
              ลด {product.discount}%
            </span>
          )}
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-[#FF6B6B] uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-xs text-slate-400 font-mono">SKU: {product.sku}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug mb-2">
              {product.name}
            </h2>

            <div className="mb-3">
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="sm" />
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-black text-white font-mono">
                ฿{formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-slate-400 line-through font-mono">
                  ฿{formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Vehicle compatibility sample */}
            <div className="p-2.5 rounded-xl bg-[#161B27] border border-[#252E42] text-xs space-y-1 mb-4">
              <span className="text-slate-400 font-semibold block">รุ่นรถที่รองรับตัวอย่าง:</span>
              <p className="text-slate-200 font-medium">
                {product.compatibleVehicles?.slice(0, 4).join(', ')}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-3 border-t border-[#22293A]">
            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-300 font-semibold">จำนวน:</span>
              <div className="flex items-center rounded-lg bg-[#181E2C] border border-slate-700">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2.5 py-1 text-slate-300 hover:text-white font-bold"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-mono font-bold text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 py-1 text-slate-300 hover:text-white font-bold"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-emerald-400 font-semibold">
                มีสินค้าพร้อมส่ง ({product.stock} ชิ้น)
              </span>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="primary"
                icon={ShoppingCart}
                onClick={handleAddToCart}
              >
                เพิ่มลงตะกร้า
              </Button>

              <Button
                variant="outline"
                icon={ExternalLink}
                onClick={handleViewFullDetails}
              >
                ดูรายละเอียดเต็ม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
