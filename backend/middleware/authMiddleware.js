import User from "../models/User.js";
import jwt from "jsonwebtoken"

// function for protecting the route from unauthorized access.. i.e without login no one can access the route 
const protect = async (req, res, next) => {
    const savedToken = req.headers.authorization;

    let token

    if(savedToken){
        try {
            //token that is saved mostly starts with Bearer. So to get the required token we have to split the string and take the 2nd part of it
            if(savedToken.startsWith("Bearer")){
                token = savedToken.split(" ")[1]
            }
            // if the token saved is not starts with Bearer
            else{
                token = savedToken
            }

            // here we validate the jwt
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // custom variable storing the details about the loggedIn user , can be accessed by other components
            req.user = await User.findById(decoded.id).select("-password")

            // function used for moving the req to the next controller function
            next()
        } catch (error) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
    }

    // if token is not there
    if(!token){
        return res.status(401).json({
            message: "No token is there"
        })
    }
}

export default protect