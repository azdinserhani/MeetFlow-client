import React from "react";
import AdvantageCard from "./AdvantageCard";
import SectionHeader from "./SectionHeader";

const Advantage = () => {
  const advantageData = [
    {
      id: 1,
      title: "To-do List",
      desc: "Organize your daily tasks effortlessly with our intuitive to-do list. Stay focused and prioritize what matters most.",
      number: "01",
      color: "blue",
    },
    {
      id: 2,
      title: "Team Member Tracking",
      desc: "Easily track your team members' progress and stay connected. Ensure everyone is aligned and working towards shared goals.",
      number: "02",
      color: "green",
    },
    {
      id: 3,
      title: "Project Tracking",
      desc: "Monitor project timelines and milestones in real-time. Keep projects on track and meet your deadlines with confidence.",
      number: "03",
      color: "red",
    },
  ];
  const headData = {
    title: "Advantage",
    desc: "Key features to boost your productivity",
    subDesc: ` Explore the essential tools designed to streamline your workflow,
          enhance team collaboration, and ensure your projects run smoothly from
          start to finish`,
  };
  return (
    <div className="flex flex-col space-y-7">
    <SectionHeader title={headData.title} desc={headData.desc} subDesc={headData.subDesc}/>
      <div className="flex  space-x-4 ">
        {advantageData.map((item) => {
          return <AdvantageCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Advantage;
