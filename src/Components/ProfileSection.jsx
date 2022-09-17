import React from 'react'
import { GiAerialSignal} from 'react-icons/gi';
import {  AiOutlineCalendar, AiOutlineBell, AiOutlineDown } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';


const ProfileSection = ({props}) => {
  return (
    <div className="flex flex-col items-center justify-start mx-2 absolute right-4 top-2 bg-gray-800 py-4 rounded-lg z-10 lg:z-0 -mr-6 -mt-3 lg:mr-4 lg:mt-0">
        <ImCross onClick={()=>{props.setLogin(!props.login)}} className='lg:hidden right-1 top-1 text-gray-600 absolute text-md'/>
            <div className="flex justify-evenly items-center mx-2">
              <div className="mx-1 p-2 rounded-md bg-gray-800 shadow-md cursor-pointer"><AiOutlineCalendar className="text-2xl text-gray-200" /></div>
              <div className="mx-1 p-2 rounded-md bg-gray-800 shadow-md cursor-pointer"><AiOutlineBell className="text-2xl text-gray-200" /></div>
              <div className="w-40 items-center flex mx-2 cursor-pointer">
                <div className="w-20 h-10 flex items-center rounded-md">
                  <img className="rounded-lg shadow-md h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaytfpFF7DhpFlyNStvoSloA_hGLvMD2CmcIomfVdv&s" alt="" />
                </div>
                <div>
                  <div className="w-24 mx-2 text-gray-200 flex"><p className="text-sm"> Mike Smith</p> <AiOutlineDown className="text-xs mt-1 mx-1 text-gray-400" /></div>
                  <p className="mx-2 text-xs text-gray-300">Admin</p>
                </div>
              </div>
            </div>
            <div className="rounded-md shadow-2xl mt-2">
              <div className="px-4 py-2">
                <div>
                  <p className="text-gray-200">ER 14 D 9549</p>
                  <p className="text-xs text-gray-400">Gurz Old Center</p>
                </div>
                <div className="w-56 h-36 rounded-md mx-auto my-2 flex items-center">
                  <img className="rounded-md" src="https://images.freeimages.com/images/previews/7ed/truck-1560934.jpg" alt="" />
                </div>
                <div className="my-2 flex justify-evenly">
                  <div>
                    <p className="text-xs text-gray-400">Speed</p>
                    <p className="text-sm text-gray-200">140 km/h</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Altitude</p>
                    <p className="text-sm text-gray-200">154 m</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Direction</p>
                    <p className="text-sm text-gray-200">NE</p>
                  </div>
                </div>
                <div className="bg-gray-800 shadow-xl w-56 lg:h-24 rounded-md mx-auto mt-6 p-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 -mt-5 ml-2 p-1">
                    <GiAerialSignal className="font-semibold text-gray-200 -mt-1 -ml-1 lg:mt-0 lg:ml-0" />
                  </div>
                  <div className="flex justify-between text-gray-200 font-semibold">
                    <p className="text-xs"> EW Trucks Private Limited</p>
                    <p className="text-[0.6rem]">18 Cliants</p>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <p className="text-xs">85 New York, II Pharse Old Street</p>
                    <p className="text-[0.6rem] mt-5">Total&nbsp;Drivers</p>
                  </div>
                  <div className="flex justify-between text-gray-400 pb-2">
                    <p className="text-xs">New York, USA</p>
                    <p className="text-[0.6rem] text-gray-200 font-semibold">64452 KM</p>
                  </div>
                </div>
                <div className="w-56 mx-auto my-2 flex justify-between items-center">
                  <div className="h-7 w-7 rounded-md flex items-center">
                    <img className="rounded-md h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBL-8_Qb0fNJjUsAGBhvi8VTGx_daWwBDGQg&usqp=CAU" alt="" />
                  </div>
                  <div>
                    <p className="text-gray-200 text-sm">Kevin Pitersian</p>
                    <p className="text-gray-400 text-xs">USA</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-200 p-2">42 Trips</p>
                  </div>
                </div>
                <div className="bg-blue-500 w-56 rounded-md mx-auto my-2">
                  <p className="text-center p-2 text-gray-100">Continue</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ProfileSection