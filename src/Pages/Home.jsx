import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import SubNar from '../Layout/SubNar'
import { PiNotebookLight } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";



const Home = ({addTask, setAddTask, formData, setFormData, setIsSubmitted, allData, setAllData }) => {


  
  function inputChange(e){
    const { name, value } = e.target;
    // const file = e.target.files ? e.target.files[0] : null;

    setFormData((prev) => {
        return {
            ...prev,
            [name]: value,
            // avatar: file ? URL.createObjectURL(file) : prev.avatar
        }
    });
}


function toastMessage(e){
  e.preventDefault();
  if(!formData.title || !formData.time || !formData.description || !formData.date) {
      toast.error("Please fill in all fields.");
      return;
  }

  console.log('Form submitted:', formData);

  setTimeout(() => {
      setIsSubmitted(true);
  }, 5000);

  toast.success("Task added successfully!");
  
  setAllData(prev => [...prev, formData]);
  
  
  
  document.getElementById("title").value = "";
  document.getElementById("time").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

  React.useEffect(() => {
    const storedData = localStorage.getItem('tasks');
    if (storedData) {
      setAllData(JSON.parse(storedData));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allData));
  }, [allData]);

  const handleDelete = (index) => {
  setAllData(prevallData => prevallData.filter((item, i) => i !== index));
};

  return (
    <div>

    <div className=' lg:hidden flex-col flex justify-center items-center gap-5 shadow-md p-5 m-3'>
                          <p><PiNotebookLight className='text-4xl text-center'/></p>
                          <div>
                                  <h1 className='text-3xl font-semibold pb-2'>Good morning, Johar!</h1>
                                  <p className=' text-center'>Let's make today productive</p>
                          </div>
                  </div>
      <SubNar allData={allData}/>

                
      
      <div>

      {addTask && <div className='fixed top-0 left-0 w-full p-5 lg:px-0 h-full bg-black/50 z-50 flex justify-center items-center'>

        <div className="bg-white p-6 rounded-md w-full max-w-md shadow-lg space-y-4">
          <h1 className='text-center font-bold text-3xl'>ADD TASK</h1>
  <form onSubmit={toastMessage} className="space-y-4">
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Task Title
      </label>
      <input
        name="title"
        onChange={inputChange}
        type="text"
        placeholder="Write task title here..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div className="flex space-x-4">
      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Due Date
        </label>
        <input
          name="date"
          onChange={inputChange}
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Due Time
        </label>
        <input
          name="time"
          onChange={inputChange}
          type="text"
          placeholder="e.g. 10:00 AM"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Task Description
      </label>
      <textarea
        name="description"
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


        </div>}
    </div>

    <div className="p-4">
        {Array.isArray(allData) && allData.map((task, index) => (
          <div key={index} className='bg-white p-5 m-3 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold pb-2'> <span>Task Title:</span> {task.title}</h2>
            <p className='text-gray-600 pb-1'> <span>Due Date: </span>{task.date}</p>
            <p  className='text-gray-600 pb-2'>Due Time:  {task.time}</p>

            <div className='flex items-center justify-between'>
            <p className='mt-2'> <span>Task Description: </span>{task.description}</p>
            <div className='flex gap-3 items-center'> 
              <input name='check' id='' className='size-5' type="checkbox" />
              <FaTrashAlt onClick={() => handleDelete(index)} className='text-2xl text-red-600'/>
            </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}

export default Home
