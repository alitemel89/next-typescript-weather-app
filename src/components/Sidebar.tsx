"use client"

import React from "react";
import CityPicker from "./CityPicker";

function Sidebar() {
  return (
    <div
      className="bg-gradient-to-b from-indigo-900 to-blue-800 md:w-1/3 w-full
    p-10 max-w-2xl"
    >
      <div>
        <h1 className="text-5xl text-white">Uluwatu</h1>
        <p className="text-gray-200 text-sm">Long/Lat 56.22552, 27.55568</p>
        <div className="my-4">
          <CityPicker />
        </div>
      </div>

      <div className="border-b-2 border-t-2 border-slate-300 flex justify-between">
        <div className="py-4 items-center">
          <p className="text-md text-white">Friday, 21 April 2023</p>
          <p className="text-gray-100 text-sm">Timezone, Abu Dhabi</p>
        </div>

        <div className="my-auto">
          <p className="text-white font-bold text-lg">2.40 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
