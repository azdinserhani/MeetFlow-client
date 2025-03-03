import React from "react";
import Avatar from "/avatar.png";
import { FiPhone } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
const UserInfo = () => {
  const icons = [FiPhone, IoVideocamOutline, HiOutlineDotsVertical];

  return (
    <div>
      <div className="flex flex-col items-center justify-between bg-gray-100 p-5 space-y-4 rounded-2xl">
        <div className="relative">
          <img
            src={Avatar}
            alt=""
            className="h-20 w-20 rounded-full object-cover border-gray-300 border-2"
          />
          <div className="absolute h-3 w-3 rounded-full bg-blue-500 right-1.5 bottom-0.5"></div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-semibold">Az-eddine serhani</h2>
          <span className="text-gray-400">@serhani</span>
        </div>

        <div className="flex space-x-4">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="font-semibold bg-white p-2 rounded-full cursor-pointer hover:bg-gray-200 duration-300"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
