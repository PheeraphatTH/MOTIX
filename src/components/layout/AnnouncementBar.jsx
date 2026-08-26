import React from 'react';
import { Flame, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#9A031E] via-[#E63946] to-[#9A031E] text-white text-xs font-semibold py-1.5 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Highlight message */}
        <div className="hidden md:flex items-center gap-2">
          <Truck className="w-3.5 h-3.5" />
          <span>จัดส่งด่วนทั่วไทย 24-48 ชม. • ส่งฟรีเมื่อสั่งซื้อครบ 1,500 บาท</span>
        </div>

        {/* Center: Flash Campaign */}
        <div className="flex-1 text-center flex items-center justify-center gap-2">
          <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="font-bold">
            MOTIX STARTER DEAL: โค้ด <span className="underline decoration-amber-300 font-mono tracking-wider font-extrabold text-amber-200">STARTER20</span> ลดทันที 20%
          </span>
          <Link
            to="/promotions"
            className="inline-flex items-center gap-0.5 ml-1 text-white hover:text-amber-200 font-bold hover:underline"
          >
            <span>รับสิทธิ์</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Right: Guarantee badge */}
        <div className="hidden lg:flex items-center gap-1 text-slate-100">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
          <span>การันตีอะไหล่แท้ 100% ตรงรุ่น</span>
        </div>
      </div>
    </div>
  );
};
