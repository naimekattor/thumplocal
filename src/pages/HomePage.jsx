import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServiceSelector from "../components/ServiceSelector";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceSelector />
    </>
  );
}
