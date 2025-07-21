import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubNar from '../Layout/SubNar';
import { PiNotebookLight } from "react-icons/pi";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

const Home = ({ addTask, setAddTask, formData, setFormData, setIsSubmitted, allData, setAllData }) => {
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('tasks');
    const storedFormData = localStorage.getItem('formData');

    if (storedData) setAllData(JSON.parse(storedData));
    if (storedFormData) setFormData(JSON.parse(storedFormData));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allData));
  }, [allData]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      localStorage.setItem('formData', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, date, time, description } = formData;

    if (!title || !date || !time || !description) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (editId !== null) {
      const updatedTasks = allData.map(task =>
        task.id === editId ? { ...task, ...formData } : task
      );
      setAllData(updatedTasks);
      toast.success("Task updated successfully!");
    } else {
      const newTask = {
        ...formData,
        id: Date.now(),
        done: false
      };
      toast.success("Task added successfully!");
      setAllData(prev => [...prev, newTask]);
    }

    setFormData({});
    setAddTask(false);
    setEditId(null);
    localStorage.removeItem('formData');
  };

  const handleEdit = (task) => {
    setFormData({
      title: task.title,
      date: task.date,
      time: task.time,
      description: task.description
    });
    setEditId(task.id);
    setAddTask(true);
  };

  const handleDelete = (id) => {
    setAllData(prev => prev.filter(task => task.id !== id));
    toast.error("Task deleted successfully!");
  };

  const handleDone = (id) => {
    setAllData(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
    toast.info("Task marked as done.");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className='lg:hidden flex-col flex justify-center items-center gap-5 shadow-md p-5 m-3'>
        <p><PiNotebookLight className='text-4xl text-center' /></p>
        <div>
          <h1 className='text-3xl font-semibold pb-2'>Good morning, Johar!</h1>
          <p className='text-center'>Let's make today productive</p>
        </div>
      </div>

      <SubNar allData={allData} setAllData={setAllData} />

      {addTask && (
        <div className='fixed top-0 left-0 w-full p-5 h-full bg-black/50 z-50 flex justify-center items-center'>
          <div className="bg-white p-6 rounded-md w-full max-w-md shadow-lg space-y-4">
            <h1 className='text-center font-bold text-3xl'>
              {editId !== null ? "EDIT TASK" : "ADD TASK"}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 outline-none">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                <input
                  name="title"
                  value={formData.title || ""}
                  onChange={inputChange}
                  type="text"
                  placeholder="Write task title here..."
                  className="w-full px-4 py-2 border border-blue-500 rounded-md bg-gray-100 outline-none"
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
                    className="w-full px-3 py-2 border border-blue-500 rounded-md bg-gray-100 outline-none"
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
                    className="w-full px-3 py-2 border border-blue-500 rounded-md bg-gray-100 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Task Description</label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={inputChange}
                  rows={4}
                  placeholder="Write task description here..."
                  className="w-full px-4 py-2 border border-blue-500 rounded-md bg-gray-100 outline-none"
                />
              </div>
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setAddTask(false);
                    setEditId(null);
                    setFormData({});
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  {editId !== null ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="p-4">
        <h1 className='text-3xl font-bold py-2 px-4 pt-14 text-center lg:text-start'>
          Pending Task <span className='text-red-600'>(Active)</span>
        </h1>
        {allData.filter(task => !task.done).map(task => (
          <div key={task.id} className='bg-red-100 p-5 m-3 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold pb-2'>Task Title: {task.title}</h2>
            <p className='text-gray-600 pb-1'>Due Date: {task.date}</p>
            <p className='text-gray-600 pb-2'>Due Time: {task.time}</p>
            <div className='flex flex-col sm:flex-row items-end sm:items-center justify-between gap-2'>
              <p className='max-w-full break-words w-full'>
                <b>Task Description:</b> {task.description}
              </p>
              <div className='flex gap-3 items-center justify-end'>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleDone(task.id)}
                  className='size-5'
                />
                <FaRegEdit onClick={() => handleEdit(task)} className='text-2xl cursor-pointer' />
                <FaTrashAlt onClick={() => handleDelete(task.id)} className='text-2xl text-red-600 cursor-pointer' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className='text-3xl font-bold py-2 lg:px-[30px] text-center lg:text-start pt-14'>
        Completed Task <span className='text-green-600'>(Done)</span>
      </h1>
      <div className="py-2 p-5">
        {allData.filter(task => task.done).map(task => (
          <div key={task.id} className='bg-green-100 p-5 m-3 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold pb-2'>Task Title: {task.title}</h2>
            <p className='text-gray-600 pb-1'>Due Date: {task.date}</p>
            <p className='text-gray-600 pb-2'>Due Time: {task.time}</p>
            <div className='flex flex-col sm:flex-row items-end sm:items-center justify-between gap-2'>
              <p className='max-w-full break-words w-full'>
                <b>Task Description:</b> {task.description}
              </p>
              <div className=''>
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
