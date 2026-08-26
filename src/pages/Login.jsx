import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, LogIn, ArrowRight, UserCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/common/Button';

export const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useCart();
  const [email, setEmail] = useState('somchai.m@example.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      name: 'สมชาย มั่นคง',
      email: email || 'somchai.m@example.com',
      phone: '081-234-5678',
      points: 250,
    });
    navigate('/');
  };

  const handleQuickDemoLogin = () => {
    loginUser({
      name: 'สมชาย มั่นคง (Demo User)',
      email: 'demo.motix@example.com',
      phone: '089-999-8888',
      points: 500,
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] py-12 sm:py-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#121622] border border-[#262F42] rounded-3xl p-8 shadow-2xl space-y-6">
        
        {/* Logo & Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#9A031E] text-white shadow-lg mb-2">
            <Zap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-white font-heading">
            เข้าสู่ระบบ MOTIX
          </h1>
          <p className="text-xs text-slate-400">
            ยินดีต้อนรับกลับสู่ศูนย์รวมอะไหล่ยานยนต์คุณภาพ
          </p>
        </div>

        {/* Demo Quick Button */}
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs text-amber-300 font-bold">
            <UserCheck className="w-4 h-4" />
            <span>สำหรับนำเสนอ Mini Project</span>
          </div>
          <button
            type="button"
            onClick={handleQuickDemoLogin}
            className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            กดเพื่อเข้าสู่ระบบทันที (1-Click Demo Login)
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold">อีเมลผู้ใช้งาน</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl pl-10 pr-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold">รหัสผ่าน</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl pl-10 pr-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <label className="flex items-center gap-1.5 text-slate-400 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded bg-[#0E1119] border-slate-700 text-[#E63946]" />
              <span>จดจำการเข้าสู่ระบบ</span>
            </label>
            <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[#FF6B6B] hover:underline">
              ลืมรหัสผ่าน?
            </a>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            icon={LogIn}
            className="w-full shadow-lg shadow-red-950/50"
          >
            เข้าสู่ระบบ
          </Button>
        </form>

        {/* Register Link */}
        <div className="pt-4 border-t border-[#1C2230] text-center text-xs text-slate-400">
          ยังไม่มีบัญชีสมาชิก?{' '}
          <Link to="/register" className="text-[#FF6B6B] hover:underline font-bold">
            สมัครสมาชิกใหม่ รับ 100 แต้มฟรี
          </Link>
        </div>

      </div>
    </div>
  );
};
