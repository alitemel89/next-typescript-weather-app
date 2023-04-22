"use client"
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function WeatherMap() {
  return (
    <div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="mx-auto border border-blue-950">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default WeatherMap;
