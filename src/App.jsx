import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Routes, Route } from 'react-router-dom'
import SideBar from './Layout/SideBar'
import NavBar from './Layout/NavBar'
import Home from './Pages/Home'
import './index.css'

function App() {
  const [isClick, setIsClick] = useState(false)
  const[addTask, setAddTask] = useState(false)

  return (
    <>
      <div className='bg-[#eaeaea] lg:p-20'>

        <div className='bg-[#f6f6f6] rounded-3xl' >
        <NavBar setIsClick={setIsClick} isClick={isClick} setAddTask={setAddTask} addTask={addTask}/>
      <div className='lg:flex-row flex flex-col lg:pt-8 '>
      <SideBar isClick={isClick} />
      <Home setAddTask={setAddTask} addTask={addTask}/>
      </div>
        </div>
      
      </div>
    </>
  )
}

export default App
