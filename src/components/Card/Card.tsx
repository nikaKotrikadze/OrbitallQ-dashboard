import React from "react";
import "./Card.css";

const Card = ({
  title,
  icon,
  number,
  bgColor,
}: {
  title: string;
  icon: any;
  number: number;
  bgColor: string;
}) => {
  return (
    <div className="bg-white p-10 rounded-3xl outilne-solid outline-[#E5E7EB] outline-1">
      <div className="flex justify-between">
        <h1 className="w-20 max-w-24 text-[#6B7280]">{title}</h1>
        <div
          className={`p-3 rounded-lg flex items-center justify-center`}
          style={{ backgroundColor: bgColor }}
        >
          {icon}
        </div>
      </div>
      <h1 className="text-3xl font-bold pt-2">{number}</h1>
    </div>
  );
};

export default Card;
