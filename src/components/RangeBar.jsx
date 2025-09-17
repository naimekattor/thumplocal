import React from "react";
import { AlignJustify } from "lucide-react";

const RangeBar = ({ value, onChange }) => {
  const totalSteps = 8;
  const percentage = ((value - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="relative w-full flex items-center my-4 px-4">
      <div className="relative w-full h-2">
        {/* Slider Track */}
        <div className="absolute w-full h-2 bg-gray-200 rounded-full top-0"></div>
        {/* Slider Progress */}
        <div
          className="absolute h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full top-0"
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Custom Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-white border-4 border-green-500 rounded-full shadow-md cursor-pointer"
          style={{ left: `calc(${percentage}% - 16px)` }}
        >
          <AlignJustify className="text-green-600" size={16} />
        </div>

        {/* Hidden Range Input for functionality */}
        <input
          type="range"
          min="1"
          max="8"
          step="1"
          value={value}
          onChange={onChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          aria-label="Select service package level"
        />
      </div>
    </div>
  );
};

export default RangeBar;
