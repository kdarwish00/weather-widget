import { Weather } from "../components/WeatherWidget/WeatherWidget";

export const cycleWeather = (current: Weather): Weather => {
   const order: Weather[] = ["Clear", "Frosty", "Hot"];
   const next = order[(order.indexOf(current) + 1) % order.length];
   return next;
};

export const getBackgroundGradient = (weather: Weather): string => {
   switch (weather) {
      case "Clear":
         return "linear-gradient(to bottom, #0F2129, #47334A)";
      case "Frosty":
         return "linear-gradient(to bottom, #29386f, #b8f5ff)";
      case "Hot":
         return "linear-gradient(to bottom, #ffbd3f, #fff097)";
      default:
         return "";
   }
};

export const getCurrentTimeAndWeekday = (): { time: string; weekday: string } => {
   const now = new Date();
   const hh = String(now.getHours()).padStart(2, "0");
   const mm = String(now.getMinutes()).padStart(2, "0");
   const ss = String(now.getSeconds()).padStart(2, "0");
   const time = `${hh}:${mm}:${ss}`;
   const weekday = now.toLocaleDateString("en-UK", { weekday: "long" });
   return { time, weekday };
};
