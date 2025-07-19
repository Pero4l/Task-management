import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import SubNar from '../Layout/SubNar';
import { PiNotebookLight } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";

const Home = ({ addTask, setAddTask, formData, setFormData, setIsSubmitted, allData, setAllData }) => {

  function inputChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedForm = {
        ...prev,
        [name]: value,
      };

      localStorage.setItem('formData', JSON.stringify(updatedForm));
      return updatedForm;
    });
  }

  function toastMessage(e) {
    e.preventDefault();

    if (!formData.title || !formData.time || !formData.description || !formData.date) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Task added successfully!");

    setTimeout(() => {
      setIsSubmitted(true);
    }, 5000);

    
    setAllData(prev => [...prev, { ...formData, done: false, id: Date.now() }]);
    localStorage.removeItem('formData');
    setFormData({});
    setAddTask(false);
  }

  useEffect(() => {
    const storedData = localStorage.getItem('tasks');
    const storedFormData = localStorage.getItem('formData');

    if (storedData) setAllData(JSON.parse(storedData));
    if (storedFormData) setFormData(JSON.parse(storedFormData));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allData));
  }, [allData]);

  const handleDelete = (id) => {
    setAllData(prev => prev.filter(task => task.id !== id));
  };

  const handleDone = (id) => {
    setAllData(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <div className='lg:hidden flex-col flex justify-center items-center gap-5 shadow-md p-5 m-3'>
        <p><PiNotebookLight className='text-4xl text-center' /></p>
        <div>
          <h1 className='text-3xl font-semibold pb-2'>Good morning, Johar!</h1>
          <p className='text-center'>Let's make today productive</p>
        </div>
      </div>

      <SubNar allData={allData} setAllData={setAllData} />

      {addTask && (
        <div className='fixed top-0 left-0 w-full p-5 lg:px-0 h-full bg-black/50 z-50 flex justify-center items-center'>
          <div className="bg-white p-6 rounded-md w-full max-w-md shadow-lg space-y-4">
            <h1 className='text-center font-bold text-3xl'>ADD TASK</h1>
            <form onSubmit={toastMessage} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                <input
                  name="title"
                  value={formData.title || ""}
                  onChange={inputChange}
                  type="text"
                  placeholder="Write task title here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                  <input
                    name="date"
                    value={formData.date || ""}
                    onChange={inputChange}
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Time</label>
                  <input
                    name="time"
                    value={formData.time || ""}
                    onChange={inputChange}
                    type="text"
                    placeholder="e.g. 10:00 AM"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Task Description</label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={inputChange}
                  placeholder="Write task description here..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <ToastContainer />

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setAddTask(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      
      <div className="p-4">
        <h1 className='text-3xl font-bold py-2 px-4 pt-14 text-center lg:text-start'>Pending Task <span className='text-red-600'>(Active)</span></h1>
        {allData.filter(task => !task.done).map((task) => (
          <div key={task.id} className='bg-red-100 p-5 lg:mt-7 m-3 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold pb-2'><span>Task Title:</span> {task.title}</h2>
            <p className='text-gray-600 pb-1'><span>Due Date: </span>{task.date}</p>
            <p className='text-gray-600 pb-2'>Due Time: {task.time}</p>
            <div className='flex items-center justify-between'>
              <p className='mt-2'><b>Task Description:</b> {task.description}</p>
              <div className='flex gap-3 items-center'>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleDone(task.id)}
                  className='size-5'
                />
                <FaTrashAlt onClick={() => handleDelete(task.id)} className='text-2xl text-red-600 cursor-pointer' />
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <h1 className='text-3xl font-bold py-2 lg:px-[30px] text-center lg:text-start pt-14'>Completed Task <span className='text-green-600'>(Done)</span></h1>
      <div className="py-2 p-5">
        {allData.filter(task => task.done).map((task) => (
          <div key={task.id} className='bg-green-100 p-5 m-3 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold pb-2'><span>Task Title:</span> {task.title}</h2>
            <p className='text-gray-600 pb-1'><span>Due Date: </span>{task.date}</p>
            <p className='text-gray-600 pb-2'>Due Time: {task.time}</p>
            <div className='flex items-center justify-between'>
              <p className='mt-2'><b>Task Description:</b> {task.description}</p>
              <div className='flex gap-3 items-center'>
                <FaTrashAlt onClick={() => handleDelete(task.id)} className='text-2xl text-red-600 cursor-pointer' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
