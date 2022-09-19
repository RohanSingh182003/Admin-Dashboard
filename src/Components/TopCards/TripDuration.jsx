import React from 'react'

const TripDuration = ({props}) => {
  return (
    <div className='bg-gray-800 py-2 px-6 flex justify-between items-center w-full md:w-64 rounded-md shadow-xl'>
        <p className='text-blue-200 font-bold'>Trip Duration</p>
        <div className='h-12 grid place-items-center text-xl text-gray-200 font-bold'>{props.duration} KM</div>
    </div>
  )
}

export default TripDuration