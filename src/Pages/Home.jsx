import React from 'react'
import SubNar from '../Layout/SubNar'
import { PiNotebookLight } from "react-icons/pi";

const Home = ({addTask, setAddTask}) => {
  return (
    <div>

    <div className=' lg:hidden flex-col flex justify-center items-center gap-5 shadow-md p-5 m-1'>
                          <p><PiNotebookLight className='text-4xl text-center'/></p>
                          <div>
                                  <h1 className='text-3xl font-semibold pb-2'>Good morning, Johar!</h1>
                                  <p className=' text-center'>Let's make today productive</p>
                          </div>
                  </div>
      <SubNar/>

                
      
      <div>
        <h1 className='text-3xl font-semibold px-5 pt-5'>Today</h1>
        <p className='px-5 text-lg'>You have 12 tasks to complete today</p>
      </div>

      <div className='overlay'>

      </div>
    </div>
  )
}

export default Home
