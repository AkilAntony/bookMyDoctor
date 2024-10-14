import React from 'react'
import Dermatologist from '../assets/Dermatologist.svg'
import Gynecologist from '../assets/Gynecologist.svg'
import Pediatricians from '../assets/Pediatricians.svg'
import Neurologist from '../assets/Neurologist.svg'
import GeneralPhysician from '../assets/General_physician.svg'
import Gastroenterologist from '../assets/Gastroenterologist.svg'
import { Link } from 'react-router-dom'


function Specialist() {
    const specialist = [{name:'General physician',image:GeneralPhysician},
        {name:'Gastroenterologist',image:Gastroenterologist},
        {name:'Dermatologist',image:Dermatologist},
        {name:'Gynecologist',image:Gynecologist},
        {name:'Pediatricians',image:Pediatricians},
        {name:'Neurologist',image:Neurologist}
    ]
  return (
    <div id="speciality" 
        className="flex flex-col items-center gap-4 py-16 text-[#262626] ">
        <h1 className="text-3xl font-medium">Find by Speciality</h1>
        <p className="sm:w-1/3 text-center text-sm">
            Simply browse through our extensive list of trusted doctors, 
            schedule your appointment hassle-free.
        </p>
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto scrollbar-hide">
            {specialist.map((data)=>(
                <Link to = '' key={data.name} 
                    className='flex flex-col items-center text-xs cursor-pointer 
                        flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                    <img src = {data.image} />
                    <p>{data.name}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Specialist