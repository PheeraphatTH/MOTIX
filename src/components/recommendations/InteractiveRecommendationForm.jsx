import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Car,
  Bike,
  Wrench,
  Gauge,
  HelpCircle,
  SlidersHorizontal,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Filter,
  PackageCheck,
  ChevronDown,
  Layers,
  Coins,
} from 'lucide-react';
import { vehicleData } from '../../data/vehicles';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { SmartAdvisorCard } from './SmartAdvisorCard';
import { useCart } from '../../context/CartContext';

// Options for Primary Goals / Needs
const GOAL_OPTIONS = [
  {
    id: 'all',
    label: 'ทุกความต้องการ (ทั้งหมด)',
    icon: '✨',
    desc: 'ดูรายการอะไหล่แนะนำทั้งหมดที่ตรงกับรุ่นรถของคุณ',
  },
  {
    id: 'maintenance',
    label: 'เช็กระยะ / ถ่ายของเหลวตามรอบ',
    icon: '🛢️',
    desc: 'น้ำมันเครื่อง, ไส้กรองอากาศ, กรองน้ำมันเครื่อง, หัวเทียน',
    categories: ['engine-oil', 'filters', 'engine-parts'],
  },
  {
    id: 'repair-safety',
    label: 'ซ่อมแซม / ระบบเบรก & ความปลอดภัย',
    icon: '🛑',
    desc: 'ผ้าเบรก, จานเบรก, ยางรถ, ระบบไฟส่องสว่าง',
    categories: ['brake-system', 'tires-wheels', 'lighting'],
  },
  {
    id: 'performance',
    label: 'เพิ่มสมรรถนะ / แต่งซิ่ง & ปรับแต่ง',
    icon: '⚡',
    desc: 'โช้คอัพแต่ง, ท่อไอเสีย, กรองอากาศ High-Flow, ล้อแม็ก, โซ่สเตอร์',
    categories: ['suspension', 'moto-suspension', 'exhaust-system', 'car-wheels', 'chain-sprocket', 'filters'],
  },
  {
    id: 'electrical',
    label: 'ระบบสตาร์ต & แบตเตอรี่ไฟฟ้ารถ',
    icon: '🔋',
    desc: 'แบตเตอรี่, ไดสตาร์ต, หลอดไฟ LED, หัวเทียนเข็ม',
    categories: ['battery', 'moto-battery', 'lighting', 'engine-parts'],
  },
];

// Options for Budget / Price Ranges
const BUDGET_OPTIONS = [
  { id: 'all', label: 'งบประมาณทุกระดับ', sub: 'แสดงอะไหล่ทุกช่วงราคา' },
  { id: 'under-2000', label: 'ประหยัดคุ้มค่า (ต่ำกว่า ฿2,000)', max: 2000, sub: 'อะไหล่บำรุงรักษาพื้นฐาน / ของเหลว' },
  { id: '2000-10000', label: 'ระดับกลางมาตรฐาน (฿2,000 - ฿10,000)', min: 2000, max: 10000, sub: 'ชุดเบรก, ยาง, โช้คอัพสตรีท, กรองแต่ง' },
  { id: 'over-10000', label: 'เกรดพรีเมียม / เรซซิ่ง (฿10,000 ขึ้นไป)', min: 10000, sub: 'ท่อ Akrapovic, โช้ค Öhlins, ล้อ Enkei, Brembo BBK' },
];

// Options for User Driving Styles
const DRIVING_STYLE_OPTIONS = [
  { id: 'any', label: 'ทุกสไตล์การขับขี่', emoji: '🚗' },
  { id: 'daily', label: 'ใช้งานประจำวัน / เดินทางทำงาน', emoji: '🏙️' },
  { id: 'sport', label: 'สายซิ่ง / ชื่นชอบความเร็ว & อัตราเร่ง', emoji: '🏁' },
  { id: 'touring', label: 'เดินทางไกล / ออกทริป / บรรทุกหนัก', emoji: '⛰️' },
];

