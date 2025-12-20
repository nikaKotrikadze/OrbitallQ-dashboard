import React from "react";
import Select from "react-select";
import { STATIONS } from "../../../../data/stations";
import { useStationStore } from "../../../../store/useStationStore";

const StationSection = () => {
  const stations = useStationStore((s) => s.stations);
  const selectedStationId = useStationStore((s) => s.selectedStationId);
  const setSelectedStationId = useStationStore((s) => s.setSelectedStationId);

  const options = stations.map((st) => ({
    value: st.id,
    label: st.name,
  }));

  const selectedOption = options.find((opt) => opt.value === selectedStationId);

  return (
    <div>
      <h1 className="col-[#1F2933] text-xl font-semibold">
        Ground Station Ops Risk
      </h1>
      <div>
        <span className="col-[#1F2933] text-s font-semibold">
          Selected Station
        </span>
        <Select
          options={options}
          value={selectedOption}
          onChange={(option) => {
            if (option) setSelectedStationId(option.value);
          }}
          placeholder="Select station…"
          isSearchable
          className="max-w-xl"
        />
        <h1 className="text-[#6B7280]">
          Weather data updates every 10 minutes (simulated)
        </h1>
      </div>
    </div>
  );
};

export default StationSection;
