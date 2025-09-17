import React, { useState, useMemo } from "react";
import ServiceCard from "./ServiceCard";
import RangeBar from "./RangeBar";
import SummaryPanel from "./SummaryPanel";

// Define service data
const services = [
  // Top Row
  {
    id: 1,
    title: "Online Foundation",
    details: "50+ Online Listings",
    price: 1000,
    position: "top",
  },
  {
    id: 2,
    title: "Social Media Posting",
    details: "Up to 5 Profiles",
    price: 3000,
    position: "top",
  },
  {
    id: 3,
    title: "New Website Build",
    details: "AI Command Based Interface",
    options: "# of Pages*\n# 15",
    price: 10000,
    position: "top",
  },
  {
    id: 4,
    title: "Google AdWords Campaign",
    details: "95% - 99% of above amount invested in Google Ads",
    options: "Monthly Ad Budget*\n$25,000",
    price: 25000,
    position: "top",
  },
  // Bottom Row
  {
    id: 5,
    title: "Online Reviews Management",
    price: 1000,
    position: "bottom",
  },
  {
    id: 6,
    title: "SEO - Search Engine Optimization",
    price: 3000,
    position: "bottom",
  },
  {
    id: 7,
    title: "Location Service Pages",
    options: "# Of pages*\n5",
    price: 4000,
    position: "bottom",
  },
  {
    id: 8,
    title: "Google Local Service Ads Campaign",
    details: "95% - 99% of above amount invested in Google Ads",
    options: "Monthly Ad Budget*\n$25,000",
    price: 25000,
    position: "bottom",
  },
];

const ServiceSelector = () => {
  const [sliderValue, setSliderValue] = useState(4); // Default to 4 active services

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const getActiveServices = (sliderValue, topServices, bottomServices) => {
    const active = [];

    for (let i = 1; i <= sliderValue; i++) {
      if (i % 2 !== 0) {
        // Odd → top service
        const topIndex = Math.floor(i / 2);
        if (topServices[topIndex]) active.push(topServices[topIndex]);
      } else {
        // Even → bottom service
        const bottomIndex = i / 2 - 1;
        if (bottomServices[bottomIndex])
          active.push(bottomServices[bottomIndex]);
      }
    }

    return active;
  };
  const topServices = services.filter((s) => s.position === "top");
  const bottomServices = services.filter((s) => s.position === "bottom");

  const activeServices = useMemo(() => {
    return getActiveServices(sliderValue, topServices, bottomServices);
  }, [sliderValue, topServices, bottomServices]);

  const totalAmount = useMemo(() => {
    return activeServices.reduce((sum, service) => sum + service.price, 0);
  }, [activeServices]);

  return (
    <div className="bg-white min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="flex-grow">
          {/* Top row of services */}
          <div className="grid grid-cols-8 gap-4 pb-4">
            {topServices.map((service, index) => {
              // Odd positions: 1,3,5,7
              const colStart = 1 + index * 2;
              return (
                <div key={service.id} style={{ gridColumnStart: colStart }}>
                  <ServiceCard {...service} isTop={true} />
                </div>
              );
            })}
          </div>

          {/* Range Bar */}
          <RangeBar value={sliderValue} onChange={handleSliderChange} />

          {/* Bottom row of services */}
          <div className="grid grid-cols-8 gap-4 pt-4">
            {bottomServices.map((service, index) => {
              // Even positions: 2,4,6,8
              const colStart = 2 + index * 2;
              return (
                <div key={service.id} style={{ gridColumnStart: colStart }}>
                  <ServiceCard {...service} isTop={false} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Panel */}
        <SummaryPanel totalAmount={totalAmount} />
      </div>
    </div>
  );
};

export default ServiceSelector;
