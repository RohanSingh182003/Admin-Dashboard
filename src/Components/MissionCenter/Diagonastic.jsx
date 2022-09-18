import React from 'react'
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';

const Diagonastic = () => {
  return (
    <div className="w-32 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
    <p className='text-xl font-bold text-red-200'>P0100</p>
    <TaxiAlertIcon style={{ color: "red", fontSize: '2rem' }}/>
</div>
  )
}

export default Diagonastic