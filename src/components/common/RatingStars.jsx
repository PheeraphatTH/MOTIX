import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export const RatingStars = ({ rating = 5, reviewCount, size = 'sm', showNumber = true }) => {
  const num = Number(rating);
  const safeRating = isNaN(num) ? 5 : Math.min(5, Math.max(0, num));
  const starSize = size === 'xs' ? 'w-3 h-3' : size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  const fullStars = Math.min(5, Math.max(0, Math.floor(safeRating)));
  const hasHalf = safeRating % 1 >= 0.4;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalf ? 1 : 0));

  return (
    <div className="inline-flex items-center gap-1.5 select-none">
      <div className="flex items-center text-amber-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={`${starSize} fill-amber-400 text-amber-400`} />
        ))}
        {hasHalf && (
          <StarHalf className={`${starSize} fill-amber-400 text-amber-400`} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={`${starSize} text-slate-600`} />
        ))}
      </div>

      {showNumber && (
        <span className={`font-semibold text-slate-300 ${size === 'xs' ? 'text-[11px]' : size === 'sm' ? 'text-xs' : 'text-sm'}`}>
          {safeRating.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className="text-slate-500 text-xs font-normal">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};
