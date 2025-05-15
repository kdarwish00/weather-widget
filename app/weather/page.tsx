import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import LogoutBtn from '@/components/LogoutBtn';
import Weather from './Weather';
import { Box } from '@mui/material';

export default async function WeatherPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <Box>
      <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 50 }}>
        <LogoutBtn />
      </Box>
      <Weather />
    </Box>
  );
}