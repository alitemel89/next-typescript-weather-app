"use client";

import { City, Country,  } from "country-state-city";
import { useState } from "react";
import Select from "react-select";
import { BuildingLibraryIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
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
    countryCode: string;
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
  const router = useRouter();

  const handleCountryChange = (option: CountryOption) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleCityChange = (option: CityOption) => {
    setSelectedCity(option);
    router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
  };

  return (
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

      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-1 text-white/80">
            <BuildingLibraryIcon className="text-white h-5 w-5" />
            <label htmlFor="city">City</label>
          </div>
          <Select
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((state) => ({
              value: {
                latitude: state.latitude!,
                longitude: state.longitude!,
                name: state.name,
                stateCode: state.stateCode,
                countryCode: state.countryCode,
              },
              label: state.name,
            }))}
            onChange={handleCityChange}
            value={selectedCity}
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
