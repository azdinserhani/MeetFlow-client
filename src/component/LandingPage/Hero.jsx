import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex-col content-center justify-items-center min-h-[60vh] max-w-7xl space-y-4 ">
      <h1 className="text-4xl font-semibold">Seamless Meetings, Effortless Collaboration</h1>
      <p className="text-lg text-gray-400">
        Manage tasks and projects easily with an all-in-one <br />
        platform designed for seamless collaboration{" "}
      </p>

          <Button label={ "Request a Demo" } />
          
    </div>
  );
};

export default Hero;
