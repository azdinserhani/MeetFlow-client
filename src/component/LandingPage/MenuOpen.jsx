import React from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineTranslate } from "react-icons/md";

const MenuOpen = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <nav
        className={`absolute top-20 left-0  bg-white shadow-md rounded-2xl p-4 `}
      >
        <ul className="flex flex-col space-y-4 md:space-y-0 md:space-x-10 text-lg">
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
    </div>
  );
};

export default MenuOpen;
