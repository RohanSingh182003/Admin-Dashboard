import * as React from 'react';
import Switch from '@mui/material/Switch';

const Sos = () => {

  return (
    <div className="w-32 h-40 bg-gray-700 rounded-md flex flex-col items-center justify-evenly p-3">
        <p className="text-3xl text-gray-300 font-bold p-1">SOS</p>
      <Switch
      inputProps={{ 'aria-label': 'controlled' }}
    />
      <p className="text-lg text-gray-200">SOS</p>
    </div>
  );
};

export default Sos;
