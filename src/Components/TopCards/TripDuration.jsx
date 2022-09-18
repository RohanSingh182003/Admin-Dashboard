import React from 'react'

const TripDuration = () => {
  return (
    <div className='bg-gray-800 py-2 px-6 flex justify-between items-center w-full md:w-64 rounded-md'>
        <p className='text-blue-200 font-bold'>Trip Duration</p>
        <div className='h-12 grid place-items-center text-2xl text-gray-200 font-bold'>0</div>
    </div>
  )
}

export default TripDuration