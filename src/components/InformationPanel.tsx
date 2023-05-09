"use client";

import React from "react";
import CityPicker from "./CityPicker";
import { WeatherData } from "@/utils/fetchWeatherData";
import weatherCodeToString from "../../lib/weatherCodeToString";
import Image from "next/image";

type Props = {
  city: string;
  lat: string;
  long: string;
  results: WeatherData | null;
};

function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div
      className="bg-gradient-to-b from-indigo-900 to-blue-800 md:w-1/3 w-full
    p-10 max-w-2xl min-h-screen"
    >
      <div>
        <h1 className="text-5xl text-white py-4">{decodeURI(city)}</h1>
        <p className="text-gray-200 text-sm">
          Long/Lat: {long}, {lat}
        </p>
        <div className="my-4">
          <CityPicker />
        </div>
      </div>

      <div className="border-b-2 border-t-2 border-slate-300 flex justify-between">
        <div className="py-4 items-center">
          <p className="text-xl text-white">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-100 text-sm">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <div className="my-auto">
          <p className="text-white font-bold text-lg">
            {new Date()
              .toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: false
              })
              .toUpperCase()}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-10 text-white">
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${
              weatherCodeToString[results?.current_weather.weathercode!].icon
            }@2x.png`}
            alt={
              weatherCodeToString[results?.current_weather.weathercode!].label
            }
            width={75}
            height={75}
          />
          <div>
            <p className="text-6xl font-semibold">
              {results?.current_weather.temperature.toFixed(1)}°C
            </p>
            <p>
              {weatherCodeToString[results?.current_weather.weathercode!].label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
