import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Flame,
  Disc,
  Droplets,
  Activity,
  Filter,
  Zap,
  Sun,
  Link as LinkIcon,
  CircleDot,
  Cpu,
  Car,
  Bike,
} from 'lucide-react';
import { categories } from '../../data/categories';
import { SectionTitle } from '../common/SectionTitle';

const iconMap = {
  Flame,
  Disc,
  Droplets,
  Activity,
  Filter,
  Zap,
  Sun,
  Link: LinkIcon,
  CircleDot,
  Cpu,
};

export const Categories = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'car', 'motorcycle'

  const filteredCategories = categories.filter(
    (c) => activeTab === 'all' || c.vehicleType === activeTab
  );

  return (
    <section className="py-12 sm:py-16 bg-[#0B0D12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionTitle
            tagline="PRODUCT CATEGORIES"
            title="หมวดหมู่อะไหล่ยอดนิยม"
            subtitle="เลือกช้อปตามระบบการทำงานของรถ คัดสรรเกรดคุณภาพแท้และ OEM จากแบรนด์ระดับโลก"
            className="mb-0"
          />

          {/* Filter Tabs */}
          <div className="flex items-center p-1 bg-[#131722] rounded-2xl border border-[#242C3D] shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#E63946] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ทั้งหมด
            </button>
            <button
              onClick={() => setActiveTab('car')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'car'
                  ? 'bg-[#E63946] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>อะไหล่รถยนต์</span>
            </button>
            <button
              onClick={() => setActiveTab('motorcycle')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'motorcycle'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>อะไหล่มอเตอร์ไซค์</span>
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Flame;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Link
                  to={`/products?category=${cat.slug}&vehicleType=${cat.vehicleType}`}
                  className="group relative block rounded-2xl bg-[#131722] border border-[#222A3B] hover:border-[#E63946]/60 overflow-hidden p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/20 hover:-translate-y-1.5"
                >
                  {/* Background Ambient Image Overlay */}
                  <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-500 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.nameTh}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-[#131722]/80 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-44">
                    <div>
                      {/* Icon & Vehicle Type Pill */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/30 flex items-center justify-center text-[#E63946] group-hover:bg-[#E63946] group-hover:text-white transition-colors duration-300 shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
                          {cat.vehicleType === 'car' ? 'Car Parts' : 'Moto Parts'}
                        </span>
                      </div>

                      {/* Category Name */}
                      <h3 className="text-base font-bold text-white group-hover:text-[#FF6B6B] transition-colors leading-snug">
                        {cat.nameTh}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    {/* Footer Item Count & Arrow */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#1E2536] text-xs">
                      <span className="text-slate-400 font-medium">
                        {cat.itemCount}+ รายการ
                      </span>
                      <span className="text-[#FF6B6B] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>ดูอะไหล่</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
