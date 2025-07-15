import dotenvSafe from "dotenv-safe";

dotenvSafe.config({
  allowEmptyValues: true,
  override: true,
});

export const config = {
  PORT: process.env.PORT,
  WEATHER_API_KEY: process.env.WEATHER_API_KEY,
};
