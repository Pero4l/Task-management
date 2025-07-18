import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Routes, Route } from 'react-router-dom'
import SideBar from './Layout/SideBar'
import NavBar from './Layout/NavBar'
import Home from './Pages/Home'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#eaeaea] p-20'>

        <div className='bg-[#f6f6f6] rounded-3xl' >
        <NavBar />
      <div className='flex '>
      <SideBar />
      <Home/>
      </div>
        </div>
      
      </div>
    </>
  )
}

export default App
