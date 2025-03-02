import React from "react";
import { FaGoogle } from "react-icons/fa6";
const GoogleButton = () => {
  return (
    <div
      className="flex items-center space-x-3 border border-gray-300 rounded-sm p-4 cursor-pointer min-w-full justify-center bg-purple-custom
       text-white hover:bg-white hover:text-purple-custom duration-300 mt-4"
    >
      <FaGoogle fontSize={24} />{" "}
      <h3 className=" font-semibold">Google</h3>
      
    </div>
  );
};

export default GoogleButton;
