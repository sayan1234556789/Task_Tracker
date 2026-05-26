import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        localStorage.removeItem("userInfo")

        navigate("/signin")
    }

  return (
    <div className='bg-[#306D29] text-white px-6 py-4 flex justify-between items-center rounded-lg'>
        <h1 className='text-xl font-semibold'>
            Task Tracker
        </h1>

        <button
            onClick={handleLogout}
            className='bg-white text-[#306D29] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#FBF5DD]'
        >
            Logout
        </button>
    </div>
  )
}

export default Navbar