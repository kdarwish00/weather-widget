import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import LogoutBtn from '@/components/LogoutBtn';
import Weather from './Weather';

export default async function WeatherPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-[0px] right-[0px] z-50">
        <LogoutBtn />
      </div>
      <Weather />
    </div>
  );
}