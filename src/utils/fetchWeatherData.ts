import axios from "axios";

interface MarineData {
  generationtime_ms: number;
  hourly: HourlyData[] 
  hourly_units: HourlyUnits[];
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

type HourlyUnits = {
  time: string;
  swell_wave_height: string;
  swell_wave_direction: string;
  swell_wave_period: string;
  swell_wave_peak_period: string;
};

interface HourlyData {
  time: string;
  swell_wave_height: number;
  swell_wave_direction: number;
  swell_wave_period: number;
  swell_wave_peak_period: number;
}
export const fetchWeatherData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data: MarineData = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
