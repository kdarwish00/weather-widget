'use client';

import React, { useEffect, useState } from 'react';
import { getCurrentTimeAndWeekday } from '@/utils/weather';

const Clock = () => {
  const [time, setTime] = useState('');
  const [weekday, setWeekday] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const { time, weekday } = getCurrentTimeAndWeekday();
      setTime(time);
      setWeekday(weekday);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-[90px] right-[90px] rotate-[10deg] text-sm font-mono text-right z-20">
      <div className="translate-x-2 translate-y-1 bg-black/30 px-2 py-1 rounded">
        <div>{time}</div>
        <div>{weekday}</div>
      </div>
    </div>
  );
};

export default Clock;