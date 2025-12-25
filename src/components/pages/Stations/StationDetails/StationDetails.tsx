import React from "react";
import { Link, useParams } from "react-router-dom";
import { STATIONS, type RiskLevel } from "../../../../data/stations";
import WeatherCondition from "../../Dashboard/WeatherCondition/WeatherCondition";

const riskBadgeClasses: Record<RiskLevel, string> = {
  LOW: "bg-green-50 text-green-700 border-green-100",
  MEDIUM: "bg-yellow-50 text-yellow-700 border-yellow-100",
  HIGH: "bg-red-50 text-red-700 border-red-100",
};

function RiskBadge({ risk }: { risk: RiskLevel }) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "px-3 py-1 rounded-full border",
        "text-sm font-semibold tracking-wide",
        riskBadgeClasses[risk],
      ].join(" ")}
    >
      {risk}
    </span>
  );
}

const StationDetails = () => {
  const { stationId } = useParams<{ stationId: string }>();

  const station = STATIONS.find((s) => s.id === stationId);

  // ✅ Handle unknown station id
  if (!station) {
    return (
      <div className="p-5">
        <div className="flex gap-2 items-center">
          <Link to="/stations" className="text-[#6b7280] hover:text-[#2E7BEF]">
            Stations
          </Link>
          <span className="text-[#6b7280]">{">"}</span>
          <span className="text-[#1F2933] font-medium">Not found</span>
        </div>

        <div className="mt-6 bg-white p-6 rounded-3xl outline-1 outline-[#E5E7EB]">
          Station not found.
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 flex flex-col gap-5">
      {/* Breadcrumb */}
      <div className="flex gap-2 items-center">
        <Link to="/stations" className="text-[#6b7280] hover:text-[#2E7BEF]">
          Stations
        </Link>
        <span className="text-[#6b7280]">{">"}</span>
        <span className="text-[#1F2933] font-medium">{station.name}</span>
      </div>

      {/* Header Card */}
      <div className="bg-white p-5 rounded-3xl outline-1 outline-[#E5E7EB] flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{station.name}</h1>
          <div className="flex flex-col gap-1">
            <span className="text-[#6B7280]">{station.region}</span>
            <span className="text-[#6B7280]">
              {station.coordinates.lat}, {station.coordinates.lon}
            </span>
          </div>
        </div>

        <RiskBadge risk={station.risk.level} />
      </div>

      {/* Responsive Grid (2 cols on lg, 1 col on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white p-10 rounded-3xl outline-1 outline-[#E5E7EB] flex flex-col gap-5">
          <h1 className="font-semibold text-xl">Current Conditions</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <WeatherCondition station={station} bgCol="#F9FAFB" />
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl outline-1 outline-[#E5E7EB] flex flex-col gap-5">
          <h1 className="font-semibold text-xl">Ops Risk Explanation</h1>
          <p className="text-[#111827] leading-7">{station.risk.explanation}</p>
          <>
            <h2 className="font-semibold text-[#111827] mb-2">Rules Applied</h2>
            <ul className="list-disc text-[#6B7280] ml-4">
              {station.rulesApplied.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </>
        </div>

        <div className="bg-white p-10 rounded-3xl outline-1 outline-[#E5E7EB] flex flex-col gap-5">
          <h1 className="font-semibold text-xl">Short-term Forecast</h1>

          <div className="flex flex-col gap-4">
            {station.foreCast.map((item) => (
              <div
                key={item.time}
                className="bg-[#F9FAFB] flex items-center justify-between p-4 rounded-2xl outline-1 outline-[#E5E7EB]"
              >
                <p className="font-semibold text-[#111827]">{item.time}</p>
                <p className="text-[#6B7280]">{item.condition}</p>
                <p className="font-semibold text-[#111827]">
                  {item.temperature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl outline-1 outline-[#E5E7EB] flex flex-col gap-5">
          <h1 className="font-semibold text-xl">Operational Impact</h1>
          <ul className="list-disc text-[#1F2933] ml-4 flex flex-col gap-6">
            {station.impact.map((i) => (
              <li>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StationDetails;
