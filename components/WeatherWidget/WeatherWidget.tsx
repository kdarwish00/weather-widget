'use client';

import React, { useState } from 'react';
import WeatherText from './WeatherText';
import SkyObject from './SkyObject';
import Ground from './Ground';
import Clock from './Clock';
import { cycleWeather, getBackgroundGradient} from '@/utils/weather';

export type Weather = 'Clear' | 'Frosty' | 'Hot';

const WeatherWidget = () => {
  const [weather, setWeather] = useState<Weather>('Clear');
  const background = getBackgroundGradient(weather);

  return (
    <div
      onClick={() => setWeather(cycleWeather(weather))}
      className={`w-full max-w-sm h-[100vh] rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 text-white ${background}`}
    >
      <WeatherText weather={weather} />
      <SkyObject weather={weather} />
      <Ground weather={weather}>
        <Clock />
      </Ground>
    </div>
  );
};

export default WeatherWidget;