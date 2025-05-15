'use client';

import { Box } from '@mui/material';

const FrostyObject = () => (
    <Box position="relative" zIndex={10}>
        <Box
            sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                transform: 'rotate(100deg)',
                backgroundColor: '#fff',
            }}
        />
        <Box
            sx={{
                position: 'absolute',
                width: 90,
                height: 90,
                backgroundColor: '#fff',
                borderRadius: '50%',
                opacity: 0.1,
                top: -15,
                left: -15,
            }}
        />
        <Box
            sx={{
                position: 'absolute',
                width: 110,
                height: 110,
                backgroundColor: '#fff',
                borderRadius: '50%',
                opacity: 0.1,
                top: -25,
                left: -25,
            }}
        />
        <Box
            sx={{
                position: 'absolute',
                width: 130,
                height: 130,
                backgroundColor: '#fff',
                borderRadius: '50%',
                opacity: 0.1,
                top: -35,
                left: -35,
            }}
        />
    </Box>
);

export default FrostyObject;