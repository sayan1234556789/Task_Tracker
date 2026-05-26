import { Navigate } from "react-router-dom"


const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("userInfo")

    const userData = JSON.parse(token)

    if(!userData){
        return <Navigate to="/signin" />
    }

    return children
}  

export default ProtectedRoute