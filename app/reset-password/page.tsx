'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const supabase = createClient();

export default function UpdatePasswordPage() {
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleUpdate = async () => {
        const { error } = await supabase.auth.updateUser({ password });

        if (!error) {
            router.push('/login');
        } else {
            alert(error.message);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" px={2}>
            <Stack spacing={3} maxWidth={400} width="100%">
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    Set a New Password
                </Typography>

                <TextField
                    label="New Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    fullWidth
                    required
                />
                <Button variant="contained" onClick={handleUpdate}>
                    Update Password
                </Button>
            </Stack>
        </Box>
    );
}
