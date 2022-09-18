import React from 'react'

const EngineOnOff = ({props}) => {
  return (
    <div className='bg-gray-800 py-2 px-4 flex justify-between items-center w-full md:w-64 rounded-md my-2 lg:my-0'>
        <p className='text-blue-200 font-bold'>Engine On/Off</p>
        <div className='h-12 grid place-items-center'>
            <div className={`h-12 w-12 ${props.state === 'on'?'bg-green-500':'bg-red-500'} grid place-items-center rounded-full`}>
                <div className='h-10 w-10 bg-gray-800 rounded-full grid place-items-center'>
                    <p className={`${props.state === 'on'?'text-green-200':'text-red-200'} font-bold`}>{props.state === 'on'?'On':'Off'}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EngineOnOff