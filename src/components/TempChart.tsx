"use client";

import { WeatherData } from "@/utils/fetchWeatherData";
import { AreaChart, Card, Title } from "@tremor/react";
import React from "react";

type Props = {
  results: WeatherData | null;
};

function TempChart({ results }: Props) {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const dataFormatter = (number: number) => `${number}`;

  const data: any = hourly?.map((hour, i) => ({
    time: Number(hour),
    "UV Index": results?.hourly.uv_index[i],
    "Temperature (C)": results?.hourly.temperature_2m[i],
  }));

  return (
    <Card className="my-2">
      <Title>Temperature & UV Index ☀️</Title>
      <AreaChart
        data={data}
        showLegend
        className="mt-6 h-48"
        index="time"
        categories={["Temperature (C)", "UV Index"]}
        colors={["yellow", "rose"]}
        minValue={0}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}

export default TempChart;
