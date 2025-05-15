'use client';

import { useState } from 'react';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { createClient } from '@/utils/supabase/client';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) {
            setError(error.message);
        } else {
            setSubmitted(true);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" px={2}>
            <Paper sx={{ p: 4, width: '100%', maxWidth: 400 }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <Typography variant="h5" fontWeight="bold" textAlign="center">
                            Reset Password
                        </Typography>
                        {submitted ? (
                            <Typography textAlign="center">
                                Check your email for the reset link.
                            </Typography>
                        ) : (
                            <>
                                <TextField
                                    label="Email Address"
                                    type="email"
                                    value={email}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth
                                />
                                {error && <Typography color="error">{error}</Typography>}
                                <Button variant="contained" type="submit" fullWidth>
                                    Send Reset Link
                                </Button>
                            </>
                        )}
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}
