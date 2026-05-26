import axios from "axios"

const config = () => {
    const userData = JSON.parse(localStorage.getItem("userInfo"))

    return {
        headers: {
            Authorization: `Bearer ${userData?.token}`
        }
    }
}

export const getTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/task", config())

    return res.data
}

export const createTask = async (taskData) => {
    const res = await axios.post("http://localhost:5000/api/task", taskData , config())

    return res.data
}

export const updateTask = async (id, taskData) => {
    const res = await axios.put(`http://localhost:5000/api/task/${id}`, taskData, config())

    return res.data
}

export const deleteTask = async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/task/${id}`, config())

    return res.data
}