import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Car,
  Bike,
  ArrowRight,
  Disc,
  Droplets,
  Activity,
  Filter,
  Zap,
  Sun,
  Link as LinkIcon,
  CircleDot,
  Cpu,
  Flame,
} from 'lucide-react';
import { categories } from '../data/categories';
import { SectionTitle } from '../components/common/SectionTitle';

const iconMap = {
  Disc,
  Droplets,
  Activity,
  Filter,
  Zap,
  Sun,
  Link: LinkIcon,
  CircleDot,
  Cpu,
  Flame,
};

export const Categories = () => {
  const [filterType, setFilterType] = useState('all');

  const carCategories = categories.filter((c) => c.vehicleType === 'car');
  const motoCategories = categories.filter((c) => c.vehicleType === 'motorcycle');

  return (
    <div className="min-h-screen bg-[#0B0D12] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#FF6B6B] uppercase tracking-wider block mb-2">
            EXPLORE BY CATEGORY
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            หมวดหมู่อะไหล่รถยนต์และรถจักรยานยนต์
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            ครอบคลุมทุกระบบชิ้นส่วนยานยนต์ ตั้งแต่ระบบเบรก เครื่องยนต์ ของเหลว ช่วงล่าง ไปจนถึงระบบไฟฟ้าและยาง
          </p>

          {/* Filter Pills */}
          <div className="inline-flex items-center p-1 bg-[#131722] rounded-2xl border border-[#242C3D] mt-6">
            <button
              onClick={() => setFilterType('all')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'all'
                  ? 'bg-[#E63946] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              หมวดหมู่ทั้งหมด ({categories.length})
            </button>
            <button
              onClick={() => setFilterType('car')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'car'
                  ? 'bg-[#E63946] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>อะไหล่รถยนต์ ({carCategories.length})</span>
            </button>
            <button
              onClick={() => setFilterType('motorcycle')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'motorcycle'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>อะไหล่มอเตอร์ไซค์ ({motoCategories.length})</span>
            </button>
          </div>
        </div>

        {/* 1. Car Categories Section */}
        {(filterType === 'all' || filterType === 'car') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#1E2536]">
              <Car className="w-5 h-5 text-[#E63946]" />
              <h2 className="text-xl font-bold text-white">หมวดหมู่อะไหล่รถยนต์ (Car Spare Parts)</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {carCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || Flame;
                return (
                  <Link
                    key={cat.id}
                    to={`/products?category=${cat.slug}&vehicleType=car`}
                    className="group relative block rounded-2xl bg-[#131722] border border-[#222A3B] hover:border-[#E63946]/50 overflow-hidden p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#E63946] group-hover:bg-[#E63946] group-hover:text-white transition-colors shrink-0 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className="text-base font-bold text-white group-hover:text-[#FF6B6B] transition-colors">
                          {cat.nameTh}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {cat.description}
                        </p>
                        <div className="pt-2 text-xs text-[#FF5722] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>ดูสินค้า {cat.itemCount}+ รายการ</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Motorcycle Categories Section */}
        {(filterType === 'all' || filterType === 'motorcycle') && (
          <div>
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#1E2536]">
              <Bike className="w-5 h-5 text-[#FF5722]" />
              <h2 className="text-xl font-bold text-white">หมวดหมู่อะไหล่มอเตอร์ไซค์ (Motorcycle Spare Parts)</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {motoCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || Flame;
                return (
                  <Link
                    key={cat.id}
                    to={`/products?category=${cat.slug}&vehicleType=motorcycle`}
                    className="group relative block rounded-2xl bg-[#131722] border border-[#222A3B] hover:border-[#FF5722]/50 overflow-hidden p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF5722] group-hover:bg-[#FF5722] group-hover:text-white transition-colors shrink-0 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                          {cat.nameTh}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {cat.description}
                        </p>
                        <div className="pt-2 text-xs text-[#FF5722] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>ดูสินค้า {cat.itemCount}+ รายการ</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
