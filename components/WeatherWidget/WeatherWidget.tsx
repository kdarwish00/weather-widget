'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import WeatherText from './WeatherText';
import SkyObject from './SkyObject';
import Ground from './Ground';
import Clock from './Clock';
import { cycleWeather, getBackgroundGradient } from '@/utils/weather';

export type Weather = 'Clear' | 'Frosty' | 'Hot';

const WeatherWidget = () => {
    const [weather, setWeather] = useState<Weather>('Clear');

    return (
        <Box
            onClick={() => setWeather(cycleWeather(weather))}
            sx={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.5s ease',
                color: 'white',
                backgroundImage: getBackgroundGradient(weather),
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <WeatherText weather={weather} />
            <SkyObject weather={weather} />
            <Ground weather={weather}>
                <Clock />
            </Ground>
        </Box>
    );
};

export default WeatherWidget;
