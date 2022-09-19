import { MdLocalCarWash } from 'react-icons/md';
import React from 'react'

const CarTemperature = ({props}) => {
  let temperature = props.temperature;
  let color;
  if( temperature < 90){
    color = 'green';
  }
  else if(temperature >= 90 && temperature < 96){
    color = 'yellow';
  }
  else if(temperature >= 96){
    color = 'red';
  }
  else{
    color= 'gray';
  }
  return (
    <div className="w-32 h-20 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
            <p className='hidden text-green-600 text-red-600 text-yellow-600 text-green-200 text-red-200 text-yellow-200'></p>
    <p className={`text-xl font-bold text-${color}-200`}>{temperature}° C</p>
    <MdLocalCarWash className={`text-xl text-${color}-600`}/>
</div>
  )
}

export default CarTemperature