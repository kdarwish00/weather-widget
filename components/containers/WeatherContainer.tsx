'use client';

import dynamic from 'next/dynamic';
import LogoutBtn from '@/components/LogoutBtn';
import { Box } from '@mui/material';

const WeatherWidget = dynamic(() => import('@/components/WeatherWidget/WeatherWidget'), {
    ssr: false,
});

export default function WeatherContainer() {
    return (
        <Box>
            <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 50 }}>
                <LogoutBtn />
            </Box>
            <WeatherWidget />
        </Box>
    );
}
