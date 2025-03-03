import React, { useState } from "react";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "/logo.png";
import { FaTasks } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

import NavItem from "./NavItem";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div
      className={`flex-col border-r border-gray-200 h-screen relative ${
        open ? "w-60" : "w-20"
      } duration-300`}
    >
      <div className="flex gap-1 items-center">
        <img src={Logo} alt="" className="h-16 mt-2 ml-2 cursor-pointer" />
        <h1 className={`${!open && "hidden"} font-bold text-2xl`}>MeetFlow</h1>
      </div>
      <IoIosArrowForward
        onClick={() => {
          setOpen(!open);
          setMenuOpen(open);
        }}
        className={`absolute top-9 -right-3 bg-gray-200 rounded-full p-1 text-2xl cursor-pointer ${
          open && "rotate-180"
        }`}
      />
      <nav className="mt-10 ml-6 ">
        <ul className="space-y-4 text-gray-400 ">
          <div className={selectedItem === "Home" ? "text-black" : ""}>
            <Link to="/dashBoard/home">
              <NavItem
                label={"Home"}
                icon={GrHomeRounded}
                open={open}
                onClick={() => handleItemClick("Home")}
              />
            </Link>
          </div>

          <NavItem
            label={"Projects"}
            icon={PiProjectorScreenChartLight}
            open={open}
            menuItems={["My Projects", "All Projects"]}
            onClick={() => handleItemClick("Projects")}
          />

          <NavItem
            label={"Tasks"}
            icon={FaTasks}
            open={open}
            menuItems={["All Tasks", "My Tasks"]}
            onClick={() => handleItemClick("Tasks")}
          />
          <div className={selectedItem === "Team" ? "text-black" : ""}>
            <Link to="/dashBoard/team">
              <NavItem
                label={"Team"}
                icon={RiTeamFill}
                open={open}
                onClick={() => handleItemClick("Team")}
              />
            </Link>
          </div>
          <div className={selectedItem === "Settings" ? "text-black" : ""}>
            <Link to="/dashBoard/settings">
              <NavItem
                label={"Settings"}
                icon={IoSettingsOutline}
                open={open}
                onClick={() => handleItemClick("Settings")}
              />
            </Link>
          </div>
        </ul>
      </nav>
      <nav className="absolute bottom-2 ml-6 flex-col">
        <ul className="text-gray-400 space-y-3">
          <div
            className={
              selectedItem === "Help & information" ? "text-black" : ""
            }
          >
            <Link to="/dashBoard/help">
              <NavItem
                label={"Help & information"}
                icon={IoIosInformationCircleOutline}
                open={open}
                onClick={() => handleItemClick("Help & information")}
              />
            </Link>
          </div>
          <div className={selectedItem === "Log out" ? "text-black" : ""}>
            <Link to="/logout">
              <NavItem
                label={"Log out"}
                icon={CiLogout}
                open={open}
                onClick={() => handleItemClick("Log out")}
              />
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
