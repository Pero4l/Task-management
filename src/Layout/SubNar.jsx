import React from 'react';
import { GiCheckMark } from "react-icons/gi";
import { MdTimer } from "react-icons/md";
import { SiFireship } from "react-icons/si";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const SubNar = ({ allData }) => {
  const completedCount = allData.filter(task => task.done).length;
  const pendingCount = allData.filter(task => !task.done).length;

 
  const today = new Date();
  const overdueCount = allData.filter(task => {
    if (task.done) return false;
    if (!task.date) return false; 
    const taskDate = new Date(task.date);
    return taskDate < today;
  }).length;

  const activeCount = pendingCount; 

  return (
    <div className='lg:flex-row flex flex-col px-5 gap-5 pt-5 lg:pt-0'>
      <div className='bg-white lg:w-fit flex items-center lg:gap-6 gap-16 md:gap-60 px-10 py-7 rounded-xl shadow-md'>
        <GiCheckMark className='text-blue-400 text-4xl' />
        <p className='text-3xl font-semibold'>{completedCount}</p>
        <p>Completed</p>
      </div>

      <div className='bg-white lg:w-fit flex items-center lg:gap-10 gap-20 md:gap-64 px-10 py-7 rounded-xl shadow-md'>
        <MdTimer className='text-[#b73c4c] text-4xl' />
        <p className='text-3xl font-semibold'>{pendingCount}</p>
        <p>Pending</p>
      </div>

      <div className='bg-white lg:w-fit flex items-center lg:gap-10 gap-20 md:gap-64 px-10 py-7 rounded-xl shadow-md'>
        <SiFireship className='text-[#e18b4a] text-4xl' />
        <p className='text-3xl font-semibold'>{overdueCount}</p>
        <p>Overdue</p>
      </div>

      <div className='bg-white lg:w-fit flex items-center lg:gap-10 gap-22 md:gap-64 px-10 py-7 rounded-xl shadow-md'>
        <BsFillRocketTakeoffFill className='text-[#b43a4c] text-4xl' />
        <p className='text-3xl font-semibold'>{activeCount}</p>
        <p>Active</p>
      </div>
    </div>
  );
};

export default SubNar;
