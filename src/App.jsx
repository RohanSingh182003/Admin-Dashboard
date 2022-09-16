import React, { useRef, useState } from "react"
// import { Chart } from 'react-chartjs-2';
import { MdOutlineSpaceDashboard, MdOutlineCall, MdLogout } from 'react-icons/md';
import { GiFuelTank, GiAerialSignal, GiHamburgerMenu} from 'react-icons/gi';
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
import Footer from "./Components/Footer";





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
    <section className="flex flex-col bg-gray-900 h-full w-[100vw] lg:p-10">
      <div className='flex flex-col lg:flex-row justify-evenly'>
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
              <Link to={"/"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold -ml-10'><div className="flex items-center my-1 lg:my-4 lg:ml-4 text-3xl text-blue-500"><GiFuelTank className="ml-8 mr-2 -mt-1" /> <p>Fuel</p>
          </div></Link>
              <Link to={"/"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500'><MdOutlineSpaceDashboard className="text-xl mx-2" /> Dashboard</Link>
              <Link to={"fuelefficiency"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500'><GiFuelTank className="text-xl mx-2" /> Fuel Efficiency</Link>
              <Link to={"documents"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500'><TiDocumentText className="text-xl mx-2" /> Documents</Link>
              <Link to={"messages"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500'><AiOutlineMessage className="text-xl mx-2" /> Messages</Link>
              <Link to={"settings"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500'><FiSettings className="text-xl mx-2" /> Settings</Link>
              <Link to={"calender"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500'><BsCalendar4Week className="text-xl mx-2" /> Calender</Link>
              <Link to={"helpcenter"} className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500'><MdOutlineCall className="text-xl mx-2" /> Help Center</Link>
              <Link to={"logout"} className='w-40 text-blue-600 flex items-center cursor-pointer font-semibold'><MdLogout className="text-xl mx-2 mt-28" /><span className="mt-28"> Log out</span></Link>
            </ul>
          </div>
        </div>
        {/* ----------------------Middle Section-------------------------------- */}
        <div className='w-full lg:w-10/12 relative bg-gray-700 rounded-md flex justify-evenly lg:p-4'>
          <div className="w-full lg:w-9/12 pl-3 pr-5">
            {/* search bar */}
            {/* <div className="flex bg-gray-800 rounded-lg my-2 shadow-lg">
              <AiOutlineSearch className="text-2xl text-gray-200 font-semibold mt-1 mx-1" />
              <input className="border-none w-[90%] bg-gray-800 text-gray-200 focus:outline-none p-1" type="text" placeholder="Search here" name="search" id="search" />
            </div> */}
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
      </div>
      <Footer/>
      </section>
      {/* footer section */}
    </BrowserRouter>
  )
}

export default App
