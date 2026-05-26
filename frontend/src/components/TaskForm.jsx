import React, { useState } from 'react'

// accepting the props by props destructuring
const TaskForm = ({ submit, editTask }) => {

  /**
   * state for current task data
   * if there is a data in editTask state then the data fields will be that user input
   * else empty string
   */
  const [data, setData] = useState({
    title: editTask?.title || "",
    description: editTask?.description || "",
    priority: editTask?.priority || "Low"
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    submit(data)

    setData({
      title: "",
      description: "",
      priority: "Low"
    })
  }

  return (
    <div className='bg-[#E7E1B1] p-5 rounded-xl shadow-sm'>
      <form 
        onSubmit={handleSubmit} 
        className='space-y-4'
      >

        <input type="text" 
          placeholder='Task title'
          name='title'
          value={data.title}
          onChange={handleChange}
          className='w-full border rounded-lg p-3 bg-white outline-none'
          required
        />

        <textarea 
          name='description'
          placeholder='Task description'
          value={data.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 bg-white outline-none"
          rows="3"
        />

        <select name="priority"
          value={data.priority} 
          onChange={handleChange}
          className="w-full border rounded-lg p-3 bg-white outline-none"
        >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
        </select>

        <button
            type='submit'
            className="bg-[#306D29] hover:bg-[#0D530E] text-white px-5 py-3 rounded-lg transition cursor-pointer"
        >
          {editTask? "Update Task" : "Add Task"}
        </button>

      </form>
    </div>
  )
}

export default TaskForm