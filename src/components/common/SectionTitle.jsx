import React from 'react';

export const SectionTitle = ({
  tagline,
  title,
  subtitle,
  align = 'left', // 'left', 'center', 'right'
  className = '',
  action,
}) => {
  const alignmentClass = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 ${className}`}>
      <div className={`flex flex-col ${alignmentClass}`}>
        {tagline && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#FF6B6B] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse"></span>
            <span>{tagline}</span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};
