import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TaskForm from '../components/TaskForm'
import { createTask, getTasks, updateTask , deleteTask} from '../services/taskServices'
import Filter from '../components/Filter'
import TaskList from '../components/TaskList'


const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)
  const [filterTask, setFilterTask] = useState("All")

  //on reloading the component, once the fetchTasks function will run so i use useEffect hook with a empty dependancy array
  useEffect(() => {
    fetchTasks();
  },[])
  
  //function for fetching all the tasks and set it into the tasks state
  const fetchTasks = async () => {
    try {
      const data = await getTasks()

      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  //function for Submit form
  const handleSubmit = async (data) => {
    if(editTask){
      await updateTask(editTask._id, data)

      setEditTask(null)
    }
    else{
      await createTask(data)
    }

    fetchTasks()
  }

  // function for deleting the task
  const handleDelete = async (id) => {
    await deleteTask(id)

    fetchTasks()
  }

  //function for toggle the task i.e on tick mark the task as task got completed
  const handleToggle = async (task) => {
    await updateTask(task._id, {
      completed: !task.completed
    })

    fetchTasks()
  }

  // function for giving all the tasks according to the filter
  const handleFilterTask = tasks.filter((task) => {
    if(filterTask === "Completed"){
      return task.completed
    }

    if(filterTask === "Pending"){
      return !task.completed
    }

    return true
  })

  return (
    <div className="min-h-screen bg-[#FBF5DD]">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        
        {/* navbar component call */}
        <Navbar />

        {/**
         * Task form component call
         * sending handleSubmit function and editTask state as props
         */}
        <TaskForm 
          submit={handleSubmit}
          editTask={editTask}
        />

        {/**
         * filter component call for pending, completed and ALL tasks
         * send filterTask state (current value) and setFilterTask state function for changing the current value of the state as props
         */}
        <Filter 
          filterTask={filterTask}
          setFilterTask={setFilterTask}
        />

        {/**
         * TaskList component call
         * sending props to the TaskList and then to the taskItem
         */}
        <TaskList 
          tasks={handleFilterTask}
          editTask={setEditTask}
          deleteTask={handleDelete}
          toggleTask={handleToggle}
        />

      </div>      
    </div>
  )
}

export default Dashboard