import axios from "axios";

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: CurrentWeather;
  hourly_units: HourlyUnits;
  hourly: Hourly;
}

export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  windspeed_10m: string;
  winddirection_10m: string;
  uv_index: string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  windspeed_10m: number[];
  winddirection_10m: number[];
  uv_index: number[];
}

export const fetchWeatherData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
