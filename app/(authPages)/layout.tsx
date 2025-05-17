'use client';

import { Box, Paper } from '@mui/material';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f4f6f8"
            px={2}
        >
            <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
                {children}
            </Paper>
        </Box>
    );
}