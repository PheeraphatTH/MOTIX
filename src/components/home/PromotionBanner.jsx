import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Tag,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  PackageCheck,
  Flame,
} from 'lucide-react';
import { promotions, bundlePackages } from '../../data/promotions';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { useCart } from '../../context/CartContext';

export const PromotionBanner = () => {
  const navigate = useNavigate();
  const { applyCoupon } = useCart();
  const [copiedCode, setCopiedCode] = React.useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    applyCoupon(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#090B10] border-t border-[#1C2230] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          tagline="PROMOTIONS & MARKETING DEALS"
          title="แคมเปญโปรโมชั่นพิเศษ"
          subtitle="ข้อเสนอสุดคุ้มเพื่อตอบโจทย์ผู้ขับขี่ทุกระดับ ทั้งส่วนลดต้อนรับสมาชิกใหม่ และชุดเซ็ตบำรุงรักษา"
          action={
            <Button
              variant="outline"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate('/promotions')}
            >
              ดูทุกโปรโมชั่น
            </Button>
          }
        />

        {/* 1. Promo Cards Grid (Starter Deal, Weekend Ride, Free Ship) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {promotions.slice(0, 3).map((promo, idx) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="relative rounded-2xl bg-[#121622] border border-[#222A3B] p-6 flex flex-col justify-between overflow-hidden group hover:border-[#E63946]/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md text-white ${promo.badgeColor}`}>
                    {promo.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    ใช้ได้ถึงสิ้นปี 2026
                  </span>
                </div>

                {/* Promo Title & Discount */}
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-[#FF6B6B] transition-colors font-heading">
                    {promo.title}
                  </h3>
                  <div className="text-2xl font-black text-[#FF5722] mt-1 font-mono">
                    {promo.discount}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {promo.description}
                </p>
              </div>

              {/* Coupon Box & Copy Button */}
              <div className="mt-6 pt-4 border-t border-[#1E2536] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0D14] border border-dashed border-slate-700 font-mono text-sm font-bold text-white">
                  <Tag className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>{promo.code}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyCode(promo.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    copiedCode === promo.code
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 hover:bg-[#E63946] text-slate-200 hover:text-white'
                  }`}
                >
                  {copiedCode === promo.code ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>คัดลอกแล้ว</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>เก็บโค้ด</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Ready to Ride Bundle Showcase (Section 19) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#171C28] via-[#121520] to-[#171C28] border border-[#2B354A] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                <PackageCheck className="w-4 h-4" />
                <span>READY TO RIDE MAINTENANCE BUNDLE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                ชุดเซ็ตเช็กระยะครบวงจร <br />
                <span className="text-emerald-400">ประหยัดสูงสุด ฿840 ต่อเซ็ต</span>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                จับคู่น้ำมันเครื่องสังเคราะห์แท้ + ไส้กรอง PM2.5 + หัวเทียนอิริเดียม 
                ให้รถของคุณพร้อมออกทริปอย่างมั่นใจ ไม่ต้องเสียเวลาเลือกทีละชิ้น
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/promotions')}
                >
                  ช้อปชุดเซ็ตสุดคุ้ม
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigate('/products')}
                >
                  เลือกดูอะไหล่เดี่ยว
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bundlePackages.map((bundle) => (
                <div
                  key={bundle.id}
                  className="rounded-2xl bg-[#0E1119] border border-[#242C3D] p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                      ประหยัดทันที ฿{bundle.saving}
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                      {bundle.name}
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-400 mb-4">
                      {bundle.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-baseline justify-between pt-3 border-t border-[#1C2230]">
                    <div>
                      <span className="text-lg font-black text-white font-mono">
                        ฿{new Intl.NumberFormat('th-TH').format(bundle.bundlePrice)}
                      </span>
                      <span className="text-xs text-slate-400 line-through font-mono ml-2">
                        ฿{new Intl.NumberFormat('th-TH').format(bundle.originalPrice)}
                      </span>
                    </div>
                    <Link
                      to="/products"
                      className="px-3 py-1.5 rounded-lg bg-[#E63946] hover:bg-[#D62839] text-white text-xs font-bold"
                    >
                      เลือกเซ็ตนี้
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
