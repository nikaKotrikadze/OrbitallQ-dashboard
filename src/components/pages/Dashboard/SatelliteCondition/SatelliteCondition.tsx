import React from "react";
import Card from "../../../Card/Card";
import { LuSatellite } from "react-icons/lu";
import { IoWarningOutline, IoCloudOfflineOutline } from "react-icons/io5";

const SatelliteCondition = () => {
  const cardOptions = [
    {
      title: "Active Satellites",
      icon: <LuSatellite color="#2E7BEF" fontSize={24} />,
      number: 127,
      bgColor: "#EBF5FF",
    },
    {
      title: "Degraded",
      icon: <IoWarningOutline color="#F2C94C" fontSize={24} />,
      number: 3,
      bgColor: "#FEF6E7",
    },
    {
      title: "Offline",
      icon: <IoCloudOfflineOutline color="#6B7280" fontSize={24} />,
      number: 2,
      bgColor: "#F3F4F6",
    },
    {
      title: "Alerts",
      icon: <IoWarningOutline color="#D9534F" fontSize={24} />,
      number: 8,
      bgColor: "#FEF2F2",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
      {cardOptions.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          icon={item.icon}
          number={item.number}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
};

export default SatelliteCondition;
