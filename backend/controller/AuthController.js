import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Sign up the user

export const signUp = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashPass = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashPass
        })

        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// login user

export const signIn = async (req, res) => {
    try {
        const {email, password} = req.body

        const existingUser = await User.findOne({email})

        if(!existingUser){
            return res.status(400).json({
                message: "Invalid email"
            })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)

        if(!matchPassword){
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        res.status(200).json({
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            token: generateToken(existingUser._id)
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


}
// JWT token generation

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "3d"
    })
}