import Task from "../models/Task.js"

// function for getting all task
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user._id
        })

        res.status(200).json(
            tasks
        )
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


//function for creating new task

export const createTask = async (req, res) => {
    try {
        const { title, description, priority } = req.body

        const task = await Task.create({
            title,
            description,
            priority,
            user: req.user._id
        })

        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// function for updating the task
export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// function for deleting the task
export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "task deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}