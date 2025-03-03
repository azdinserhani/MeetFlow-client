import React from "react";
import MainContent from "../../component/Dashboard/Home/MainContent";
import RightSide from "../../component/Dashboard/Home/RightSide";

const Home = () => {
  return (
    <div className="flex">
      <MainContent />
      <div className="border-l border-gray-300 mx-1 h-screen"></div>
      <RightSide />
    </div>
  );
};

export default Home;
