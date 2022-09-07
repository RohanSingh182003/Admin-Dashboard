import React, { useRef, useState } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { Chart } from 'react-chartjs-2';
import { MdOutlineSpaceDashboard, MdOutlineCall, MdLogout } from 'react-icons/md';
import { GiFuelTank, GiAerialSignal, GiHamburgerMenu , GiSelfLove } from 'react-icons/gi';
import { TiDocumentText } from 'react-icons/ti';
import { AiOutlineMessage, AiOutlineCalendar, AiOutlineBell, AiOutlineDown, AiOutlineSearch, AiOutlineFieldTime, AiOutlineWarning } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsCalendar4Week, BsStopwatch, BsSpeedometer2 } from 'react-icons/bs';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { RiPinDistanceLine } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';





function App() {

  const [rightbar, setRightbar] = useState( false )
  const ref = useRef()

  const toggleSidebar = () => {
    if ( ref.current.classList.contains( 'translate-x-full' ) ) {
      ref.current.classList.remove( 'translate-x-full' )
      ref.current.classList.add( 'translate-x-0' )
    }
    else if ( ref.current.classList.contains( 'translate-x-0' ) ) {
      ref.current.classList.remove( 'translate-x-0' )
      ref.current.classList.add( 'translate-x-full' )
    }
  }
  return (
    <>
      {/*only for large devices */}
      <section className='hidden lg:flex bg-gray-900 h-full w-[100vw] p-10 justify-evenly'>
        {/* ---------------------Left Side Bar -----------------------------*/}
        <div className='w-2/12 relative h-[90vh]'>
          <div className='text-blue-500 text-2xl font-bold text-center flex items-center'> <GiFuelTank className="ml-8 mr-2 -mt-1" /> <p>Fuel</p></div>
          <div className='my-12'>
            <ul className='flex flex-col items-center space-y-5'>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><MdOutlineSpaceDashboard className="text-xl mx-2" /> Dashboard</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><GiFuelTank className="text-xl mx-2" /> Fuel Efficiency</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><TiDocumentText className="text-xl mx-2" /> Documents</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><AiOutlineMessage className="text-xl mx-2" /> Messages</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><FiSettings className="text-xl mx-2" /> Settings</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><BsCalendar4Week className="text-xl mx-2" /> Calender</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><MdOutlineCall className="text-xl mx-2" /> Help Center</li>
              <li className='w-40 text-blue-600 flex items-center cursor-pointer font-semibold'><MdLogout className="text-xl mx-2 mt-28" /><span className="mt-28"> Log out</span></li>
            </ul>
          </div>
        </div>
        {/* ----------------------Middle Section-------------------------------- */}
        <div className='w-10/12 relative min-h-full bg-gray-700 rounded-md flex justify-evenly p-4'>
          <div className="w-9/12 pl-3 pr-5">
            {/* search bar */}
            <div className="flex bg-gray-800 rounded-lg my-1 shadow-lg">
              <AiOutlineSearch className="text-2xl text-gray-200 font-semibold mt-1 mx-1" />
              <input className="border-none w-[90%] bg-gray-800 text-gray-200 focus:outline-none p-1" type="text" placeholder="Search here" name="search" id="search" />
            </div>
            {/* options section */}
            <div className="flex justify-between items-center py-4">
              <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2 flex justify-evenly">
                <div className="h-full p-1  ">
                  <div className="p-1 bg-yellow-500 rounded-md w-fit my-1">
                    <GiFuelTank className="text-3xl text-gray-100" />
                  </div>
                  <p className="text-gray-100">6,548 L</p>
                  <p className="text-gray-400">Fuel&nbsp;Usage</p>
                </div>
                <div className="h-24 w-20">
                  {/* create graph here  */}
                  {/* <Chart type='line' data={chartData} /> */}
                </div>
              </div>
              <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2 flex justify-evenly">
                <div className="h-full p-1  ">
                  <div className="p-1 bg-blue-500 rounded-md w-fit my-1">
                    <RiPinDistanceLine className="text-3xl text-gray-100" />
                  </div>
                  <p className="text-gray-100">31,875</p>
                  <p className="text-gray-400">Distance</p>
                </div>
                <div className="h-24 w-20">
                  {/* create graph here  */}
                  {/* <Chart type='line' data={chartData} /> */}
                </div>
              </div>
              <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2 flex justify-evenly">
                <div className="h-full p-1  ">
                  <div className="p-1 bg-cyan-500 rounded-md w-fit my-1">
                    <AiOutlineFieldTime className="text-3xl text-gray-100" />
                  </div>
                  <p className="text-gray-100">1h:22m:18s</p>
                  <p className="text-gray-400">Ideal Time</p>
                </div>
                <div className="h-24 w-20">
                  {/* create graph here  */}
                  {/* <Chart type='line' data={chartData} /> */}
                </div>
              </div>
            </div>
            {/* summary section */}
            <p className="text-gray-100">Summary</p>
            <div className="h-80 w-full rounded-lg shadow-2xl my-3 flex justify-center">
              <div className="w-4/12 h-full bg-gray-900 p-4 rounded-lg rounded-r flex flex-col justify-evenly">
                <p className="text-gray-400">Vehicle Control</p>
                <div className="flex justify-between">
                  <div className="h-28 w-[45%] shadow-xl rounded-md bg-gray-800 p-2">
                    <div className="bg-gray-900 p-2 rounded-md w-fit">
                      <BsStopwatch className="text-gray-100 text-xl" />
                    </div>
                    <p className="text-[0.6rem] w-20 text-gray-200 font-semibold my-1">Drive Duration</p>
                    <div className="flex items-center p-[0.1rem] my-2 rounded-xl bg-gray-100 w-fit">
                      <p className="text-[0.6rem]">On</p>
                      <div className="h-3 w-3 rounded-full bg-blue-500 ml-1"></div>
                    </div>
                  </div>
                  <div className="h-28 w-[45%] shadow-xl rounded-md bg-gray-800 p-2">
                    <div className="bg-gray-900 p-2 rounded-md w-fit">
                      <AiOutlineWarning className="text-gray-100 text-xl" />
                    </div>
                    <p className="text-[0.6rem] w-20 text-gray-200 font-semibold my-1">Alert Sync</p>
                    <div className="flex items-center p-[0.1rem] my-2 rounded-xl border w-fit">
                      <p className="text-[0.6rem] text-gray-300">Off</p>
                      <div className="h-3 w-3 rounded-full bg-gray-100 ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="shadow-xl h-16 w-full rounded-md bg-gray-800 p-1 flex items-center justify-evenly">
                  <div className="w-[45%] h-full flex justify-center items-center">
                    <CircularProgressbar
                      className="w-14"
                      styles={buildStyles( {
                        rotation: 0.5,
                        strokeLinecap: 'butt',
                        textSize: '1rem',
                        pathTransitionDuration: 0.5,
                        pathColor: `rgba(62, 152, 199, ${50 / 100})`,
                        textColor: 'white',
                        trailColor: 'white',
                        backgroundColor: 'white',
                      } )}
                      value={50} text={`${50}%`} />
                  </div>
                  <p className="text-center text-xs -ml-20 mt-10 bg-gray-800 text-gray-200">Fuel Economy</p>
                  <div className="w-[45%] h-full flex justify-center items-center">
                    <CircularProgressbar
                      className="w-14"
                      styles={buildStyles( {
                        rotation: 0.25,
                        strokeLinecap: 'butt',
                        textSize: '1rem',
                        pathTransitionDuration: 0.5,
                        pathColor: `rgba(62, 152, 199, ${88 / 100})`,
                        textColor: 'white',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      } )}
                      value={88} text={`${88}%`} />
                  </div>
                  <p className="text-center text-xs -ml-20 mt-10 bg-gray-800 text-gray-200">Fuel Efficiency</p>
                </div>
                <div className="shadow-xl h-12 w-full rounded-md bg-gray-800 p-2 flex space-x-2">
                  <div className="p-2 rounded-md bg-gray-900 w-fit">
                    <BsSpeedometer2 className="text-2xl text-gray-200 -mt-1" />
                  </div>
                  <div className="text-xs">
                    <p className="text-gray-200 font-semibold">50 Km/Hr</p>
                    <p className="text-gray-400">Average Speed</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[26rem] max-w-[26rem] h-full bg-gray-800 p-4 rounded-lg rounded-l flex flex-wrap justify-center items-center relative px-6">
                {/* reverse */}
                <div className="h-28 w-28 border-b border-r border-l border-gray-500 relative">
                  <CircularProgressbar
                    className="w-14 -mt-3 -ml-7 bg-gray-800"
                    styles={buildStyles( {
                      rotation: 0.75,
                      strokeLinecap: 'butt',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(7, 16, 74, ${7 / 100})`,
                      textColor: 'white',
                      trailColor: 'white',
                      backgroundColor: 'white',
                    } )}
                    value={7} />
                  <p className="absolute top-1 -left-2 text-gray-300">7%</p>
                  <p className="text-blue-500 absolute -top-8 -left-6 text-sm">Reverse</p>
                </div>
                {/* gear 1 */}
                <div className="h-28 w-28 border-b border-r border-gray-500 relative">
                  <CircularProgressbar
                    className="w-14 -mt-3 -ml-7 bg-gray-800"
                    styles={buildStyles( {
                      rotation: 0.5,
                      strokeLinecap: 'butt',
                      textSize: '1rem',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${16 / 100})`,
                      textColor: 'white',
                      trailColor: 'white',
                      backgroundColor: 'white',
                    } )}
                    value={16} />
                  <p className="absolute top-1 -left-3 text-gray-300">16%</p>
                  <p className="text-gray-300 absolute -top-8 -left-5 text-sm">Gear 1</p>
                </div>
                {/* gear 3 */}
                <div className="h-28 w-28 border-b border-r border-gray-500 relative">
                  <CircularProgressbar
                    className="w-14 -mt-3 -ml-7 bg-gray-800"
                    styles={buildStyles( {
                      rotation: 0.5,
                      strokeLinecap: 'butt',
                      textSize: '1rem',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${10 / 100})`,
                      textColor: 'white',
                      trailColor: 'white',
                      backgroundColor: 'white',
                    } )}
                    value={10} />
                  <p className="absolute top-1 -left-3 text-gray-300">10%</p>
                  <p className="text-gray-300 absolute -top-8 -left-5 text-sm">Gear 3</p>
                  {/* gear 5 */}
                  <CircularProgressbar
                    className="w-14 absolute -top-3 -right-8 bg-gray-800"
                    styles={buildStyles( {
                      rotation: 0.5,
                      strokeLinecap: 'butt',
                      textSize: '1rem',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${16 / 100})`,
                      textColor: 'white',
                      trailColor: 'white',
                      backgroundColor: 'white',
                    } )}
                    value={16} />
                  <p className="absolute top-1 -right-6 text-gray-300">16%</p>
                  <p className="text-gray-300 absolute -top-8 -right-7 text-sm">Gear 5</p>
                </div>
                {/* gear 2 */}
                <div className="h-28 w-28 border-r border-gray-500 -mt-16 relative">
                  <CircularProgressbar
                    className="w-14 absolute -bottom-4 -right-7 bg-gray-800"
                    styles={buildStyles( {
                      rotation: 0.5,
                      strokeLinecap: 'butt',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${18 / 100})`,
                      textColor: 'white',
                      trailColor: 'white',
                      backgroundColor: 'white',
                    } )}
                    value={18} />
                  <p className="absolute bottom-0 -right-5 text-gray-300">18%</p>
                  <p className="text-gray-300 absolute -bottom-9 -right-6 text-sm">Gear 2</p>
                </div>
                {/* gear 4 */}
                <div className="h-28 w-28 border-r border-gray-500 -mt-16 relative">
                  <CircularProgressbar
                    className="w-14 absolute -bottom-4 -right-7 bg-gray-800"
                    styles={buildStyles( {
                      rotation: 0.5,
                      strokeLinecap: 'butt',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${12 / 100})`,
                      textColor: 'white',
                      trailColor: 'white',
                      backgroundColor: 'white',
                    } )}
                    value={12} />
                  <p className="absolute bottom-0 -right-5 text-gray-300">12%</p>
                  <p className="text-gray-300 absolute -bottom-9 -right-6 text-sm">Gear 4</p>
                  <CircularProgressbar
                    className="w-14 absolute -top-6 -right-7 bg-gray-800"
                    styles={buildStyles( {
                      rotation: 0.5,
                      strokeLinecap: 'butt',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${7 / 100})`,
                      textColor: 'white',
                      trailColor: 'white',
                      backgroundColor: 'white',
                    } )}
                    value={7} />
                  <p className="absolute -top-2 -right-4 text-gray-300">7%</p>
                </div>
                {/* gear 6 */}
                <div className="h-28 w-28 border-r border-gray-500 -mt-16 relative">
                  <CircularProgressbar
                    className="w-14 absolute -bottom-4 -right-7 bg-gray-800"
                    styles={buildStyles( {
                      rotation: 0.5,
                      strokeLinecap: 'butt',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${8 / 100})`,
                      textColor: 'white',
                      trailColor: 'white',
                      backgroundColor: 'white',
                    } )}
                    value={8} />
                  <p className="absolute bottom-0 -right-5 text-gray-300">08%</p>
                  <p className="text-gray-300 absolute -bottom-9 -right-6 text-sm">Gear 6</p>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------Right Side Bar -------------------------*/}
          <div className="absolute right-0 top-0 h-full bg-gray-800 px-2 rounded-lg rounded-tl rounded-bl">
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

      {/* other devices */}
      {/* navbar */}
      <section className="lg:hidden bg-gray-900 h-full overflow-x-hidden">
        <nav className="flex items-center justify-between py-2 border-b relative">
          <div className='text-blue-500 text-2xl font-bold text-center flex items-center'> <GiFuelTank className="ml-8 mr-2 -mt-1" /> <p>Fuel</p></div>
          <div> <GiHamburgerMenu onClick={toggleSidebar} className="text-xl text-gray-200 mx-4" /></div>
          <div onClick={toggleSidebar} ref={ref} className="absolute shadow-xl bg-gray-800 top-0 right-0 h-[100vh] py-16 px-4 transition-transform translate-x-full transform">
            <div> <ImCross className="text-xl text-gray-400 font-extralight absolute top-3 right-4" /></div>
            <ul className='flex flex-col items-center space-y-5'>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><MdOutlineSpaceDashboard className="text-xl mx-2" /> Dashboard</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><GiFuelTank className="text-xl mx-2" /> Fuel Efficiency</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><TiDocumentText className="text-xl mx-2" /> Documents</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><AiOutlineMessage className="text-xl mx-2" /> Messages</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><FiSettings className="text-xl mx-2" /> Settings</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><BsCalendar4Week className="text-xl mx-2" /> Calender</li>
              <li className='w-40 text-gray-300 flex items-center cursor-pointer font-semibold'><MdOutlineCall className="text-xl mx-2" /> Help Center</li>
              <li className='w-40 text-blue-600 flex items-center cursor-pointer font-semibold'><MdLogout className="text-xl mx-2 mt-28" /><span className="mt-28"> Log out</span></li>
            </ul>
          </div>
        </nav>
        {/* upper section */}
        <div className="px-4 my-2">
          {/* search */}
          <div className="flex bg-gray-800 rounded-lg my-1 shadow-lg">
            <AiOutlineSearch className="text-2xl text-gray-200 font-semibold mt-1 mx-1" />
            <input className="border-none w-[90%] bg-gray-800 text-gray-200 focus:outline-none p-1" type="text" placeholder="Search here" name="search" id="search" />
          </div>
          {/* options */}
          <div className="flex justify-between items-center py-4 w-full overflow-x-scroll">
            <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2 flex justify-evenly mx-6">
              <div className="h-full p-1  ">
                <div className="p-1 bg-yellow-500 rounded-md w-fit my-1">
                  <GiFuelTank className="text-3xl text-gray-100" />
                </div>
                <p className="text-gray-100">6,548 L</p>
                <p className="text-gray-400">Fuel&nbsp;Usage</p>
              </div>
              <div className="h-24 w-20">
                {/* create graph here  */}
                {/* <Chart type='line' data={chartData} /> */}
              </div>
            </div>
            <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2 flex justify-evenly mx-6">
              <div className="h-full p-1  ">
                <div className="p-1 bg-blue-500 rounded-md w-fit my-1">
                  <RiPinDistanceLine className="text-3xl text-gray-100" />
                </div>
                <p className="text-gray-100">31,875</p>
                <p className="text-gray-400">Distance</p>
              </div>
              <div className="h-24 w-20">
                {/* create graph here  */}
                {/* <Chart type='line' data={chartData} /> */}
              </div>
            </div>
            <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2 flex justify-evenly mx-6">
              <div className="h-full p-1  ">
                <div className="p-1 bg-cyan-500 rounded-md w-fit my-1">
                  <AiOutlineFieldTime className="text-3xl text-gray-100" />
                </div>
                <p className="text-gray-100">1h:22m:18s</p>
                <p className="text-gray-400">Ideal Time</p>
              </div>
              <div className="h-24 w-20">
                {/* create graph here  */}
                {/* <Chart type='line' data={chartData} /> */}
              </div>
            </div>
          </div>
          {/* vehicle control section */}
          <div className="w-full h-full bg-gray-900 p-4 rounded-lg rounded-r flex flex-col justify-evenly">
            <p className="text-gray-400">Vehicle Control</p>
            <div className="flex justify-between md:justify-evenly my-4">
              <div className="w-36 md:w-44 shadow-xl rounded-md bg-gray-800 p-2">
                <div className="bg-gray-900 p-2 rounded-md w-fit">
                  <BsStopwatch className="text-gray-100 text-xl" />
                </div>
                <p className="text-sm  text-gray-200 font-semibold my-2">Drive Duration</p>
                <div className="flex items-center p-[0.1rem] my-2 rounded-xl bg-gray-100 w-fit">
                  <p className="text-xs">On</p>
                  <div className='h-3 w-3 rounded-full bg-blue-500 ml-1'>
                  </div>
                </div>
              </div>
              <div className="w-36 md:w-44 shadow-xl rounded-md bg-gray-800 p-2">
                <div className="bg-gray-900 p-2 rounded-md w-fit">
                  <AiOutlineWarning className="text-gray-100 text-xl" />
                </div>
                <p className="text-sm my-2 text-gray-200 font-semibold">Alert Sync</p>
                <div className="flex items-center p-[0.1rem] my-2 rounded-xl border w-fit">
                  <p className="text-xs text-gray-300">Off</p>
                  <div className="h-3 w-3 rounded-full bg-gray-100 ml-1"></div>
                </div>
              </div>
            </div>
            <div className="shadow-xl h-32 w-full rounded-md bg-gray-800 p-1 flex items-center justify-evenly mb-4">
              <div className="w-[45%] h-full flex justify-center items-center">
                <CircularProgressbar
                  className="w-20"
                  styles={buildStyles( {
                    rotation: 0.5,
                    strokeLinecap: 'butt',
                    textSize: '1rem',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${50 / 100})`,
                    textColor: 'white',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  } )}
                  value={50} text={`${50}%`} />
              </div>
              <p className="text-center text-md -ml-28 mt-16 bg-gray-800 text-gray-200">Fuel Economy</p>
              <div className="w-[45%] h-full flex justify-center items-center">
                <CircularProgressbar
                  className="w-20"
                  styles={buildStyles( {
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '1rem',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${88 / 100})`,
                    textColor: 'white',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  } )}
                  value={88} text={`${88}%`} />
              </div>
              <p className="text-center text-md -ml-28 mt-16 bg-gray-800 text-gray-200">Fuel Efficiency</p>
            </div>
            <div className="shadow-xl w-full rounded-md bg-gray-800 p-2 flex space-x-2">
              <div className="p-2 rounded-md bg-gray-900 w-fit">
                <BsSpeedometer2 className="text-2xl text-gray-200 -mt-1" />
              </div>
              <div className="text-md">
                <p className="text-gray-200 font-semibold">50 Km/Hr</p>
                <p className="text-gray-400">Average Speed</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll flex flex-col md:justify-center items-center">
            <p className="text-gray-400 my-4">Gear Usage</p>
            <div className="min-w-[26rem] max-w-[26rem] h-80 bg-gray-800 p-4 rounded-lg rounded-l flex flex-wrap justify-center items-center relative px-6 mx-auto mb-4">
              {/* reverse */}
              <div className="h-28 w-28 border-b border-r border-l border-gray-500 relative">
                <CircularProgressbar
                  className="w-14 -mt-3 -ml-7 bg-gray-800"
                  styles={buildStyles( {
                    rotation: 0.75,
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(7, 16, 74, ${7 / 100})`,
                    textColor: 'white',
                    trailColor: 'white',
                    backgroundColor: 'white',
                  } )}
                  value={7} />
                <p className="absolute top-1 -left-2 text-gray-300">7%</p>
                <p className="text-blue-500 absolute -top-8 -left-6 text-sm">Reverse</p>
              </div>
              {/* gear 1 */}
              <div className="h-28 w-28 border-b border-r border-gray-500 relative">
                <CircularProgressbar
                  className="w-14 -mt-3 -ml-7 bg-gray-800"
                  styles={buildStyles( {
                    rotation: 0.5,
                    strokeLinecap: 'butt',
                    textSize: '1rem',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${16 / 100})`,
                    textColor: 'white',
                    trailColor: 'white',
                    backgroundColor: 'white',
                  } )}
                  value={16} />
                <p className="absolute top-1 -left-3 text-gray-300">16%</p>
                <p className="text-gray-300 absolute -top-8 -left-5 text-sm">Gear 1</p>
              </div>
              {/* gear 3 */}
              <div className="h-28 w-28 border-b border-r border-gray-500 relative">
                <CircularProgressbar
                  className="w-14 -mt-3 -ml-7 bg-gray-800"
                  styles={buildStyles( {
                    rotation: 0.5,
                    strokeLinecap: 'butt',
                    textSize: '1rem',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${10 / 100})`,
                    textColor: 'white',
                    trailColor: 'white',
                    backgroundColor: 'white',
                  } )}
                  value={10} />
                <p className="absolute top-1 -left-3 text-gray-300">10%</p>
                <p className="text-gray-300 absolute -top-8 -left-5 text-sm">Gear 3</p>
                {/* gear 5 */}
                <CircularProgressbar
                  className="w-14 absolute -top-3 -right-8 bg-gray-800"
                  styles={buildStyles( {
                    rotation: 0.5,
                    strokeLinecap: 'butt',
                    textSize: '1rem',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${16 / 100})`,
                    textColor: 'white',
                    trailColor: 'white',
                    backgroundColor: 'white',
                  } )}
                  value={16} />
                <p className="absolute top-1 -right-6 text-gray-300">16%</p>
                <p className="text-gray-300 absolute -top-8 -right-7 text-sm">Gear 5</p>
              </div>
              {/* gear 2 */}
              <div className="h-28 w-28 border-r border-gray-500 -mt-16 relative">
                <CircularProgressbar
                  className="w-14 absolute -bottom-4 -right-7 bg-gray-800"
                  styles={buildStyles( {
                    rotation: 0.5,
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${18 / 100})`,
                    textColor: 'white',
                    trailColor: 'white',
                    backgroundColor: 'white',
                  } )}
                  value={18} />
                <p className="absolute bottom-0 -right-5 text-gray-300">18%</p>
                <p className="text-gray-300 absolute -bottom-9 -right-6 text-sm">Gear 2</p>
              </div>
              {/* gear 4 */}
              <div className="h-28 w-28 border-r border-gray-500 -mt-16 relative">
                <CircularProgressbar
                  className="w-14 absolute -bottom-4 -right-7 bg-gray-800"
                  styles={buildStyles( {
                    rotation: 0.5,
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${12 / 100})`,
                    textColor: 'white',
                    trailColor: 'white',
                    backgroundColor: 'white',
                  } )}
                  value={12} />
                <p className="absolute bottom-0 -right-5 text-gray-300">12%</p>
                <p className="text-gray-300 absolute -bottom-9 -right-6 text-sm">Gear 4</p>
                <CircularProgressbar
                  className="w-14 absolute -top-6 -right-7 bg-gray-800"
                  styles={buildStyles( {
                    rotation: 0.5,
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${7 / 100})`,
                    textColor: 'white',
                    trailColor: 'white',
                    backgroundColor: 'white',
                  } )}
                  value={7} />
                <p className="absolute -top-2 -right-4 text-gray-300">7%</p>
              </div>
              {/* gear 6 */}
              <div className="h-28 w-28 border-r border-gray-500 -mt-16 relative">
                <CircularProgressbar
                  className="w-14 absolute -bottom-4 -right-7 bg-gray-800"
                  styles={buildStyles( {
                    rotation: 0.5,
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${8 / 100})`,
                    textColor: 'white',
                    trailColor: 'white',
                    backgroundColor: 'white',
                  } )}
                  value={8} />
                <p className="absolute bottom-0 -right-5 text-gray-300">08%</p>
                <p className="text-gray-300 absolute -bottom-9 -right-6 text-sm">Gear 6</p>
              </div>
            </div>
          </div>
        </div>
        {/* lower section */}
        <div className="flex flex-col items-center justify-start mx-2 z-10 bg-gray-800 py-4 rounded-lg">
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
        </div>
      </section>

      {/* footer section */}
      <footer className="text-gray-600 body-font bg-gray-900">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <div className='text-blue-500 text-2xl font-bold text-center flex items-center'> <GiFuelTank className="ml-8 mr-2 -mt-1" /> <p>Fuel</p></div>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 flex flex-wrap items-center justify-center">© 2022 Made With <GiSelfLove className="text-lg text-red-500 mx-2"/> By <a className="mx-1" href="https://www.linkedin.com/in/rohan-singh-5b84a9223/" target="_blank"> Rohan -</a> All Rights Reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
