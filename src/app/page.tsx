"use client"

import InformationPanel from "@/components/InformationPanel";
import Sidebar from "@/components/Sidebar";
import WeatherMap from "@/components/WeatherMap";

export default function Home() {
  return (
    <div className="md:flex"> 
      <Sidebar />
      <div className="flex flex-col w-full">
        <InformationPanel />
        <WeatherMap />
      </div>
    </div>
  );
}
