import React from 'react'
import DoctorCard from './DoctorCard'
import { useNavigate } from 'react-router-dom'

function TopDoctors() {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/doctors')
  }
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
        <p className='text-3xl font-medium'>Top Doctors to Book</p>
        <p className='sm:w-1/3 text-center text-sm'>
          Simply browse through our extensive list of trusted doctors.
        </p>
        <DoctorCard />
        <div className='mt-5'>
          <button className='h-[50px]  w-[214px] 
              rounded-[50px] bg-success text-white text font-normal'
            onClick={handleNavigate}>
            More</button>
        </div>
    </div>
  )
}

export default TopDoctors