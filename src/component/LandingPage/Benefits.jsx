import React from "react";
import BenefitsCard from "./BenefitsCard";
import { IoShareSocial } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
const Benefits = () => {
  const data = [
    {
      id: 1,
      title: "Seamless Collaboration",
      desc: "Empower your team to collaborate in real-time with easy task management and transparent project tracking.",
      icon: IoShareSocial,
      color: "text-purple-custom",
    },
    {
      id: 2,
      title: "All-in-One Solution",
      desc: "Manage everything from tasks to team communication in one intuitive platform designed to boost productivity.",
      icon: BiSolidCategory,
      color: "text-pink-400",
    },
    {
      id: 3,
      title: "Customizable Workflow",
      desc: "Manage everything from tasks to team communication in one intuitive platform designed to boost productivity.",
      icon: IoSettingsSharp,
      color: "text-yellow-400",
    },
  ];
  return (
    <div className="w-full my-40">
      <div className="flex-col space-y-7 text-center">
        <span className="text-pink-400  font-semibold">Benefits</span>
        <p className="font-bold text-5xl">The smart choice for your team</p>
        <p className="text-gray-400 text-lg">
          Everything you need to simplify your projects, boost productivity, and
          keep team aligned.
        </p>
      </div>
      <div className="flex gap-4 my-6 mx-3">
        {data.map((item) => (
          <BenefitsCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
