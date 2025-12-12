import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Weather } from "../types/weatherTypes";

export function useWeather(latitude?: number | null, longitude?: number | null) {
  const [weather, setWeather] = useState<Weather>({
    temperature: null,
    feelsLike: null,
    wind: null,
  });

  const api = Constants.expoConfig?.extra?.apiKey;

  useEffect(() => {
    if (!latitude || !longitude) return;

    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${api}`;
      const response = await fetch(url);
      const data = await response.json();

      setWeather({
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        wind: data.wind.speed,
      });
    };

    fetchWeather();
  }, [latitude, longitude]);

  return weather;
}