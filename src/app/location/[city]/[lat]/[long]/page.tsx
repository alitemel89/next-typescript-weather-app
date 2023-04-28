import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import SwellChart from "@/components/SwellChart";
import { fetchMarineData } from "@/utils/fetchMarineData";
import { fetchWeatherData } from "@/utils/fetchWeatherData";

interface Props {
  params: { lat: string; long: string; city: string };
}

async function WeatherPage({ params: { lat, long, city } }: Props) {

  // API URLS FOR WEATHER AND MARINE FORECASTS
  const hourly =
    "swell_wave_height,swell_wave_direction,swell_wave_period,swell_wave_peak_period";
  const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${long}&hourly=${hourly}`;
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,uv_index&current_weather=true`;


  const marineResults = await fetchMarineData(marineUrl);
  // console.log(marineResults);
  const weatherResults = await fetchWeatherData(weatherUrl);
  console.log(weatherResults)

  return (
    <div className="flex">
      <InformationPanel
        city={decodeURI(city)}
        lat={lat}
        long={long}
        results={weatherResults}
      />
      <div className="w-full px-8">
        <CalloutCard message="This is where GPT-4 Summary will go!" />
      </div>
    </div>
  );
}

export default WeatherPage;
