import express from "express"
import { signIn, signUp } from "../controller/AuthController.js";

const router = express.Router();

//routes for authentication

router.post("/signup", signUp)
router.post("/signin", signIn)

export default router