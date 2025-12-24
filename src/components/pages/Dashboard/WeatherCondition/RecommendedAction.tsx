import React from "react";

const RecommendedAction = ({ station }: { station: any }) => {
  const now = new Date();
  const formattedDateTime = now.toLocaleString();

  return (
    <div className="flex flex-col gap-5">
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

export default RecommendedAction;
