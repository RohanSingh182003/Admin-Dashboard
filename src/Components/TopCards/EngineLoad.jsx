import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const EngineLoad = ({ props }) => {
  const percentage = props.load;
  let color;
  if (percentage <= 30) {
    color = '#2CE549 ';
  } else if (percentage > 30 && percentage <= 60) {
    color = 'yellow';
  } else {
    color = '#F74941';
  }
  return (
    <div className="bg-gray-800 py-2 px-4 flex justify-between items-center w-full md:w-64 rounded-md shadow-xl">
      <p className="text-blue-200 font-bold">Engine Load</p>
      <div className="h-12 w-12 text-center">
        <CircularProgress value={percentage} color={color}>
  <CircularProgressLabel color='white'>{percentage}%</CircularProgressLabel>
</CircularProgress>
      </div>
    </div>
  );
};

export default EngineLoad;
