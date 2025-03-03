import React from "react";
import { LuCalendarClock } from "react-icons/lu";
const DashboardHeader = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  console.log(formattedDate); // Example Output: 03 Mar 2025

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <h2 className="text-2xl">Hello, Az-eddine</h2>
        <p className="text-gray-400">
          Track team progress here. You almost reach a goal!
        </p>
      </div>
      <div className="flex space-x-4 items-center">
        <span>{formattedDate}</span>
        <LuCalendarClock fontSize={20} />
      </div>
    </div>
  );
};

export default DashboardHeader;
