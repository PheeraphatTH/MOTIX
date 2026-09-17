import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Award,
  Globe,
  Star,
  Gift,
  Percent,
} from 'lucide-react';
import { MotixBrandLogo } from '../common/MotixBrandLogo';
import { NewsletterSubscribe } from '../common/NewsletterSubscribe';

export const Footer = () => {
  // Social Channels matching user's reference mockup (หลังลูกค้าRegister V2.png)
  const socialChannels = [
    { name: 'Facebook', desc: 'ข่าวสารและโปรโมชั่น', icon: 'f', color: 'bg-blue-600', border: 'border-blue-500/40' },
    { name: 'Instagram', desc: 'ไอเดียแต่งรถและสินค้าใหม่', icon: 'ig', color: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600', border: 'border-pink-500/40' },
    { name: 'LINE', desc: 'โปรโมชั่นพิเศษสำหรับสมาชิก', icon: 'LINE', color: 'bg-emerald-500', border: 'border-emerald-500/40' },
    { name: 'YouTube', desc: 'รีวิวสินค้าและวิดีโอสุดเร้าใจ', icon: 'yt', color: 'bg-red-600', border: 'border-red-500/40' },
    { name: 'TikTok', desc: 'คอนเทนต์สนุกๆ สายไบค์', icon: 'tk', color: 'bg-black', border: 'border-slate-500/40' },
    { name: 'Email Newsletter', desc: 'ข่าวสารและโปรโมชั่นพิเศษ', icon: 'mail', color: 'bg-red-700', border: 'border-red-500/40' },
    { name: 'Website', desc: 'ข้อมูลสินค้าและทั้งหมด', icon: 'web', color: 'bg-slate-800', border: 'border-slate-500/40' },
  ];

  return (
    <footer className="bg-[#07090E] border-t border-[#1C2332] text-slate-400 text-sm">
      
      {/* 1. Value Pillars Top Bar in Crimson Red Motorsport Theme */}
      <div className="border-b border-[#141A26] py-8 bg-[#0B0D13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-[#E63946] shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">สินค้าคุณภาพ</h4>
                <p className="text-xs text-slate-400">คัดสรรจากแบรนด์ชั้นนำ</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#FF5722] shrink-0 shadow-sm">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">จัดส่งรวดเร็ว</h4>
                <p className="text-xs text-slate-400">ทั่วประเทศไทย 24-48 ชม.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-[#FF6B6B] shrink-0 shadow-sm">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">มั่นใจได้ 100%</h4>
                <p className="text-xs text-slate-400">มีรับประกันสินค้าทุกชิ้น</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">บริการหลังการขาย</h4>
                <p className="text-xs text-slate-400">ผู้เชี่ยวชาญพร้อมดูแล</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Newsletter Subscription with Visual HTML Email Auto-Delivery */}
      <div className="border-b border-[#18202E] py-12 bg-[#090C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSubscribe />
        </div>
      </div>

      {/* 3. Stay Connected / Channels Section (From หลังลูกค้าRegister V2.png) */}
      <div className="border-b border-[#18202E] py-10 bg-gradient-to-b from-[#0B0D14] to-[#080A10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5722]">
              <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
              <span>STAY CONNECTED WITH MOTIX</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              ติดตาม <span className="text-[#E63946]">MOTIX</span> ได้ทุกช่องทาง
            </h3>
            <p className="text-xs text-slate-400">
              รับข่าวสาร โปรโมชั่น และคอนเทนต์ใหม่ ๆ ได้ง่ายผ่านช่องทางที่คุณสะดวก
            </p>
          </div>

          {/* 7 Channels Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {socialChannels.map((ch, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#111622] border border-[#1E2738] hover:border-red-500/60 transition-all duration-300 group hover:-translate-y-1 shadow-md"
              >
                <div className={`w-11 h-11 rounded-full ${ch.color} flex items-center justify-center text-white font-black text-xs mb-2 ring-2 ring-red-500/30 group-hover:scale-110 transition-transform shadow-lg`}>
                  {ch.icon === 'mail' ? <Mail className="w-5 h-5" /> : ch.icon === 'web' ? <Globe className="w-5 h-5" /> : ch.icon}
                </div>
                <span className="text-xs font-bold text-white group-hover:text-[#FF6B6B] transition-colors">
                  {ch.name}
                </span>
                <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                  {ch.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Member Privileges 4 Icons (From หลังลูกค้าRegister V2.png) */}
          <div className="mt-8 pt-6 border-t border-[#1C2538] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0D111A]">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#E63946] flex items-center justify-center shrink-0">
                <Percent className="w-4 h-4" />
              </div>
              <span className="text-slate-300 font-medium">โปรโมชั่นพิเศษเฉพาะสมาชิก</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0D111A]">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#FF5722] flex items-center justify-center shrink-0">
                <Star className="w-4 h-4" />
              </div>
              <span className="text-slate-300 font-medium">สินค้าใหม่ก่อนใคร</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0D111A]">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#E63946] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-slate-300 font-medium">เคล็ดลับการดูแลรถจากผู้เชี่ยวชาญ</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0D111A]">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Gift className="w-4 h-4" />
              </div>
              <span className="text-slate-300 font-medium">สิทธิพิเศษและของรางวัล</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="MOTIX Home">
              <MotixBrandLogo size="lg" showTagline={true} />
            </Link>
            
            <p className="text-xs font-bold tracking-widest text-[#E63946] uppercase">
              KEEP YOUR RIDE MOVING — ให้รถของคุณพร้อมเดินทางต่อ
            </p>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ศูนย์รวมอะไหล่รถยนต์และรถจักรยานยนต์ออนไลน์ยุคใหม่ 
              ออกแบบระบบค้นหาอะไหล่ตรงรุ่น แม่นยำ รวดเร็ว พร้อมโปรโมชั่นและบริการหลังการขายมาตรฐานระดับสากล
            </p>

            {/* Academic Mini Project Note */}
            <div className="p-3 rounded-xl bg-[#10141C] border border-[#1E2738] flex items-start gap-2.5">
              <Award className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
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
              <li>
                <a
                  href="/subscribe_form.php"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-400 font-bold"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>ใบงาน PHP (subscribe_form.php)</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    ส่งอาจารย์
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E63946] pl-2">
              หมวดหมู่อะไหล่ยอดนิยม
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products?category=cat-brake" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>ระบบเบรก & จานดิสก์</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=cat-lubricant" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>น้ำมันเครื่องและของเหลว</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=cat-drive-system" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>ชุดโซ่ สเตอร์ และสายพาน</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=cat-suspension" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>โช้คอัพและระบบช่วงล่าง</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=cat-light" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E63946]" />
                  <span>อุปกรณ์ไฟส่องสว่าง LED</span>
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
                <Phone className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span className="font-semibold text-slate-200">02-888-MOTIX (02-888-6684)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B6B] shrink-0" />
                <span>support@motixparts.co.th</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>เปิดบริการทุกวัน: 08:30 - 18:30 น.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 4. Bottom Copyright & Trust */}
      <div className="border-t border-[#141A26] py-6 bg-[#05070A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <span className="font-bold text-white">MOTIX</span>. All rights reserved. KEEP YOUR RIDE MOVING.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">รองรับการชำระเงิน:</span>
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <span className="px-2 py-1 rounded bg-[#10141E] text-slate-200 border border-slate-800">PromptPay QR</span>
              <span className="px-2 py-1 rounded bg-[#10141E] text-slate-200 border border-slate-800">Visa / Master</span>
              <span className="px-2 py-1 rounded bg-[#10141E] text-slate-200 border border-slate-800">เก็บเงินปลายทาง</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
