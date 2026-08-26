import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Flame, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { products } from '../../data/products';
import { CountdownTimer } from '../common/CountdownTimer';
import { ProductCard } from '../products/ProductCard';

export const FlashSale = () => {
  // Flash sale products (discounted products)
  const flashSaleItems = products.filter((p) => p.isPromotion).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0B0D12] via-[#11141D] to-[#0B0D12] border-t border-[#1C2230] relative overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flash Sale Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 p-6 sm:p-8 rounded-3xl bg-[#141824] border border-red-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-red-600/15 to-transparent pointer-events-none" />
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-[#FF6B6B] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
              <span>LIMITED TIME CAMPAIGN</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              FLASH SALE — ลดแรงแซงทุกดีล
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              สินค้าอะไหล่บำรุงรักษาลดสูงสุด 27% สต็อกจำนวนจำกัด หมดแล้วหมดเลย
            </p>
          </div>

          {/* Countdown timer with react-countdown */}
          <div className="shrink-0">
            <CountdownTimer hoursFromNow={8} label="FLASH SALE ENDS IN" />
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
