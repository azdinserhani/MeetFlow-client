import React from "react";
import Logo from "/logo.png";
import Button from "./Button";
import { MdOutlineTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex items-center mb-6 justify-between p-4 bg-white shadow-md rounded-2xl">
      <div className="flex items-center -ml-2">
        <img src={Logo} alt="MeetFlow Logo" className="h-14" />
        <h1 className="text-2xl font-bold ml-2">MeetFlow</h1>
      </div>

      <nav>
        <ul className="flex space-x-10 text-lg">
          <li className="hover:text-gray-600 cursor-pointer duration-300">
            Home
          </li>
          <li className="hover:text-gray-600 cursor-pointer duration-300">
            Features
          </li>
          <li className="hover:text-gray-600 cursor-pointer duration-300">
            Pricing
          </li>
          <li className="hover:text-gray-600 cursor-pointer duration-300">
            Blog
          </li>
          <li className="hover:text-gray-600 cursor-pointer duration-300">
            Contact
          </li>
        </ul>
      </nav>

      <div className="flex space-x-7 items-center">
        <MdOutlineTranslate />
        <select
          className="flex items-center gap-1 text-gray-700 font-light text-sm border p-2 border-gray-300 rounded-md cursor-pointer"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
        <Link to="/login">
          <button className="font-semibold cursor-pointer hover:text-gray-600 duration-300">
            Login
          </button>
        </Link>

        <Button label={"Get Started"} />
      </div>
    </div>
  );
};

export default Header;
