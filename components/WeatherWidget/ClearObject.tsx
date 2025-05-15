'use client';

import { Box } from '@mui/material';

const ClearObject = () => (
    <Box position="relative" zIndex={10}>
        <Box
            sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                transform: 'rotate(100deg)',
                boxShadow: '9px 9px 0 0 #BCAE76',
            }}
        />
        <Box
            sx={{
                position: 'absolute',
                width: 90,
                height: 90,
                backgroundColor: '#BCAE76',
                borderRadius: '50%',
                opacity: 0.1,
                top: -5,
                left: -30,
            }}
        />
        <Box
            sx={{
                position: 'absolute',
                width: 110,
                height: 110,
                backgroundColor: '#BCAE76',
                borderRadius: '50%',
                opacity: 0.1,
                top: -15,
                left: -40,
            }}
        />
        <Box
            sx={{
                position: 'absolute',
                width: 130,
                height: 130,
                backgroundColor: '#BCAE76',
                borderRadius: '50%',
                opacity: 0.1,
                top: -25,
                left: -50,
            }}
        />
    </Box>
);

export default ClearObject;