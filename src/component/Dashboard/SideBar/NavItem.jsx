import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const NavItem = ({ icon: Icon, label, open, menuItems = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hasMenu = menuItems.length > 0;

  return (
    <li className="flex flex-col">
      <div
        className={`flex items-center gap-4 hover:text-black cursor-pointer ${
          open && "w-50  "
        } relative peer px-3.5 py-2 rounded-md`}
      >
        {/* Icon and Label */}
        <div className="flex items-center gap-4 flex-grow ">
          <Icon fontSize={20} />
          <span className={`${!open && "hidden"}`}>{label}</span>
        </div>

        {/* Plus/Minus Icon */}
        {hasMenu && open && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center cursor-pointer"
          >
            {menuOpen ? <FaCircleMinus /> : <FaCirclePlus />}
          </button>
        )}
      </div>
      {!open && (
        <div class="absolute hidden peer-hover:block bg-gray-200 text-black text-sm px-2 py-1 rounded mt-2 whitespace-nowrap left-15">
          {label}
        </div>
      )}

      {/* Dropdown Menu */}
      {hasMenu && menuOpen && (
        <ul
          className={`flex flex-col space-y-4 mt-3 ml-9 ${!open && "hidden"}`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-black cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
