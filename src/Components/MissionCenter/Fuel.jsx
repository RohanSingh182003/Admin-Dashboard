import React from 'react'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const Fuel = ({props}) => {
  let fuel = props.fuelAmount
  let color = '#36bd39';
  if(fuel<=10){
    color = 'red';
  }
  return (
    <div className="w-32 h-20 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
        <p className={`text-xl font-bold text-${fuel<=10?'red':'green'}-200`}>{fuel} L</p>
        <LocalGasStationIcon style={{ color: color, fontSize: '1.5rem' }}/>
    </div>
  )
}

export default Fuel