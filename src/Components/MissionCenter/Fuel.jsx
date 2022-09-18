import React from 'react'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const Fuel = () => {
  return (
    <div className="w-32 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
        <p className='text-xl font-bold text-red-200'>NA</p>
        <LocalGasStationIcon style={{ color: "red", fontSize: '2rem' }}/>
    </div>
  )
}

export default Fuel