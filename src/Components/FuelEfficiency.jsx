import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Switch from "@mui/material/Switch";
import { GiFuelTank } from "react-icons/gi";
import { AiOutlineFieldTime, AiOutlineWarning } from "react-icons/ai";
import { BsStopwatch, BsSpeedometer2 } from "react-icons/bs";
import { RiPinDistanceLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const FuelEfficiency = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    borderRadious: "20",
    boxShadow: 24,
  };
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [pin, setPin] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    setChecked(true);
    if(pin.length >= 4){
      toast.success('PIN Submitted Successfully.')
      setPin('')
      handleClose();
    setChecked(false);
  }
  else if(pin.length > 0 && pin.length < 4){
    toast.warn('PIN is too short! fill it correctly.')
  }
  else{
    toast.error('Please Enter the PIN.')
  }
  };
  return (
    <div className="lg:my-8">
      {/* options section */}
      <div className="flex justify-evenly items-center py-2 xl:py-8 2xl:py-14 mx-auto flex-wrap lg:flex-nowrap">
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <div className="h-full bg-gray-800 text-gray-200 p-4 rounded-lg w-96">
              <p className="text-3xl font-bold mx-2">
                PIN Verification
              </p>
              <p className="mx-3 mt-2 text-gray-400 text-sm">Enter the account pin.</p>
              <div className="my-6 relative">
              <input
              value={pin} 
              onChange={(e)=> {setPin(e.target.value)}} 
              autoComplete="false" placeholder="Enter PIN Secretly" className="bg-gray-800 focus:outline-none border-b w-full text-gray-200 border-blue-500 focus:border-b-2 focus:border-blue-500 p-2 px-1 placeholder-transparent peer" type="text" name="pin" id="pin" />
              <label className="absolute transition-all -top-3.5 left-1 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-xs" htmlFor="pin">Enter PIN Secretly</label>
              </div>
              <button onClick={()=>{handleSubmit()}} className="p-2 w-full text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-md">Submit</button>
            </div>
          </Box>
        </Modal>
        <div className="bg-gray-800 w-56 rounded-md shadow-2xl py-2 flex justify-between px-8 md:px-2 md:justify-evenly cursor-pointer hover:-translate-y-1 hover:duration-300 hover:shadow-2xl">
          <div className="h-full p-1">
            <div className="p-1 bg-yellow-500 rounded-md w-fit my-1">
              <GiFuelTank className="text-5xl text-gray-100" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-100 text-lg">6,548 L</p>
            <p className="text-gray-400">Fuel&nbsp;Usage</p>
          </div>
        </div>
        <div className="bg-gray-800 w-56 rounded-md shadow-2xl py-2 flex justify-between px-8 md:px-2 md:justify-evenly my-2 md:my-0 cursor-pointer hover:-translate-y-1 hover:duration-200 hover:shadow-2xl">
          <div className="h-full p-1  ">
            <div className="p-1 bg-blue-500 rounded-md w-fit my-1">
              <RiPinDistanceLine className="text-5xl text-gray-100" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-100 text-lg">31,875</p>
            <p className="text-gray-400">Distance</p>
          </div>
        </div>
        <div className="bg-gray-800 w-56 rounded-md shadow-2xl py-2 flex justify-between px-8 md:px-2 md:justify-evenly cursor-pointer hover:-translate-y-1 hover:duration-200 hover:shadow-2xl">
          <div className="h-full p-1  ">
            <div className="p-1 bg-cyan-500 rounded-md w-fit my-1">
              <AiOutlineFieldTime className="text-5xl text-gray-100" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-100 text-lg">1h:22m:18s</p>
            <p className="text-gray-400">Ideal Time</p>
          </div>
        </div>
      </div>
      {/* summary section */}
      <p className="text-gray-100 text-center lg:text-start">Summary</p>
      <div className="w-full rounded-lg shadow-2xl my-3 flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center lg:items-start">
        <div className="md:w-auto h-full bg-gray-900 p-4 rounded-lg rounded-r flex flex-col justify-evenly">
          <p className="text-gray-400">Vehicle Control</p>
          <div className="flex justify-between items-center lg:items-start h-full scrollbar-hide my-2">
            {/* drive duration */}
            <div className="h-36 shadow-xl rounded-md bg-gray-800 p-2 cursor-pointer">
              <div className="bg-gray-900 p-2 rounded-md w-fit">
                <BsStopwatch className="text-gray-100 text-4xl" />
              </div>
              <p className="text-sm w-24 text-gray-200 font-semibold my-3">
                Drive Duration
              </p>
              <Switch 
              checked={open?checked:false}
              onChange={handleChange}
              onClick={handleOpen} className="-ml-2 -mt-1" />
            </div>
            {/* alert sync */}
            <div className="h-36 ml-2 shadow-xl rounded-md bg-gray-800 p-2 cursor-pointer">
              <div className="bg-gray-900 p-2 rounded-md w-fit">
                <AiOutlineWarning className="text-gray-100 text-4xl" />
              </div>
              <p className="text-sm w-24 text-gray-200 font-semibold my-3">
                Alert Sync
              </p>
              <Switch className="-ml-2 -mt-1" />
            </div>
          </div>
          <div className="shadow-xl w-full rounded-md bg-gray-800 p-1 flex items-center justify-evenly">
            <div className="h-full flex justify-center items-center">
              <CircularProgressbar
                className="w-16"
                styles={buildStyles({
                  rotation: 0.5,
                  strokeLinecap: "butt",
                  textSize: "1rem",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${50 / 100})`,
                  textColor: "white",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
                value={50}
                text={`${50}%`}
              />
            </div>
            <p className="text-center text-sm -ml-20 mt-16 lg:mt-12 bg-gray-800 text-gray-200">
              Fuel Economy
            </p>
            <div className="h-full flex justify-center items-center">
              <CircularProgressbar
                className="w-16"
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "1rem",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${88 / 100})`,
                  textColor: "white",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
                value={88}
                text={`${88}%`}
              />
            </div>
            <p className="text-center text-sm -ml-20 mt-16 lg:mt-12 bg-gray-800 text-gray-200">
              Fuel Efficiency
            </p>
          </div>
          <div className="shadow-xl mt-2 w-full rounded-md bg-gray-800 p-2 flex space-x-2 my-2">
            <div className="p-2 rounded-md bg-gray-900 w-fit">
              <BsSpeedometer2 className="text-4xl text-gray-200 -mt-1" />
            </div>
            <div className="text-sm">
              <p className="text-gray-200 font-semibold">50 Km/Hr</p>
              <p className="text-gray-400">Average Speed</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-96 md:w-96 lg:h-[23rem] lg:w-full md:rounded-tr-lg md:rounded-br-lg w-96 rounded-md md:rounded-none my-6 md:my-0 overflow-hidden"></div>
      </div>
    </div>
  );
};

export default FuelEfficiency;
