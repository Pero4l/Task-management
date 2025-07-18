import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import SideBar from './Layout/SideBar'
import NavBar from './Layout/NavBar'
import Home from './Pages/Home'
import './index.css'

function App() {
  const [isClick, setIsClick] = useState(false)
  const [addTask, setAddTask] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    time: '',
    description: '',
    date: '',
  });

  const [allData, setAllData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div className='bg-[#eaeaea] lg:p-20'>
        <div className='bg-[#f6f6f6] rounded-3xl'>
          <NavBar setIsClick={setIsClick} isClick={isClick} setAddTask={setAddTask} addTask={addTask} />
          <div className='lg:flex-row flex flex-col lg:pt-8 '>
            <SideBar isClick={isClick} />
            <Home
              setAddTask={setAddTask}
              addTask={addTask}
              formData={formData}
              setFormData={setFormData}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
              allData={allData}
              setAllData={setAllData}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
