import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRoutes from "./routes/AuthRoutes.js"

dotenv.config()

connectDb()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})