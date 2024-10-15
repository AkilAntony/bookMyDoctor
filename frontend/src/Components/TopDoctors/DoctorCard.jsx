import React from 'react'
import { doctors } from '../../assets/assets'


const filteredData = doctors.slice(0,6);

function DoctorCard() {
  return (
    <div className='w-full flex flex-wrap justify-center 
            items-center gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {filteredData.map((doctor)=>(
        <div key={doctor.id} 
            className='bg-white text-black h-[385px] w-[275px] border border-[#C9D8FF] 
                rounded-[12px] overflow-hidden cursor-pointer hover:translate-y-[-10px]
                transition-all duration-500'>
            <div className='bg-green-100'>
                <img src={doctor.image} className='object-contain  '/>
            </div>
            <div className='flex flex-col p-4 gap-2'>
                <div className="flex items-center gap-2 text-sm text-center text-green-500  ">
                <p class="w-2 h-2 rounded-full bg-green-500"></p>
                <p>Available</p>
            </div>
            <div className='flex flex-col items-start '>
                <p className='font-medium'>{doctor.name}</p>
                <p className='font-normal text-sm'>{doctor.speciality}</p>
            </div>
            </div>
           
        </div>
       ))}
    </div>
    
  )
}

export default DoctorCard

// border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500