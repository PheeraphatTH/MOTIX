import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Zap,
  Mail,
  Lock,
  User,
  Phone,
  Sparkles,
  Award,
  Eye,
  EyeOff,
  Car,
  Bike,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Tag,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/common/Button';

export const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useCart();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    vehicleType: 'car',
    vehicleModel: '',
    agreeTerms: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!form.name.trim()) {
      setErrorMessage('กรุณาระบุชื่อ - นามสกุล');
      return;
    }

    if (!form.email.trim() || !form.email.includes('@')) {
      setErrorMessage('กรุณาระบุที่อยู่อีเมลให้ถูกต้อง');
      return;
    }

    if (!form.phone.trim()) {
      setErrorMessage('กรุณาระบุเบอร์โทรศัพท์ติดต่อ');
      return;
    }

    if (form.password.length < 6) {
      setErrorMessage('รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setErrorMessage('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน');
      return;
    }

    if (!form.agreeTerms) {
      setErrorMessage('กรุณายอมรับเงื่อนไขการสมัครสมาชิก');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const res = registerUser({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        vehicleType: form.vehicleType,
        vehicleModel: form.vehicleModel,
      });

      setIsSubmitting(false);

      if (!res.success) {
        setErrorMessage(res.message);
      } else {
        setRegisterSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2500);
      }
    }, 600);
  };

  if (registerSuccess) {
    return (
      <div className="min-h-screen bg-[#0B0D12] py-12 sm:py-20 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#121622] border border-emerald-500/40 rounded-3xl p-8 shadow-2xl text-center space-y-5 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              REGISTRATION SUCCESS
            </span>
            <h2 className="text-2xl font-black text-white">
              ยินดีต้อนรับสมาชิกใหม่ MOTIX!
            </h2>
            <p className="text-xs text-slate-300">
              สร้างบัญชีของคุณ <strong>{form.name}</strong> เรียบร้อยแล้ว
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E1119] border border-[#222A3B] text-left space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span>สถานะสมาชิก:</span>
              <span className="font-bold text-amber-400">Gold Member</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>แต้มต้อนรับสมาชิกใหม่:</span>
              <span className="font-bold text-emerald-400">+100 แต้ม</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>โค้ดส่วนลดพิเศษ:</span>
              <span className="font-bold font-mono text-[#FF6B6B]">WELCOME100 (ลด ฿100)</span>
            </div>
            {form.vehicleModel && (
              <div className="flex items-center justify-between text-slate-300">
                <span>รุ่นรถที่บันทึก:</span>
                <span className="font-bold text-white truncate max-w-[180px]">{form.vehicleModel}</span>
              </div>
            )}
          </div>

          <p className="text-[11px] text-slate-500">
            ระบบกำลังนำคุณไปยังหน้าแรกใน 3 วินาที...
          </p>

          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/')}
            className="w-full"
          >
            เข้าสู่หน้าแรกทันที
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0D12] py-10 sm:py-16 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#121622] border border-[#262F42] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#9A031E] text-white shadow-lg mb-1">
            <Zap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-heading">
            สมัครสมาชิก MOTIX Club
          </h1>
          <p className="text-xs text-slate-400">
            สร้างบัญชีเพื่อสะสมแต้ม ค้นหาอะไหล่ตรงรุ่นรถ และรับดีลราคาสมาชิก
          </p>
        </div>

        {/* Welcome Bonus Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#181D2A] to-amber-950/30 border border-red-500/30 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <Award className="w-4 h-4" />
            <span>สิทธิประโยชน์พิเศษสำหรับสมาชิกใหม่:</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-400">
            <li className="flex items-center gap-1.5 text-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>รับฟรีทันที <strong>100 แต้มสะสม</strong></span>
            </li>
            <li className="flex items-center gap-1.5 text-slate-200">
              <Tag className="w-3.5 h-3.5 text-[#FF6B6B] shrink-0" />
              <span>โค้ดส่วนลด ฿100 (WELCOME100)</span>
            </li>
            <li className="flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>การันตีอะไหล่แท้ 100% ตรงรุ่น</span>
            </li>
            <li className="flex items-center gap-1.5 text-slate-200">
              <Car className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>บันทึกรุ่นรถเพื่อเช็กของเข้ากันได้</span>
            </li>
          </ul>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-3.5 rounded-2xl bg-red-950/50 border border-red-500/60 text-xs text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* 1. Name */}
          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>ชื่อ - นามสกุล <span className="text-[#FF6B6B]">*</span></span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946] transition-colors"
              placeholder="เช่น นายพีรพัฒน์ มั่นคง"
            />
          </div>

          {/* 2. Email & Phone in 2 cols on tablet+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-slate-300 font-bold flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>อีเมล <span className="text-[#FF6B6B]">*</span></span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946] transition-colors"
                placeholder="youremail@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-300 font-bold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>เบอร์โทรศัพท์ <span className="text-[#FF6B6B]">*</span></span>
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946] transition-colors"
                placeholder="081-234-5678"
              />
            </div>
          </div>

          {/* 3. Password & Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-slate-300 font-bold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>รหัสผ่าน <span className="text-[#FF6B6B]">*</span></span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl pl-3.5 pr-10 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946] transition-colors"
                  placeholder="อย่างน้อย 6 ตัวอักษร"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-300 font-bold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>ยืนยันรหัสผ่าน <span className="text-[#FF6B6B]">*</span></span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  className="w-full bg-[#0E1119] border border-[#262F42] rounded-xl pl-3.5 pr-10 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946] transition-colors"
                  placeholder="กรอกรหัสผ่านซ้ำอีกครั้ง"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* 4. Vehicle Selection (Optional helper) */}
          <div className="p-3.5 rounded-2xl bg-[#0E1119] border border-[#222A3B] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-bold flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#FF6B6B]" />
                <span>รุ่นรถที่คุณใช้งาน (เพื่อกรองอะไหล่ตรงรุ่น)</span>
              </span>
              <span className="text-[10px] text-slate-500">ไม่บังคับ</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setForm({ ...form, vehicleType: 'car' })}
                className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  form.vehicleType === 'car'
                    ? 'bg-red-500/15 border-[#E63946] text-white font-bold'
                    : 'bg-[#141824] border-[#252E42] text-slate-400'
                }`}
              >
                <Car className="w-4 h-4" />
                <span>รถยนต์ (Car)</span>
              </button>

              <button
                type="button"
                onClick={() => setForm({ ...form, vehicleType: 'motorcycle' })}
                className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  form.vehicleType === 'motorcycle'
                    ? 'bg-red-500/15 border-[#E63946] text-white font-bold'
                    : 'bg-[#141824] border-[#252E42] text-slate-400'
                }`}
              >
                <Bike className="w-4 h-4" />
                <span>มอเตอร์ไซค์ (Bike)</span>
              </button>
            </div>

            <input
              type="text"
              value={form.vehicleModel}
              onChange={(e) => setForm({ ...form, vehicleModel: e.target.value })}
              className="w-full bg-[#121622] border border-[#262F42] rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
              placeholder={
                form.vehicleType === 'car'
                  ? 'เช่น Toyota Yaris ATIV 2023, Honda Civic FE, Isuzu D-Max'
                  : 'เช่น Honda CBR650R, Yamaha XMAX 300, Kawasaki Ninja'
              }
            />
          </div>

          {/* 5. Terms checkbox */}
          <div className="flex items-start gap-2 pt-1 text-[11px]">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={form.agreeTerms}
              onChange={(e) => setForm({ ...form, agreeTerms: e.target.checked })}
              className="mt-0.5 rounded bg-[#0E1119] border-slate-700 text-[#E63946] cursor-pointer"
            />
            <label htmlFor="agreeTerms" className="text-slate-400 cursor-pointer">
              ฉันยอมรับข้อตกลงและเงื่อนไขการเป็นสมาชิก MOTIX Club และยินยอมรับสิทธิประโยชน์ข่าวสารโปรโมชั่น
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full shadow-lg shadow-red-950/50 cursor-pointer"
          >
            {isSubmitting ? 'กำลังสร้างบัญชีสมาชิก...' : 'สมัครสมาชิกและรับโบนัส 100 แต้มทันที'}
          </Button>
        </form>

        {/* Demo Notice for Course Submission */}
        <div className="text-center pt-2">
          <span className="text-[10px] text-slate-500 bg-[#0E1119] px-2.5 py-1 rounded-full border border-slate-800">
            💡 ระบบสมัครสมาชิกจำลองบันทึกข้อมูลลงใน LocalStorage อัตโนมัติ (ไม่ต้องใช้ Database ภายนอก)
          </span>
        </div>

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

