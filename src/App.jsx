import React from "react"
import { MdOutlineSpaceDashboard , MdOutlineCall , MdLogout } from 'react-icons/md';
import { GiFuelTank , GiAerialSignal  } from 'react-icons/gi';
import { TiDocumentText } from 'react-icons/ti';
import { AiOutlineMessage , AiOutlineCalendar , AiOutlineBell , AiOutlineDown , AiOutlineSearch , AiOutlineFieldTime , AiOutlineWarning } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsCalendar4Week , BsStopwatch , BsSpeedometer2 } from 'react-icons/bs';
import { FaLessThan } from 'react-icons/fa';
import { RiPinDistanceLine } from 'react-icons/ri';  





function App() {

  return (
    <section className='bg-gray-900 h-[100vh] w-[100vw] p-10 flex justify-evenly'>
        {/* ---------------------Left Side Bar -----------------------------*/}
      <div className='w-2/12 relative h-[90vh]'>
        <div className='text-blue-500 text-2xl font-bold text-center flex items-center'> <GiFuelTank className="ml-8 mr-2 -mt-1"/> <p>Fuel</p></div>
        <div className='my-12'>
          <ul className='flex flex-col items-center space-y-5'>
            <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><MdOutlineSpaceDashboard className="text-xl mx-2"/> Dashboard</li>
            <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><GiFuelTank className="text-xl mx-2"/> Fuel Efficiency</li>
            <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><TiDocumentText className="text-xl mx-2"/> Documents</li>
            <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><AiOutlineMessage className="text-xl mx-2"/> Messages</li>
            <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><FiSettings className="text-xl mx-2"/> Settings</li>
            <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><BsCalendar4Week className="text-xl mx-2"/> Calender</li>
            <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><MdOutlineCall className="text-xl mx-2"/> Help Center</li>
            <li className='w-40 text-blue-600 flex items-center cursor-pointer font-semibold'><MdLogout className="text-xl mx-2 mt-28"/><span className="mt-28"> Log out</span></li>
          </ul>
        </div>
      </div>
        {/* ----------------------Middle Bar-------------------------------- */}
      <div className='w-10/12 bg-gray-700 rounded-md flex justify-evenly p-4'>
        <div className="w-9/12 pl-3 pr-5">
          {/* search bar */}
          <div className="flex bg-gray-800 rounded-lg my-1 shadow-lg">
          <AiOutlineSearch className="text-2xl text-gray-200 font-semibold mt-1 mx-1"/>
          <input className="border-none w-[90%] bg-gray-800 text-gray-200 focus:outline-none p-1" type="text" placeholder="Search here" name="search" id="search" />
          </div>
          {/* options section */}
          <div className="flex justify-between items-center py-4">
            <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2">
              <div className="h-full p-1  ">
                <div className="p-1 bg-yellow-500 rounded-md w-fit my-1">
                <GiFuelTank className="text-3xl text-gray-100"/>
                </div>
                <p className="text-gray-100">6,548 L</p>
                <p className="text-gray-400">Fuel Usage</p>
              </div>
            </div>
            <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2">
              <div className="h-full p-1  ">
                <div className="p-1 bg-blue-500 rounded-md w-fit my-1">
                <RiPinDistanceLine className="text-3xl text-gray-100"/>
                </div>
                <p className="text-gray-100">31,875</p>
                <p className="text-gray-400">Distance</p>
              </div>
            </div>
            <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2">
              <div className="h-full p-1  ">
                <div className="p-1 bg-cyan-500 rounded-md w-fit my-1">
                <AiOutlineFieldTime className="text-3xl text-gray-100"/>
                </div>
                <p className="text-gray-100">1h:22m:18s</p>
                <p className="text-gray-400">Ideal Time</p>
              </div>
            </div>
          </div>
          {/* summary section */}
          <p className="text-gray-100">Summary</p>
          <div className="h-80 w-full rounded-lg shadow-2xl my-3 flex justify-evenly">
            <div className="w-4/12 h-full bg-gray-900 p-4 rounded-lg rounded-r flex flex-col justify-evenly">
              <p className="text-gray-400">Vehicle Control</p>
              <div className="flex justify-between">
                <div className="h-28 w-[45%] shadow-xl rounded-md bg-gray-800 p-2">
                  <div className="bg-gray-900 p-2 rounded-md w-fit">
                    <BsStopwatch className="text-gray-100 text-xl"/>
                  </div>
                  <p className="text-[0.6rem] w-20 text-gray-200 font-semibold my-1">Drive Duration</p>
                  <div className="flex items-center p-[0.1rem] my-2 rounded-xl bg-gray-100 w-fit">
                    <p className="text-[0.6rem]">On</p>
                    <div className="h-3 w-3 rounded-full bg-blue-500 ml-1"></div>
                  </div>
                </div>
                <div className="h-28 w-[45%] shadow-xl rounded-md bg-gray-800 p-2">
                <div className="bg-gray-900 p-2 rounded-md w-fit">
                    <AiOutlineWarning className="text-gray-100 text-xl"/>
                  </div>
                  <p className="text-[0.6rem] w-20 text-gray-200 font-semibold my-1">Alert Sync</p>
                  <div className="flex items-center p-[0.1rem] my-2 rounded-xl border w-fit">
                    <p className="text-[0.6rem] text-gray-300">Off</p>
                    <div className="h-3 w-3 rounded-full bg-gray-100 ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="border h-16 w-full rounded-md bg-gray-800 p-1 flex items-center justify-evenly">
                <div className="w-[45%] h-full border"></div>
                <div className="w-[45%] h-full border"></div>
              </div>
              <div className="shadow-xl h-12 w-full rounded-md bg-gray-800 p-2 flex space-x-2">
                <div className="p-2 rounded-md bg-gray-900 w-fit">
                  <BsSpeedometer2 className="text-2xl text-gray-200 -mt-1"/>
                </div>
                <div className="text-xs">
                  <p className="text-gray-200 font-semibold">50 Km/Hr</p>
                  <p className="text-gray-400">Average Speed</p>
                </div>
              </div>
            </div>
            <div className="w-8/12 h-full bg-gray-800 p-4 rounded-lg rounded-l">

            </div>
          </div>
        </div>
        {/* -------------------------Right Side Bar -------------------------*/}
        <div className="flex flex-col items-center justify-start">
          <div className="flex justify-evenly items-center mx-2">
              <div className="mx-1 p-2 rounded-md bg-gray-800 shadow-md cursor-pointer"><AiOutlineCalendar className="text-2xl text-gray-200"/></div>
              <div className="mx-1 p-2 rounded-md bg-gray-800 shadow-md cursor-pointer"><AiOutlineBell className="text-2xl text-gray-200"/></div>
              <div className="w-40 items-center flex mx-2 cursor-pointer">
                <div className="w-20 h-10 flex items-center rounded-md">
                <img className="rounded-lg shadow-md h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaytfpFF7DhpFlyNStvoSloA_hGLvMD2CmcIomfVdv&s" alt="" />
                  </div>
                <div>
                  <div className="w-24 mx-2 text-gray-200 flex"><p className="text-sm"> Mike Smith</p> <AiOutlineDown className="text-xs mt-1 mx-1 text-gray-400"/></div>
                  <p className="mx-2 text-xs text-gray-300">Admin</p>
                </div>
              </div>
          </div>
          <div className="rounded-md shadow-2xl mt-2">
            <div className="shadow-md py-1">
              <p className="text-xl m-2 flex justify-evenly items-center">
                <FaLessThan className="text-blue-500"/> 
              <p className="mx-2 text-gray-300">Fleet&nbsp;Details</p>
              <p className="text-xs text-gray-400 -mb-1">Old&nbsp;Street&nbsp;,&nbsp;NewYork</p>
              </p>
            </div>
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
              <div className="bg-gray-800 shadow-xl w-56 h-20 rounded-md mx-auto mt-6 p-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 -mt-5 ml-2 p-1">
                  <GiAerialSignal className="font-semibold text-gray-200"/>
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
      </div>
    </section>
  )
}

export default App
