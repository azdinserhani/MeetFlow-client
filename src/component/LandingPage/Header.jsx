import React, { useState } from "react";
import Logo from "/logo.png";
import Button from "./Button";
import { MdOutlineTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import MenuOpen from "./MenuOpen";
const Header = () => {
  const { i18n } = useTranslation();
  const [menu, setMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-row items-center mb-6 justify-between p-4 bg-white shadow-md rounded-2xl relative">
      <div className="flex items-center -ml-2 justify-center">
        <img src={Logo} alt="MeetFlow Logo" className="h-14 hidden md:flex" />
        <h1 className="hidden md:flex md:text-2xl font-bold ml-2">MeetFlow</h1>
        <div className="relative">
          {menu ? (
            <IoMdClose
              className="md:hidden flex transition-transform duration-300 transform rotate-180"
              fontSize={25}
              onClick={() => setMenu(false)}
            />
          ) : (
            <IoMdMenu
              className="md:hidden flex transition-transform duration-300 transform rotate-0"
              fontSize={25}
              onClick={() => setMenu(true)}
            />
          )}
        </div>
      </div>
      {menu && <MenuOpen />}
      <nav className={`md:flex hidden `}>
        <ul className="flex flex-row space-y-4 md:space-y-0 md:space-x-10 text-lg">
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
          <li className="flex items-center">
            <MdOutlineTranslate />
            <select
              className="flex items-center gap-1 text-gray-700 font-light text-sm border p-2 border-gray-300 rounded-md cursor-pointer ml-2"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row space-y-0 space-x-7 items-center">
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
