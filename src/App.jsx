import { useState,useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import SideBar from './Layout/SideBar'
import NavBar from './Layout/NavBar'
import Home from './Pages/Home'
import Welcome from './Pages/Welcome'
import Register from './Pages/Register'
import Login from './Pages/Login'
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

  const now = new Date();
  
    const date = now.toLocaleDateString('en-US')
    
    const times = now.toLocaleTimeString(updateTime, 'en-US');
  
  
    function updateTime (){
      setInterval(() => {
        const now = new Date();
        const times = now.toLocaleTimeString('en-US');
        setFormData(prev => ({ ...prev, times }));
      }
      , 1000);
    }

    const [isTime , setIsTime] = useState(times);
    const[isDate , setIsDate] = useState(date);

    const [greetings, setGreetings] = useState('');


   
    const [user, setUser] = useState(() => {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null; // Single object or null
    });
    


   
    
  
 

  return (
    <>
      

      

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={ <div className='bg-[#eaeaea] lg:p-20'>
        <div className='bg-[#f6f6f6] rounded-3xl'>
          <NavBar setIsClick={setIsClick} isClick={isClick}
           setAddTask={setAddTask}
            addTask={addTask}
             isDate={isDate}
              isTime={isTime}
               setIsDate={setIsDate}
                setIsTime={setIsTime} 
                greetings={greetings}
                 setGreetings={setGreetings}
                 user={user}
                 />
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
              user={user}
            />
            
          </div>
        </div>
      </div>} />
        <Route path="/register" element={<Register user={user} setUser={setUser} />} />
         <Route path="/login" element={<Login user={user}/>} /> 
      </Routes>
    </>
  )
}

export default App
