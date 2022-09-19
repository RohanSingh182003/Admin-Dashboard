import React from "react"
import EngineLoad from "./TopCards/EngineLoad"
import EngineOnOff from "./TopCards/EngineOnOff"
import TripDuration from "./TopCards/TripDuration"
import Battery from "./MissionCenter/Battery";
import CarTemperature from "./MissionCenter/CarTemperature";
import Diagonastic from "./MissionCenter/Diagonastic";
import Fuel from "./MissionCenter/Fuel";
import Immobilization from "./MissionCenter/Immobilization";
import Sos from "./MissionCenter/Sos";

const DashBoard = () => {
  return (
    <div className='h-full md:h-[88vh] w-full lg:py-6 xl:py-8 flex items-center justify-evenly flex-col overflow-hidden'>
      <div className="flex flex-wrap justify-evenly items-center w-full my-4 xl:px-6">
        <EngineLoad props={{load:70}}/>
        <EngineOnOff props={{state:'on'}}/>
        <TripDuration/>
      </div>
      <div className="w-full flex-col md:flex-row md:w-10/12 md:h-[75%] bg-gray-900 rounded-md flex md:pr-2">
        <div className="w-full md:w-5/12 xl:w-4/12 md:h-full bg-gray-900 flex flex-col justify-evenly">
          <p className="text-center text-xl my-2 text-gray-200">Mission Center</p>
          <div className="flex justify-evenly">
            {/* immobilization and sos */}
          <Immobilization/>
          <Sos/>
          </div>
          <div className="flex justify-evenly my-2">
            <Fuel/>
            <Battery/>
          </div>
          <div className="flex justify-evenly my-2">
            <CarTemperature/>
            <Diagonastic/>
          </div>
        </div>
        {/* map section */}
        <div className="w-full md:h-full my-2 md:my-0 h-96 md:w-7/12 xl:w-8/12 bg-gray-800 md:bg-gray-900 text-gray-200 md:rounded-md">
          <div className="h-[10%] w-full flex justify-evenly">
            <div className="w-[50%] border-r border-gray-500 grid place-items-center">
              <p><span className="font-bold">Speed: </span>NA Km/h</p>
            </div>
            <div className="w-[50%] grid place-items-center">
            <p><span className="font-bold">RPM: </span>NA</p>
            </div>
          </div>
          <div className="h-[88%] bg-blue-600 w-full md:rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard