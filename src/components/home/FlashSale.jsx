import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Flame, ArrowRight, Sparkles, Zap, ChevronRight } from 'lucide-react';
import { products } from '../../data/products';
import { CountdownTimer } from '../common/CountdownTimer';
import { ProductCard } from '../products/ProductCard';

export const FlashSale = () => {
  // Flash sale products (discounted products)
  const flashSaleItems = products.filter((p) => p.isPromotion).slice(0, 4);

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#0A0C10] via-[#120F12] to-[#0A0C10] border-t border-[#1A2230] relative overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flash Sale Header Banner matching red motorsport identity */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 p-6 sm:p-8 rounded-3xl bg-[#141219] border border-red-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-red-600/15 to-transparent pointer-events-none" />
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-[#FF6B6B] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
              <span>SPECIAL PROMOTION</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-heading">
              สินค้าจัดโปรสุดพิเศษ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#E63946] to-[#FF5722]">ลดสูงสุด 20%</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              คัดสรรสินค้าคุณภาพ พร้อมโปรโมชั่นซิ่งเอาใจคนรักรถ สินค้ามีจำนวนจำกัด
            </p>
          </div>

          {/* Right side: Countdown + Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <CountdownTimer hoursFromNow={8} label="ดีลพิเศษหมดเวลาใน" />
            <Link
              to="/promotions"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E63946] to-[#C1121F] hover:from-[#FF4D5E] hover:to-[#D62839] text-white text-xs font-bold transition-all shadow-md shadow-red-950/40"
            >
              <span>ดูสินค้าทั้งหมด</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {flashSaleItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
