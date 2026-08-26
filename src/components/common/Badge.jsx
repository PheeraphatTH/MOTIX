import React from 'react';

export const Badge = ({
  children,
  variant = 'red', // 'red', 'orange', 'green', 'blue', 'dark', 'gold'
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-1.5 py-0.5 font-bold',
    md: 'text-xs px-2.5 py-0.5 font-semibold',
    lg: 'text-sm px-3 py-1 font-bold',
  };

  const variantStyles = {
    red: 'bg-red-500/15 text-[#FF6B6B] border border-red-500/30',
    orange: 'bg-orange-500/15 text-orange-400 border border-orange-500/30',
    green: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    blue: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
    gold: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    dark: 'bg-[#181D28] text-slate-300 border border-slate-700',
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-md uppercase tracking-wider ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
