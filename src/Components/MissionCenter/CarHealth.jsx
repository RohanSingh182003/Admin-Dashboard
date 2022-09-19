import React from 'react'
import { MdHealthAndSafety } from 'react-icons/md';

const Fuel = ({props}) => {
  let carHealth = props.carHealthAmount
  let color = '#36bd39';
  if(props.dtc){
    color = 'red';
  }
  return (
    <div className="w-32 h-20 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
        <p className={`text-xl font-bold text-${props.dtc?'red':'green'}-200`}>{carHealth}</p>
        <MdHealthAndSafety style={{ color: color, fontSize: '1.5rem' }}/>
    </div>
  )
}

export default Fuel