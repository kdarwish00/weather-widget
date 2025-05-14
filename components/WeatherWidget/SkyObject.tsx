import { Weather } from './WeatherWidget';
import ClearObject from './ClearObject';
import FrostyObject from './FrostyObject';
import HotObject from './HotObject';

type Props = { weather: Weather };

const SkyObject = ({ weather }: Props) => {
  const bottom =
    weather === 'Clear' ? '280px' :
    weather === 'Frosty' ? '260px' :
    '600px';

  const left =
    weather === 'Clear' ? '33%' :
    weather === 'Frosty' ? '50%' :
    '60%';

  const baseStyle = `absolute z-0 transition-all duration-700 ease-in-out`;
  const positionStyle = { bottom, left };

  return (
    <div className={baseStyle} style={positionStyle}>
      {weather === 'Clear' && <ClearObject />}
      {weather === 'Frosty' && <FrostyObject />}
      {weather === 'Hot' && <HotObject />}
    </div>
  );
};

export default SkyObject;