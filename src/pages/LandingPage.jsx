import React from "react";
import Hero from "../component/LandingPage/Hero";
import TrustedBy from "../component/LandingPage/TrustedBy";
import Benefits from "../component/LandingPage/Benefits";
import Advantage from "../component/LandingPage/Advantage";
import Features from "../component/LandingPage/Features";
import Testimonials from "../component/LandingPage/Testimonials";

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
      <Advantage />
      <Features />
      <Testimonials/>
    </div>
  );
};

export default LandingPage;
