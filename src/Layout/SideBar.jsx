import React from 'react'
import { BsFillBoxFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiHandbagFill } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { FcOpenedFolder } from "react-icons/fc";
import { IoMdUmbrella } from "react-icons/io";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";

const SideBar = ({isClick}) => {
    return (
        <div className={!isClick ?  'px-9 md:px-16 lg:px-32 py-10 relative lg:bottom-8' : 'hidden'}>
                <h1 className='text-xs sm:text-sm font-medium'>MAIN MENU</h1>

                <div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-10 sm:hover:pr-22 hover:pl-4 hover:rounded-xl pt-5'></div>
        <div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-22 hover:pl-4 hover:rounded-xl pt-5'>
            <BsFillBoxFill className='text-3xl text-blue-700'/>
            <p className='text-sm'>Home</p>
        </div>

        <div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-22 hover:pl-4 hover:rounded-xl pt-7  '>
            <AiFillThunderbolt className='text-3xl text-yellow-600'/>
            <p className='text-sm'>My Tasks</p>
        </div>

        <div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-22 hover:pl-4 hover:rounded-xl pt-7'>
            <PiHandbagFill className='text-3xl text-yellow-900'/>
            <p className='text-sm'>Projects</p>
        </div>

        <div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-22 hover:pl-4 hover:rounded-xl pt-7'>
            <FaCalendarDays className='text-3xl text-red-700'/>
            <p className='text-sm'>Calendar</p>
        </div>

        <div className='pt-10'>
        <h1 className='text-sm font-medium'>STARTED</h1>

<div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-10 hover:pl-4 hover:rounded-xl pt-5'>
    <FcOpenedFolder className='text-3xl '/>
    <p className='text-sm'>Finalize Hompage Wireframe</p>
</div>

<div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-10 hover:pl-4 hover:rounded-xl pt-7  '>
    <FcOpenedFolder className='text-3xl'/>
    <p className='text-sm'>Review Client Feedback Form</p>
</div>

<div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-10 hover:pl-4 hover:rounded-xl pt-7'>
    <FcOpenedFolder className='text-3xl'/>
    <p className='text-sm'>Update Progress Report Q2</p>
</div>

        </div>

        <div className='pt-10'>
        <h1 className='text-sm font-medium'>OTHERS</h1>

<div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-22 hover:pl-4 hover:rounded-xl pt-5'>
    <IoMdUmbrella className='text-3xl text-[#7c1ca1]'/>
    <p className='text-sm'>Help Center</p>
</div>

<div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-22 hover:pl-4 hover:rounded-xl pt-7  '>
    <IoSettingsSharp className='text-3xl'/>
    <p className='text-sm'>Settings</p>
</div>
        </div>

        <div className='lg:pt-44 pt-16 pb-10'>
        <div className='flex items-center gap-3 hover:bg-white w-fit hover:p-2 hover:pr-22 hover:pl-4 hover:rounded-xl pt-7  '>
    <RiLogoutBoxFill className='text-3xl text-red-700'/>
    <p className='text-sm'>Log Out</p>
</div>
        </div>

    </div>
  )
}

export default SideBar
