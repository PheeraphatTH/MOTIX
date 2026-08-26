import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  Car,
  Bike,
  Search,
  RotateCcw,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { vehicleData } from '../../data/vehicles';
import { useCart } from '../../context/CartContext';
import { Button } from '../common/Button';

export const VehicleFinder = ({ isCompact = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { selectedVehicle, updateVehicleFilter, clearVehicleFilter } = useCart();

  const [type, setType] = useState(selectedVehicle.type || 'car');
  const [brand, setBrand] = useState(selectedVehicle.brand || '');
  const [model, setModel] = useState(selectedVehicle.model || '');
  const [year, setYear] = useState(selectedVehicle.year || '');

  const availableBrands = vehicleData[type]?.brands || [];
  const availableModels = brand
    ? vehicleData[type]?.models[brand.toLowerCase()] || vehicleData[type]?.models[brand] || []
    : [];
  const availableYears = vehicleData[type]?.years || [];

  const handleTypeChange = (newType) => {
    setType(newType);
    setBrand('');
    setModel('');
    setYear('');
  };

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
    setModel('');
    setYear('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (brand || model) {
      updateVehicleFilter({
        type,
        brand,
        model,
        year: year ? Number(year) : '',
      });
      navigate(`/products?vehicleType=${type}&brand=${encodeURIComponent(brand)}&model=${encodeURIComponent(model)}&year=${year}`);
    } else {
      navigate(`/products?vehicleType=${type}`);
    }
  };

  const handleReset = () => {
    setType('car');
    setBrand('');
    setModel('');
    setYear('');
    clearVehicleFilter();
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-12">
      <div className="rounded-3xl bg-[#11141D] border border-[#2B354A] shadow-2xl p-5 sm:p-7 backdrop-blur-xl relative overflow-hidden">
        
        {/* Subtle top indicator */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#E63946] via-[#FF5722] to-[#E63946]"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-5 border-b border-[#1E2536]">
          
          {/* Header Title & Concept */}
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B6B] uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#E63946]" />
              <span>{t('vehicleFinder.title')}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              เลือกรุ่นรถของคุณ เพื่อค้นหาอะไหล่ที่ใส่ได้ตรงรุ่น 100%
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              หมดปัญหาซื้อผิดรุ่น ระบบตรวจสอบความเข้ากันได้ของอะไหล่แท้และ OEM
            </p>
          </div>

          {/* Vehicle Type Tabs (Car vs Motorcycle) */}
          <div className="flex items-center p-1 bg-[#0A0C12] rounded-2xl border border-[#232B3D] shrink-0">
            <button
              type="button"
              onClick={() => handleTypeChange('car')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                type === 'car'
                  ? 'bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white shadow-lg shadow-red-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>{t('vehicleFinder.car')}</span>
            </button>

            <button
              type="button"
              onClick={() => handleTypeChange('motorcycle')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                type === 'motorcycle'
                  ? 'bg-gradient-to-r from-[#FF5722] to-[#D84315] text-white shadow-lg shadow-orange-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>{t('vehicleFinder.motorcycle')}</span>
            </button>
          </div>
        </div>

        {/* Dropdown Form */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-5 items-end">
          
          {/* 1. Brand */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              1. {t('vehicleFinder.selectBrand')}
            </label>
            <select
              value={brand}
              onChange={handleBrandChange}
              className="w-full bg-[#181E2B] text-sm text-white rounded-xl border border-[#2A344A] px-3.5 py-3 focus:border-[#E63946] focus:outline-none transition-colors cursor-pointer"
            >
              <option value="">-- เลือกยี่ห้อรถ --</option>
              {availableBrands.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Model */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              2. {t('vehicleFinder.selectModel')}
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              disabled={!brand}
              className="w-full bg-[#181E2B] text-sm text-white rounded-xl border border-[#2A344A] px-3.5 py-3 focus:border-[#E63946] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <option value="">{brand ? '-- เลือกรุ่นรถ --' : '-- กรุณาเลือกยี่ห้อก่อน --'}</option>
              {availableModels.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Year */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              3. {t('vehicleFinder.selectYear')} (ไม่ระบุก็ได้)
            </label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              disabled={!brand}
              className="w-full bg-[#181E2B] text-sm text-white rounded-xl border border-[#2A344A] px-3.5 py-3 focus:border-[#E63946] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <option value="">-- ทุกปีการผลิต (All Years) --</option>
              {availableYears.map((y) => (
                <option key={y} value={y}>
                  ปี {y}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={Search}
              className="flex-1 py-3"
            >
              {t('vehicleFinder.findButton')}
            </Button>

            {(brand || model || year) && (
              <button
                type="button"
                onClick={handleReset}
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                title="รีเซ็ตค่า"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

        </form>

        {/* Selected Vehicle Active Status */}
        {selectedVehicle.model && (
          <div className="mt-4 pt-3 border-t border-[#1C2230] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                กำลังกรองอะไหล่สำหรับ: <strong className="text-white">{selectedVehicle.brand} {selectedVehicle.model} ({selectedVehicle.year || 'ทุกปี'})</strong>
              </span>
            </div>
            <button
              onClick={clearVehicleFilter}
              className="text-[#FF6B6B] hover:underline font-semibold"
            >
              ล้างตัวกรองเพื่อดูอะไหล่ทั้งหมด
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
