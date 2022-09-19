import React from 'react'
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';

const Diagonastic = ({props}) => {
  let diagonastic = props.dgc;
  let color = '#36bd39';
  if(diagonastic){
    color = 'red';
  }
  return (
    <div className="w-32 h-20 bg-gray-700 rounded-md p-1 flex flex-col items-center justify-evenly">
    <p className={`text-xl font-bold text-${diagonastic?'red':'green'}-200`}>P0100</p>
    <TaxiAlertIcon style={{ color: color, fontSize: '1.5rem' }}/>
</div>
  )
}

export default Diagonastic