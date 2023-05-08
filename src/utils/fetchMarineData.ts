export interface MarineData {
  generationtime_ms: number;
  hourly: HourlyData;
  hourly_units: HourlyUnits[];
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export type HourlyUnits = {
  time: string;
  swell_wave_height: string;
  swell_wave_direction: string;
  swell_wave_period: string;
  swell_wave_peak_period: string;
};

export interface HourlyData {
  time: string[];
  swell_wave_height: number[];
  swell_wave_direction: number[];
  swell_wave_period: number[];
  swell_wave_peak_period: number[];
}

export const fetchMarineData = async (url: string) => {
  const res = await fetch(url);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
