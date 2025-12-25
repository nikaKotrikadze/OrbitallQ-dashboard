import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ station }: { station: any }) => {
  return (
    <div className="flex gap-2 items-center">
      <Link to="/stations" className="text-[#6b7280] hover:text-[#2E7BEF]">
        Stations
      </Link>
      <span className="text-[#6b7280]">{">"}</span>
      <span className="text-[#1F2933] font-medium">{station.name}</span>
    </div>
  );
};

export default Breadcrumb;
