import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
const TestemonielCard = ({item}) => {
  return (
    <div className='bg-gray-100 p-3 rounded-lg flex space-y-3 flex-col'>
      <FaQuoteRight fontSize={40} className='text-yellow-300'/>
      <p className='text-gray-600'>{item.feedback}</p>
      <h3 className='text-[20px]'>{item.name}</h3>

      <span>{item.position}</span>
    </div>
  );
}

export default TestemonielCard