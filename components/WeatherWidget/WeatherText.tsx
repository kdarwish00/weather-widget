'use client';

import { Box, Typography } from '@mui/material';
import { Weather } from './WeatherWidget';

type Props = { weather: Weather };

const WeatherText = ({ weather }: Props) => {
  const degree = weather === 'Clear' ? '+24' : weather === 'Frosty' ? '-13' : '+32';
  const place = weather === 'Clear' ? 'Madrid' : weather === 'Frosty' ? 'Moscow' : 'Ankara';

  const degreeColor =
    weather === 'Clear'
      ? '#4F787D'
      : weather === 'Frosty'
        ? '#a8ddff'
        : '#fff5b8';

  const placeColor =
    weather === 'Clear'
      ? '#694c6d'
      : weather === 'Frosty'
        ? '#4497bf'
        : '#f7a526';

  return (
    <Box
      pt={6}
      textAlign="center"
      position="relative"
      zIndex={10}
      sx={{ fontFamily: 'sans-serif', transition: 'color 0.5s ease' }}
    >
      <Typography
        variant="h1"
        component="div"
        fontWeight="bold"
        lineHeight={1}
        sx={{
          fontSize: '80px',
          color: degreeColor,
        }}
      >
        {degree}
        <Typography
          component="span"
          sx={{
            fontSize: '32px',
            verticalAlign: 'top',
          }}
        >
          °
        </Typography>
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textTransform: 'uppercase',
          opacity: 0.7,
          color: placeColor,
        }}
      >
        {place}
      </Typography>

      <Typography
        variant="subtitle1"
        fontWeight="600"
        sx={{ color: '#fff' }}
      >
        {weather}
      </Typography>
    </Box>
  );
};

export default WeatherText;