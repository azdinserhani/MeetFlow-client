import React from 'react'

const SectionHeader = ({title,desc,subDesc}) => {
  return (
    <div className=" flex flex-col space-y-9 text-center justify-items-center items-center mt-32">
      <span className="text-pink-400  font-semibold">{title}</span>
      <p className="font-bold text-5xl">{desc}</p>
      <p className="text-gray-400 text-lg w-1/2">{subDesc}</p>
    </div>
  );
}

export default SectionHeader