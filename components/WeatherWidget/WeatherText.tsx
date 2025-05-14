import React from 'react';
import { Weather } from './WeatherWidget';

type Props = { weather: Weather };

const WeatherText = ({ weather }: Props) => {
  const degree = weather === 'Clear' ? '+24' : weather === 'Frosty' ? '-13' : '+32';
  const place = weather === 'Clear' ? 'Madrid' : weather === 'Frosty' ? 'Moscow' : 'Ankara';

  // Tailwind colour classes mapped to weather states
  const degreeColor =
    weather === 'Clear'
      ? 'text-[#4F787D]'
      : weather === 'Frosty'
      ? 'text-[#a8ddff]'
      : 'text-[#fff5b8]';

  const placeColor =
    weather === 'Clear'
      ? 'text-[#694c6d]'
      : weather === 'Frosty'
      ? 'text-[#4497bf]'
      : 'text-[#f7a526]';

  return (
    <div className="pt-12 text-center font-sans relative z-10 transition-colors duration-500">
      <div className={`text-[80px] font-bold leading-none ${degreeColor}`}>
        {degree}
        <span className="text-4xl align-top">°</span>
      </div>
      <div className={`uppercase text-sm opacity-70 ${placeColor}`}>{place}</div>
      <div className="text-[#fff] text-lg font-semibold">{weather}</div>
    </div>
  );
};

export default WeatherText;