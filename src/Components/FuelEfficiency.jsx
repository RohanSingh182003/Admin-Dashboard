import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { Chart } from 'react-chartjs-2';
import { GiFuelTank } from 'react-icons/gi';
import { AiOutlineFieldTime, AiOutlineWarning } from 'react-icons/ai';
import { BsStopwatch, BsSpeedometer2 } from 'react-icons/bs';
import { RiPinDistanceLine } from 'react-icons/ri';

const FuelEfficiency = () => {

  const [driveDuration, setDriveDuration] = useState(true)
  const [alertSync, setAlertSync] = useState(false)

  return (
    <div>
            {/* options section */}
            <div className="flex justify-evenly items-center py-4 mx-auto flex-wrap lg:flex-nowrap">
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
              <div className="bg-gray-800 w-52 h-28 rounded-md shadow-2xl p-2 flex justify-evenly my-2 md:my-0">
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
            <p className="text-gray-100 text-center lg:text-start">Summary</p>
            <div className="lg:h-80 w-full rounded-lg shadow-2xl my-3 flex flex-col lg:flex-row justify-center items-center lg:items-start overflow-x-scroll lg:overflow-x-visible">
              <div className="lg:w-4/12 h-full bg-gray-900 p-4 rounded-lg rounded-r flex flex-col justify-evenly">
                <p className="text-gray-400">Vehicle Control</p>
                <div className="flex justify-between items-center lg:items-start overflow-x-scroll scrollbar-hide my-2 lg:my-0">
                  {/* drive duration */}
                <div onClick={()=>{setDriveDuration(!driveDuration)}} className="h-24 lg:h-28 w-[45%] shadow-xl rounded-md bg-gray-800 p-2 cursor-pointer">
                    <div className="bg-gray-900 p-2 rounded-md w-fit">
                      <BsStopwatch className="text-gray-100 text-xl" />
                    </div>
                    <p className="text-[0.6rem] w-20 text-gray-200 font-semibold my-1">Drive Duration</p>
                    <div className={`flex items-center p-[0.1rem] my-2 rounded-xl ${driveDuration?'bg-gray-100':'border text-gray-300'} w-fit`}>
                      <p className="text-[0.6rem]">{driveDuration?'On':'Off'}</p>
                      <div className={`h-3 w-3 rounded-full ${driveDuration?'bg-blue-500':'bg-gray-300'} ml-1`}></div>
                    </div>
                  </div>
                  {/* alert sync */}
                  <div onClick={()=>{setAlertSync(!alertSync)}} className="h-24 lg:h-28 w-[45%] shadow-xl rounded-md bg-gray-800 p-2 cursor-pointer">
                    <div className="bg-gray-900 p-2 rounded-md w-fit">
                      <AiOutlineWarning className="text-gray-100 text-xl" />
                    </div>
                    <p className="text-[0.6rem] w-20 text-gray-200 font-semibold my-1">Alert Sync</p>
                    <div className={`flex items-center p-[0.1rem] my-2 rounded-xl ${alertSync?'bg-gray-100':'border text-gray-300'} w-fit`}>
                      <p className="text-[0.6rem]">{alertSync?'On':'Off'}</p>
                      <div className={`h-3 w-3 rounded-full ${alertSync?'bg-blue-500':'bg-gray-300'} ml-1`}></div>  
                    </div>
                  </div>
                </div>
                <div className="shadow-xl lg:h-16 w-full rounded-md bg-gray-800 p-1 flex items-center justify-evenly">
                  <div className="w-[45%] h-full flex justify-center items-center">
                    <CircularProgressbar
                      className="w-16 lg:w-14"
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
                  <p className="text-center text-xs -ml-20 mt-14 lg:mt-10 bg-gray-800 text-gray-200">Fuel Economy</p>
                  <div className="w-[45%] h-full flex justify-center items-center">
                    <CircularProgressbar
                      className="w-16 lg:w-14"
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
                  <p className="text-center text-xs -ml-20 mt-14 lg:mt-10 bg-gray-800 text-gray-200">Fuel Efficiency</p>
                </div>
                <div className="shadow-xl h-12 w-full rounded-md bg-gray-800 p-2 flex space-x-2 my-2 lg:my-0">
                  <div className="p-2 rounded-md bg-gray-900 w-fit">
                    <BsSpeedometer2 className="text-2xl text-gray-200 -mt-1" />
                  </div>
                  <div className="text-xs">
                    <p className="text-gray-200 font-semibold">50 Km/Hr</p>
                    <p className="text-gray-400">Average Speed</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[26rem] max-w-[26rem] my-2 lg:my-0 h-80 lg:h-full bg-gray-800 p-4 rounded-lg rounded-l flex flex-wrap justify-center items-center relative px-6 mx-auto mb-4 overflow-scroll">
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
  )
}

export default FuelEfficiency