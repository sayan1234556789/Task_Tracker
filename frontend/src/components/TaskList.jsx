import React from 'react'
import TaskItem from './TaskItem'

/*
 * accepting the props as destructuring props
 * function for displaying the tasks
 */
const TaskList = ({ tasks, editTask, deleteTask, toggleTask }) => {
    if(tasks.length === 0){
        return(
        <div className='text-center py-10'>
            No Tasks created
        </div>
        )
    }

  return (
    <div className="grid gap-4">
        {tasks.map((task) => (
            <TaskItem 
                key={task._id}
                task={task}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
            />
        ))}
    </div>
  )
}

export default TaskList