// app/weather/page.tsx
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import WeatherContainer from '@/components/containers/WeatherContainer';

export default async function WeatherPage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    return <WeatherContainer />;
}