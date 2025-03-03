import React from "react";
import UserInfo from "./UserInfo";

const RightSide = () => {
  return (
    <div className="flex-1 p-4 ">
      <UserInfo />
      <div className="relative flex items-center justify-center py-4">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="mx-4 text-gray-700 font-medium">Activity</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default RightSide;
