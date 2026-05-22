import axios from "axios"

// api call for login/signin
export const loginApiCall = async (data) => {
    const res = await axios.post(`http://localhost:5000/api/auth/signin` , data)

    return res.data
}

//api call for signUp
export const signUpApiCall = async (data) => {
    const res = await axios.post('http://localhost:5000/api/auth/signup', data)

    return res.data
}