import React from "react";

const RiskLevel = ({ station }: { station: any }) => {
  return (
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
  );
};

export default RiskLevel;
