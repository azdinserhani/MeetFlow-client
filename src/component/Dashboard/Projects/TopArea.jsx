import { CirclePlus, Search } from "lucide-react";
import React from "react";
import Button from "../../LandingPage/Button";

const TopArea = () => {
  return (
    <div className="flex p-7 justify-between items-center space-x-10">
      <div className="p-4  flex-1 rounded-sm  hover:border-purple-custom border-2 flex items-center space-x-3 border-gray-400 duration-200">
        <input
          type="text"
          placeholder="Project title"
          className="border-none  outline-none w-full"
        />
        <Search size={25} color="gray" />
      </div>
      <div className="flex-1 flex justify-end items-center space-x-5">
        <button className="bg-purple-custom flex gap-4 p-4 text-white rounded-md cursor-pointer hover:bg-purple-600 duration-300">
          New Project
          <CirclePlus />
        </button>
      </div>
    </div>
  );
};

export default TopArea;
