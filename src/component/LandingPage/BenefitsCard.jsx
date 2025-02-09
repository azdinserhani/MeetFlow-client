import React from "react";
import { IoShareSocial } from "react-icons/io5";
const BenefitsCard = ({ title,desc,icon:Icon,color }) => {
  return (
    <div className="flex-1 p-7 border-gray-100 border-1 rounded-lg bg-white hover:scale-105 duration-300 cursor-pointer">
      <Icon
        fontSize={35}
        className={`${color} p-1  bg-gray-100 rounded-sm`}
      />
      <h3 className="mt-6 font-bold">Seamless Collaboration</h3>
      <p className="text-gray-400 font-light mb-6">
        Empower your team to collaborate in real-time with easy task management
        and transparent project tracking.
      </p>
      <span className="font-bold text-[14px] ">Learn More →</span>
    </div>
  );
};

export default BenefitsCard;
