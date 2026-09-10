import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Truck,
  Sparkles,
  Award,
  ChevronRight,
  Flame,
} from 'lucide-react';
import { Button } from '../common/Button';
import { PRODUCT_ASSETS, BRAND_LOGOS } from '../../data/productAssets';

export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#090B10] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#1A202C]">
      {/* Background glow and subtle automotive grid */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Brand message & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Tagline / Category badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181D2A] border border-red-500/30 text-xs font-bold text-[#FF6B6B] shadow-inner"
            >
              <Flame className="w-4 h-4 text-[#E63946] animate-pulse" />
              <span>{t('hero.tagline')}</span>
            </motion.div>

            {/* Brand Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] uppercase font-heading">
                KEEP YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] via-[#FF5722] to-[#FF8A50]">
                  RIDE MOVING
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-200 font-['Prompt']">
                {t('brand.thaiSlogan')}
              </p>
            </motion.div>

            {/* Marketing Sub-headline & Concept */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              {t('hero.subheadline')} — แพลตฟอร์มจำหน่ายอะไหล่รถยนต์และรถจักรยานยนต์ออนไลน์ยุคใหม่ 
              ค้นหาตรงรุ่น 100% ด้วยระบบ Vehicle Finder พร้อมโปรโมชั่นและส่วนลดพิเศษ
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto shadow-xl shadow-red-950/50"
              >
                {t('hero.shopNow')}
              </Button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('smart-recommendation-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    navigate('/recommendations?mode=form');
                  }
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600/30 via-amber-600/30 to-red-600/20 hover:from-red-600/40 hover:to-amber-600/40 text-amber-300 hover:text-white border border-amber-500/40 text-sm font-black flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>แบบฟอร์มคัดกรองอะไหล่ตรงรุ่น</span>
              </button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/categories')}
                className="w-full sm:w-auto"
              >
                {t('hero.exploreParts')}
              </Button>
            </motion.div>

            {/* Trust Highlights Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#1C2230] w-full"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E63946] shrink-0" />
                <span className="text-xs font-semibold text-slate-300">อะไหล่แท้ 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span className="text-xs font-semibold text-slate-300">จัดส่งไว 24-48 ชม.</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-300">รับประกันตรงรุ่น</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-300">ดีลลดสูงสุด 40%</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Graphic / Featured Product Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Card Graphic */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#161B27] via-[#10141E] to-[#0A0D14] border border-[#2B354A] p-6 sm:p-8 shadow-2xl shadow-black/80 overflow-hidden">
                
                {/* Floating Glow Accents */}
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-[#E63946]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-orange-600/20 rounded-full blur-2xl pointer-events-none" />

                {/* Hero Automotive Visual (High Quality Brake & Parts) */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-white border border-[#222A3B] mb-5 p-4 flex items-center justify-center">
                  <img
                    src={PRODUCT_ASSETS['brembo-rotor']}
                    alt="Brembo High Performance Brake Rotors"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Top-left Brembo Logo Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-slate-200">
                    <img src={BRAND_LOGOS['Brembo']} alt="Brembo" className="h-5 w-auto object-contain" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10 shadow-md">
                      Brembo High Carbon Rotor
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#E63946] text-xs font-black text-white shadow-md">
                      -21% OFF
                    </span>
                  </div>
                </div>

                {/* Dynamic Quick Info Box */}
                <div className="p-4 rounded-xl bg-[#141823] border border-[#252E42] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      FEATURED RIDE PART
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Brembo High Carbon Rotor Pair
                    </h4>
                    <span className="text-xs text-slate-400">ใส่ได้ตรงรุ่น Toyota, Honda, Mazda</span>
                  </div>
                  <Link
                    to="/products/prod-01"
                    className="w-9 h-9 rounded-xl bg-[#E63946] hover:bg-[#D62839] text-white flex items-center justify-center transition-colors shadow-md shrink-0 ml-2"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>

              </div>

              {/* Floating Mini Badge Left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-[#131722]/95 border border-[#2F394D] shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E63946] to-[#FF5722] flex items-center justify-center text-white font-black text-sm shadow-md">
                  ★
                </div>
                <div>
                  <div className="text-sm font-black text-white">4.9 / 5.0 Rating</div>
                  <div className="text-[11px] text-slate-400">จากผู้ขับขี่กว่า 15,000+ คน</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
