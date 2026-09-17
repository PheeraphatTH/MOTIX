import React from 'react';
import { motion } from 'motion/react';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'dark'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-lg';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 font-medium',
    md: 'text-sm px-4 py-2.5 gap-2 font-semibold',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-bold tracking-wide',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#E63946] to-[#C1121F] hover:from-[#FF4D5E] hover:to-[#D62839] text-white shadow-lg shadow-red-950/50 hover:brightness-110 active:scale-[0.98] border border-red-500/40',
    secondary: 'bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white shadow-lg shadow-orange-950/40 hover:brightness-110 active:scale-[0.98]',
    outline: 'bg-transparent text-slate-200 border border-slate-700 hover:border-[#E63946] hover:text-[#E63946] hover:bg-red-500/10 active:scale-[0.98]',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60',
    dark: 'bg-[#181D28] text-slate-100 hover:bg-[#202736] border border-slate-700/60 active:scale-[0.98]',
    accent: 'bg-[#E63946] text-white font-bold hover:bg-[#D62839] shadow-md active:scale-[0.98]',
  };

  return (
    <motion.button
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
    </motion.button>
  );
};
