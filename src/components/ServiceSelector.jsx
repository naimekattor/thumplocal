import React, { useState, useMemo } from "react";
import ServiceCard from "./ServiceCard";
import RangeBar from "./RangeBar";
import SummaryPanel from "./SummaryPanel";

const initialServices = [
  { id: 1, title: "Online Foundation", price: 1000, position: "top" },
  { id: 2, title: "Social Media Posting", price: 3000, position: "top" },
  {
    id: 3,
    title: "New Website Build",
    price: 10000,
    position: "top",
    adjustable: true,
    minPrice: 5000,
    maxPrice: 20000,
  },
  {
    id: 4,
    title: "Google AdWords Campaign",
    price: 25000,
    position: "top",
    adjustable: true,
    minPrice: 10000,
    maxPrice: 50000,
  },
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
    price: 4000,
    position: "bottom",
    adjustable: true,
    minPrice: 1000,
    maxPrice: 10000,
  },
  {
    id: 8,
    title: "Google Local Service Ads Campaign",
    price: 25000,
    position: "bottom",
    adjustable: true,
    minPrice: 5000,
    maxPrice: 50000,
  },
];

const ServiceSelector = () => {
  const [services, setServices] = useState(initialServices);
  const [sliderValue, setSliderValue] = useState(4);

  const handleSliderChange = (e) => setSliderValue(parseInt(e.target.value));

  const handlePriceChange = (id, newPrice) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, price: newPrice } : s))
    );
  };

  const handleRemoveService = (idToRemove) => {
    setServices((prevServices) => {
      const newServices = prevServices.filter((s) => s.id !== idToRemove);
      if (sliderValue > newServices.length) {
        setSliderValue(newServices.length);
      }
      return newServices;
    });
  };

  const topServices = services.filter((s) => s.position === "top");
  const bottomServices = services.filter((s) => s.position === "bottom");

  const activeServices = useMemo(() => {
    const activeTopCount = Math.ceil(sliderValue / 2);
    const activeBottomCount = Math.floor(sliderValue / 2);
    return [
      ...topServices.slice(0, activeTopCount),
      ...bottomServices.slice(0, activeBottomCount),
    ].filter(Boolean);
  }, [sliderValue, topServices, bottomServices]);

  const totalAmount = useMemo(
    () => activeServices.reduce((sum, s) => sum + s.price, 0),
    [activeServices]
  );

  return (
    <div className="bg-white min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center ">
        <div className="flex-grow">
          {/* --- Large Screen Layout --- */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-8 gap-4 pb-8 place-items-center">
              {topServices.map((service, index) => (
                <div
                  key={service.id}
                  style={{ gridColumnStart: 1 + index * 2 }}
                >
                  <ServiceCard
                    {...service}
                    isTop={true}
                    value={service.price}
                    onPriceChange={handlePriceChange}
                    onRemove={handleRemoveService}
                  />
                </div>
              ))}
            </div>
            <RangeBar
              value={sliderValue}
              onChange={handleSliderChange}
              min={0}
              max={services.length}
              step={1}
            />
            <div className="grid grid-cols-8 gap-4 pt-8 place-items-center">
              {bottomServices.map((service, index) => (
                <div
                  key={service.id}
                  style={{ gridColumnStart: 2 + index * 2 }}
                >
                  <ServiceCard
                    {...service}
                    isTop={false}
                    value={service.price}
                    onPriceChange={handlePriceChange}
                    onRemove={handleRemoveService}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- Small Screen Vertical Layout --- */}
          <div className="lg:hidden grid grid-cols-[1fr_auto_1fr] gap-x-4 items-start">
            {/* Left Column - Odd positioned services */}
            <div className="flex flex-col items-end space-y-12 pt-8">
              {services
                .filter((_, index) => index % 2 === 0) // Odd positioned (0, 2, 4...)
                .map((service) => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    isLeft={true}
                    value={service.price}
                    onPriceChange={handlePriceChange}
                    onRemove={handleRemoveService}
                  />
                ))}
            </div>

            {/* Center Column - Vertical Main RangeBar */}
            <div className="flex justify-center h-full min-h-[600px]">
              <RangeBar
                value={sliderValue}
                onChange={handleSliderChange}
                min={0}
                max={services.length}
                step={1}
                orientation="vertical"
              />
            </div>

            {/* Right Column - Even positioned services */}
            <div className="flex flex-col items-start space-y-12 pt-8">
              {services
                .filter((_, index) => index % 2 === 1) // Even positioned (1, 3, 5...)
                .map((service) => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    isLeft={false}
                    value={service.price}
                    onPriceChange={handlePriceChange}
                    onRemove={handleRemoveService}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto mt-12 lg:mt-0 flex-shrink-0">
          <SummaryPanel totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSelector;
