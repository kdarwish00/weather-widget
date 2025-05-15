'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { Box, Button, Stack, TextField, Typography, Alert } from '@mui/material';

const supabase = createClient();

export default function UpdatePasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleUpdate = async () => {
        setError('');
        setSuccess(false);

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const { error: updateError } = await supabase.auth.updateUser({ password });

        if (updateError) {
            setError(updateError.message);
        } else {
            setSuccess(true);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" px={2}>
            <Stack spacing={3} maxWidth={400} width="100%">
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    Set a New Password
                </Typography>

                {error && <Alert severity="error">{error}</Alert>}
                {success && (
                    <Alert severity="success">
                        Password updated successfully. You can now log in.
                    </Alert>
                )}

                {!success ? (
                    <>
                        <TextField
                            label="New Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            required
                        />

                        <TextField
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                            required
                        />

                        <Button
                            variant="contained"
                            onClick={handleUpdate}
                            sx={{ textTransform: 'none' }}
                        >
                            Update Password
                        </Button>
                    </>
                ) : (
                    <Button
                        variant="outlined"
                        onClick={() => router.push('/login')}
                        sx={{ textTransform: 'none' }}
                    >
                        Go to Login
                    </Button>
                )}
            </Stack>
        </Box>
    );
}