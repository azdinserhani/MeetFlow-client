import React from "react";

const FeaturesCard = ({ icon: Icon, title, description, primaryColor, secondaryColor }) => {
    return (
        <div
            className={` h-50 w-80 border-gray-200 border-1 p-4 flex-col space-y-4 rounded-md hover:${"border-"+primaryColor} duration-500 hover:${"text-"+primaryColor} 
      cursor-pointer hover:bg-${secondaryColor}`}
    >
      <Icon  fontSize={40} />

      <span className="font-semibold text-[18px] text-black ">{title}</span>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesCard;
