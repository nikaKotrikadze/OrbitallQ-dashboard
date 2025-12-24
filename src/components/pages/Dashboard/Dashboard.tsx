import React from "react";
import SatelliteCondition from "./SatelliteCondition/SatelliteCondition";
import StationSection from "./StationSection/StationSection";
import WeatherCondition from "./WeatherCondition/WeatherCondition";
import { useStationStore } from "../../../store/useStationStore";
import RiskLevel from "./WeatherCondition/RiskLevel";
import RecommendedAction from "./WeatherCondition/RecommendedAction";

const Dashboard = () => {
  const station = useStationStore((s) => s.selectedStation());

  return (
    <div className="flex flex-col px-6 pt-5 pb-5 gap-5">
      <SatelliteCondition />
      <div className="bg-white p-10 rounded-3xl outilne-solid outline-[#E5E7EB] outline-1 flex flex-col gap-5">
        <StationSection />
        <WeatherCondition station={station} bgCol="#F9FAFB" />
        <RiskLevel station={station} />
        <hr style={{ color: "#E5E7EB" }} />
        <RecommendedAction station={station} />
      </div>
    </div>
  );
};

export default Dashboard;
