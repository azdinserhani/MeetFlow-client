import React from "react";
import Hero from "../component/LandingPage/Hero";
import TrustedBy from "../component/LandingPage/TrustedBy";
import Benefits from "../component/LandingPage/Benefits";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 rounded-2xl">
      <Hero />
      <div className="w-full justify-center flex">
        <img
          src="/test-img.webp"
          alt=""
          className="h-96 w-5xl object-cover p-6 "
        />
      </div>
      <TrustedBy />
      <Benefits />
    </div>
  );
};

export default LandingPage;
