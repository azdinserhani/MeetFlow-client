import React from "react";

const Button = ({ label }) => {
  return (
      <button className="cursor-pointer px-4 py-2 bg-gradient-to-b from-blue-400 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl 
    transition-all hover:rounded-xs duration-500">
      {label}
    </button>
  );
};

export default Button;
