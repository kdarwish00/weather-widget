import { Weather } from '../components/WeatherWidget/WeatherWidget';

/**
 * Cycles through the predefined weather states in order.
 *
 * @param current - The current weather state.
 * @returns The next weather state in the sequence.
 */
export const cycleWeather = (current: Weather): Weather => {
    const order: Weather[] = ['Clear', 'Frosty', 'Hot'];
    const next = order[(order.indexOf(current) + 1) % order.length];
    return next;
};

/**
 * Returns a CSS linear gradient string based on the given weather condition.
 *
 * @param weather - The current weather condition.
 * @returns A CSS gradient string representing the background for the given weather.
 */
export const getBackgroundGradient = (weather: Weather): string => {
    switch (weather) {
        case 'Clear':
            return 'linear-gradient(to bottom, #0F2129, #47334A)';
        case 'Frosty':
            return 'linear-gradient(to bottom, #29386f, #b8f5ff)';
        case 'Hot':
            return 'linear-gradient(to bottom, #ffbd3f, #fff097)';
        default:
            return '';
    }
};

/**
 * Retrieves the current time and weekday in the HH:MM:SS format.
 *
 * @returns An object containing the formatted current time and weekday.
 */
export const getCurrentTimeAndWeekday = (): {
    time: string;
    weekday: string;
} => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const time = `${hh}:${mm}:${ss}`;
    const weekday = now.toLocaleDateString('en-UK', { weekday: 'long' });
    return { time, weekday };
};
