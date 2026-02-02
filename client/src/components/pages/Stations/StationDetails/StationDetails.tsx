import { useParams } from "react-router-dom";
import { STATIONS } from "../../../../data/stations";
import Breadcrumb from "./Breadcrumb";
import HeaderCard from "./HeaderCard";
import CurrentCondition from "./CurrentCondition";
import OpsRiskExplanation from "./OpsRiskExplanation";
import ShortTermForecast from "./ShortTermForecast";
import OperationalImpact from "./OperationalImpact";
import UnknownStationHandle from "./UnknownStationHandle";

const StationDetails = () => {
  const { stationId } = useParams<{ stationId: string }>();
  const station = STATIONS.find((s) => s.id === stationId);

  // Handle unknown station id
  if (!station) {
    return <UnknownStationHandle />;
  }

  return (
    <div className="p-5 flex flex-col gap-5">
      {/* Breadcrumb */}
      <Breadcrumb station={station} />

      {/* Header Card */}
      <HeaderCard station={station} />

      {/* Responsive Grid (2 cols on lg, 1 col on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <CurrentCondition station={station} />
        <OpsRiskExplanation station={station} />
        <ShortTermForecast station={station} />
        <OperationalImpact station={station} />
      </div>
    </div>
  );
};

export default StationDetails;
