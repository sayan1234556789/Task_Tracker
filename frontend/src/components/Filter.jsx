import React from 'react'

// accept the props from dashboard as destructuring props
const Filter = ({ filterTask, setFilterTask }) => {

    // a list of all 3 conditions/situations
    const filter = ["All", "Pending", "Completed"]

  return (
    // creating of buttons 
    <div className='flex gap-3 flex-wrap'>
        {filter.map((f) => (
            <button
                key={f}
                onClick={() => setFilterTask(f)}
                className={`px-4 py-2 rounded-lg border cursor-pointer ${
                    filterTask === f ? "bg-[#306D29] text-white" : "bg-white"
                }`}
            >
                {f}
            </button>
        ))}
    </div>
  )
}

export default Filter