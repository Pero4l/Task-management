import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { MdTimer } from "react-icons/md";
import { SiFireship } from "react-icons/si";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const SubNar = () => {
  return (
    <div className='lg:flex-row flex flex-col px-5 gap-5 pt-5 lg:pt-0'>
        <div className='bg-white  lg:w-fit flex items-center lg:gap-6 gap-16 px-10 py-5 rounded-xl shadow-md'>
            <GiCheckMark className='text-blue-400 text-4xl'/>
            <p className='text-3xl font-semibold'>12</p>
            <p>Completed</p>
        </div>

        <div className='bg-white lg:w-fit flex items-center lg:gap-10 gap-20 px-10 py-5 rounded-xl shadow-md'>
            <MdTimer className='text-[#b73c4c] text-4xl'/>
            <p className='text-3xl font-semibold'>5</p>
            <p>Pending</p>
        </div>

        <div className='bg-white lg:w-fit flex items-center lg:gap-10 gap-20 px-10 py-5 rounded-xl shadow-md'>
            <SiFireship className='text-[#e18b4a] text-4xl'/>
            <p className='text-3xl font-semibold'>2</p>
            <p>Overdue</p>
        </div>

        <div className='bg-white lg:w-fit flex items-center lg:gap-10 gap-22 px-10 py-5 rounded-xl shadow-md'>
            <BsFillRocketTakeoffFill className='text-[#b43a4c] text-4xl'/>
            <p className='text-3xl font-semibold'>3</p>
            <p>Active</p>
        </div>
    </div>
  )
}

export default SubNar
