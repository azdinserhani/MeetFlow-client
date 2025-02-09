import React from "react";
import FeaturesCard from "./FeaturesCard";
import { GiTeamIdea } from "react-icons/gi";
import { MdOutlineMeetingRoom } from "react-icons/md";
const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "Streamlined Team Collaboration",
      description:
        "Bring your team together with seamless task management, chat, and file sharing all in one place.",
      icon: GiTeamIdea,
      primaryColor: "green-500",
      secondaryColor: "green-100",
    },
    {
      id: 2,
      title: "Efficient Meeting Scheduling",
      description:
        "Schedule meetings effortlessly with integrated calendar and availability features.",
      icon: MdOutlineMeetingRoom,
      primaryColor: "blue-500",
      secondaryColor: "blue-100",
    },
    {
      id: 3,
      title: "Real-time Collaboration",
      description:
        "Collaborate in real-time with your team using our interactive whiteboard and document editing tools.",
      icon: GiTeamIdea,
      primaryColor: "red-500",
      secondaryColor: "red-100",
    },
    {
      id: 4,
      title: "Advanced Analytics",
      description:
        "Gain insights into your team's performance with our advanced analytics and reporting tools.",
      icon: GiTeamIdea,
      primaryColor: "purple-500",
      secondaryColor: "purple-100",
    },
  ];
  return (
    <div className="min-h-screen p-6 ">
      <h2 className="font-bold text-4xl text-center mb-7 mt-20">
        Why Choose MeetFlow?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center justify-center gap-x-4 gap-y-4  place-items-center">
        {featuresData.map((item) => {
          return (
              <FeaturesCard
                  key={item.id}
              icon={item.icon}
              description={item.description}
              title={item.title}
              primaryColor={item.primaryColor}
              secondaryColor={item.secondaryColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
