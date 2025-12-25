import React from "react";
import { Link } from "react-router-dom";

const UnknownStationHandle = () => {
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
};

export default UnknownStationHandle;
