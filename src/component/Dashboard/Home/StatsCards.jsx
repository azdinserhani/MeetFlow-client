import React from "react";
import { BiLike } from "react-icons/bi";
import { TbClockCheck } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: "Finished",
      value: "18",
      change: "+8 tasks",
      changeType: "positive", // "positive" means green color
      icon: <BiLike />,
    },
    {
      id: 2,
      title: "Tracked",
      value: "31h",
      change: "-6 hours",
      changeType: "negative", // "negative" means red color
      icon: <TbClockCheck />,
    },
    {
      id: 3,
      title: "Efficiency",
      value: "93%",
      change: "+12%",
      changeType: "positive",
      icon: <IoStatsChart />,
    },
  ];

  return (
    <div>
      <div className="flex justify-between space-x-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex-1 p-4 border border-gray-200 rounded-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-3 bg-gray-200 rounded-md">{stat.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{stat.title}</h4>
                  <p className="text-gray-500">{stat.value}</p>
                </div>
              </div>
              <div
                className={`flex items-center gap-2 ${
                  stat.changeType === "positive"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                <span>{stat.change}</span>
                <span>{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
