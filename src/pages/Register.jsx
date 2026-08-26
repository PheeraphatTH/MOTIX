import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, User, Phone, Sparkles, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/common/Button';

export const Register = () => {
  const navigate = useNavigate();
  const { loginUser } = useCart();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    vehicleModel: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      name: form.name || 'สมาชิกใหม่ MOTIX',
      email: form.email || 'user@example.com',
      phone: form.phone || '080-000-0000',
      points: 100, // Welcome 100 points
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] py-12 sm:py-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#121622] border border-[#262F42] rounded-3xl p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#9A031E] text-white shadow-lg mb-2">
            <Zap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-white font-heading">
            สมัครสมาชิก MOTIX Club
          </h1>
          <p className="text-xs text-slate-400">
            รับสิทธิประโยชน์ส่วนลดพิเศษและสะสมแต้มทุกการสั่งซื้อ
          </p>
        </div>

        {/* Welcome Bonus Badge */}
        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-300">
          <Award className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>สมัครวันนี้ รับฟรีทันที <strong>100 แต้มสะสม</strong> และโค้ดส่วนลด ฿100</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold">ชื่อ - นามสกุล *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
              placeholder="สมชาย มั่นคง"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold">เบอร์โทรศัพท์ติดต่อ *</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
              placeholder="081-234-5678"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold">อีเมล *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
              placeholder="somchai@example.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold">รหัสผ่าน *</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
              placeholder="กำหนดรหัสผ่านอย่างน้อย 6 ตัวอักษร"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold">รุ่นรถยนต์/มอเตอร์ไซค์ที่คุณขับ (ไม่ระบุก็ได้)</label>
            <input
              type="text"
              value={form.vehicleModel}
              onChange={(e) => setForm({ ...form, vehicleModel: e.target.value })}
              className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
              placeholder="เช่น Honda Civic 2022 หรือ Yamaha NMAX"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full shadow-lg shadow-red-950/50"
          >
            สร้างบัญชีสมาชิกทันที
          </Button>
        </form>

        {/* Login Link */}
        <div className="pt-4 border-t border-[#1C2230] text-center text-xs text-slate-400">
          มีบัญชีสมาชิกอยู่แล้ว?{' '}
          <Link to="/login" className="text-[#FF6B6B] hover:underline font-bold">
            เข้าสู่ระบบที่นี่
          </Link>
        </div>

      </div>
    </div>
  );
};
