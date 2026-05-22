import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUpApiCall } from '../services/AuthServices'

const SignUp = () => {
    const navigate = useNavigate()

    // state for storing the current name, email and pass
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    //function for handling any change in the input field that actually change the state
    const handleChange = (e) => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name] : e.target.value
        })
    }

    // function for submitting the credentials (form)
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // api call
            const data = await signUpApiCall(signUpForm)

            // set the data comming from the backend in object form to the local storage in string form as localstorage only store strings
            localStorage.setItem("userInfo", JSON.stringify(data))

            //after signUp dashboard will be open
            navigate("/dashboard")
        } catch (error) {
            alert("Registration failed!..")
        }

        // after submission of the form the state will be empty and the inputs will be blank again
        setSignUpForm({
            name: "",
            email: "",
            password: ""
        })
    }

  return (
    <div className='min-h-screen bg-[#FBF5DD] flex items-center justify-center px-4'>
        <div className='bg-[#E7E1B1] w-full max-w-md p-8 rounded-2xl shadow-md'>
            <h1 className="text-3xl font-semibold text-center mb-6">
                Create Account
            </h1>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="text"
                    name='name'
                    placeholder='Name'
                    className="w-full p-3 rounded-lg border outline-none"
                    value={signUpForm.name}
                    onChange={handleChange}
                />
                
                <input type="email" 
                    name='email'
                    placeholder='Email'
                    className="w-full p-3 rounded-lg border outline-none"
                    value={signUpForm.email}
                    onChange={handleChange}
                />

                <input type="password" 
                    name='password'
                    placeholder='Password'
                    className="w-full p-3 rounded-lg border outline-none"
                    value={signUpForm.password}
                    onChange={handleChange}
                />

                <button
                    type='submit'
                    className="w-full bg-[#306D29] hover:bg-[#0D530E] text-white py-3 rounded-lg transition cursor-pointer"
                >
                    Register
                </button>
            </form>

            <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to={"/signin"} className='font-semibold hover:underline hover:text-[#306D29] '>
                    Login
                </Link>
            </p>
        </div>
    </div>
  )
}

export default SignUp