"use client";

import { MarineData } from "@/utils/fetchMarineData";
import { AreaChart, Card, Title } from "@tremor/react";
import React from "react";

type Props = {
  results: MarineData | null;
};

function WaveChart({ results }: Props) {
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
    "Wave Height (m)": results?.hourly.swell_wave_height[i],
    "Wave Period (sec)": results?.hourly.swell_wave_period[i],
  }));

  return (
    <Card className="my-2">
      <Title>Swell Wave Height & Period</Title>
      <AreaChart
        data={data}
        showLegend
        className="mt-6"
        index="time"
        categories={["Wave Height (m)", "Wave Period (sec)"]}
        colors={["teal", "indigo"]}
        minValue={0}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}

export default WaveChart;
