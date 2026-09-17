import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ShieldCheck,
  SearchCheck,
  Truck,
  Headphones,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

export const WhyMotix = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: ShieldCheck,
      title: 'สินค้าคุณภาพแท้ 100%',
      desc: 'คัดสรรจากแบรนด์ชั้นนำระดับสากล ผ่านมาตรฐานความปลอดภัยสูงสุด พร้อมรับประกันสินค้าทุกชิ้น',
      color: 'text-[#E63946]',
      bg: 'bg-red-500/10 border-red-500/20',
    },
    {
      icon: SearchCheck,
      title: 'ค้นหาง่าย ตรงรุ่น 100%',
      desc: 'ระบบ Vehicle Finder ระบุรุ่นและปีรถได้อย่างแม่นยำ ป้องกันปัญหาซื้อผิดสเปก ใส่ไม่ได้',
      color: 'text-[#FF5722]',
      bg: 'bg-orange-500/10 border-orange-500/20',
    },
    {
      icon: Truck,
      title: 'จัดส่งรวดเร็วทั่วประเทศ',
      desc: 'ระบบคลังสินค้ามาตรฐาน ส่งไว 24-48 ชม. แพ็คแน่นหนา ปลอดภัยถึงมือคุณอย่างแน่นอน',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Headphones,
      title: 'บริการหลังการขายพร้อมดูแล',
      desc: 'มีทีมผู้เชี่ยวชาญด้านยานยนต์คอยให้คำแนะนำ ตรวจเช็กเบอร์อะไหล่ และตอบคำถามตลอดการใช้งาน',
      color: 'text-red-400',
      bg: 'bg-red-500/10 border-red-500/20',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#0B0D12] border-t border-[#1C2230] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <SectionTitle
          tagline="WHY CHOOSE MOTIX"
          title={t('whyMotix.title')}
          subtitle={t('whyMotix.subtitle')}
          align="center"
          className="max-w-3xl mx-auto mb-12 text-center"
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#121622] border border-[#222A3B] p-6 flex flex-col justify-between hover:border-red-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} border flex items-center justify-center ${item.color} mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1C2230] flex items-center gap-1 text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>มาตรฐาน MOTIX Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
