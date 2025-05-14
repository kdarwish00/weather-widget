'use client';

import { useFormStatus } from 'react-dom';
import { login, signup } from '@/app/login/actions';
import { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';

type Props = {
  type: 'login' | 'signup';
};

export default function AuthForm({ type }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const action = type === 'login' ? login : signup;

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
        <form action={action}>
          <Stack spacing={3}>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              {type === 'login' ? 'Welcome Back' : 'Create an Account'}
            </Typography>

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
        </form>

        <Box mt={3} textAlign="center">
          {type === 'login' && (
            <Box textAlign="center">
              <Link href="/forgot-password" style={{ fontSize: '0.875rem', textDecoration: 'underline', color: '#1976d2' }}>
                Forgot password?
              </Link>
            </Box>
          )}
          {type === 'login' ? (
            <Typography variant="body2">
              Don&apos;t have an account?{' '}
              <Link
                href="/signup"
                style={{ color: '#1976d2', textDecoration: 'underline' }}
              >
                Sign up
              </Link>
            </Typography>
          ) : (
            <Typography variant="body2">
              Already have an account?{' '}
              <Link
                href="/login"
                style={{ color: '#1976d2', textDecoration: 'underline' }}
              >
                Log in
              </Link>
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
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