import { MdLocalCarWash } from 'react-icons/md';
import React from 'react'

const CarTemperature = () => {
  return (
    <div className="w-32 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
    <p className='text-xl font-bold text-green-200'>45° C</p>
    <MdLocalCarWash className='text-3xl text-green-600'/>
</div>
  )
}

export default CarTemperature