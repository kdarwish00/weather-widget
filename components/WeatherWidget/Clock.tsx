'use client';

import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';

const Clock = () => {
    const [time, setTime] = useState('');
    const [weekday, setWeekday] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const locale = navigator.language || 'en-US';
            const timeString = now.toLocaleTimeString(locale, {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            });
            const weekdayString = now.toLocaleDateString(locale, { weekday: 'long' });

            setTime(timeString);
            setWeekday(weekdayString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            position="absolute"
            bottom={90}
            right={90}
            sx={{ transform: 'rotate(10deg)', zIndex: 20 }}
        >
            <Paper
                elevation={3}
                sx={{
                    px: 2,
                    py: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    color: 'grey',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontFamily: 'monospace',
                    textAlign: 'right',
                }}
            >
                <Typography variant="body2">{time}</Typography>
                <Typography variant="caption" sx={{ letterSpacing: 2 }}>
                    {weekday.toUpperCase()}
                </Typography>
            </Paper>
        </Box>
    );
};

export default Clock;