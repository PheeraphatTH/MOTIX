import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Clock, BookOpen, ChevronRight } from 'lucide-react';

export const MotixGarage = () => {
  const articles = [
    {
      id: 1,
      title: 'น้ำมันเครื่องแบบไหน เหมาะกับรถของคุณ?',
      category: 'บทความแนะนำ',
      readTime: '3 นาที',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600&auto=format&fit=crop&q=80',
      summary: 'เจาะลึกความแตกต่างระหว่างสังเคราะห์แท้ กึ่งสังเคราะห์ และเบอร์ความหนืดที่เหมาะสมที่สุดสำหรับสภาพอากาศเมืองไทย',
    },
    {
      id: 2,
      title: 'โซ่และสเตอร์มอเตอร์ไซค์ ควรเปลี่ยนเมื่อไหร่?',
      category: 'บทความแนะนำ',
      readTime: '4 นาที',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&auto=format&fit=crop&q=80',
      summary: 'สัญญาณเตือนข้อตาย ฟันสเตอร์แหลม และระยะยืดที่เริ่มอันตราย พร้อมวิธีดูแลรักษาเพื่อยืดอายุการใช้งาน',
    },
    {
      id: 3,
      title: 'ขับทางไกล ควรเช็กอะไรบ้าง ก่อนออกเดินทาง?',
      category: 'บทความแนะนำ',
      readTime: '5 นาที',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80',
      summary: 'เช็กลิสต์ 7 จุดสำคัญ ยาง เบรก ระบบไฟส่องสว่าง และหม้อน้ำ เพื่อความปลอดภัยสูงสุดตลอดเส้นทาง',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0A0C10] border-t border-[#1C2230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-[#E63946] font-black text-xs uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>MOTIX GARAGE KNOWLEDGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ความรู้ดี ๆ สำหรับคนรักรถ
            </h2>
            <p className="text-sm text-slate-400">
              บทความ เคล็ดลับ และเทคนิคการดูแลรักษารถ เพื่อให้คุณขับขี่ได้อย่างมั่นใจในทุกเส้นทาง
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121622] hover:bg-[#182030] text-slate-200 border border-[#222B3D] text-xs font-bold transition-all shrink-0 self-start lg:self-auto hover:border-red-500/40"
          >
            <span>อ่านบทความทั้งหมด</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Articles Grid (Clean style matching reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#121622] border border-[#222A3B] overflow-hidden hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Article Cover Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#E63946] text-white text-[10px] font-bold shadow-md">
                    {item.category}
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] text-slate-300 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#FF6B6B] transition-colors line-clamp-2 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-5 pb-5 pt-0">
                <div className="pt-3 border-t border-[#1C2433] flex items-center gap-1.5 text-xs font-bold text-[#FF6B6B] group-hover:text-[#FFA8A8] transition-colors">
                  <span>อ่านเพิ่มเติม</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
