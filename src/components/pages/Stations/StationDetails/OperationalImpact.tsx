import React from "react";

const OperationalImpact = ({ station }: { station: any }) => {
  return (
    <div className="bg-white p-10 rounded-3xl outline-1 outline-[#E5E7EB] flex flex-col gap-5">
      <h1 className="font-semibold text-xl">Operational Impact</h1>
      <ul className="list-disc text-[#1F2933] ml-4 flex flex-col gap-6">
        {station.impact.map((i: string) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default OperationalImpact;
