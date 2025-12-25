import React from "react";
import RiskBadge from "./RiskBadge";

const HeaderCard = ({ station }: { station: any }) => {
  return (
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
  );
};

export default HeaderCard;
