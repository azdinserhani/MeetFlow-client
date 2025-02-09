import React from "react";
import TestImg from "/test-img.webp";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="flex p-5 bg-gray-100 shadow-lg rounded-lg h-[calc(100vh-64px)]  items-center ">
      <div className="flex-1 p-5 ">
        <h1 className="text-4xl font-bold mb-4">
          Seamless Meetings, Effortless Collaboration
        </h1>
        <p className="text-lg mb-6">
          Supercharge your workflow with MeetFlow where scheduling, video calls,
          and team collaboration come together in one simple, powerful platform.
        </p>
        <Button label={"Get Started for Free"} />
      </div>
      <div className="flex-1 p-5">
        <img src={TestImg} alt="Hero" className="rounded-lg shadow-md " />
      </div>
    </div>
  );
};

export default Hero;
