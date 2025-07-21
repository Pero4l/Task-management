import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { PiNotebookLight } from "react-icons/pi";
import { FcSearch } from "react-icons/fc";
import { IoNotificationsSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";

const NavBar = ({setIsClick, isClick, setAddTask, addTask, isTime, isDate, setIsDate, setIsTime, greetings, setGreetings}) => {
    const handleMenuClick = () => {
        setIsClick(!isClick);
    }


    const handleAddTask = () => {
        setAddTask(!addTask)
    }


    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          setIsTime(now.toLocaleTimeString('en-US'));
          setIsDate(now.toLocaleDateString('en-US'));
        }, 1000);
        return () => clearInterval(interval);
      }, []);


      useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) {
          setGreetings('Good Morning');
        } else if (hours < 18) {
          setGreetings('Good Afternoon');
        } else {
          setGreetings('Good Evening');
        }


//         updateGreeting();

//     const interval = setInterval(updateGreeting, 5000);

//     return () => clearInterval(interval);

      }, []);
     
    
  


return (
            <>
<nav className='flex items-center justify-between py-2 px-5 lg:px-22 lg:py- bg-[#eaeaea] sticky top-0 shadow-sm z-50'>
                            <div className='flex items-center gap-[360px]'>
                <div className='flex items-center gap-2'>
                 {!isClick ? <LuMenu onClick={handleMenuClick} className='lg:hidden text-4xl'/> : < RiCloseLargeFill onClick={handleMenuClick} className='lg:hidden text-3xl'/> }
                    <h1 className='text-3xl font-medium'>TODO</h1>
            </div>

            <div className=' hidden lg:flex items-center gap-2'>
                    <span><PiNotebookLight className='text-4xl'/></span>
                    <div>
                            <h1 className='text-4xl font-semibold pb-2'>{greetings}, User!</h1>
                            <p>Let's make today <b>{isDate}</b> productive</p>
                            {isTime && <p className=''>Current Time: <b>{isTime}</b></p>}
                    </div>
            </div>
    </div>

    <div className='flex items-center gap-2 lg:text-3xl lg:gap-5 lg:relative lg:left-3'>
            <span onClick={handleAddTask} className='bg-white p-2 rounded-full'><FiPlus/></span>
            <span className='bg-white p-2 rounded-full'><FcSearch/></span>
            <span  className='bg-white p-2 rounded-full'><IoNotificationsSharp/></span>
            <img className='bg-white p-2  rounded-full w-16 lg:w-20' src="https://media.istockphoto.com/id/1410870926/vector/nft-monkey.jpg?s=612x612&w=0&k=20&c=xJWmwYkuynah_iiKbq_JTJxTgMHdNhLVjPPbzkwsx0w=" alt="User Image" />
        

    </div>
                            </nav>
            </>
)
}

export default NavBar
