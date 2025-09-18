import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Illustration */}
          <div className="order-1 lg:order-none col-span-7 flex justify-center lg:justify-start">
            <img
              src={heroImage}
              alt="AI Marketing Dashboard Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="order-2 lg:order-none text-center lg:text-right col-span-5 max-w-xl mx-auto lg:mx-0">
            <div className="space-y-6">
              <h1 className="font-extrabold leading-tight">
                <span className="text-[#53B3AB] font-bold block text-5xl sm:text-6xl lg:text-[93px]">
                  AI
                </span>
                <span className="text-[#53B3AB] font-bold block text-5xl sm:text-6xl lg:text-[93px]">
                  MARKETING
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-[24px] text-[#484D44] dark:text-gray-300 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              <div className="pt-4">
                <button className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg shadow-md transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
