import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = ({user, setUser}) => {

    const { register, handleSubmit, watch,  formState: { errors } } = useForm()
    const onSubmit = async (data) => {
      const file = data.file[0];
    
      // Convert image file to base64
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
    
      const base64Image = await toBase64(file);
    
      const userData = {
        Name: data.Name,
        email: data.email,
        password: data.password,
        image: base64Image, 
      };
    
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    };
    

    

    
    

   
    
     
 
    
  return (
    <div>
             <form onSubmit={handleSubmit(onSubmit)} className='bg-white px-[20px] py-20 lg:px-[750px] lg:mt-10'>
                            <h1 className='text-3xl text-center pb-8 font-semibold'>REGISTER</h1>
                <div className='pb-5'>
                <label htmlFor=""> Name:</label> <br />
                <input name='name' className='bg-gray-400 p-2 w-full rounded-md' {...register("Name", { required: "Name is required", minLength:{
                    value: 3,
                    message: "Name must be at least 3 characters long"
                }, maxLength:{
                    value: 10,
                    message: "Name must be at most 10 characters long"
                }})} /> <br />

                {errors.firstName && <span className='text-red-500'>{errors.firstName.message}</span>} 
                
                
                </div>
                
                {/*  */}
               
                <div className='pb-5'>
                <label htmlFor=""> Email:</label> <br />
                <input name='email' type='email' className='bg-gray-400 p-2 w-full rounded-md' {...register("email", {required: "Email is required", pattern:{
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address with @ and .com"
                }})} /> <br />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>

                {/*  */}

                <div className='pb-5'>
                <label htmlFor=""> Image:</label> <br />
                <input name='file' type='file' className='bg-gray-400 p-2 w-full rounded-md' {...register("file", { required: "Image is required"})} /> <br />

                {errors.file && <span className='text-red-500'>{errors.file.message}</span>} 
                
                
                </div>

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

          

                <div className='pb-5'>
                <label htmlFor=""> Comfirm password:</label> <br />
                <input type='password' className='bg-gray-400 p-2 w-full rounded-md' {...register("check", {required: true, validate: (value) => {
                    if (value !== watch("password")) {
                        return "Passwords do not match";
                    }
                    return true;
                    
}})} /> <br />
                {errors.check && <span className='text-red-500'>{errors.check.message}</span>}
                </div>
      
      
      <button className='p-3 text-xl text-white mt-5 bg-slate-900 rounded-md w-full hover:bg-slate-400 hover:text-gray-900' type="submit" placeholder=''>
        Submit
      </button>

      <p className='text-center mt-3 lg:mt-5'>Already have account? <Link to='/login'>Login</Link> </p>
    </form>
    </div>
  )
}

export default Register
