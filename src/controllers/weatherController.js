import { fetchWeather } from "../services/weatherService.js";

export const getWeather = async (req, res) => {
  const city = req.query.city;

  if (!city)
    return res.status(400).json({ error: "City parameter is required" });

  try {
    const weatherData = await fetchWeather(city);
    res.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};
