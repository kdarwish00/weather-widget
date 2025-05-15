'use client';

import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Weather } from './WeatherWidget';

type Props = {
    weather: Weather;
    children?: ReactNode;
};

const Ground = ({ weather, children }: Props) => {
    const gradient =
        weather === 'Clear'
            ? 'linear-gradient(to bottom, #2f2b3c, #091B21)'
            : weather === 'Frosty'
              ? 'linear-gradient(to bottom, #f3ffff, #9af2ff)'
              : 'linear-gradient(to bottom, #e0d7a4, #e7c77a)';

    return (
        <>
            <Box
                sx={{
                    width: 270,
                    height: 150,
                    position: 'absolute',
                    bottom: -50,
                    left: -20,
                    zIndex: 10,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    transform: 'rotate(20deg)',
                    background: gradient,
                }}
            />
            <Box
                sx={{
                    width: 500,
                    height: 150,
                    position: 'absolute',
                    bottom: -70,
                    right: -80,
                    zIndex: 0,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    transform: 'rotate(-10deg)',
                    background: gradient,
                }}
            >
                {children}
            </Box>
        </>
    );
};

export default Ground;
