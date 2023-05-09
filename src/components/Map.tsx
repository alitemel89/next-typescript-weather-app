import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./WeatherMap"), {
  ssr: false,
});

function Map({ lat, long, city }: any) {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <DynamicMap lat={lat} long={long} city={city} />
    </div>
  );
}

export default Map;
