'use client';
import dynamic from 'next/dynamic';

const WeatherWidget = dynamic(() => import('@/components/WeatherWidget/WeatherWidget'), {
    ssr: false,
});

export default function Weather() {
    return <WeatherWidget />;
}
