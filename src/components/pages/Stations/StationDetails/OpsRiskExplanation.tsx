import React from "react";

const OpsRiskExplanation = ({ station }: { station: any }) => {
  return (
    <div className="bg-white p-10 rounded-3xl outline-1 outline-[#E5E7EB] flex flex-col gap-5">
      <h1 className="font-semibold text-xl">Ops Risk Explanation</h1>
      <p className="text-[#111827] leading-7">{station.risk.explanation}</p>
      <>
        <h2 className="font-semibold text-[#111827] mb-2">Rules Applied</h2>
        <ul className="list-disc text-[#6B7280] ml-4">
          {station.rulesApplied.map((i: string) => (
            <li>{i}</li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default OpsRiskExplanation;
