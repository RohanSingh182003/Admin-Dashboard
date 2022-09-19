import React, { useState } from "react"
import EngineLoad from "./TopCards/EngineLoad"
import EngineOnOff from "./TopCards/EngineOnOff"
import TripDuration from "./TopCards/TripDuration"
import Battery from "./MissionCenter/Battery";
import CarTemperature from "./MissionCenter/CarTemperature";
import Diagonastic from "./MissionCenter/Diagonastic";
import Fuel from "./MissionCenter/Fuel";
import Immobilization from "./MissionCenter/Immobilization";
import Sos from "./MissionCenter/Sos";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from 'react-toastify';
import Speed from './Others/Speed'
import Rpm from './Others/Rpm'
import Map from "./Others/Map";


const DashBoard = () => {

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
    if(pin.length === 4){
      toast.success('Immobilization Initiated.')
      setPin('')
      handleClose();
    setChecked(false);
  }
  else if(pin.length > 0 && pin.length < 4){
    toast.warn('PIN is too short! fill it correctly.')
  }  
  else if(pin.length > 4){
    toast.warn('PIN is too long! it should be a Four digit number.')
  }
  else{
    toast.error('Please Enter the PIN.')
  }
  };
  return (
    <div className='h-full md:h-[88vh] w-full lg:py-6 xl:py-8 flex items-center justify-evenly flex-col overflow-hidden'>
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
          autoComplete="false" placeholder="Enter PIN Secretly" className="bg-gray-800 focus:outline-none border-b w-full text-gray-200 border-blue-500 focus:border-b-2 focus:border-blue-500 p-2 px-1 placeholder-transparent peer" type="number" name="pin" id="pin" />
          <label className="absolute transition-all -top-3.5 left-1 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-xs" htmlFor="pin">Enter PIN Secretly</label>
          </div>
          <button onClick={()=>{handleSubmit()}} className="p-2 w-full text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-md">Submit</button>
        </div>
      </Box>
    </Modal>
      <div className="flex flex-wrap justify-evenly items-center w-full my-4 px-4 md:px-0 xl:px-6">
        <EngineLoad props={{load:70}}/>
        <EngineOnOff props={{state:'on'}}/>
        <TripDuration props={{duration: 354}}/>
      </div>
      <div className="w-full flex-col md:flex-row md:w-10/12 md:h-[75%] bg-gray-900 rounded-md flex md:pr-2">
        <div className="w-full md:w-5/12 xl:w-4/12 md:h-full bg-gray-900 flex flex-col justify-evenly">
          <p className="text-center text-xl my-2 text-gray-200">Mission Center</p>
          <div className="flex justify-evenly mb-2">
          <Immobilization props={{checked , handleChange , handleOpen , open}}/>
          <Sos/>
          </div>
          <div className="flex justify-evenly mb-2">
            <Fuel props={{fuelAmount:35}}/>
            <Battery props={{voltage: 11.5}}/>
          </div>
          <div className="flex justify-evenly mb-2">
            <CarTemperature props={{temperature:102}}/>
            <Diagonastic props={{dgc:true}}/>
          </div>
        </div>
        {/* map section */}
        <div className="w-full md:h-full my-2 md:my-0 h-96 md:w-7/12 xl:w-8/12 bg-gray-800 md:bg-gray-900 text-gray-200 md:rounded-md">
          <div className="h-[10%] w-full flex justify-evenly">
            <Speed props={{speed: 45}}/>
            <Rpm props={{rpm: 5040}}/>
          </div>
          <Map/>
        </div>
      </div>
    </div>
  )
}

export default DashBoard