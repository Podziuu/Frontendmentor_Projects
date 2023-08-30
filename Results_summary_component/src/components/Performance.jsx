import React from "react";

const Performance = ({ data }) => {
  //   console.log(textColor);
  const colorVatiants = {
    red: "bg-[#FF5757]/10 [&_h4]:text-[#FF5757]",
    yellow: "bg-[#FFB01F]/10 [&_h4]:text-[#FFB01F]",
    green: "bg-[#00BD91]/10 [&_h4]:text-[#00BD91]",
    blue: "bg-[#1125D4]/10 [&_h4]:text-[#1125D4]",
  };
  return (
    <li
      className={`flex ${
        colorVatiants[data.color]
      } w-full p-4 rounded-xl justify-between`}
    >
      <div className="flex gap-x-4">
        <img src={data.icon} />
        <h4 className={`font-semibold`}>{data.category}</h4>
      </div>
      <div className="text-[#C8C7FF]">
        <span className="font-bold text-[#303B5A]">{data.score}</span> / 100
      </div>
    </li>
  );
};

export default Performance;
