import React, { ReactNode } from 'react';
import { Weather } from './WeatherWidget';

type Props = {
    weather: Weather;
    children?: ReactNode;
};

const Ground = ({ weather, children }: Props) => {
    const groundClass =
        weather === 'Clear'
            ? 'bg-gradient-to-b from-[#2f2b3c] to-[#091B21]'
            : weather === 'Frosty'
                ? 'bg-gradient-to-b from-[#f3ffff] to-[#9af2ff]'
                : 'bg-gradient-to-b from-[#e0d7a4] to-[#e7c77a]';

    return (
        <>
            <div
                className={`w-[270px] h-[150px] absolute bottom-[-50px] left-[-20px] z-10 rounded-t-[100px] rotate-[20deg] ${groundClass}`}
            />
            <div
                className={`w-[500px] h-[150px] absolute bottom-[-70px] right-[-80px] z-0 rounded-t-[100px] rotate-[-10deg] ${groundClass}`}
            >
                {children}
            </div>
        </>
    );
};

export default Ground;