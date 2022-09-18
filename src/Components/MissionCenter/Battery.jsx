import React from 'react'
import { FaCarBattery } from 'react-icons/fa';

const Battery = () => {
  return (
    <div className="w-32 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
    <p className='text-xl font-bold text-green-200'>NA</p>
    <FaCarBattery className='text-3xl text-green-600'/>
</div>
  )
}

export default Battery