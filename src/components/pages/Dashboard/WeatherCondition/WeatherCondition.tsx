import React from "react";
import { LuThermometer, LuCloudRain } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";

const WeatherCard = ({
  title,
  icon,
  number,
  factor,
  bgCol,
}: {
  title: string;
  icon: any;
  number?: number;
  factor: string;
  bgCol: string;
}) => {
  return (
    <div
      className="p-4 rounded-2xl outilne-solid outline-[#E5E7EB] outline-1 "
      style={{ backgroundColor: bgCol }}
    >
      <div className="flex gap-2 items-center">
        {icon}

        <h1 className="max-w-24 text-[#6B7280]">{title}</h1>
      </div>
      <h1 className="text-l pt-2 text-[#1F2933] font-semibold">
        {number}
        {factor}
      </h1>
    </div>
  );
};

const WeatherCondition = ({
  station,
  bgCol,
}: {
  station: any;
  bgCol: string;
}) => {
  return (
    <>
      <WeatherCard
        title={"Temperature"}
        icon={<LuThermometer color="#6B7280" />}
        number={station?.weather.temperatureC}
        factor="°C"
        bgCol={bgCol}
      />
      <WeatherCard
        title={"Wind Speed"}
        icon={<FaWind color="#6B7280" />}
        number={station?.weather.windSpeedKmh}
        factor="km/h"
        bgCol={bgCol}
      />
      <WeatherCard
        title={"Precipitation"}
        icon={<LuCloudRain color="#6B7280" />}
        number={station?.weather.precipitationMmH}
        factor="mm/h"
        bgCol={bgCol}
      />
      <WeatherCard
        title={"Cloud Cover"}
        icon={<IoMdCloudOutline color="#6B7280" />}
        number={station?.weather.cloudCoverPercent}
        factor="%"
        bgCol={bgCol}
      />
    </>
  );
};

export default WeatherCondition;
