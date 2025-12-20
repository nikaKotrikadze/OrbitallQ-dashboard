import React from "react";
import SatelliteCondition from "./SatelliteCondition/SatelliteCondition";
import StationSection from "./StationSection/StationSection";
import WeatherCondition from "./WeatherCondition/WeatherCondition";

const Dashboard = () => {
  return (
    <div className="flex flex-col px-6 pt-5 gap-6">
      <SatelliteCondition />
      <div className="bg-white p-10 rounded-3xl outilne-solid outline-[#E5E7EB] outline-1 flex flex-col gap-4">
        <StationSection />
        <WeatherCondition />
      </div>
    </div>
  );
};

export default Dashboard;
