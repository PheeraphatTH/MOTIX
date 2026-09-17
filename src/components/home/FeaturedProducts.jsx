import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Car, Bike, CheckCircle2 } from 'lucide-react';
import { products } from '../../data/products';
import { SectionTitle } from '../common/SectionTitle';
import { ProductCard } from '../products/ProductCard';
import { Button } from '../common/Button';
import { useCart } from '../../context/CartContext';

export const FeaturedProducts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { selectedVehicle } = useCart();
  const [filterType, setFilterType] = useState('all'); // 'all', 'car', 'motorcycle'

  // Filter products by selected vehicle or category tab
  const displayProducts = products.filter((p) => {
    if (filterType !== 'all' && p.vehicleType !== filterType) return false;
    return true;
  }).slice(0, 8);

  return (
    <section className="py-12 sm:py-16 bg-[#0E1119] border-t border-[#1C2230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionTitle
            tagline="BEST SELLERS & RECOMMENDED"
            title="อะไหล่ยอดนิยมที่ลูกค้าไว้วางใจ"
            subtitle="ชิ้นส่วนมาตรฐานสูง แบรนด์แท้ระดับสากล ผ่านการทดสอบสมรรถนะและความปลอดภัยสูงสุด"
            className="mb-0"
          />

          {/* Type Switcher */}
          <div className="flex items-center p-1 bg-[#141824] rounded-2xl border border-[#262F42] self-start md:self-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'all'
                  ? 'bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white shadow-md shadow-red-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ทั้งหมด ({products.length})
            </button>
            <button
              onClick={() => setFilterType('car')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'car'
                  ? 'bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white shadow-md shadow-red-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>อะไหล่รถยนต์</span>
            </button>
            <button
              onClick={() => setFilterType('motorcycle')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'motorcycle'
                  ? 'bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white shadow-md shadow-red-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>อะไหล่มอเตอร์ไซค์</span>
            </button>
          </div>
        </div>

        {/* Selected Vehicle Active Alert */}
        {selectedVehicle.model && (
          <div className="mb-6 p-3.5 rounded-2xl bg-[#141A28] border border-[#28354E] flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                กำลังแสดงสินค้าที่รองรับ <strong className="text-white">{selectedVehicle.brand} {selectedVehicle.model}</strong>
              </span>
            </div>
            <Link to="/products" className="text-[#FF6B6B] hover:underline font-bold">
              ดูผลลัพธ์ทั้งหมด
            </Link>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => navigate('/products')}
            className="hover:border-[#E63946]"
          >
            ดูรายการอะไหล่ทั้งหมด ({products.length} รายการ)
          </Button>
        </div>

      </div>
    </section>
  );
};
