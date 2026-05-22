import mongoose from "mongoose";

// schema for the user with fields like name , email & password
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema)
export default User;