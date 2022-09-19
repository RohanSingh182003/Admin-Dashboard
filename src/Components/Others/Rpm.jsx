import React from "react";

const Rpm = ({props}) => {
  return (
    <div className="w-[50%] grid place-items-center">
      <p>
        <span className="font-bold">RPM: </span>{props.rpm}
      </p>
    </div>
  );
};

export default Rpm;
