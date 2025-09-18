import React from "react";

const RangeBar = ({
  value,
  onChange,
  min = 0,
  max = 100,
  showTicks = false,
  orientation = "horizontal",
  step = "any",
}) => {
  const percentage = max > min ? ((value - min) / (max - min)) * 100 : 0;

  // Vertical Layout
  if (orientation === "vertical") {
    return (
      <div className="relative w-16 h-full flex justify-center py-4">
        {/* Container for VISUAL elements only */}
        <div className="relative h-full w-4 flex flex-col items-center">
          {/* Track */}
          <div className="absolute w-2 h-full bg-gray-200 rounded-full left-1/2 -translate-x-1/2"></div>

          {/* Step indicators for discrete values */}
          {step === 1 && (
            <div className="absolute left-1/2 -translate-x-1/2 h-full flex flex-col justify-between py-1">
              {Array.from({ length: max - min + 1 }, (_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          )}

          {/* Progress */}
          <div
            className="absolute w-2 bg-gradient-to-t from-green-400 to-teal-500 rounded-full left-1/2 -translate-x-1/2 bottom-0"
            style={{ height: `${percentage}%` }}
          ></div>

          {/* Thumb (visual only) */}
          <div
            className="absolute w-6 h-6 bg-white border-2 border-green-500 rounded-full shadow-lg pointer-events-none z-10"
            style={{
              bottom: `calc(${percentage}% - 12px)`,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
        </div>

        {/* Functional input overlay */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="range-input-vertical absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
      </div>
    );
  }

  // Horizontal Layout (No changes needed)
  return (
    <div className="relative w-full flex flex-col items-center my-4 px-4">
      <div className="relative w-full h-4">
        <div className="absolute w-full h-2 bg-gray-200 rounded-full top-1"></div>
        <div
          className="absolute h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full top-1"
          style={{ width: `${percentage}%` }}
        ></div>
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-green-500 rounded-full shadow-md pointer-events-none"
          style={{ left: `calc(${percentage}% - 12px)` }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      {showTicks && (
        <div className="w-full flex justify-between mt-2 text-xs text-gray-500">
          <span>{`$${min.toLocaleString()}`}</span>
          <span>{`$${max.toLocaleString()}`}</span>
        </div>
      )}
    </div>
  );
};

export default RangeBar;
