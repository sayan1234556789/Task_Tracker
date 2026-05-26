import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    completed: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Low"
    }
}, {timestamps: true})

const Task = mongoose.model("Task", taskSchema)
export default Task