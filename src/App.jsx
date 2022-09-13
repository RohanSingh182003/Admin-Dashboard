import React, { useRef, useState } from "react"
// import { Chart } from 'react-chartjs-2';
import { MdOutlineSpaceDashboard, MdOutlineCall, MdLogout } from 'react-icons/md';
import { GiFuelTank, GiAerialSignal, GiHamburgerMenu , GiSelfLove } from 'react-icons/gi';
import { TiDocumentText } from 'react-icons/ti';
import { AiOutlineMessage, AiOutlineCalendar, AiOutlineBell, AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsCalendar4Week } from 'react-icons/bs';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import FuelEfficiency from "./Components/FuelEfficiency";
import Documents from "./Components/Documents";
import Messages from "./Components/Messages";
import Settings from "./Components/Settings";
import Calender from "./Components/Calender";
import HelpCenter from "./Components/HelpCenter";
import DashBoard from "./Components/DashBoard";





function App() {

  const [login, setLogin] = useState(false)
  const [rightbar, setRightbar] = useState( false )
  const ref = useRef()

  const toggleSidebar = () => {
    if ( ref.current.classList.contains( '-translate-x-full' ) ) {
      ref.current.classList.remove( '-translate-x-full' )
      ref.current.classList.add( 'translate-x-0' )
    }
    else if ( ref.current.classList.contains( 'translate-x-0' ) ) {
      ref.current.classList.remove( 'translate-x-0' )
      ref.current.classList.add( '-translate-x-full' )
    }
  }
  return (
    <BrowserRouter>
      <section className='flex flex-col lg:flex-row bg-gray-900 h-full w-[100vw] lg:p-10 justify-evenly overflow-x-hidden'>
        {/* ---------------------Left Side Bar -----------------------------*/}
        <div className='w-[100vw] h-14 lg:w-2/12 relative lg:h-[90vh]'>
          <div className='text-blue-500 text-2xl font-bold text-center flex items-center justify-between relative px-4'>
            <GiHamburgerMenu onClick={toggleSidebar} className="lg:hidden cursor-pointer"/> 
          <div className="flex items-center my-1 lg:my-4 lg:ml-4"><GiFuelTank className="ml-8 mr-2 -mt-1" /> <p>Fuel</p>
          </div>
          <div onClick={()=>{setLogin(!login)}} className="w-7 h-7 bg-blue-500 rounded-full lg:hidden relative cursor-pointer">
          {login && <div className="flex flex-col items-center justify-start mx-2 absolute -right-2 top-0 bg-gray-800 py-4 rounded-lg z-20">
            <ImCross onClick={()=>{setLogin(!login)}} className="absolute right-1 top-1 text-lg text-gray-500 cursor-pointer"/>
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
              <div className="shadow-md py-1">
                <p className="text-xl m-2 flex justify-evenly items-center">
                  <FaLessThan className="text-blue-500" />
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
                <div className="bg-gray-800 shadow-xl w-56 h-32 rounded-md mx-auto mt-6 p-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 -mt-5 ml-2 p-1">
                    <GiAerialSignal className="font-semibold text-gray-200" />
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
          </div>}
          </div>
          </div>
          <div ref={ref} className='my-12 px-6 lg:px-0 py-14 lg:py-0 transform transition-transform -translate-x-full lg:translate-x-0 z-10 h-[100vh] absolute -top-10 bg-gray-900 left-0'>
            <ImCross onClick={toggleSidebar} className="absolute top-3 right-4 text-xl text-gray-500 lg:hidden cursor-pointer"/>
            <ul className='flex flex-col items-center space-y-5'>
              <Link to={"/"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><MdOutlineSpaceDashboard className="text-xl mx-2" /> Dashboard</Link>
              <Link to={"fuelefficiency"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><GiFuelTank className="text-xl mx-2" /> Fuel Efficiency</Link>
              <Link to={"documents"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><TiDocumentText className="text-xl mx-2" /> Documents</Link>
              <Link to={"messages"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><AiOutlineMessage className="text-xl mx-2" /> Messages</Link>
              <Link to={"settings"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><FiSettings className="text-xl mx-2" /> Settings</Link>
              <Link to={"calender"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><BsCalendar4Week className="text-xl mx-2" /> Calender</Link>
              <Link to={"helpcenter"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><MdOutlineCall className="text-xl mx-2" /> Help Center</Link>
              <Link to={"logout"} className='w-40 text-blue-600 flex items-center cursor-pointer font-semibold'><MdLogout className="text-xl mx-2 mt-28" /><span className="mt-28"> Log out</span></Link>
            </ul>
          </div>
        </div>
        {/* ----------------------Middle Section-------------------------------- */}
        <div className='w-full lg:w-10/12 relative bg-gray-700 rounded-md flex justify-evenly lg:p-4'>
          <div className="absolute -top-14 hidden lg:block">
        <div className="flex items-center my-1 lg:my-4 lg:ml-4 text-3xl text-blue-500"><GiFuelTank className="ml-8 mr-2 -mt-1" /> <p>Fuel</p>
          </div>
          </div>
          <div className="w-full lg:w-9/12 pl-3 pr-5">
            {/* search bar */}
            <div className="flex bg-gray-800 rounded-lg my-2 shadow-lg">
              <AiOutlineSearch className="text-2xl text-gray-200 font-semibold mt-1 mx-1" />
              <input className="border-none w-[90%] bg-gray-800 text-gray-200 focus:outline-none p-1" type="text" placeholder="Search here" name="search" id="search" />
            </div>
            {/* page components */}
            <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="fuelefficiency" element={<FuelEfficiency />} />
            <Route exact path="documents" element={<Documents />} />
            <Route exact path="messages" element={<Messages />} />
            <Route exact path="settings" element={<Settings />} />
            <Route exact path="calender" element={<Calender />} />
            <Route exact path="helpcenter" element={<HelpCenter />} />
            </Routes>
          </div>
          {/* -------------------------Right Side Bar -------------------------*/}
          <div className="absolute right-0 top-0 h-full bg-gray-800 px-2 rounded-lg rounded-tl rounded-bl hidden lg:block">
            {rightbar ? <FaGreaterThan onClick={() => { setRightbar( !rightbar ) }} className="text-gray-500 mt-4 cursor-pointer" /> : <FaLessThan onClick={() => { setRightbar( !rightbar ) }} className="text-gray-500 mt-4 cursor-pointer" />}
          </div>
          {rightbar && <div onClick={() => { setRightbar( !rightbar ) }} className="flex flex-col items-center justify-start mx-2 absolute right-4 top-2 bg-gray-800 py-4 rounded-lg">
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
              <div className="shadow-md py-1">
                <p className="text-xl m-2 flex justify-evenly items-center">
                  <FaLessThan className="text-blue-500" />
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
                    <GiAerialSignal className="font-semibold text-gray-200" />
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
          </div>}
        </div>
      </section>
      {/* footer section */}
      <footer className="text-gray-600 body-font bg-gray-900">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <div className='text-blue-500 text-2xl font-bold text-center flex items-center'> <GiFuelTank className="ml-8 mr-2 -mt-1" /> <p>Fuel</p></div>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4 flex flex-wrap items-center justify-center">© 2022 Made With <GiSelfLove className="text-lg text-red-500 mx-2"/> By <a className="mx-1" href="https://www.linkedin.com/in/rohan-singh-5b84a9223/" target="_blank"> Rohan -</a> All Rights Reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
