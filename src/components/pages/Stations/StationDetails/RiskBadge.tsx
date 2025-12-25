import type { RiskLevel } from "../../../../data/stations";

const riskBadgeClasses: Record<RiskLevel, string> = {
  LOW: "bg-green-50 text-green-700 border-green-100",
  MEDIUM: "bg-yellow-50 text-yellow-700 border-yellow-100",
  HIGH: "bg-red-50 text-red-700 border-red-100",
};

function RiskBadge({ risk }: { risk: RiskLevel }) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "px-3 py-1 rounded-full border",
        "text-sm font-semibold tracking-wide",
        riskBadgeClasses[risk],
      ].join(" ")}
    >
      {risk}
    </span>
  );
}

export default RiskBadge;
