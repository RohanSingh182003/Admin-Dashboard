import * as React from 'react';
import Switch from '@mui/material/Switch';
import { AiFillCar } from 'react-icons/ai';

const Sos = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
  return (
    <div className="w-32 h-40 bg-gray-700 rounded-md flex flex-col items-center justify-evenly p-3">
        <p className="text-4xl text-gray-300 font-bold bg-gray-800 p-1 rounded-md">SOS</p>
      <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      <p className="text-lg text-gray-200">SOS</p>
    </div>
  );
};

export default Sos;
