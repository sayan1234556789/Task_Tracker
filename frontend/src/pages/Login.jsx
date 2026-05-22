import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginApiCall } from '../services/AuthServices'

const Login = () => {
    const navigate = useNavigate()

    // state for storing the current entered email and pass
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    //function for handling any change in the input field that actually change the state
    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    // function for submitting the credentials (form)
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const data = await loginApiCall(loginForm)

            // set the data comming from the backend in object form to the local storage in string form
            localStorage.setItem("userInfo", JSON.stringify(data))

            //after login dashboard will be open
            navigate('/dashboard')
        } catch (error) {
            alert("Invalid credentials")
        }
        
        // after submission of the form the state will be empty and the inputs will be blank again
        setLoginForm({
            email: "",
            password: ""
        })
    }

  return (
    <div className='min-h-screen bg-[#FBF5DD] flex items-center justify-center'>
        <div className='bg-[#E7E1B1] w-full max-w-md p-8 rounded-2xl shadow-md'>
            <h1 className='text-3xl font-semibold text-center mb-6'>
                Task Tracker
            </h1>

            <form  className='space-y-4' onSubmit={handleSubmit}>
                <input type="email" placeholder='Email'
                    className='w-full border p-3 rounded-lg outline-none'
                    value={loginForm.email}
                    onChange={handleChange}
                    name='email'
                />
                <input type="password" placeholder='Password'
                    className='w-full border p-3 rounded-lg outline-none'
                    name='password'
                    value={loginForm.password}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='w-full bg-[#306D29] hover:bg-[#0D530E] text-white py-3 rounded-lg transition cursor-pointer'
                >
                    Login
                </button>
            </form>

            <p className='text-center mt-4'>
                Don't have an account?{" "}
                <Link to={"/signup"} className='hover:underline font-semibold hover:text-[#306D29]'>
                    SignUp
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Login