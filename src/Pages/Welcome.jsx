import React from 'react'
import { Link } from 'react-router-dom'
import ani from '/ani.jpeg'

const Welcome = () => {
  return (
    <div>
                <div className="flex  justify-center min-h-screen ">
            <div className="bg-white rounded-xl w-full  p-8">

        <img className='lg:w-[700px] w-[700px] mt-10 lg:relative left-[550px]' src={ani} alt="" />

      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-600 mb-6 mt-5">
        WELCOME TO PTB TASK MANAGEMENT
      </h2>

      <p className='lg:text-xl text-lg text-center mt-10 text-gray-600'><em><b>Plan Smarter. Work Better. Live Organized.</b><br /> 
    Stay on top of your tasks with an all-in-one productivity app built for clarity and focus.

</em></p>
        <div className='flex justify-center mt-14'>
       <Link to="/register"><button className='p-3 bg-purple-600 text-white w-[370px]  lg:w-[900px]  rounded-md text-xl hover:bg-purple-300 hover:text-gray-700'>Get Started</button></Link>
        </div>

 
    </div>
  </div>

  
    </div>
  )
}

export default Welcome
