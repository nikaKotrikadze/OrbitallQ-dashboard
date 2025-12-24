import React from "react";
import { Link, useParams } from "react-router-dom";
import { TABLESTATIONS, STATIONS } from "../../../../data/stations";
import WeatherCondition from "../../Dashboard/WeatherCondition/WeatherCondition";

type OpsRisk = "LOW" | "MEDIUM" | "HIGH" | any;

const riskBadgeClasses: Record<OpsRisk, string> = {
  LOW: "bg-green-50 text-green-700 border-green-100",
  MEDIUM: "bg-yellow-50 text-yellow-700 border-yellow-100",
  HIGH: "bg-red-50 text-red-700 border-red-100",
};

function RiskBadge({ risk }: { risk: OpsRisk }) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "px-3 py-1 rounded-full border",
        "text-l font-semibold tracking-wide",
        riskBadgeClasses[risk],
      ].join(" ")}
    >
      {risk}
    </span>
  );
}

const StationDetails = () => {
  const { stationId } = useParams();
  const station = TABLESTATIONS.find((i) => i.id == stationId);
  const loc = STATIONS.find(
    (i) => i.name.toLowerCase() == station?.name.toLowerCase()
  );

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex">
        <Link to="/stations" className="text-[#6b7280] hover:text-[#2E7BEF]">
          Stations
        </Link>
        <h1>{` > `}</h1>
        <h1 className="text-[#1F2933]">{station?.name}</h1>
      </div>
      <div className="bg-white p-5 rounded-3xl outilne-solid outline-[#E5E7EB] outline-1 flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{station?.name}</h1>
          <div className="flex flex-col gap-1">
            <h1>{station?.location}</h1>
            <div className="flex">
              <h1>{loc?.location?.lat}°,</h1>
              <h1>{loc?.location?.lon}°</h1>
            </div>
          </div>
        </div>
        <div>
          <RiskBadge risk={station?.opsRisk} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* <CurrentConditions /> */}
        <WeatherCondition station={loc} bgCol={"#F9FAFB"} />
        {/* <OpsRiskExplanation /> */}
        {/* <ShortTermForecast /> */}
        {/* <OperationalImpact /> */}
      </div>
    </div>
  );
};

export default StationDetails;
