import { fetchWeatherData } from "@/utils/fetchWeatherData";

interface Props {
  params: { lat: string; long: string; city: string };
}

async function WeatherPage({ params: { lat, long, city } }: Props) {
  const hourly =
    "swell_wave_height,swell_wave_direction,swell_wave_period,swell_wave_peak_period";
  const url = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${long}&hourly=${hourly}`;
  const data = await fetchWeatherData(url);
  // const labels = data?.hourly.map((hour) => hour.time);
  console.log(data)
  return <div>{city}</div>;
}

export default WeatherPage;
