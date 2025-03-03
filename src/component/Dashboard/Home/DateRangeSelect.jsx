import { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const DateRangeSelect = () => {
  const [selectedRange, setSelectedRange] = useState("01-07 May");
  const dateRanges = ["01-07 May", "08-14 May", "15-21 May", "22-28 May"];

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center px-3 py-1 bg-gray-100 text-black rounded-full shadow-sm hover:bg-gray-200">
        {selectedRange} <ChevronDown size={16} className="ml-2" />
      </Menu.Button>

      <Menu.Items className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
        {dateRanges.map((range, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <div
                onClick={() => setSelectedRange(range)}
                className={`px-3 py-2 cursor-pointer ${
                  active ? "bg-gray-100" : ""
                }`}
              >
                {range}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default DateRangeSelect;
