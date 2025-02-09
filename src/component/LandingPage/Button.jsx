import React from 'react'

const Button = ({label}) => {
  return (
      <div className='text-white bg-purple-custom px-3 py-2 rounded-lg cursor-pointer font-semibold drop-shadow-lg hover:rounded-xs duration-500 hover:scale-105 w-fit'>{ label}</div>
  )
}

export default Button