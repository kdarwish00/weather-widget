import { requireUser } from '@/utils/auth/requireAuth';
import WeatherContainer from '@/components/containers/WeatherContainer';

export default async function WeatherPage() {
    await requireUser();
    return <WeatherContainer />;
}