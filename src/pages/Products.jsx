import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Search,
  Filter,
  SlidersHorizontal,
  ArrowUpDown,
  X,
  CheckCircle2,
  Package,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { products } from '../data/products';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilter } from '../components/products/ProductFilter';
import { useCart } from '../context/CartContext';
import { VehicleFinder } from '../components/home/VehicleFinder';

export const Products = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectedVehicle, clearVehicleFilter } = useCart();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'price-asc', 'price-desc', 'rating', 'newest'

  // Filter state
  const [filters, setFilters] = useState({
    vehicleType: searchParams.get('vehicleType') || 'all',
    categories: searchParams.get('category') ? [searchParams.get('category')] : [],
    brands: searchParams.get('brand') ? [searchParams.get('brand')] : [],
    maxPrice: 15000,
    inStockOnly: false,
    promoOnly: false,
  });

  // Sync URL search params
  useEffect(() => {
    const q = searchParams.get('search');
    if (q !== null) setSearchQuery(q);

    const cat = searchParams.get('category');
    if (cat) setFilters(prev => ({ ...prev, categories: [cat] }));

    const vt = searchParams.get('vehicleType');
    if (vt) setFilters(prev => ({ ...prev, vehicleType: vt }));
  }, [searchParams]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(query) || p.nameEn.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesSku = p.sku.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        const matchesVehicle = p.compatibleVehicles?.some(v => v.toLowerCase().includes(query));

        if (!matchesName && !matchesBrand && !matchesSku && !matchesCategory && !matchesVehicle) {
          return false;
        }
      }

      // 2. Vehicle Type
      if (filters.vehicleType !== 'all' && p.vehicleType !== filters.vehicleType) {
        return false;
      }

      // 3. Categories
      if (filters.categories.length > 0 && !filters.categories.includes(p.category)) {
        return false;
      }

      // 4. Brands
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
        return false;
      }

      // 5. Price
      if (p.price > filters.maxPrice) {
        return false;
      }

      // 6. In Stock
      if (filters.inStockOnly && p.stock <= 0) {
        return false;
      }

      // 7. Promo Only
      if (filters.promoOnly && !p.isPromotion && p.discount <= 0) {
        return false;
      }

      // 8. Vehicle Finder Filter if model is selected
      if (selectedVehicle.model) {
        const selectedModelLower = selectedVehicle.model.toLowerCase();
        const matchesSelectedVehicle = p.compatibleVehicles?.some(v => {
          const vLower = v.toLowerCase();
          return vLower.includes(selectedModelLower) || selectedModelLower.includes(vLower);
        });
        if (!matchesSelectedVehicle) {
          return false;
        }
      } else if (selectedVehicle.brand) {
        const matchesBrand = p.compatibleBrands?.includes(selectedVehicle.brand.toLowerCase());
        if (!matchesBrand) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.stock - a.stock;
      return 0; // recommended default
    });
  }, [products, searchQuery, filters, sortBy, selectedVehicle]);

  const handleResetFilters = () => {
    setFilters({
      vehicleType: 'all',
      categories: [],
      brands: [],
      maxPrice: 15000,
      inStockOnly: false,
      promoOnly: false,
    });
    setSearchQuery('');
    setSearchParams({});
  };

  const removeCategoryFilter = (catSlug) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== catSlug),
    }));
  };

  const removeBrandFilter = (brand) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.filter(b => b !== brand),
    }));
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#FF6B6B] uppercase tracking-wider block mb-1">
                MOTIX PRODUCT CATALOG
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                {searchQuery ? `ผลการค้นหา "${searchQuery}"` : 'รายการอะไหล่ทั้งหมด'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                พบสินค้าทั้งหมด <span className="text-white font-bold">{filteredProducts.length}</span> รายการ
              </p>
            </div>

            {/* Mobile Filter & Sort Bar */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#141822] border border-[#2B3448] text-xs font-bold text-slate-200"
              >
                <Filter className="w-4 h-4 text-[#E63946]" />
                <span>ตัวกรองสินค้า</span>
              </button>

              {/* Sort dropdown */}
              <div className="flex items-center gap-2 bg-[#141822] border border-[#2B3448] rounded-xl px-3 py-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs text-slate-200 font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="recommended" className="bg-[#141822]">แนะนำยอดนิยม</option>
                  <option value="price-asc" className="bg-[#141822]">ราคา: ต่ำ → สูง</option>
                  <option value="price-desc" className="bg-[#141822]">ราคา: สูง → ต่ำ</option>
                  <option value="rating" className="bg-[#141822]">คะแนนรีวิวสูงสุด</option>
                  <option value="newest" className="bg-[#141822]">สินค้ามาใหม่</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Vehicle Notification if active */}
          {selectedVehicle.model && (
            <div className="mt-4 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  กำลังกรองเฉพาะอะไหล่ที่ตรงรุ่นกับ: <strong className="text-white font-bold">{selectedVehicle.brand} {selectedVehicle.model} ({selectedVehicle.year || 'ทุกปี'})</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={clearVehicleFilter}
                className="text-[#FF6B6B] hover:underline font-bold"
              >
                ล้างตัวกรองรุ่นรถ
              </button>
            </div>
          )}

          {/* Smart Recommendation Banner Trigger */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#161B28] to-amber-950/30 border border-red-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#E63946]/20 text-[#FF6B6B] shrink-0">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">
                  เลือกไม่ถูก หรือไม่แน่ใจว่าจะต้องเปลี่ยนชิ้นไหน?
                </span>
                <p className="text-xs text-slate-300">
                  ลองใช้ <strong className="text-amber-300">ระบบผู้ช่วยแนะนำอะไหล่อัจฉริยะ</strong> ค้นหาตามอาการ/ปัญหา หรือทำแบบประเมิน 3 ข้อ
                </p>
              </div>
            </div>
            <Link
              to="/recommendations"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#E63946] to-[#C1121F] hover:brightness-110 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shrink-0 cursor-pointer transition-all"
            >
              <span>เปิดระบบแนะนำสินค้า</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Active Filter Chips */}
          {(filters.categories.length > 0 || filters.brands.length > 0 || searchQuery || filters.promoOnly) && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-[#1C2230]">
              <span className="text-xs text-slate-400 font-semibold">ตัวกรองที่เลือก:</span>

              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#181E2C] border border-slate-700 text-xs text-white">
                  <span>ค้นหา: {searchQuery}</span>
                  <button onClick={() => setSearchQuery('')} className="hover:text-red-400">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {filters.categories.map((c) => (
                <span key={c} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-xs text-[#FF6B6B] font-bold">
                  <span>หมวด: {c}</span>
                  <button onClick={() => removeCategoryFilter(c)} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              {filters.brands.map((b) => (
                <span key={b} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200">
                  <span>แบรนด์: {b}</span>
                  <button onClick={() => removeBrandFilter(b)} className="hover:text-red-400">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              {filters.promoOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-500/20 border border-orange-500/30 text-xs text-orange-400 font-bold">
                  <span>เฉพาะโปรโมชั่น</span>
                  <button onClick={() => setFilters(f => ({ ...f, promoOnly: false }))} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs text-[#FF6B6B] hover:underline font-bold ml-2"
              >
                ล้างตัวกรองทั้งหมด
              </button>
            </div>
          )}
        </div>

        {/* Main Content Layout (Sidebar Filter + Product Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Sidebar Filter */}
          <div className="hidden lg:block lg:col-span-3 sticky top-28">
            <ProductFilter
              filters={filters}
              onFilterChange={setFilters}
              onResetFilters={handleResetFilters}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex">
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setMobileFilterOpen(false)}
              />
              <div className="relative w-4/5 max-w-xs bg-[#11151F] h-full p-5 overflow-y-auto z-10">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <h3 className="font-bold text-white text-base">ตัวกรองสินค้า</h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ProductFilter
                  filters={filters}
                  onFilterChange={setFilters}
                  onResetFilters={handleResetFilters}
                  totalResults={filteredProducts.length}
                />
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full mt-4 py-3 rounded-xl bg-[#E63946] text-white font-bold text-xs"
                >
                  แสดงผล ({filteredProducts.length} รายการ)
                </button>
              </div>
            </div>
          )}

          {/* Product Grid Area */}
          <div className="lg:col-span-9">
            <ProductGrid
              products={filteredProducts}
              onResetFilters={handleResetFilters}
            />
          </div>

        </div>

      </div>
    </div>
  );
};
