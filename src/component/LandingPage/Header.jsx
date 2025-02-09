import React from "react";
import Logo from "/logo.png";
import Button from "./Button";
import { MdOutlineTranslate } from "react-icons/md";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center -ml-2">
        <img src={Logo} alt="" className="h-14" />
        <h1 className="">MeetFlow</h1>
      </div>

      <nav>
        <ul className="flex space-x-10">
          <li className="hover:text-gray-400 cursor-pointer   duration-300">
            Home
          </li>
          <li className="hover:text-gray-400 cursor-pointer   duration-300">
            Features
          </li>
          <li className="hover:text-gray-400 cursor-pointer   duration-300">
            Pricing
          </li>
          <li className="hover:text-gray-400 cursor-pointer   duration-300">
            Blog
          </li>
          <li className="hover:text-gray-400 cursor-pointer   duration-300">
            Contact
          </li>
        </ul>
      </nav>

      <div className="flex space-x-7 items-center">
        <span className="flex items-center gap-1 text-gray-500 font-light text-sm border p-1 border-gray-200 rounded-md cursor-pointer">
          <MdOutlineTranslate />
          English
        </span>
        <button className="font-semibold cursor-pointer hover:text-gray-400 duration-300">
          Login
        </button>
        <Button label={"Get Started"} />
      </div>
    </div>
  );
};

export default Header;
