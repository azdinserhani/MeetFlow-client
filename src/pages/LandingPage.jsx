import React from "react";
import Hero from "../component/LandingPage/Hero";
import TrustedBy from "../component/LandingPage/TrustedBy";
import Benefits from "../component/LandingPage/Benefits";
import Advantage from "../component/LandingPage/Advantage";
import Features from "../component/LandingPage/Features";
import Pricing from "../component/LandingPage/Pricing";
import Testemoniel from "../component/LandingPage/Testemoniel";
import Footer from "../component/LandingPage/Footer";
import Header from "../component/LandingPage/Header";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 rounded-2xl">
      <Header />
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
      <Pricing />
     <Testemoniel />
      <Footer />
    </div>
  );
};

export default LandingPage;
