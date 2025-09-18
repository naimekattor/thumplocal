import React from "react";
import RangeBar from "./RangeBar";

const ServiceCard = ({
  id,
  title,
  details,
  options,
  isTop,
  adjustable,
  minPrice,
  maxPrice,
  value,
  onPriceChange,
  onRemove,
}) => {
  return (
    <div className="relative flex flex-col items-center text-center w-48">
      {/* Vertical Connector (Large Screens) */}
      <div
        className={`hidden lg:block absolute w-[4px] bg-gray-300 ${
          isTop ? "top-full h-12" : "bottom-full h-12"
        }`}
      />

      {/* Horizontal Connector (Small Screens) */}
      <div
        className={`block lg:hidden absolute h-[4px] bg-gray-300 w-8 top-1/2 -translate-y-1/2 ${
          isTop ? "left-full" : "right-full"
        }`}
      />

      <div className=" p-4 rounded-lg   w-full">
        <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
        {details && <p className="text-xs text-gray-500 my-2">{details}</p>}
        {options && (
          <div className="text-gray-600 text-xs my-2 whitespace-pre-line">
            {options}
          </div>
        )}

        <p className="font-semibold text-green-700 my-2">
          ${value.toLocaleString()}
        </p>

        <div className="flex justify-center space-x-3 text-xs mt-2 mb-2">
          <button className="text-blue-600 hover:underline">Learn More</button>
          <button className="text-blue-600 hover:underline">Customize</button>
          <button
            className="text-red-600 hover:underline"
            onClick={() => onRemove(id)}
            aria-label={`Remove ${title}`}
          >
            Remove
          </button>
        </div>

        {adjustable && (
          <RangeBar
            value={value}
            onChange={(e) => onPriceChange(id, parseInt(e.target.value))}
            min={minPrice}
            max={maxPrice}
            showTicks={true}
            step="any" // Ensure per-service sliders are continuous
          />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
