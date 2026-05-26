import React from 'react'
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa"; 

//component for each task
const TaskItem = ({ task, editTask, deleteTask, toggleTask }) => {
  return (
    <div className="bg-[#E7E1B1] p-5 rounded-xl shadow-sm border border-[#d6cf9c] transition">
        <div className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-3">
                
                {/* tick button that mark the task as completed or not by a line on the task title and a tick */}
                <button
                    onClick={() => toggleTask(task)}
                    className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                        task.completed ? "bg-[#306D29] border-[#306D29]": "border-[#306D29]"
                    }`}
                >
                    {task.completed && (
                        <FaCheckCircle className="text-white text-sm" />
                    )}
                </button>

                <div>
                    <h2
                        className={`text-lg font-semibold ${
                            task.completed ? "line-through opacity-60" : ""
                        }`}
                    >
                        {task.title}
                    </h2>

                    <p
                        className={`text-sm mt-1 text-gray-700 break-words ${
                            task.completed ? "opacity-60" : ""
                        }`}
                    >
                        {task.description}
                    </p>
                </div>
            </div>

            <span
                className={`text-sm px-3 py-1 rounded-full font-medium ${
                    task.priority === "Low" ? "bg-green-200 text-green-800" : task.priority === "Medium" ? "bg-amber-200 text-amber-800": "bg-red-200 text-red-800"
                }`}
            >
                {task.priority}
            </span>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
            <button
                onClick={() => editTask(task)}
                className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-amber-300 hover:border-amber-300 transition cursor-pointer"
            >
                <FaEdit />
                Edit
            </button>

            <button
                onClick={() => deleteTask(task._id)}
                className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600 transition cursor-pointer"
            >
                <FaTrash />
                Delete
            </button>
        </div>
    </div>
  )
}

export default TaskItem