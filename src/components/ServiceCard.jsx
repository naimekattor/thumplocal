import React from "react";

const ServiceCard = ({ title, details, options, isTop }) => {
  return (
    <div
      className={`relative flex flex-col items-center text-center ${
        isTop ? "mb-8" : "mt-8"
      }`}
    >
      {/* Vertical connector line */}
      <div
        className={`absolute w-[4px] bg-gray-300 ${
          isTop ? "top-full h-12" : "bottom-full h-12"
        }`}
      ></div>

      <div className="text-center">
        {options && <div className="text-gray-600 text-sm mb-2">{options}</div>}
        <h3 className="font-bold text-gray-800">{title}</h3>
        {details && <p className="text-xs text-gray-500 mb-2">{details}</p>}

        <div className="flex justify-center space-x-3 text-sm mt-2">
          <button className="text-blue-600 hover:underline">Learn More</button>
          <button className="text-green-600 hover:underline">Customize</button>
          <button className="text-red-600 hover:underline">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
