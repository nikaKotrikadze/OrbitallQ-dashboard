import React from "react";
import WeatherCondition from "../../Dashboard/WeatherCondition/WeatherCondition";

const CurrentCondition = ({ station }: { station: any }) => {
  return (
    <div className="bg-white p-10 rounded-3xl outline-1 outline-[#E5E7EB] flex flex-col gap-5">
      <h1 className="font-semibold text-xl">Current Conditions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <WeatherCondition station={station} bgCol="#F9FAFB" />
      </div>
    </div>
  );
};

export default CurrentCondition;
