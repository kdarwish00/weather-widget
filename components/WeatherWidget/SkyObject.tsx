'use client';

import { Box } from '@mui/material';
import { Weather } from './WeatherWidget';
import ClearObject from './ClearObject';
import FrostyObject from './FrostyObject';
import HotObject from './HotObject';

type Props = { weather: Weather };

const SkyObject = ({ weather }: Props) => {
    const bottom = weather === 'Clear' ? '280px' : weather === 'Frosty' ? '260px' : '600px';

    const left = weather === 'Clear' ? '33%' : weather === 'Frosty' ? '50%' : '60%';

    return (
        <Box
            position="absolute"
            zIndex={0}
            sx={{
                bottom,
                left,
                transition: 'all 0.5s ease-in-out',
            }}
        >
            {weather === 'Clear' && <ClearObject />}
            {weather === 'Frosty' && <FrostyObject />}
            {weather === 'Hot' && <HotObject />}
        </Box>
    );
};

export default SkyObject;
