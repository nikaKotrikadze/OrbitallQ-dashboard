import React from "react";
import { useStationStore } from "../../../../store/useStationStore";
import { LuThermometer, LuCloudRain } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";

const WeatherCard = ({
  title,
  icon,
  number,
  factor,
}: {
  title: string;
  icon: any;
  number?: number;
  factor: string;
}) => {
  return (
    <div className="bg-[#F9FAFB] p-4 rounded-2xl outilne-solid outline-[#E5E7EB] outline-1 ">
      <div className="flex gap-2 items-center">
        {icon}

        <h1 className="max-w-24 text-[#6B7280]">{title}</h1>
      </div>
      <h1 className="text-l pt-2 text-[#1F2933]">
        {number}
        {factor}
      </h1>
    </div>
  );
};

const WeatherCondition = () => {
  const station = useStationStore((s) => s.selectedStation());
  const now = new Date();
  const formattedDateTime = now.toLocaleString();

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
        <WeatherCard
          title={"Temperature"}
          icon={<LuThermometer color="#6B7280" />}
          number={station?.weather.temperatureC}
          factor="°C"
        />
        <WeatherCard
          title={"Wind Speed"}
          icon={<FaWind color="#6B7280" />}
          number={station?.weather.windSpeedKmh}
          factor="km/h"
        />
        <WeatherCard
          title={"Precipitation"}
          icon={<LuCloudRain color="#6B7280" />}
          number={station?.weather.precipitationMmH}
          factor="mm/h"
        />
        <WeatherCard
          title={"Cloud Cover"}
          icon={<IoMdCloudOutline color="#6B7280" />}
          number={station?.weather.cloudCoverPercent}
          factor="%"
        />
      </div>
      {/* RISK LEVEL */}
      <div className="bg-[#F9FAFB] p-4 rounded-2xl outilne-solid outline-[#E5E7EB] outline-1 flex justify-between">
        <div className="flex gap-2 items-center">
          <div
            style={{
              padding: "10px",
              borderRadius: "50px",
              background:
                station?.risk.level == "MEDIUM"
                  ? "#FEF6E7"
                  : station?.risk.level == "HIGH"
                  ? "#FEF2F2"
                  : "#F0FDF4",
            }}
          >
            <h1
              className="text-[#6B7280]"
              style={{
                color:
                  station?.risk.level == "MEDIUM"
                    ? "#F2C94C"
                    : station?.risk.level == "HIGH"
                    ? "#D9534F"
                    : "#2E8B57",
              }}
            >
              {station?.risk.level}
            </h1>
          </div>
          <h1 className="text-[#1F2933] font-semibold">
            {station?.risk.message}
          </h1>
        </div>
        <button
          style={{
            color: "#1F2933",
            backgroundColor: "#fff",
            borderColor: "#E5E7EB",
            borderWidth: "1px",
            padding: "5px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          View station details
        </button>
      </div>
      {/* Recommended Action */}
      <span className="col-[#1F2933] text-s font-semibold">
        Recommended Action
      </span>
      <div className="bg-[#F9FAFB] p-4 rounded-2xl outilne-solid outline-[#E5E7EB] outline-1">
        <h1 className="text-[#1F2933] font-semibold">
          {station?.recommendedAction}
        </h1>
      </div>
      <hr style={{ color: "#E5E7EB" }} />
      <div>
        <h1 className="text-[#6B7280]">Last Updated {formattedDateTime}</h1>
      </div>
    </div>
  );
};

export default WeatherCondition;
