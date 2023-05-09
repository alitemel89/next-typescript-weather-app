"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

interface Props {
  lat: string;
  long: string;
  city: string
}

function WeatherMap({ lat, long, city }: Props) {
  const [position, setPosition] = useState<[number, number]>([
    Number(lat),
    Number(long),
  ]);
  useEffect(() => {
    setPosition([Number(lat), Number(long)]);
  }, [lat, long]);

  return (
    <MapContainer center={position} zoom={13} style={{height: 400, width: "100%"}}>
       <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
           {city}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default WeatherMap;
