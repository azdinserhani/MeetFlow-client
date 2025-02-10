import React from "react";
const FeaturesCard = ({ item, icon: Icon }) => {
  return (
    <div
      className={`flex flex-col flex-1 space-y-2 p-6  rounded-2xl border-gray-200 border-1 hover:bg-${item.color}-100 cursor-pointer duration-300 hover:border-${item.color}-200`}
    >
      <Icon
        className={`text-${item.color}-400 p-2 bg-gray-100 rounded-lg`}
        fontSize={40}
      />
      <span className="font-bold">{item.title}</span>
      <p className="text-gray-400">{item.desc}</p>
    </div>
  );
};

export default FeaturesCard;
