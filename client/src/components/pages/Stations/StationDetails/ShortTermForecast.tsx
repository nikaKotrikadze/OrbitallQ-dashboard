import { type ForecastItem } from "../../../../data/stations";

const ShortTermForecast = ({ station }: { station: any }) => {
  return (
    <div className="bg-white p-10 rounded-3xl outline-1 outline-[#E5E7EB] flex flex-col gap-5">
      <h1 className="font-semibold text-xl">Short-term Forecast</h1>

      <div className="flex flex-col gap-4">
        {station.foreCast.map((item: ForecastItem) => (
          <div
            key={item.time}
            className="bg-[#F9FAFB] flex items-center justify-between p-4 rounded-2xl outline-1 outline-[#E5E7EB]"
          >
            <p className="font-semibold text-[#111827]">{item.time}</p>
            <p className="text-[#6B7280]">{item.condition}</p>
            <p className="font-semibold text-[#111827]">{item.temperature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortTermForecast;
