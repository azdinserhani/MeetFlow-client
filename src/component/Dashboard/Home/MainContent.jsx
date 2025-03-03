import React from "react";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import PerformanceChart from "./PerformanceChart";
import TaskList from "./TaskList";

const MainContent = () => {
  return (
    <div className="flex-3 p-8 h-screen overflow-y-scroll custom-scrollbar">
      <DashboardHeader />
      <div className="flex-1 border-t border-gray-300 mt-12 mb-4"></div>
      <StatsCards />
      <div className="flex-1 border-t border-gray-300 mt-4 mb-12"></div>
      <PerformanceChart />
      <TaskList />
    </div>
  );
};

export default MainContent;
