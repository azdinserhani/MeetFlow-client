import React from 'react'
import { colorVariants } from '../../utils/ColorVariants';

const AdvantageCard = ({ item }) => {
    return (
        <div className={`p-4 flex flex-col  space-y-3  rounded-2xl  hover:border-1 cursor-pointer duration-200 hover:scale-105 border-black border ${
                colorVariants.card[item.color]
              }`}>
          <span className='p-3 bg-white w-10 h-10 flex items-center justify-items-center rounded-md font-semibold'>{ item.number}</span>
      <h3 className='font-bold text-2xl'>{item.title}</h3>
      <p className='text-gray-400 '>
        {item.desc}
      </p>
    </div>
  );
}

export default AdvantageCard