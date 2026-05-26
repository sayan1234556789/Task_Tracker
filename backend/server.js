import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRoutes from "./routes/AuthRoutes.js"
import taskRoutes from "./routes/TaskRoutes.js"

//for accessing the dotenv file
dotenv.config()

//database connection
connectDb()

//express server
const app = express()

/**
 * cors - cross origin resource sharing
 * as frontend and backend runs on different ports so browser blocks the request
 * to get the access we use cors middleware
 * credentials - true because it helps server to send jwt token
 */

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

//for parsing the json data from the client
app.use(express.json())

app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/api/auth", authRoutes)

app.use("/api/task", taskRoutes)

const PORT = process.env.PORT || 5000

//running of express server on port no. 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})