export const InteractiveRecommendationForm = ({ onQuickView }) => {
  const { selectedVehicle, updateVehicleFilter, user } = useCart();

  // Form State
  const [vehicleType, setVehicleType] = useState(selectedVehicle?.type || 'car');
  const [brand, setBrand] = useState(selectedVehicle?.brand || '');
  const [model, setModel] = useState(selectedVehicle?.model || user?.vehicleModel || '');
  const [goal, setGoal] = useState('all');
  const [category, setCategory] = useState('all');
  const [budget, setBudget] = useState('all');
  const [drivingStyle, setDrivingStyle] = useState('any');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available brands & models based on vehicle type
  const availableBrands = vehicleData[vehicleType]?.brands || [];
  const availableModels = brand
    ? vehicleData[vehicleType]?.models[brand.toLowerCase()] || vehicleData[vehicleType]?.models[brand] || []
    : [];

  // Filter Categories matching vehicle type
  const availableCategories = useMemo(() => {
    return categories.filter((c) => c.vehicleType === vehicleType || c.vehicleType === 'both');
  }, [vehicleType]);

  // Handle Type Change
  const handleVehicleTypeChange = (newType) => {
    setVehicleType(newType);
    setBrand('');
    setModel('');
    setCategory('all');
    setIsSubmitted(false);
  };

  // Reset all filters
  const handleResetForm = () => {
    setVehicleType('car');
    setBrand('');
    setModel('');
    setGoal('all');
    setCategory('all');
    setBudget('all');
    setDrivingStyle('any');
    setIsSubmitted(false);
  };

  // Compute matching products
  const recommendedResults = useMemo(() => {
    const activeGoalObj = GOAL_OPTIONS.find((g) => g.id === goal);
    const activeBudgetObj = BUDGET_OPTIONS.find((b) => b.id === budget);

    const scored = products
      .filter((product) => {
        // 1. Vehicle Type Match
        if (product.vehicleType !== 'both' && product.vehicleType !== vehicleType) {
          return false;
        }

        // 2. Specific Category Filter (if chosen)
        if (category !== 'all') {
          if (product.category !== category) return false;
        }

        // 3. Goal Category Match (if goal selected)
        if (activeGoalObj && activeGoalObj.categories && activeGoalObj.categories.length > 0) {
          const matchesGoalCategory = activeGoalObj.categories.includes(product.category);
          if (!matchesGoalCategory) return false;
        }

        // 4. Budget Range Filter
        if (activeBudgetObj) {
          if (activeBudgetObj.min && product.price < activeBudgetObj.min) return false;
          if (activeBudgetObj.max && product.price > activeBudgetObj.max) return false;
        }

        return true;
      })
      .map((product) => {
        let score = 92;
        let reasons = [];
        let isModelDirectMatch = false;

        // Compatibility boost if user selected specific model
        if (model) {
          const matchesCar = product.compatibleVehicles?.some((v) =>
            model.toLowerCase().includes(v.toLowerCase()) || v.toLowerCase().includes(model.toLowerCase())
          );
          if (matchesCar) {
            score += 6;
            isModelDirectMatch = true;
            reasons.push(`ตรงรุ่น 100% กับ ${model}`);
          }
        }

        // Brand match boost
        if (brand && product.compatibleBrands?.includes(brand.toLowerCase())) {
          score += 2;
        }

        // Goal match reason
        if (goal === 'maintenance') {
          reasons.push('เหมาะสำหรับรอบเช็กระยะ ยืดอายุเครื่องยนต์');
        } else if (goal === 'repair-safety') {
          reasons.push('อะไหล่ทดแทนเกรดความปลอดภัยสูงสุด');
        } else if (goal === 'performance') {
          reasons.push('เพิ่มอัตราเร่ง สมรรถนะ และความสนุกในการขับขี่');
        } else if (goal === 'electrical') {
          reasons.push('แก้ปัญหาสตาร์ตติดยากและจ่ายไฟนิ่งเสถียร');
        } else {
          reasons.push('สินค้ามาตรฐานแท้ ได้รับความนิยมสูงสุด');
        }

        // Driving style reason
        if (drivingStyle === 'sport') {
          if (['motul-300v', 'brembo', 'akrapovic', 'enkei', 'ohlins'].some((k) => product.sku.toLowerCase().includes(k) || product.brand.toLowerCase().includes(k))) {
            score += 3;
            reasons.push('เกรดเรซซิ่งตอบโจทย์สายซิ่ง');
          }
        }

        const finalScore = Math.min(99, score);

        return {
          ...product,
          recommendationScore: finalScore,
          recommendationReason: reasons.join(' • '),
          recommendationTags: [
            isModelDirectMatch ? 'ตรงรุ่นกับรถของคุณ' : 'ตรวจสเปกตรงรุ่น',
            activeGoalObj?.label?.split('/')[0]?.trim() || 'แนะนำพิเศษ',
            product.discount > 0 ? `ลด ${product.discount}%` : 'ของแท้ 100%',
          ],
          isModelDirectMatch,
        };
      })
      .sort((a, b) => {
        // Prioritize direct model matches, then score
        if (a.isModelDirectMatch && !b.isModelDirectMatch) return -1;
        if (!a.isModelDirectMatch && b.isModelDirectMatch) return 1;
        return b.recommendationScore - a.recommendationScore;
      });

    return scored;
  }, [vehicleType, brand, model, goal, category, budget, drivingStyle]);

  // Sync to global context when user selects a valid vehicle
  const handleApplyForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (brand || model) {
      updateVehicleFilter({
        type: vehicleType,
        brand,
        model,
      });
    }

    // Smooth scroll to results
    const el = document.getElementById('form-recommendation-results');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. FORM CONTAINER CARD */}
      <div className="rounded-3xl bg-gradient-to-b from-[#141824] via-[#10141F] to-[#0D1017] border border-[#263045] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow effect background */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header inside form */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#20283A]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>แบบฟอร์มคัดกรองความต้องการอัจฉริยะ (Smart Filter Form)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              เลือกตามแบบฟอร์มเพื่อแสดงรายการอะไหล่ที่ตรงใจคุณที่สุด
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              ระบุประเภทรถ ยี่ห้อ รุ่น และวัตถุประสงค์ที่ต้องการ ระบบจะค้นหาและคำนวณสินค้าที่เข้ากันได้มาให้ทันที
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetForm}
            className="self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1A2130] hover:bg-[#232C40] text-slate-300 hover:text-white text-xs font-semibold border border-[#2E3A52] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>ล้างค่าทั้งหมด</span>
          </button>
        </div>

        {/* THE INTERACTIVE FORM */}
        <form onSubmit={handleApplyForm} className="mt-6 space-y-6">
          
          {/* FIELD 1: Vehicle Type Tabs */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              1. เลือกประเภทรถ (Vehicle Type) <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg">
              <button
                type="button"
                onClick={() => handleVehicleTypeChange('car')}
                className={`flex items-center justify-center gap-3 p-3.5 rounded-2xl border font-bold text-sm transition-all cursor-pointer ${
                  vehicleType === 'car'
                    ? 'bg-gradient-to-r from-red-600/30 via-red-700/20 to-transparent border-red-500 text-white shadow-lg shadow-red-950/40 ring-1 ring-red-500/50'
                    : 'bg-[#151926] hover:bg-[#1C2234] border-[#252E42] text-slate-400'
                }`}
              >
                <Car className="w-5 h-5 text-red-400" />
                <span>รถยนต์ (Cars / SUVs / Pickups)</span>
              </button>

              <button
                type="button"
                onClick={() => handleVehicleTypeChange('motorcycle')}
                className={`flex items-center justify-center gap-3 p-3.5 rounded-2xl border font-bold text-sm transition-all cursor-pointer ${
                  vehicleType === 'motorcycle'
                    ? 'bg-gradient-to-r from-amber-600/30 via-amber-700/20 to-transparent border-amber-500 text-white shadow-lg shadow-amber-950/40 ring-1 ring-amber-500/50'
                    : 'bg-[#151926] hover:bg-[#1C2234] border-[#252E42] text-slate-400'
                }`}
              >
                <Bike className="w-5 h-5 text-amber-400" />
                <span>มอเตอร์ไซค์ (Motorcycle / BigBike)</span>
              </button>
            </div>
          </div>

          {/* FIELD 2: Brand & Model Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Brand Dropdown */}
            <div>
              <label htmlFor="form-brand-select" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                2. เลือกยี่ห้อ / แบรนด์รถ (Brand)
              </label>
              <div className="relative">
                <select
                  id="form-brand-select"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                    setModel('');
                  }}
                  className="w-full bg-[#121622] border border-[#283248] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">-- เลือกยี่ห้อรถ (เลือกหรือไม่ก็ได้) --</option>
                  {availableBrands.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.logo} {b.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Model Dropdown */}
            <div>
              <label htmlFor="form-model-select" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                3. เลือกรุ่นรถ (Model)
              </label>
              <div className="relative">
                <select
                  id="form-model-select"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  disabled={!brand && availableModels.length === 0}
                  className={`w-full bg-[#121622] border border-[#283248] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none ${
                    !brand ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <option value="">
                    {brand ? `-- เลือกรุ่นของ ${brand} (เพื่อความแม่นยำตรงรุ่น 100%) --` : '-- กรุณาเลือกยี่ห้อรถก่อน --'}
                  </option>
                  {availableModels.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* FIELD 3: Primary Goal (What are you looking for?) */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              4. เป้าหมายความต้องการ / สิ่งที่คุณต้องการทำ (Primary Need / Goal)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {GOAL_OPTIONS.map((opt) => {
                const isSelected = goal === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setGoal(opt.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-gradient-to-r from-red-950/60 to-[#19202F] border-red-500 text-white shadow-lg shadow-red-950/40 ring-1 ring-red-500'
                        : 'bg-[#131724] hover:bg-[#1A2030] border-[#242D3F] text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{opt.icon}</span>
                      <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {opt.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 pl-7">
                      {opt.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FIELD 4 & 5: Category & Budget Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Specific Category */}
            <div>
              <label htmlFor="form-category-select" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                5. หมวดหมู่อะไหล่เฉพาะเจาะจง (Category)
              </label>
              <div className="relative">
                <select
                  id="form-category-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#121622] border border-[#283248] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">-- ทุกหมวดหมู่อะไหล่ --</option>
                  {availableCategories.map((c) => (
                    <option key={c.id} value={c.slug}>
                      {c.nameTh} ({c.nameEn})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="form-budget-select" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                6. ระดับงบประมาณ (Budget Range)
              </label>
              <div className="relative">
                <select
                  id="form-budget-select"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#121622] border border-[#283248] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none cursor-pointer"
                >
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* FIELD 6: Driving Style */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              7. สไตล์การขับขี่ (Driving Style)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {DRIVING_STYLE_OPTIONS.map((st) => {
                const isSelected = drivingStyle === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setDrivingStyle(st.id)}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-red-500/20 border-red-500 text-white shadow-md'
                        : 'bg-[#141824] hover:bg-[#1A2130] border-[#242D3F] text-slate-300'
                    }`}
                  >
                    <span>{st.emoji}</span>
                    <span className="truncate">{st.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SUBMIT BUTTON BAR */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#20283A]">
            <div className="text-xs text-slate-400">
              ⚡ ระบบตรวจพบสินค้าที่ตรงตามเงื่อนไขปัจจุบัน: <strong className="text-amber-400 font-mono text-sm">{recommendedResults.length}</strong> รายการ
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#E63946] via-[#D62828] to-[#9D0208] hover:brightness-110 text-white text-sm font-black tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-red-950/60 transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>แสดงผลลัพธ์สินค้าแนะนำทันที ({recommendedResults.length} ชิ้น)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

        </form>
      </div>

      {/* 2. RESULTS DISPLAY SECTION */}
      <div id="form-recommendation-results" className="space-y-6 scroll-mt-24">
        
        {/* Results Bar */}
        <div className="p-5 sm:p-6 rounded-3xl bg-[#121622] border border-[#252E42] shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>ผลการประมวลผลคำแนะนำตามแบบฟอร์มของคุณ</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <span>รายการอะไหล่แนะนำที่ตรงความต้องการ</span>
              <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 text-xs font-mono font-bold border border-red-500/30">
                {recommendedResults.length} รายการ
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {model ? `กรองเฉพาะที่เข้ากันได้กับ: ${brand || ''} ${model}` : `พาหนะ: ${vehicleType === 'car' ? 'รถยนต์' : 'มอเตอร์ไซค์'}`} 
              {goal !== 'all' && ` • เป้าหมาย: ${GOAL_OPTIONS.find(g => g.id === goal)?.label}`}
              {budget !== 'all' && ` • งบประมาณ: ${BUDGET_OPTIONS.find(b => b.id === budget)?.label}`}
            </p>
          </div>

          {model && (
            <div className="px-3.5 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2 shrink-0">
              <PackageCheck className="w-4 h-4 text-emerald-400" />
              <span>ผ่านการตรวจเช็กความเข้ากันได้ตรงรุ่น</span>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {recommendedResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendedResults.map((product) => (
              <SmartAdvisorCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-[#121622] border border-[#252E42] max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">ไม่พบอะไหล่ที่ตรงตามเงื่อนไขที่เลือกแบบจำเพาะ</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              ลองปรับระดับงบประมาณหรือเลือกหมวดหมู่ให้กว้างขึ้น เพื่อให้ระบบค้นหาอะไหล่ทดแทนที่ใส่ร่วมกันได้
            </p>
            <button
              type="button"
              onClick={handleResetForm}
              className="px-5 py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold shadow-lg cursor-pointer"
            >
              รีเซ็ตแบบฟอร์มเพื่อดูสินค้าทั้งหมด
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
