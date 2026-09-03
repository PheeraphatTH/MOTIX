import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  CheckCircle2,
  PackageCheck,
  ArrowRight,
  Sparkles,
  Award,
  ChevronRight,
  Car,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/common/Button';

export const Checkout = () => {
  const navigate = useNavigate();
  const {
    cart,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTotal,
    appliedCoupon,
    clearCart,
    user,
  } = useCart();

  // Form State
  const [formData, setFormData] = useState({
    fullName: user?.name || 'สมชาย มั่นคง',
    phone: user?.phone || '081-234-5678',
    email: user?.email || 'somchai.m@example.com',
    address: '123/45 หมู่บ้านพรีเมียม ถ.ศรีนครินทร์ แขวงหนองบอน',
    district: 'เขตประเวศ',
    province: 'กรุงเทพมหานคร',
    postalCode: '10250',
    vehicleNote: 'Toyota Yaris ATIV 2023 (รบกวนเช็กสเปกให้อีกครั้ง)',
  });

  const [shippingMethod, setShippingMethod] = useState('express'); // 'express', 'sameday'
  const [paymentMethod, setPaymentMethod] = useState('promptpay'); // 'promptpay', 'credit_card', 'cod'
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const newOrder = {
        orderId: `MTX-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        items: [...cart],
        subtotal: cartSubtotal,
        discount: cartDiscount,
        shipping: shippingMethod === 'sameday' ? 120 : cartShipping,
        total: cartTotal + (shippingMethod === 'sameday' ? 120 : 0),
        shippingAddress: formData,
        paymentMethod,
        pointsEarned: Math.floor(cartTotal / 50),
      };

      setOrderComplete(newOrder);
      setIsProcessing(false);
      clearCart();
    }, 1500);
  };

  // If order complete, show Order Success Screen
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#0B0D12] py-12 sm:py-20 text-slate-300">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#121622] border border-[#262F42] p-8 sm:p-12 shadow-2xl space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                ORDER COMPLETED SUCCESSFULLY
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                สั่งซื้ออะไหล่สำเร็จเรียบร้อย!
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                หมายเลขคำสั่งซื้อของคุณคือ <strong className="text-white font-mono text-base">{orderComplete.orderId}</strong>
              </p>
            </div>

            {/* Loyalty points notification */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center gap-2 text-xs text-amber-300 font-bold">
              <Award className="w-4 h-4" />
              <span>คุณได้รับ {orderComplete.pointsEarned} แต้มสะสม MOTIX Rewards จากการสั่งซื้อครั้งนี้!</span>
            </div>

            {/* Order Brief */}
            <div className="rounded-2xl bg-[#0E1119] border border-[#1F2636] p-5 text-left text-xs space-y-3">
              <div className="flex justify-between pb-2 border-b border-[#1A2130]">
                <span className="text-slate-400">วันที่ทำรายการ:</span>
                <span className="text-white font-medium">{orderComplete.date}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#1A2130]">
                <span className="text-slate-400">ช่องทางชำระเงิน:</span>
                <span className="text-white font-medium uppercase">{orderComplete.paymentMethod}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#1A2130]">
                <span className="text-slate-400">ที่อยู่จัดส่ง:</span>
                <span className="text-white font-medium text-right max-w-xs truncate">
                  {orderComplete.shippingAddress.fullName}, {orderComplete.shippingAddress.province}
                </span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-white">ยอดชำระสุทธิ:</span>
                <span className="text-emerald-400 font-mono">฿{formatPrice(orderComplete.total)}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/products')}
              >
                เลือกซื้ออะไหล่เพิ่มเติม
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => navigate('/')}
              >
                กลับสู่หน้าหลัก
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // If cart is empty and not complete
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B0D12] py-20 text-center">
        <h2 className="text-xl font-bold text-white mb-4">ไม่มีสินค้าในตะกร้าสำหรับการสั่งซื้อ</h2>
        <Button onClick={() => navigate('/products')}>กลับไปเลือกซื้อสินค้า</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0D12] py-10 sm:py-16 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold text-[#FF6B6B] uppercase tracking-wider block mb-1">
            CHECKOUT STEP
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            ยืนยันคำสั่งซื้อและการจัดส่ง
          </h1>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Info */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Customer & Shipping Info */}
            <div className="rounded-2xl bg-[#121622] border border-[#222A3B] p-6 shadow-md space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-[#1E2536]">
                <span className="w-6 h-6 rounded-full bg-[#E63946] text-white flex items-center justify-center text-xs font-black">1</span>
                <span>ข้อมูลผู้สั่งซื้อและที่อยู่จัดส่ง</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">ชื่อ - นามสกุล *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-[#0E1119] border border-[#283246] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">เบอร์โทรศัพท์ติดต่อ *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#0E1119] border border-[#283246] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-slate-300 font-bold">อีเมลรับใบเสร็จและเลขพัสดุ *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#0E1119] border border-[#283246] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-slate-300 font-bold">ที่อยู่จัดส่ง (บ้านเลขที่ / ถนน / ซอย) *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-[#0E1119] border border-[#283246] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">จังหวัด *</label>
                  <input
                    type="text"
                    name="province"
                    required
                    value={formData.province}
                    onChange={handleInputChange}
                    className="w-full bg-[#0E1119] border border-[#283246] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">รหัสไปรษณีย์ *</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full bg-[#0E1119] border border-[#283246] rounded-xl px-3.5 py-2.5 text-white font-mono focus:outline-none focus:border-[#E63946]"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-slate-300 font-bold flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#E63946]" />
                    <span>ระบุรุ่นรถ/ปี เพื่อให้ช่างตรวจสอบความถูกต้องก่อนส่ง (แนะนำ)</span>
                  </label>
                  <input
                    type="text"
                    name="vehicleNote"
                    value={formData.vehicleNote}
                    onChange={handleInputChange}
                    placeholder="เช่น Honda Civic FE 2022 หรือ Yamaha NMAX 2021"
                    className="w-full bg-[#0E1119] border border-[#283246] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Shipping Method */}
            <div className="rounded-2xl bg-[#121622] border border-[#222A3B] p-6 shadow-md space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-[#1E2536]">
                <span className="w-6 h-6 rounded-full bg-[#E63946] text-white flex items-center justify-center text-xs font-black">2</span>
                <span>ตัวเลือกการจัดส่งพัสดุ</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label
                  onClick={() => setShippingMethod('express')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                    shippingMethod === 'express'
                      ? 'bg-red-500/10 border-[#E63946] text-white'
                      : 'bg-[#0E1119] border-[#222A3B] text-slate-400'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-[#E63946]" />
                      <span>Standard Express (24-48 ชม.)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">จัดส่งโดย Flash / Kerry Express พร้อมระบบกันกระแทก</p>
                  </div>
                  <span className="font-mono font-bold text-emerald-400">ฟรี</span>
                </label>

                <label
                  onClick={() => setShippingMethod('sameday')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                    shippingMethod === 'sameday'
                      ? 'bg-red-500/10 border-[#E63946] text-white'
                      : 'bg-[#0E1119] border-[#222A3B] text-slate-400'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Same-Day ด่วนพิเศษ (กทม.-ปริมณฑล)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">ส่งด่วนผ่านไรเดอร์ภายใน 4-6 ชั่วโมง</p>
                  </div>
                  <span className="font-mono font-bold text-white">+฿120</span>
                </label>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="rounded-2xl bg-[#121622] border border-[#222A3B] p-6 shadow-md space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-[#1E2536]">
                <span className="w-6 h-6 rounded-full bg-[#E63946] text-white flex items-center justify-center text-xs font-black">3</span>
                <span>วิธีการชำระเงิน</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('promptpay')}
                  className={`p-4 rounded-xl border transition-all text-left space-y-2 ${
                    paymentMethod === 'promptpay'
                      ? 'bg-red-500/10 border-[#E63946] text-white shadow-md'
                      : 'bg-[#0E1119] border-[#222A3B] text-slate-400 hover:text-white'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-[#E63946]" />
                  <div>
                    <strong className="block text-white">PromptPay QR</strong>
                    <span className="text-[11px] text-slate-400">สแกนจ่ายทันที ไม่มีค่าธรรมเนียม</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit_card')}
                  className={`p-4 rounded-xl border transition-all text-left space-y-2 ${
                    paymentMethod === 'credit_card'
                      ? 'bg-red-500/10 border-[#E63946] text-white shadow-md'
                      : 'bg-[#0E1119] border-[#222A3B] text-slate-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-blue-400" />
                  <div>
                    <strong className="block text-white">บัตรเครดิต / เดบิต</strong>
                    <span className="text-[11px] text-slate-400">Visa, Mastercard, JCB</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-xl border transition-all text-left space-y-2 ${
                    paymentMethod === 'cod'
                      ? 'bg-red-500/10 border-[#E63946] text-white shadow-md'
                      : 'bg-[#0E1119] border-[#222A3B] text-slate-400 hover:text-white'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-emerald-400" />
                  <div>
                    <strong className="block text-white">เก็บเงินปลายทาง (COD)</strong>
                    <span className="text-[11px] text-slate-400">ชำระเงินเมื่อได้รับสินค้า</span>
                  </div>
                </button>
              </div>

              {/* Simulated QR Code for PromptPay */}
              {paymentMethod === 'promptpay' && (
                <div className="p-4 rounded-xl bg-[#0B0D13] border border-[#222A3B] flex flex-col sm:flex-row items-center gap-4 text-xs">
                  <div className="w-28 h-28 bg-white p-2 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MOTIX-PROMPTPAY-DEMO-PAYMENT"
                      alt="PromptPay QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-bold text-[10px]">
                      Thai QR Payment
                    </span>
                    <h4 className="text-white font-bold text-sm">MOTIX AUTOMOTIVE CO., LTD.</h4>
                    <p className="text-slate-400 text-xs">
                      (ระบบจำลองการจ่ายเงินสำหรับ Mini Project: เมื่อกดปุ่มสั่งซื้อจะทำรายการสำเร็จทันที)
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Order Review */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-2xl bg-[#121622] border border-[#222A3B] p-6 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white pb-3 border-b border-[#1E2536]">
                สรุปรายการที่สั่งซื้อ ({cart.length} ชิ้น)
              </h3>

              {/* Items List */}
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {cart.map((rawItem, idx) => {
                  const item = rawItem.product || rawItem;
                  const price = Number(rawItem.price ?? item.price ?? 0);
                  const safePrice = isNaN(price) ? 0 : price;
                  const quantity = Math.max(1, Number(rawItem.quantity) || 1);
                  const name = rawItem.name || item.name || 'อะไหล่ MOTIX';
                  const image = rawItem.image || item.image || 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&auto=format&fit=crop&q=80';
                  const itemId = rawItem.id || item.id || `co-item-${idx}`;

                  return (
                    <div key={itemId} className="flex items-center gap-3 text-xs">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#202738] p-0.5 shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={image}
                          alt={name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&auto=format&fit=crop&q=80';
                          }}
                        />
                      </div>
                      <div className="flex-1 truncate">
                        <span className="text-white font-medium block truncate">{name}</span>
                        <span className="text-slate-400 text-[11px] font-mono">
                          จำนวน: {quantity} x ฿{formatPrice(safePrice)}
                        </span>
                      </div>
                      <span className="text-white font-bold font-mono">
                        ฿{formatPrice(safePrice * quantity)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Calculations */}
              <div className="space-y-2 pt-3 border-t border-[#1E2536] text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>ยอดรวมสินค้า:</span>
                  <span className="font-mono font-bold text-white">฿{formatPrice(cartSubtotal)}</span>
                </div>

                {cartDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>ส่วนลดคูปอง:</span>
                    <span className="font-mono font-bold">-฿{formatPrice(cartDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-300">
                  <span>ค่าจัดส่ง:</span>
                  <span className="font-mono font-bold text-white">
                    {shippingMethod === 'sameday' ? '฿120' : 'ฟรี'}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E2536] flex items-baseline justify-between">
                <div>
                  <span className="text-sm font-bold text-white block">ยอดชำระสุทธิ</span>
                  <span className="text-[10px] text-slate-400">รวม VAT 7% แล้ว</span>
                </div>
                <span className="text-2xl font-black text-[#FF8A8A] font-mono">
                  ฿{formatPrice(cartTotal + (shippingMethod === 'sameday' ? 120 : 0))}
                </span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isProcessing}
                className="w-full shadow-xl shadow-red-950/60"
              >
                {isProcessing ? 'กำลังประมวลผลคำสั่งซื้อ...' : 'ยืนยันการสั่งซื้อ (Place Order)'}
              </Button>

              <p className="text-[11px] text-center text-slate-500">
                🔒 ข้อมูลถูกเข้ารหัสและปกป้องด้วยมาตรฐานความปลอดภัยระดับสูง
              </p>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
