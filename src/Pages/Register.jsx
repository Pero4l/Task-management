import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Register = ({ user, setUser }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      toast.success("Registration successful!");

      const file = data.file[0];
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

      const base64Image = await toBase64(file);

      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        image: base64Image,
      };

      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      toast.error("Failed to register.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-[20px] py-20 lg:px-[750px] lg:mt-10">
        <ToastContainer />
        <h1 className="text-3xl text-center pb-8 font-semibold">REGISTER</h1>

        <div className="pb-5">
          <label>Name:</label><br />
          <input
            className="bg-gray-400 p-2 w-full rounded-md"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters long" },
              maxLength: { value: 10, message: "Name must be at most 10 characters long" },
            })}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="pb-5">
          <label>Email:</label><br />
          <input
            type="email"
            className="bg-gray-400 p-2 w-full rounded-md"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address with @ and .com",
              },
            })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="pb-5">
          <label>Image:</label><br />
          <input
            type="file"
            accept="image/*"
            className="bg-gray-400 p-2 w-full rounded-md"
            {...register("file", { required: "Image is required" })}
          />
          {errors.file && <span className="text-red-500">{errors.file.message}</span>}
        </div>

        <div className="pb-5">
          <label>Password:</label><br />
          <input
            type="password"
            className="bg-gray-400 p-2 w-full rounded-md"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "Password must be at least 6 characters long and contain at least one letter and one number",
              },
            })}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <div className="pb-5">
          <label>Confirm Password:</label><br />
          <input
            type="password"
            className="bg-gray-400 p-2 w-full rounded-md"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: value => value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
        </div>

        <button
          type="submit"
          className="p-3 text-xl text-white mt-5 bg-slate-900 rounded-md w-full hover:bg-slate-400 hover:text-gray-900"
        >
          Submit
        </button>

        <p className="text-center mt-3 lg:mt-5">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
