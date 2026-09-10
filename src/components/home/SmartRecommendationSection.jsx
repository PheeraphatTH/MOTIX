import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Disc,
  Gauge,
  Zap,
  Activity,
  CircleDot,
  SunMedium,
  RotateCw,
  Car,
  Bike,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  UserCheck,
  CheckCircle2,
} from 'lucide-react';
import {
  RECOMMENDATION_SYMPTOMS,
  DRIVING_STYLES,
  getRecommendedProductsForSymptom,
  getMemberPersonalizedRecommendations,
} from '../../data/recommendations';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { SmartAdvisorCard } from '../recommendations/SmartAdvisorCard';
import { InteractiveRecommendationForm } from '../recommendations/InteractiveRecommendationForm';

const SYMPTOM_ICONS = {
  Disc,
  Gauge,
  Zap,
  Activity,
  CircleDot,
  SunMedium,
  RotateCw,
};

export const SmartRecommendationSection = () => {
  const navigate = useNavigate();
  const { user, selectedVehicle, setQuickViewProduct } = useCart();

  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'symptoms' | 'styles' | 'member'
  const [selectedSymptomId, setSelectedSymptomId] = useState('brake-noise');
  const [selectedStyleId, setSelectedStyleId] = useState('sport');
  const [vehicleFilter, setVehicleFilter] = useState('all'); // 'all' | 'car' | 'motorcycle'

  // Determine user vehicle
  const currentVehicleModel = selectedVehicle?.model || user?.vehicleModel || '';

  // Get data for Symptoms
  const symptomData = getRecommendedProductsForSymptom(
    selectedSymptomId,
    vehicleFilter,
    currentVehicleModel
  );

  // Get data for Driving Styles
  const activeStyle = DRIVING_STYLES.find((s) => s.id === selectedStyleId) || DRIVING_STYLES[0];
  const styleProducts = products
    .filter((p) => {
      const inStyle = activeStyle.productIds.includes(p.id);
      if (!inStyle) return false;
      if (vehicleFilter !== 'all' && p.vehicleType !== vehicleFilter) return false;
      return true;
    })
    .map((p, idx) => ({
      ...p,
      recommendationScore: 98 - idx * 2,
      recommendationReason: `ตอบโจทย์สไตล์ "${activeStyle.nameTh}" เพื่อสมรรถนะและความทนทานขั้นสูงสุด`,
      recommendationTags: [activeStyle.badge, 'ตรงสไตล์ขับขี่', 'เกรดพรีเมียม'],
    }));

  // Get data for Member Personalization
  const memberRecommendations = getMemberPersonalizedRecommendations(user);

  return (
    <section id="smart-recommendation-section" className="relative py-14 sm:py-20 bg-gradient-to-b from-[#090C12] via-[#0E121C] to-[#0A0D14] border-t border-[#1C2333] overflow-hidden scroll-mt-20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/20 via-amber-500/20 to-red-500/20 border border-red-500/30 text-[#FF6B6B] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>SMART PARTS RECOMMENDATION ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              ระบบแนะนำอะไหล่อัจฉริยะ{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF9E7D]">
                ตรงอาการ & ตรงรุ่น
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              คิดไม่ออก หรือไม่แน่ใจว่าต้องเปลี่ยนชิ้นไหน? เพียงเลือกอาการที่พบ หรือสไตล์การใช้งาน ระบบจะวิเคราะห์และคัดสรรอะไหล่ที่เหมาะสมที่สุดให้ทันที
            </p>
          </div>

          {/* Quick Filter Toggle (All, Car, Motorcycle) */}
          <div className="flex items-center gap-2 bg-[#131722] p-1.5 rounded-2xl border border-[#252E42] shrink-0 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setVehicleFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                vehicleFilter === 'all'
                  ? 'bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ทั้งหมด
            </button>
            <button
              type="button"
              onClick={() => setVehicleFilter('car')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                vehicleFilter === 'car'
                  ? 'bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>เฉพาะรถยนต์</span>
            </button>
            <button
              type="button"
              onClick={() => setVehicleFilter('motorcycle')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                vehicleFilter === 'motorcycle'
                  ? 'bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>มอเตอร์ไซค์</span>
            </button>
          </div>
        </div>

        {/* Personalized Member Greeting Banner (If logged in) */}
        {user ? (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#161B28] to-amber-950/30 border border-red-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E63946] to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-md shrink-0">
                {user.name ? user.name.charAt(0).toUpperCase() : 'M'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-400">ระบบคัดสรรเฉพาะบุคคล (Personalized Match)</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                    {user.tier || 'Gold Member'}
                  </span>
                </div>
                <p className="text-sm font-bold text-white">
                  สวัสดีคุณ {typeof user.name === 'string' ? user.name : 'สมาชิก'}!{' '}
                  {user.vehicleModel ? (
                    <span className="text-slate-300 font-normal">
                      ระบบได้จัดเตรียมอะไหล่แนะนำที่ตรงรุ่นกับ <strong className="text-white">{user.vehicleModel}</strong> ของคุณไว้แล้ว
                    </span>
                  ) : (
                    <span className="text-slate-300 font-normal">ระบบพร้อมช่วยคุณเลือกอะไหล่ที่คุ้มค่าที่สุด</span>
                  )}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveTab('member')}
              className="px-4 py-2 rounded-xl bg-[#1C2333] hover:bg-[#252E42] border border-slate-700 text-xs font-bold text-amber-300 flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>ดูของแนะนำสำหรับคุณ</span>
            </button>
          </div>
        ) : null}

        {/* Navigation Tabs (Smart Form vs Symptoms vs Driving Style vs Member) */}
        <div className="flex border-b border-[#202738] mb-6 overflow-x-auto scrollbar-none gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`flex items-center gap-2 px-5 py-3 border-b-2 font-black text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'form'
                ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>1. เลือกตามแบบฟอร์มคัดกรองความต้องการ (Smart Form)</span>
            <span className="px-1.5 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-amber-500 text-white text-[10px] font-black shadow-sm">
              แนะนำเด่น
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('symptoms')}
            className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'symptoms'
                ? 'border-[#E63946] text-white bg-red-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-4 h-4 text-[#E63946]" />
            <span>2. ค้นหาแนะนำตามอาการ / ปัญหาของรถ</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('styles')}
            className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'styles'
                ? 'border-[#E63946] text-white bg-red-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-4 h-4 text-orange-400" />
            <span>3. แนะนำตามสไตล์การขับขี่ (Driving Style)</span>
          </button>

          {user && (
            <button
              type="button"
              onClick={() => setActiveTab('member')}
              className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'member'
                  ? 'border-emerald-400 text-emerald-300 bg-emerald-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>4. แนะนำตรงรุ่นรถของคุณ ({user.vehicleModel || 'รถสมาชิก'})</span>
            </button>
          )}
        </div>

        {/* TAB 0: Interactive Form Filter (NEW & DEFAULT) */}
        {activeTab === 'form' && (
          <InteractiveRecommendationForm onQuickView={(p) => setQuickViewProduct(p)} />
        )}

        {/* TAB 1: Symptoms Selector */}
        {activeTab === 'symptoms' && (
          <div>
            {/* Clickable Symptom Pills */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-2">
                <span>เลือกปัญหาหรืออาการที่ต้องการแก้ไข (คลิกเลือกดูคำแนะนำได้ทันที):</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2.5">
                {RECOMMENDATION_SYMPTOMS.map((symptom) => {
                  const Icon = SYMPTOM_ICONS[symptom.iconName] || Disc;
                  const isSelected = selectedSymptomId === symptom.id;

                  return (
                    <button
                      key={symptom.id}
                      type="button"
                      onClick={() => setSelectedSymptomId(symptom.id)}
                      className={`flex flex-col p-3 rounded-xl text-left border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#221A20] to-[#151924] border-red-500 text-white shadow-lg shadow-red-950/30'
                          : 'bg-[#121622] hover:bg-[#1A2030] border-[#222A3C] text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected ? 'bg-[#E63946] text-white' : 'bg-[#1D2536] text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#E63946] animate-ping"></span>
                        )}
                      </div>
                      <span className="text-xs font-bold line-clamp-2 leading-snug">
                        {symptom.titleTh.split('/')[0]}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1 truncate">
                        {symptom.tags[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Symptom Diagnosis Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#121622] border border-[#232C3E] mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-[#FF6B6B] text-[10px] font-bold border border-red-500/30">
                    {symptomData.symptom.severityLabel}
                  </span>
                  <span className="text-xs text-amber-400 font-bold font-mono">
                    ประเมินความแม่นยำ: {symptomData.symptom.defaultMatchScore}% MATCH
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white">
                  {symptomData.symptom.titleTh}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {symptomData.symptom.descriptionTh}
                </p>
              </div>

              <Link
                to={`/recommendations?symptom=${selectedSymptomId}`}
                className="px-4 py-2.5 rounded-xl bg-[#1D2436] hover:bg-[#27324B] text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shrink-0"
              >
                <span>ดูบทวิเคราะห์และคู่มือ</span>
                <ChevronRight className="w-4 h-4 text-[#FF6B6B]" />
              </Link>
            </div>

            {/* Recommended Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {symptomData.products.slice(0, 4).map((product) => (
                <SmartAdvisorCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Driving Styles Selector */}
        {activeTab === 'styles' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {DRIVING_STYLES.map((style) => {
                const isSelected = selectedStyleId === style.id;
                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedStyleId(style.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#201A1E] to-[#141824] border-orange-500 shadow-xl text-white'
                        : 'bg-[#121622] hover:bg-[#1A2030] border-[#222A3C] text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                        {style.badge}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-orange-400" />}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">{style.nameTh}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {style.descriptionTh}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Products for this driving style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {styleProducts.map((product) => (
                <SmartAdvisorCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Member Personalization */}
        {activeTab === 'member' && (
          <div>
            <div className="p-5 rounded-2xl bg-[#121622] border border-[#232C3E] mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>อัลกอริทึมจับคู่ความเข้ากันได้ตรงรุ่น (Smart Fit Algorithm)</span>
              </div>
              <h3 className="text-lg font-black text-white">
                ชุดอะไหล่ที่แนะนำเป็นพิเศษสำหรับ {user?.name} ({user?.vehicleModel || 'รถสมาชิก'})
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                ตรวจสอบจากฐานข้อมูลสเปกชิ้นส่วนโรงงาน มั่นใจได้ว่าติดตั้งได้พอดี 100% ไม่ต้องดัดแปลงตัวรถ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {memberRecommendations.map((product) => (
                <SmartAdvisorCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Call to Action for Form-Based Recommendation */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#181014] via-[#151926] to-[#121520] border border-[#2E364A] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ต้องการตัวช่วยคัดกรองตามแบบฟอร์ม?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              เลือกตามแบบฟอร์มคัดกรองความต้องการ (Smart Form Filter)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              กรอกเลือกประเภทรถ ยี่ห้อ รุ่น และเป้าหมายที่ต้องการ (ซ่อมแซม, เช็กระยะ, อัปเกรด) ระบบจะค้นหาและแสดงผลลัพธ์อะไหล่ที่ตรงสเปกที่สุดออกมาให้ทันที
            </p>
          </div>

          <Link
            to="/recommendations?mode=form"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#E63946] via-[#FF5722] to-[#E63946] text-white text-sm font-bold shadow-xl shadow-red-900/40 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>เปิดแบบฟอร์มเลือกสินค้าแนะนำ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
