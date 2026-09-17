import React from 'react';
import Countdown from 'react-countdown';
import { Clock, Zap } from 'lucide-react';

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-11 sm:w-13 h-11 sm:h-13 rounded-xl bg-[#141824] border border-red-500/30 flex items-center justify-center shadow-inner relative overflow-hidden group">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-60"></div>
      <span className="font-mono text-lg sm:text-xl font-bold text-white tracking-wider">
        {String(value).padStart(2, '0')}
      </span>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#E63946] opacity-60"></div>
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
        <Zap className="w-4 h-4 text-[#E63946]" />
        <span>โปรโมชั่นรอบนี้สิ้นสุดแล้ว รอติดตามรอบถัดไป</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {days > 0 && (
        <>
          <TimeUnit value={days} label="วัน" />
          <span className="text-lg font-bold text-[#E63946] -mt-4">:</span>
        </>
      )}
      <TimeUnit value={hours} label="ชม." />
      <span className="text-lg font-bold text-[#E63946] -mt-4">:</span>
      <TimeUnit value={minutes} label="นาที" />
      <span className="text-lg font-bold text-[#E63946] -mt-4">:</span>
      <TimeUnit value={seconds} label="วินาที" />
    </div>
  );
};

export const CountdownTimer = ({
  targetDate,
  hoursFromNow = 14,
  label = 'ดีลพิเศษหมดเวลาใน',
}) => {
  const date = targetDate || Date.now() + (hoursFromNow * 3600 * 1000) + (28 * 60 * 1000);

  return (
    <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-2xl bg-[#0F131D]/95 border border-red-500/30 backdrop-blur-md shadow-xl shadow-red-950/20">
      {label && (
        <div className="flex items-center gap-2 text-xs font-bold text-[#FF5722] uppercase tracking-wider">
          <Clock className="w-4 h-4 text-[#E63946]" />
          <span>{label}</span>
        </div>
      )}
      <Countdown date={date} renderer={renderer} />
    </div>
  );
};
