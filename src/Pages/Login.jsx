import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';

const Login = ({user}) => {

    const navigate = useNavigate();


    const { register, handleSubmit, watch,  formState: { errors } } = useForm()
    const onSubmit = () => {
        const email = watch("email");
        const password = watch("password");
    
       
        const user = JSON.parse(localStorage.getItem('user')) || null;
        // const user = storedUser ? JSON.parse(storedUser) : null;
    
        
        if (user && user.email === email && user.password === password) {
            toast.success("Login successful!");
            
            setTimeout(() => {
                navigate('/home'); 
            }, 3000)
        } else {
            toast.error("Invalid email or password");
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white px-[20px] py-20 lg:px-[750px] lg:mt-10'>
            <ToastContainer/>
                            <h1 className='text-3xl text-center pb-8 font-semibold mt-3'>Login</h1>
            
                
                {/*  */}
               
                <div className='pb-5 mt-20'>
                <label htmlFor=""> Email:</label> <br />
                <input name='email' type='email' className='bg-gray-400 p-2 w-full rounded-md' {...register("email", {required: "Email is required", pattern:{
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address with @ and .com"
                }})} /> <br />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>

                {/*  */}

                {/*  */}

                <div className='pb-5'>
                <label htmlFor=""> Password:</label> <br />
                <input name='password' type='password' className='bg-gray-400 p-2 w-full rounded-md' {...register("password", {required: "Password is required", pattern:{
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message: "Password must be at least 6 characters long and contain at least one letter and one number"
                }})} /> <br />
                 {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                </div>

                {/*  */}

          
      
      
      <button className='p-3 text-xl text-white mt-5 bg-slate-900 rounded-md w-full hover:bg-slate-400 hover:text-gray-900' type="submit" placeholder=''>
        Submit
      </button>

      <p className='text-center mt-3 lg:mt-5'>Don't have account? <Link to='/register'>Get Started</Link> </p>
    </form>
    </div>
  )
}

export default Login
