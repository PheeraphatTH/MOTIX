import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MotixBrandLogo } from '../common/MotixBrandLogo';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Award,
  ChevronRight,
} from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#07090D] border-t border-[#1C2230] text-slate-400 text-sm">
      {/* 1. Value Pillars Top Bar */}
      <div className="border-b border-[#181E2B] py-8 bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#E63946] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">อะไหล่แท้ 100%</h4>
                <p className="text-xs text-slate-400">การันตีคุณภาพทุกชิ้น</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF5722] shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">จัดส่งด่วน 24-48 ชม.</h4>
                <p className="text-xs text-slate-400">ส่งไว แพ็คแน่นหนา</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">เปลี่ยนคืนใน 7 วัน</h4>
                <p className="text-xs text-slate-400">ใส่ไม่ตรงรุ่นเปลี่ยนได้</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">ผู้เชี่ยวชาญดูแล</h4>
                <p className="text-xs text-slate-400">ปรึกษาเทียบสเปกฟรี</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="MOTIX Home">
              <MotixBrandLogo size="lg" showTagline={true} />
            </Link>
            
            <p className="text-xs font-bold tracking-widest text-[#FF6B6B] uppercase">
              KEEP YOUR RIDE MOVING — ให้รถของคุณพร้อมเดินทางต่อ
            </p>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ศูนย์รวมอะไหล่รถยนต์และรถจักรยานยนต์ออนไลน์ยุคใหม่ 
              ออกแบบระบบค้นหาอะไหล่ตรงรุ่น แม่นยำ รวดเร็ว พร้อมโปรโมชั่นและบริการหลังการขายมาตรฐานระดับสากล
            </p>

            {/* Academic Mini Project Note */}
            <div className="p-3 rounded-xl bg-[#121620] border border-[#222A3B] flex items-start gap-2.5">
              <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-tight">
                <span className="font-bold text-slate-200 block">Digital Marketing Mini Project</span>
                <span className="text-slate-400">พัฒนาขึ้นเพื่อนำเสนอในรายวิชาการตลาดดิจิทัล</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E63946] pl-2">
              เมนูหลัก
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>หน้าแรก</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>สินค้าทั้งหมด</span>
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>หมวดหมู่อะไหล่</span>
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="hover:text-white transition-colors flex items-center gap-1.5 text-[#FF6B6B] font-semibold">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>แคมเปญโปรโมชั่น</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>เกี่ยวกับ MOTIX</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>คำถามที่พบบ่อย (FAQ)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E63946] pl-2">
              หมวดหมู่อะไหล่ยอดนิยม
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products?category=brake-system" className="hover:text-white transition-colors">
                  ระบบเบรก (Brembo / จานเบรก)
                </Link>
              </li>
              <li>
                <Link to="/products?category=engine-oil" className="hover:text-white transition-colors">
                  น้ำมันเครื่องสังเคราะห์แท้ 100%
                </Link>
              </li>
              <li>
                <Link to="/products?category=engine-parts" className="hover:text-white transition-colors">
                  หัวเทียนเลเซอร์อิริเดียม (NGK)
                </Link>
              </li>
              <li>
                <Link to="/products?category=chain-sprocket" className="hover:text-white transition-colors">
                  ชุดโซ่สเตอร์ DID X-Ring
                </Link>
              </li>
              <li>
                <Link to="/products?category=suspension" className="hover:text-white transition-colors">
                  โช้คอัพ Profender Monotube
                </Link>
              </li>
              <li>
                <Link to="/products?category=filters" className="hover:text-white transition-colors">
                  ไส้กรองแอร์ PM2.5 / กรองอากาศ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E63946] pl-2">
              ติดต่อเรา
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                <span>888 ถนนพัฒนาการ แขวงสวนหลวง เขตสวนหลวง กรุงเทพฯ 10250</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E63946] shrink-0" />
                <span className="font-semibold text-slate-200">02-888-MOTIX (02-888-6684)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>support@motixparts.co.th</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>เปิดบริการทุกวัน: 08:30 - 18:30 น.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright & Trust */}
      <div className="border-t border-[#181E2B] py-6 bg-[#05060A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <span className="font-bold text-white">MOTIX</span>. All rights reserved. KEEP YOUR RIDE MOVING.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">รองรับการชำระเงิน:</span>
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <span className="px-2 py-1 rounded bg-[#181E2C] text-slate-200 border border-slate-700">PromptPay QR</span>
              <span className="px-2 py-1 rounded bg-[#181E2C] text-slate-200 border border-slate-700">Visa / Master</span>
              <span className="px-2 py-1 rounded bg-[#181E2C] text-slate-200 border border-slate-700">เก็บเงินปลายทาง</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
