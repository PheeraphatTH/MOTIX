import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ShieldCheck,
  Award,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Users,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0D12] py-10 sm:py-16 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Hero Brand Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-[#FF6B6B]">
            <Zap className="w-4 h-4 text-[#E63946]" />
            <span>ABOUT MOTIX BRAND</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-heading">
            KEEP YOUR <span className="text-[#E63946]">RIDE MOVING</span>
          </h1>

          <p className="text-lg sm:text-xl font-bold text-slate-200">
            "ให้รถของคุณพร้อมเดินทางต่อ"
          </p>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            MOTIX คือแบรนด์ศูนย์รวมอะไหล่รถยนต์และรถจักรยานยนต์ออนไลน์ยุคใหม่ 
            ที่มุ่งเน้นการแก้ปัญหาความยุ่งยากในการค้นหาอะไหล่ ให้ผู้ขับขี่ทุกคนมั่นใจได้ว่ารถของตนจะได้รับชิ้นส่วนที่ถูกต้อง ตรงรุ่น และมีคุณภาพสูงสุด
          </p>
        </div>

        {/* 2. Brand Story & Academic Mini Project Context (Section 23 & 37) */}
        <div className="rounded-3xl bg-[#121622] border border-[#262F42] p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-black text-white">
              โครงการและการศึกษา (Academic Mini Project Context)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm leading-relaxed text-slate-300">
            <p>
              เว็บไซต์ <strong>MOTIX E-Commerce</strong> นี้ถูกพัฒนาขึ้นเพื่อเป็น Mini Project ในรายวิชาการตลาดดิจิทัล (Digital Marketing) โดยผสานรวมทั้งหลักการออกแบบ UX/UI ยุคใหม่ การสร้างแบรนด์ที่มีความหนักแน่น สปอร์ต พรีเมียม และการวางกลยุทธ์ Customer Journey เพื่อตอบสนองความต้องการของผู้ใช้รถอย่างแท้จริง
            </p>
            <p>
              แนวคิดหลักของแบรนด์คือ <strong>"รถพร้อม คนพร้อม การเดินทางก็ไปต่อได้"</strong> โดยเราไม่ได้มองตัวเองเป็นเพียงผู้ขายอะไหล่ แต่เป็น <em>Your Ride's Reliable Partner</em> ผู้ร่วมทางที่ดูแลให้ทุกระยะการขับขี่ปลอดภัยและราบรื่น
            </p>
          </div>
        </div>

        {/* 3. Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-[#121622] border border-[#222A3B] p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#E63946]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">พันธกิจของเรา (Our Mission)</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              พัฒนาแพลตฟอร์มการเลือกซื้ออะไหล่ออนไลน์ที่ใช้งานง่ายที่สุด ค้นหาตรงรุ่นได้แม่นยำ 100% ปราศจากความกังวลเรื่องการซื้อผิดสเปก พร้อมส่งมอบชิ้นส่วนคุณภาพแท้และบริการหลังการขายระดับพรีเมียม
            </p>
          </div>

          <div className="rounded-3xl bg-[#121622] border border-[#222A3B] p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF5722]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">วิสัยทัศน์ (Our Vision)</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              ก้าวสู่การเป็น Top-of-Mind Brand สำหรับคอมมูนิตี้คนรักรถยนต์และรถจักรยานยนต์ในประเทศไทย ที่เมื่อนึกถึงการซ่อมบำรุงหรืออัปเกรดสมรรถนะรถ ต้องนึกถึง MOTIX เป็นอันดับแรก
            </p>
          </div>
        </div>

        {/* 4. Core Values */}
        <div className="text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            คุณค่าหลักที่เรายึดมั่น (Core Values)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0E1119] border border-[#1F2636] space-y-2">
              <span className="text-[#E63946] font-black text-lg font-mono">01. ACCURACY</span>
              <h4 className="text-white font-bold text-base">ความแม่นยำตรงรุ่น</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                ระบบค้นหา Vehicle Finder ผ่านการแมปข้อมูลเบอร์อะไหล่แท้และ OEM อย่างถี่ถ้วน
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1119] border border-[#1F2636] space-y-2">
              <span className="text-[#FF5722] font-black text-lg font-mono">02. AUTHENTICITY</span>
              <h4 className="text-white font-bold text-base">อะไหล่แท้ 100%</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                รับประกันอะไหล่แท้จากตัวแทนจำหน่ายอย่างเป็นทางการและโรงงานผู้ผลิตชั้นนำ
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1119] border border-[#1F2636] space-y-2">
              <span className="text-emerald-400 font-black text-lg font-mono">03. AGILITY</span>
              <h4 className="text-white font-bold text-base">รวดเร็วทันใจ</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                เพราะเรารู้ว่ารถต้องใช้งาน เราจึงจัดส่งด้วยความเร็วสูงสุด 24-48 ชั่วโมง
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
