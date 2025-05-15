'use client';

import { Box } from '@mui/material';

const HotObject = () => (
  <Box position="relative" zIndex={10}>
    <Box
      sx={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        transform: 'rotate(100deg)',
        backgroundColor: '#fff176',
      }}
    />
  </Box>
);

export default HotObject;