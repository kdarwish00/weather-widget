import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is logged in, redirect to weather
  if (user) {
    redirect('/weather');
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f4f6f8"
      px={2}
    >
      <Stack spacing={4} alignItems="center">
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Welcome to the Weather Widget
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          Get started by logging in or creating an account.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            component={Link}
            href="/login"
            sx={{ textTransform: 'none' }}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/signup"
            sx={{ textTransform: 'none' }}
          >
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}