"use client";

import { Country } from "country-state-city";
import { useState } from "react";
import Select from "react-select";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";


type CountryOption = {
  value: { latitude: string; longitude: string; isoCode: string };
  label: string;
} | null;


type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    name: string;
    stateCode: string;
    isoCode: string;
  };
  label: string;
} | null;



const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);
  const router = useRouter()

  const handleCountryChange = (option: CountryOption) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  return (
    <div>
    <div className="space-y-2">
      <div className="flex items-center space-x-1 text-white/80">
        <GlobeAltIcon className="text-white h-5 w-5" />
        <label htmlFor="Country">Country</label>
      </div>

      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        options={options}

      />
    </div>
    </div>
  );
}

export default CityPicker;
