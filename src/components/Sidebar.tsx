import React from "react";
import CityPicker from "./CityPicker";

function Sidebar() {
  return (
    <div
      className="bg-gradient-to-t from-blue-800 to-indigo-600 md:w-1/3 w-full
    p-10 max-w-xl text-center"
    >
      <div>
        <h1 className="text-4xl text-white">Uluwatu</h1>
        <p className="text-gray-100 text-sm">Long/Lat 56.22552, 27.55568</p>
        <div className="my-4">
          <CityPicker />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
