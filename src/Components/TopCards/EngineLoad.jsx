import React from 'react'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const EngineLoad = ({props}) => {
  const percentage = props.load;
  return (
    <div className='bg-gray-800 py-2 px-4 flex justify-between items-center w-full md:w-64 rounded-md'>
        <p className='text-blue-200 font-bold'>Engine Load</p>
        <div className='h-12 w-12 text-center'>
        <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '1.5rem',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    // textColor: 'green',
    fontWeight:'10px',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
        </div>
    </div>
  )
}

export default EngineLoad