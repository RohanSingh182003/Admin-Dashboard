import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EngineLoad = ({ props }) => {
  const percentage = props.load;
  let red = '217, 34, 28'
  let yellow = '242, 252, 5'
  let green = '10, 237, 19'
  let color;
  if(percentage <= 30){
    color = green;
  }
  else if(percentage > 30 && percentage <= 60){
    color = yellow;
  }
  else{
    color = red;
  }
  return (
    <div className="bg-gray-800 py-2 px-4 flex justify-between items-center w-full md:w-64 rounded-md shadow-xl">
      <p className="text-blue-200 font-bold">Engine Load</p>
      <div className="h-12 w-12 text-center">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.50,
            strokeLinecap: "butt",
            textSize: "1.5rem",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(${color}, ${percentage / 100})`,
            textColor: 'white',
            fontWeight: "10px",
            trailColor: "#25293d",
            backgroundColor: "#0c0961",
          })}
        />
      </div>
    </div>
  );
};

export default EngineLoad;
