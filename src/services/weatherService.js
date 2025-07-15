import axios from "axios";
import { config } from "../configs/env.js";

export const fetchWeather = async (city) => {
  const apiKey = config.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const { data } = await axios.get(url);
  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
};
