import React from "react";
import { colorVariants } from "../../utils/ColorVariants";
const FeaturesCard = ({ item, icon: Icon }) => {
  return (
    <div
      className={`flex flex-col flex-1 space-y-2 p-6  rounded-2xl border-gray-200 border-1 cursor-pointer duration-300 ${
        colorVariants.card[item.color]
      }`}
    >
      <Icon
        className={` p-2 bg-gray-100 rounded-lg ${
          colorVariants.icon[item.color]
        }`}
        fontSize={40}
      />
      <span className="font-bold">{item.title}</span>
      <p className="text-gray-400">{item.desc}</p>
    </div>
  );
};

export default FeaturesCard;
