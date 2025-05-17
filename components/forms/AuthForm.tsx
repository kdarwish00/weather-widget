'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { login, signup } from '@/utils/auth/authActions';
import {
    Box,
    Button,
    Stack,
    TextField,
    Typography,
    Alert,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
    type: 'login' | 'signup';
};

type FormState = { error: string } | { success: boolean } | { success?: boolean; error?: string };

export default function AuthForm({ type }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const action = type === 'login' ? login : signup;

    const [formState, formAction] = useActionState<FormState, FormData>(
        async (_prevState, formData) => {
            return await action(formData);
        },
        { error: '' }
    );

    return (
        <form action={formAction}>
            <Stack spacing={3}>
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    {type === 'login' ? 'Welcome Back' : 'Create an Account'}
                </Typography>

                {'error' in formState && formState.error && (
                    <Alert severity="error">{formState.error}</Alert>
                )}

                {'success' in formState && formState.success && (
                    <Alert severity="success">
                        Signup successful! Please check your email to confirm your account.
                    </Alert>
                )}

                <input type="hidden" name="type" value={type} />

                <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />

                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />

                <FormButton>{type === 'login' ? 'Log In' : 'Sign Up'}</FormButton>
            </Stack>

            <Box mt={3} textAlign="center">
                {type === 'login' && (
                    <Box textAlign="center" mb={1}>
                        <Link
                            href="/forgot-password"
                            style={{
                                fontSize: '0.875rem',
                                textDecoration: 'underline',
                                color: '#1976d2',
                            }}
                        >
                            Forgot password?
                        </Link>
                    </Box>
                )}

                {type === 'login' ? (
                    <Typography variant="body2">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                            Sign up
                        </Link>
                    </Typography>
                ) : (
                    <Typography variant="body2">
                        Already have an account?{' '}
                        <Link href="/login" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                            Log in
                        </Link>
                    </Typography>
                )}
            </Box>
        </form>
    );
}

function FormButton({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus();
    return (
        <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 1, textTransform: 'none' }}
            disabled={pending}
        >
            {pending ? 'Processing...' : children}
        </Button>
    );
}