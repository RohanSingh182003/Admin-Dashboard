import * as React from "react";
import Switch from "@mui/material/Switch";
import { MdCarRental } from "react-icons/md";

const Immobilization = ({ props }) => {
  return (
    <div className="w-32 h-40 bg-gray-700 rounded-md flex flex-col items-center justify-evenly p-3">
      <div className="p-2">
      <MdCarRental className="text-4xl text-gray-300" />
      </div>
      <Switch
        checked={props.open ? props.checked : false}
        onChange={props.handleChange}
        onClick={props.handleOpen}
        className="-ml-2 -mt-1"
      />
      <p className="text-lg text-gray-200">Immobilize</p>
    </div>
  );
};

export default Immobilization;
