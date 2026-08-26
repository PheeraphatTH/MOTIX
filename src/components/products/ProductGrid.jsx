import React from 'react';
import { ProductCard } from './ProductCard';
import { EmptyState } from '../common/EmptyState';

export const ProductGrid = ({
  products = [],
  loading = false,
  emptyTitle = 'ไม่พบสินค้าตามเงื่อนไขที่เลือก',
  emptyDescription = 'ลองปรับเปลี่ยนหมวดหมู่ คำค้นหา หรือรีเซ็ตตัวกรอง',
  onResetFilters,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={`skeleton-${i}`}
            className="bg-[#131722] border border-[#222A3B] rounded-2xl p-4 animate-pulse flex flex-col space-y-4"
          >
            <div className="w-full pt-[80%] bg-slate-800/60 rounded-xl"></div>
            <div className="h-4 bg-slate-800/80 rounded w-1/3"></div>
            <div className="h-4 bg-slate-800/80 rounded w-full"></div>
            <div className="h-3 bg-slate-800/50 rounded w-2/3"></div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 bg-slate-800 rounded w-1/2"></div>
              <div className="w-9 h-9 bg-slate-800 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        actionLabel={onResetFilters ? 'รีเซ็ตตัวกรองทั้งหมด' : undefined}
        onAction={onResetFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
