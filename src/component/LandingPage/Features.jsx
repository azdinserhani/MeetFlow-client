import React from "react";
import SectionHeader from "./SectionHeader";
import FeaturesCard from "./Featurescard";
import { PiLampPendantFill } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import { MdChatBubble } from "react-icons/md";
const Features = () => {
  const headData = {
    title: "Features",
    desc: "Powerful Features to Elevate Your Workflow",
    subDesc:
      "Explore advanced tools that help you make smarter decisions, track progress, and manage your tasks with ease. Stay organized and in control with features designed to enhance your productivity.",
  };
  const featureData = [
    {
      title: "Make Smart Decisions",
      desc: "Get real-time insights, reports, and alerts to help you make more informed decisions.",
      color: "green",
      icon: PiLampPendantFill
    },
    {
      title: "Optimize Your Goals",
      desc: "Track your progress and stay aligned with personal or project goals using smart tracking tools.",
      color: "red",
      icon: LuGoal
    },
    {
      title: "Task Management",
      desc: "Easily manage tasks, deadlines, and priorities to keep projects running smoothly.",
      color: "purple",
      icon: FaTasks
    },
    {
      title: "Team Chat",
      desc: "Stay connected with real-time messaging, making team collaboration easier.",
      color: "yellow",
      icon: MdChatBubble
    },
  ];
  return (
    <div className="mt-32">
      <SectionHeader
        title={headData.title}
        desc={headData.desc}
        subDesc={headData.subDesc}
      />
      <div className="flex space-x-5 p-7">
        {featureData.map((item) => {
          return <FeaturesCard item={item} icon={item.icon}/>;
        })}
      </div>
    </div>
  );
};

export default Features;
