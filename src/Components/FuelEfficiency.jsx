import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Switch from '@mui/material/Switch';
import { GiFuelTank } from 'react-icons/gi';
import { AiOutlineFieldTime, AiOutlineWarning } from 'react-icons/ai';
import { BsStopwatch, BsSpeedometer2 } from 'react-icons/bs';
import { RiPinDistanceLine } from 'react-icons/ri';

const FuelEfficiency = () => {

  return (
    <div className='lg:my-10'>
            {/* options section */}
            <div className="flex justify-evenly items-center py-4 mx-auto flex-wrap lg:flex-nowrap">
              <div className="bg-gray-800 w-56 md:w-44 rounded-md shadow-2xl py-2 flex justify-between px-8 md:px-2 md:justify-evenly">
                <div className="h-full p-1">
                  <div className="p-1 bg-yellow-500 rounded-md w-fit my-1">
                    <GiFuelTank className="text-3xl text-gray-100" />
                  </div>
                </div>
                <div className='flex flex-col justify-center'>
                  <p className="text-gray-100">6,548 L</p>
                  <p className="text-gray-400">Fuel&nbsp;Usage</p>
                </div>
              </div>
              <div className="bg-gray-800 w-56 md:w-44 rounded-md shadow-2xl py-2 flex justify-between px-8 md:px-2 md:justify-evenly my-2 md:my-0">
                <div className="h-full p-1  ">
                  <div className="p-1 bg-blue-500 rounded-md w-fit my-1">
                    <RiPinDistanceLine className="text-3xl text-gray-100" />
                  </div>
                </div>
                <div className='flex flex-col justify-center'>
                  <p className="text-gray-100">31,875</p>
                  <p className="text-gray-400">Distance</p>
                </div>
              </div>
              <div className="bg-gray-800 w-56 md:w-44 rounded-md shadow-2xl py-2 flex justify-between px-8 md:px-2 md:justify-evenly">
                <div className="h-full p-1  ">
                  <div className="p-1 bg-cyan-500 rounded-md w-fit my-1">
                    <AiOutlineFieldTime className="text-3xl text-gray-100" />
                  </div>
                </div>
                <div className='flex flex-col justify-center'>
                  <p className="text-gray-100">1h:22m:18s</p>
                  <p className="text-gray-400">Ideal Time</p>
                </div>
              </div>
            </div>
            {/* summary section */}
            <p className="text-gray-100 text-center lg:text-start">Summary</p>
            <div className="lg:h-80 w-full rounded-lg shadow-2xl my-3 flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center lg:items-start">
              <div className="w-64 md:w-auto lg:w-4/12 h-full bg-gray-900 p-4 rounded-lg rounded-r flex flex-col justify-evenly">
                <p className="text-gray-400">Vehicle Control</p>
                <div className="flex justify-between items-center lg:items-start overflow-x-scroll scrollbar-hide my-2 lg:my-0">
                  {/* drive duration */}
                <div className="h-24 lg:h-28 w-[45%] shadow-xl rounded-md bg-gray-800 p-2 cursor-pointer">
                    <div className="bg-gray-900 p-2 rounded-md w-fit">
                      <BsStopwatch className="text-gray-100 text-xl" />
                    </div>
                    <p className="text-[0.6rem] w-20 text-gray-200 font-semibold my-1">Drive Duration</p>
                    <Switch defaultChecked className='-ml-2 -mt-1' />
                  </div>
                  {/* alert sync */}
                  <div className="h-24 lg:h-28 w-[45%] shadow-xl rounded-md bg-gray-800 p-2 cursor-pointer">
                    <div className="bg-gray-900 p-2 rounded-md w-fit">
                      <AiOutlineWarning className="text-gray-100 text-xl" />
                    </div>
                    <p className="text-[0.6rem] w-20 text-gray-200 font-semibold my-1">Alert Sync</p>
                    <Switch className='-ml-2 -mt-1' />
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
              <div className='bg-gray-900 h-[19.5rem] md:w-96 lg:h-full lg:w-full md:rounded-tr-lg md:rounded-br-lg w-64 rounded-md md:rounded-none my-6 md:my-0'>
              </div>
            </div>
            </div>
  )
}

export default FuelEfficiency