import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1 className='header'>React Starter Kit <img src={reactLogo} /></h1>
      <ul className='points'>
          <li className='list'>Project has been boostarped with <a href='https://vitejs.dev/'>Vite</a></li>
          <li className='list'>Sass support is also added by default</li>
          <li className='list'>Follow the default react project structure</li>
          <li className='list'>Save all the files using .jsx extension</li>
          <li className='list'>For styling either scss,css or tailwind can be used</li>
          <li className='list'>Please make sure all the pages/components are responsive as well</li>
        </ul>
    </div>
  )
}

export default App
