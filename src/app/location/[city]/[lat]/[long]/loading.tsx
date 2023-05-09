import { SunIcon } from "@heroicons/react/24/solid";
import React from "react";

function loading() {
  return (
    <div
      className="bg-gradient-to-br from-indigo-700 to-blue-950 min-h-screen
    flex flex-col items-center justify-center text-slate-300"
    >
      <SunIcon className="animate-spin h-24 w-24" />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading Weather and Wave Information
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on we are crunching numbers and generating an AI summary of the
        weather and waves.
      </h2>
    </div>
  );
}

export default loading;
