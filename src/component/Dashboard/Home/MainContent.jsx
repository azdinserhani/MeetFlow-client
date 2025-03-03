import React from "react";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import PerformanceChart from "./PerformanceChart";

const MainContent = () => {
  return (
    <div className="flex-3 p-8">
      <DashboardHeader />
      <div className="flex-1 border-t border-gray-300 mt-12 mb-4"></div>
      <StatsCards />
      <div className="flex-1 border-t border-gray-300 mt-4 mb-12"></div>
      <PerformanceChart />
    </div>
  );
};

export default MainContent;
