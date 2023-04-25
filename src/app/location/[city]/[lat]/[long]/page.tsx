import React from "react";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

function WeatherPage({ params: { city, lat, long } }: Props) {
  return (
    <div>
      <div>
        {city} {lat} {long}
      </div>
    </div>
  );
}

export default WeatherPage;
