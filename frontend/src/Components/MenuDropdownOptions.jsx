import React from 'react'
import { Link } from 'react-router-dom'
function MenuDropdownOptions() {
  return (
  <div class=" shadow-md  bg-stone-100 flex flex-col gap-3 p-4 rounded min-w-48 ">
    <Link to ='myprofile'
        className="py-2 px-3 hover:bg-white hover:text-black">
        My Profile
    </Link>
    <Link to = 'appointments' 
        className="py-2 px-3  hover:bg-white hover:text-black">
        My Appointments
    </Link>
    <p className="py-2 px-3  hover:bg-white hover:text-black">Logout</p>
</div>
  )
}

export default MenuDropdownOptions