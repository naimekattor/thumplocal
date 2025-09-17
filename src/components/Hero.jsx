import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500/20"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-purple-500/20"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-blue-500/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img
                src={heroImage}
                alt="AI Marketing Dashboard Illustration"
                className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">📊</span>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-purple-600 block">AI</span>
                <span className="text-blue-600 block">MARKETING</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              <div className="pt-4">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg shadow-md transition">
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
