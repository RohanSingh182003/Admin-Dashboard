import React from 'react'
import { FaCarBattery } from 'react-icons/fa';

const Battery = ({props}) => {
  let voltage = props.voltage;
  let color;
  if(voltage>= 12){
    color = 'green';
  }
  else if(voltage >= 11 && voltage <12){
    color = 'yellow';
  }
  else{
    color = 'red';
  }
  return (
    <div className="w-32 h-20 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
      <p className='hidden text-green-600 text-red-600 text-yellow-600 text-green-200 text-red-200 text-yellow-200'></p>
    <p className={`text-xl font-bold text-${color}-200`}>{voltage} V</p>
    <FaCarBattery className={`text-xl text-${color}-600`}/>
</div>
  )
}

export default Battery