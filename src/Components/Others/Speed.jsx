import React from "react";

const Speed = ({props}) => {
  return (
    <div className="w-[50%] border-r border-gray-500 grid place-items-center">
      <p>
        <span className="font-bold">Speed: </span>{props.speed} Km/h
      </p>
    </div>
  );
};

export default Speed;
