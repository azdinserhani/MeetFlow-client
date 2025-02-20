import React from "react";


const PricingCard = ({ item, icon: Icon }) => {
  return (
    <div
      className={`flex flex-col flex-1 py-7 px-4 space-y-4 border border-gray-300 rounded-2xl `}
    >
      <Icon className="p-3 bg-gray-100 rounded-lg" fontSize={50} />
      <h2 className="font-bold text-2xl">{item.title}</h2>
      <p className="text-gray-400">{item.description}</p>

      <h3 className="font-bold text-3xl">
        {item.price}{" "}
        <span className="text-[18px] text-gray-400 font-semibold">
          {item.price !== "FREE" && "/mounth"}
        </span>
      </h3>
      <hr className="text-gray-300" />
      <ul className="flex flex-col space-y-3">
        {item.features.map((feature, index) => (
          <li key={index} className="font-medium">
            {feature}
          </li>
        ))}
      </ul>

      {item.title === "Pro Plan" || item.title === "الخطة الاحترافية" ? (
        <button className="p-3 bg-purple-custom cursor-pointer rounded-lg text-white font-bold transform transition duration-300 hover:scale-105 hover:shadow-lg">
          {item.buttonText}
        </button>
      ) : (
        <button className="p-3 cursor-pointer  bg-gray-200 rounded-lg text-gray-600 font-bold transform transition duration-300 hover:bg-gray-300 hover:rotate-2">
          {item.buttonText}
        </button>
      )}
    </div>
  );
};

export default PricingCard;
