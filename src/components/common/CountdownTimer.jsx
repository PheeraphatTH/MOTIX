import React from 'react';
import Countdown from 'react-countdown';
import { Flame } from 'lucide-react';

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg bg-[#141822] border border-[#2B3448] flex items-center justify-center shadow-inner relative overflow-hidden group">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-60"></div>
      <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-wider">
        {String(value).padStart(2, '0')}
      </span>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#E63946] opacity-30"></div>
    </div>
    <span className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="px-4 py-2 rounded-lg bg-red-950/40 border border-red-800/50 text-red-400 text-sm font-semibold flex items-center gap-2">
        <Flame className="w-4 h-4 text-red-500 animate-pulse" />
        <span>โปรโมชั่นรอบนี้สิ้นสุดแล้ว รอติดตามรอบถัดไป</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {days > 0 && (
        <>
          <TimeUnit value={days} label="วัน" />
          <span className="text-xl font-bold text-red-500/80 -mt-4">:</span>
        </>
      )}
      <TimeUnit value={hours} label="ชม." />
      <span className="text-xl font-bold text-red-500/80 -mt-4">:</span>
      <TimeUnit value={minutes} label="นาที" />
      <span className="text-xl font-bold text-red-500/80 -mt-4">:</span>
      <TimeUnit value={seconds} label="วินาที" />
    </div>
  );
};

export const CountdownTimer = ({
  targetDate,
  hoursFromNow = 14,
  label = 'FLASH SALE ENDS IN',
}) => {
  // Default to 14 hours 28 mins from now if not specified
  const date = targetDate || Date.now() + (hoursFromNow * 3600 * 1000) + (28 * 60 * 1000);

  return (
    <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0D1017]/90 border border-red-500/30 backdrop-blur-md shadow-xl shadow-red-950/20">
      {label && (
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF6B6B] uppercase tracking-wider">
          <Flame className="w-4 h-4 text-[#E63946] animate-bounce" />
          <span>{label}</span>
        </div>
      )}
      <Countdown date={date} renderer={renderer} />
    </div>
  );
};
