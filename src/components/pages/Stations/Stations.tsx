import React from "react";
import StationsTable from "./StationTable";

const Stations = () => {
  return (
    <div className="px-8 pt-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Ground Stations</h1>
      <StationsTable />
    </div>
  );
};

export default Stations;
