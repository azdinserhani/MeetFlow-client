import React from "react";

const TrustedBy = () => {
  return (
    <div className="text-center my-9 w-auto  justify-items-center flex-col h-auto">
      <span className="text-gray-600 ">We trusted by</span>
      <div className="flex h-16 space-x-6 mt-7">
        <img src="/google.webp" alt="" />
        <img src="/spootify.png" alt="" />
        <img src="/webflow.webp" alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;
