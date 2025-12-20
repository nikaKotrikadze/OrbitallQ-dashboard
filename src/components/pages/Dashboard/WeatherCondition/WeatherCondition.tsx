import React from "react";
import { useStationStore } from "../../../../store/useStationStore";
import { LuThermometer, LuCloudRain } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";

const WeatherCondition = () => {
  const station = useStationStore((s) => s.selectedStation());

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
      <div className="bg-[#F9FAFB] p-4 rounded-2xl outilne-solid outline-[#E5E7EB] outline-1 max-w-50">
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

  return (
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
  );
};

export default WeatherCondition;
