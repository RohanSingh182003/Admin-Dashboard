import * as React from 'react';
import Switch from '@mui/material/Switch';
import { MdCarRental } from 'react-icons/md';

const Immobilization = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
  return (
    <div className="w-32 h-40 bg-gray-700 rounded-md flex flex-col items-center justify-evenly p-3">
      <div className="bg-gray-800 p-2 rounded-md">
        <MdCarRental className="text-4xl text-gray-300" />
      </div>    
      <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      <p className="text-lg text-gray-200">Immobilized</p>
    </div>
  );
};

export default Immobilization;
