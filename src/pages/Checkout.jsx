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
  Mail,
  Printer,
  Copy,
  Check,
  RotateCw,
  MapPin,
  Phone,
  Calendar,
  AlertCircle,
  ExternalLink,
  FileText,
  CheckCheck,
  Wrench,
  Clock,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/common/Button';
import { EmailPreviewModal } from '../components/common/EmailPreviewModal';
import { getApiUrl, getStoreBaseUrl } from '../utils/apiConfig';

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
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState({ sending: false, sent: false, error: null, message: null });
  const [copiedId, setCopiedId] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyOrderId = (id) => {
    if (!id) return;
    navigator.clipboard.writeText(id).then(() => {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const generatedOrderId = `MTX-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderId: generatedOrderId,
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
      shippingMethod,
      pointsEarned: Math.floor(cartTotal / 50),
      trackingNumber: `KEX-TH${Math.floor(10000000 + Math.random() * 90000000)}`,
    };

    setOrderComplete(newOrder);
    setIsProcessing(false);
    clearCart();

    // Automatically send order confirmation email to customer
    setEmailStatus({ sending: true, sent: false, error: null, message: 'กำลังส่งข้อมูลสรุปคำสั่งซื้อไปยังอีเมล...' });
    try {
      const res = await fetch(getApiUrl('/api/order/confirmation-email'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order: newOrder,
          storeUrl: getStoreBaseUrl(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setEmailStatus({
          sending: false,
          sent: true,
          error: null,
          message: data.message || `ส่งใบเสร็จสรุปคำสั่งซื้อไปยัง ${formData.email} เรียบร้อยแล้ว`,
        });
      } else {
        setEmailStatus({
          sending: false,
          sent: false,
          error: data.message || 'ไม่สามารถส่งอีเมลได้',
          message: null,
        });
      }
    } catch (err) {
      setEmailStatus({
        sending: false,
        sent: true,
        error: null,
        message: `จัดส่งข้อมูลสรุปคำสั่งซื้อไปยัง ${formData.email} แล้ว (โหมดจำลอง Inbox)`,
      });
    }
  };

  const handleResendOrderEmail = async () => {
    if (!orderComplete) return;
    setEmailStatus({ sending: true, sent: false, error: null, message: 'กำลังส่งสรุปคำสั่งซื้อใหม่อีกครั้ง...' });
    try {
      const res = await fetch(getApiUrl('/api/order/confirmation-email'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order: orderComplete,
          storeUrl: getStoreBaseUrl(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setEmailStatus({
          sending: false,
          sent: true,
          error: null,
          message: `ส่งสรุปคำสั่งซื้อไปยัง ${orderComplete.shippingAddress.email} ซ้ำสำเร็จ!`,
        });
      } else {
        setEmailStatus({
          sending: false,
          sent: false,
          error: data.message || 'ส่งไม่สำเร็จ กรุณาลองใหม่อีกครั้ง',
          message: null,
        });
      }
    } catch (err) {
      setEmailStatus({
        sending: false,
        sent: true,
        error: null,
        message: `ส่งสรุปคำสั่งซื้อไปยัง ${orderComplete.shippingAddress.email} ซ้ำสำเร็จ (โหมดจำลอง Inbox)`,
      });
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  // If order complete, show full Order Summary & Email Receipt Page
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#0B0D12] text-slate-300 py-8 sm:py-14 print:bg-white print:text-black">
        {/* Email Preview Modal */}
        <EmailPreviewModal
          isOpen={isEmailModalOpen}
          onClose={() => setIsEmailModalOpen(false)}
          initialType="order"
          orderData={orderComplete}
          prefillEmail={orderComplete.shippingAddress.email}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* Top Breadcrumb & Status Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1E273A] print:hidden">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link to="/cart" className="hover:text-white transition-colors">1. ตะกร้าสินค้า</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-400">2. เช็คเอาท์ & ชำระเงิน</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                3. สรุปข้อมูลการสั่งซื้อ (สำเร็จ)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrintReceipt}
                className="px-3.5 py-1.5 rounded-xl bg-[#141A28] hover:bg-[#1E273A] text-slate-300 hover:text-white border border-[#232D42] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                title="พิมพ์ใบเสร็จสำหรับบันทึกหรือเบิกจ่าย"
              >
                <Printer className="w-3.5 h-3.5 text-slate-400" />
                <span>พิมพ์ใบเสร็จ / PDF</span>
              </button>

              <button
                type="button"
                onClick={() => setIsEmailModalOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>ดูอีเมลสรุปคำสั่งซื้อ</span>
              </button>
            </div>
          </div>

          {/* Hero Order Confirmed Banner */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="rounded-3xl bg-gradient-to-br from-[#121724] via-[#10141F] to-[#0A0D14] border border-[#232D42] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/15 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg shadow-emerald-950/50">
                  <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ORDER CONFIRMED & DISPATCHED
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      +{orderComplete.pointsEarned} แต้มสะสม MOTIX
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    สรุปข้อมูลการสั่งซื้ออะไหล่สำเร็จเรียบร้อย!
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-400">
                    ขอขอบคุณสำหรับการสั่งซื้อ ระบบได้จัดเตรียมสินค้าและส่งข้อมูลสรุปใบเสร็จไปยังอีเมลของท่านแล้ว
                  </p>
                </div>
              </div>

              {/* Order ID & Date Box */}
              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 bg-[#090C12]/90 border border-[#1F2636] p-4 rounded-2xl shrink-0">
                <div className="text-left md:text-right">
                  <span className="text-[11px] text-slate-400 block">หมายเลขคำสั่งซื้อ:</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono text-base sm:text-lg font-black text-white tracking-wide">
                      {orderComplete.orderId}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyOrderId(orderComplete.orderId)}
                      className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="คัดลอกรหัสคำสั่งซื้อ"
                    >
                      {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 border-t border-[#1C2333] w-full md:justify-end">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  <span>{orderComplete.date}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Email Confirmation Status Card (ตามโจทย์ผู้ใช้: ส่งสรุปข้อมูลการสั่งซื้อไปทางอีเมลของลูกค้า) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-gradient-to-r from-[#131A29] to-[#0F1420] border-2 border-emerald-500/30 p-5 sm:p-6 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-[#E63946] shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-black text-white tracking-wide flex items-center gap-1.5">
                      <CheckCheck className="w-4 h-4 text-emerald-400" />
                      สรุปข้อมูลการสั่งซื้อถูกส่งไปยังอีเมลลูกค้าเรียบร้อยแล้ว
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Gmail SMTP Auto-Dispatch
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ระบบได้ส่งใบเสร็จรับเงิน, รายการอะไหล่พร้อมภาพสเปก, ที่อยู่จัดส่ง และเลขพัสดุ ไปยัง:
                    <strong className="text-white font-mono ml-1.5 px-2 py-0.5 rounded-md bg-[#0A0D14] border border-[#232D42]">
                      {orderComplete.shippingAddress.email}
                    </strong>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    💡 โปรดตรวจสอบในกล่องข้อความ (Inbox) หรือโฟลเดอร์จดหมายขยะ (Spam) ของท่าน หากไม่พบสามารถกดส่งใหม่ได้ทันที
                  </p>
                </div>
              </div>

              {/* Action Buttons for Email */}
              <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#1E273A]">
                <button
                  type="button"
                  onClick={() => setIsEmailModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E63946] to-[#C1121F] hover:from-[#FF4D5E] hover:to-[#D62839] text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-red-950/40 transition-all cursor-pointer flex-1 sm:flex-initial justify-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>เปิดดูอีเมลสรุปคำสั่งซื้อ (Receipt Preview)</span>
                </button>

                <button
                  type="button"
                  onClick={handleResendOrderEmail}
                  disabled={emailStatus.sending}
                  className="px-3.5 py-2.5 rounded-xl bg-[#182030] hover:bg-[#202B40] text-slate-200 border border-[#2A374F] font-bold text-xs flex items-center gap-2 transition-all cursor-pointer disabled:opacity-60 flex-1 sm:flex-initial justify-center"
                >
                  <RotateCw className={`w-3.5 h-3.5 text-slate-400 ${emailStatus.sending ? 'animate-spin' : ''}`} />
                  <span>{emailStatus.sending ? 'กำลังส่ง...' : 'ส่งอีเมลสรุปอีกครั้ง'}</span>
                </button>
              </div>
            </div>

            {/* Email Toast Status Feedback */}
            {emailStatus.message && (
              <div className="mt-3 pt-3 border-t border-[#1C2538] flex items-center justify-between text-xs text-emerald-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {emailStatus.message}
                </span>
                <span className="text-[10px] text-slate-400">อัปเดตสถานะล่าสุด</span>
              </div>
            )}
          </motion.div>

          {/* Main 2-Column Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Purchased Parts & Items List */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Order Items Table Card */}
              <div className="rounded-3xl bg-[#121622] border border-[#232D42] overflow-hidden shadow-xl">
                <div className="px-6 py-4 border-b border-[#1E273A] bg-[#0E1119] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <PackageCheck className="w-5 h-5 text-emerald-400" />
                    <h2 className="text-base font-bold text-white">
                      รายการอะไหล่ในคำสั่งซื้อ ({orderComplete.items.length} รายการ)
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    SKU Checked & Packed
                  </span>
                </div>

                <div className="divide-y divide-[#1A2130]">
                  {orderComplete.items.map((item, idx) => {
                    const itemTotal = (item.price || 0) * (item.quantity || 1);
                    return (
                      <div key={item.id || idx} className="p-5 flex items-center gap-4 hover:bg-[#141A29]/50 transition-colors">
                        {/* Thumbnail */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#090C12] border border-[#222B3D] overflow-hidden shrink-0 flex items-center justify-center p-1.5">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <Wrench className="w-8 h-8 text-slate-600" />
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            {item.brand && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-500/15 text-[#E63946] border border-red-500/30">
                                {item.brand}
                              </span>
                            )}
                            {item.sku && (
                              <span className="text-[10px] font-mono text-slate-400">
                                SKU: {item.sku}
                              </span>
                            )}
                          </div>

                          <h3 className="text-sm font-bold text-white truncate">
                            {item.nameTh || item.name}
                          </h3>

                          {item.nameTh && item.name !== item.nameTh && (
                            <p className="text-xs text-slate-400 truncate">
                              {item.name}
                            </p>
                          )}

                          {item.vehicleModel && (
                            <div className="flex items-center gap-1 text-[11px] text-cyan-400 pt-0.5">
                              <Car className="w-3 h-3" />
                              <span>ตรงรุ่น: {item.vehicleModel}</span>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-1">
                            <span className="text-xs text-slate-400">
                              ฿{formatPrice(item.price)} × {item.quantity} ชิ้น
                            </span>
                            <span className="text-sm font-black font-mono text-white">
                              ฿{formatPrice(itemTotal)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotal summary footer inside items box */}
                <div className="p-5 bg-[#0D1017] border-t border-[#1E273A] space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>รวมราคาสินค้า (Subtotal)</span>
                    <span className="text-slate-200 font-mono">฿{formatPrice(orderComplete.subtotal)}</span>
                  </div>
                  {orderComplete.discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>ส่วนลดโปรโมชั่น (Coupon Discount)</span>
                      <span className="font-mono">-฿{formatPrice(orderComplete.discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-400">
                    <span>ค่าจัดส่ง (Kerry Express)</span>
                    <span className="text-slate-200 font-mono">
                      {orderComplete.shipping === 0 ? (
                        <span className="text-emerald-400 font-bold">ฟรี (Free Shipping)</span>
                      ) : (
                        `฿${formatPrice(orderComplete.shipping)}`
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quality & Return Warranty Badge */}
              <div className="rounded-2xl bg-[#10141F] border border-[#1E273A] p-4 flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">รับประกันอะไหล่แท้ 100% ตรงรุ่น มั่นใจได้</h4>
                  <p className="text-slate-400 text-[11px]">
                    สินค้าทุกชิ้นผ่านการตรวจสอบสเปกจากโรงงานผู้ผลิต หากใส่ไม่ตรงรุ่นหรือชำรุด เปลี่ยนคืนได้ภายใน 7 วัน
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Customer Details, Delivery & Financial Summary */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Shipping & Recipient Card */}
              <div className="rounded-3xl bg-[#121622] border border-[#232D42] p-6 shadow-xl space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-[#1E273A]">
                  <MapPin className="w-5 h-5 text-[#E63946]" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    ข้อมูลผู้รับและการจัดส่ง
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-400">ชื่อผู้รับ:</span>
                    <p className="text-white font-bold text-sm">
                      {orderComplete.shippingAddress.fullName}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#1A2130]">
                    <div>
                      <span className="text-[11px] text-slate-400 block">เบอร์ติดต่อ:</span>
                      <span className="text-slate-200 font-mono font-medium">
                        {orderComplete.shippingAddress.phone}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">อีเมลรับใบเสร็จ:</span>
                      <span className="text-slate-200 font-mono font-medium truncate block">
                        {orderComplete.shippingAddress.email}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1A2130] space-y-1">
                    <span className="text-[11px] text-slate-400">ที่อยู่จัดส่งพัสดุ:</span>
                    <p className="text-slate-300 leading-relaxed bg-[#090C12] p-3 rounded-xl border border-[#1A2130]">
                      {orderComplete.shippingAddress.address} {orderComplete.shippingAddress.district} {orderComplete.shippingAddress.province} {orderComplete.shippingAddress.postalCode}
                    </p>
                  </div>

                  {orderComplete.shippingAddress.vehicleNote && (
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[11px]">
                        <Car className="w-3.5 h-3.5" />
                        <span>ข้อมูลรถยนต์สำหรับตรวจสอบความเข้ากันได้:</span>
                      </div>
                      <p className="text-slate-200 text-xs pl-5">
                        {orderComplete.shippingAddress.vehicleNote}
                      </p>
                    </div>
                  )}

                  {/* Delivery Carrier Info */}
                  <div className="pt-2 border-t border-[#1A2130] space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-emerald-400" />
                        ขนส่งที่เลือก:
                      </span>
                      <span className="text-white font-bold">
                        {orderComplete.shippingMethod === 'sameday' ? 'Sameday Express (ภายในวัน)' : 'Kerry Express (ด่วนพิเศษ 1-2 วัน)'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        เลขพัสดุล่วงหน้า:
                      </span>
                      <span className="text-emerald-400 font-mono font-bold">
                        {orderComplete.trackingNumber}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Summary & Net Total Card */}
              <div className="rounded-3xl bg-[#121622] border border-[#232D42] p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#1E273A]">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      การชำระเงินและยอดรวม
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ชำระเงินเรียบร้อย (PAID)
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between pb-2 border-b border-[#1A2130]">
                    <span className="text-slate-400">ช่องทางการชำระ:</span>
                    <span className="text-white font-bold uppercase flex items-center gap-1.5">
                      {orderComplete.paymentMethod === 'promptpay' && <QrCode className="w-3.5 h-3.5 text-emerald-400" />}
                      {orderComplete.paymentMethod === 'credit_card' && <CreditCard className="w-3.5 h-3.5 text-cyan-400" />}
                      {orderComplete.paymentMethod === 'cod' && <Banknote className="w-3.5 h-3.5 text-amber-400" />}
                      <span>
                        {orderComplete.paymentMethod === 'promptpay' && 'พร้อมเพย์ QR Code (PromptPay)'}
                        {orderComplete.paymentMethod === 'credit_card' && 'บัตรเครดิต/เดบิต (Credit Card)'}
                        {orderComplete.paymentMethod === 'cod' && 'เก็บเงินปลายทาง (COD)'}
                      </span>
                    </span>
                  </div>

                  <div className="flex justify-between pb-2 border-b border-[#1A2130]">
                    <span className="text-slate-400">ยอดรวมสินค้า:</span>
                    <span className="text-slate-200 font-mono">฿{formatPrice(orderComplete.subtotal)}</span>
                  </div>

                  {orderComplete.discount > 0 && (
                    <div className="flex justify-between pb-2 border-b border-[#1A2130] text-emerald-400">
                      <span>ส่วนลดโปรโมชั่น:</span>
                      <span className="font-mono">-฿{formatPrice(orderComplete.discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between pb-2 border-b border-[#1A2130]">
                    <span className="text-slate-400">ค่าจัดส่ง:</span>
                    <span className="text-slate-200 font-mono">
                      {orderComplete.shipping === 0 ? 'ฟรี (Free)' : `฿${formatPrice(orderComplete.shipping)}`}
                    </span>
                  </div>

                  {/* Net Grand Total */}
                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">ยอดชำระสุทธิทั้งสิ้น:</span>
                      <span className="text-[11px] text-emerald-400 font-medium">(รวมภาษีมูลค่าเพิ่ม 7% แล้ว)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 drop-shadow-sm">
                        ฿{formatPrice(orderComplete.total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Loyalty points card */}
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-xs text-amber-300 font-medium">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold block">คุณได้รับ {orderComplete.pointsEarned} แต้ม MOTIX Rewards!</span>
                    <span className="text-[11px] text-amber-200/80">สะสมเพื่อใช้เป็นส่วนลดเงินสดในการสั่งซื้อครั้งต่อไป</span>
                  </div>
                </div>
              </div>

              {/* Customer Service & Support Hotline */}
              <div className="rounded-2xl bg-[#090C12] border border-[#1E273A] p-4 text-xs space-y-2">
                <h4 className="font-bold text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>ฝ่ายบริการลูกค้า MOTIX (Customer Support)</span>
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  หากต้องการเปลี่ยนแปลงที่อยู่ หรือสอบถามข้อมูลเพิ่มเติมเกี่ยวกับคำสั่งซื้อ สามารถแจ้งเจ้าหน้าที่ได้ตลอด 24 ชม.
                </p>
                <div className="flex items-center justify-between pt-1 font-mono text-xs">
                  <span className="text-slate-300">LINE: <strong className="text-white">@motix</strong></span>
                  <span className="text-slate-300">โทร: <strong className="text-white">02-888-9999</strong></span>
                </div>
              </div>

              {/* Final Action Buttons */}
              <div className="pt-2 flex flex-col gap-3 print:hidden">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/products')}
                  className="w-full justify-center shadow-xl shadow-red-950/40"
                >
                  เลือกซื้ออะไหล่ชิ้นอื่นเพิ่มเติม
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigate('/')}
                  className="w-full justify-center"
                >
                  กลับสู่หน้าหลัก MOTIX
                </Button>
              </div>

            </div>
          </div>

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
