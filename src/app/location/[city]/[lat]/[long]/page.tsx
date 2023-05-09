import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import TempChart from "@/components/TempChart";
import WaveChart from "@/components/WaveChart";
import { fetchMarineData } from "@/utils/fetchMarineData";
import { fetchWeatherData } from "@/utils/fetchWeatherData";

interface Props {
  params: { lat: string; long: string; city: string };
}

export const revalidate = 60;

async function WeatherPage({ params: { lat, long, city } }: Props) {
  // API URLS FOR WEATHER AND MARINE FORECASTS
  const hourly =
    "swell_wave_height,swell_wave_direction,swell_wave_period,swell_wave_peak_period";
  const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${long}&hourly=${hourly}`;
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,uv_index&current_weather=true`;

  const marineResults = await fetchMarineData(marineUrl);
  const weatherResults = await fetchWeatherData(weatherUrl);

  return (
    <div className="md:flex">
      <InformationPanel
        city={decodeURI(city)}
        lat={lat}
        long={long}
        results={weatherResults}
      />
      <div className="w-full px-8 my-2">
        <CalloutCard message="This is where GPT-4 Summary will go!" />
        <div className="md:grid md:grid-cols-2 gap-2">
          <TempChart results={weatherResults} />
          <WaveChart results={marineResults} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
