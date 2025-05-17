import { requireUser } from '@/utils/auth/requireAuth';
import WeatherContainer from '@/components/containers/WeatherContainer';

export const metadata = {
    title: 'Weather',
    description: 'View the current weather in an interactive widget.',
};

export default async function WeatherPage() {
    await requireUser();
    return <WeatherContainer />;
}
