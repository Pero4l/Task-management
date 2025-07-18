import React from 'react'
import { PiNotebookLight } from "react-icons/pi";
import { FcSearch } from "react-icons/fc";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa6";

const NavBar = () => {
  return (
        <>
  <nav className='flex items-center justify-between px-34 py-10'>
                <div className='flex items-center gap-64'>
          <div>
            <h1 className='text-3xl font-medium'>TODO</h1>
        </div>

        <div className='flex items-center gap-2'>
            <span><PiNotebookLight className='text-4xl'/></span>
            <div>
                <h1 className='text-4xl font-semibold pb-2'>Good morning, Johar!</h1>
                <p>Let's make today productive</p>
            </div>
        </div>
    </div>

    <div className='flex text-3xl gap-7'>
        <span className='bg-white p-2 rounded-full'><FcSearch/></span>
        <span  className='bg-white p-2 rounded-full text-red-700'><IoNotificationsSharp/></span>
        <span  className='bg-white p-2 rounded-full text-amber-800'><FaUserAstronaut/></span>

    </div>
                </nav>
        </>
  )
}

export default NavBar
