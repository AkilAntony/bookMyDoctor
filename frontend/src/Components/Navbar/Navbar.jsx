import React, { useState } from 'react'
import  {assets} from '../../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/myLogo.png'
import MenuDropdownOptions from '../MenuDropdownOptions';
function Navbar() {
    const [showProfile, setShowProfile] =  useState(false);
    const [token, setToken] = useState(true)
    const navLinks = [{name:'Home',route:'/'},
        {name:'Doctors',route:'/doctors'},
        {name:'About',route:'/about'},
        {name:'Contact',route:'/contact'}
    ]
    const navigate = useNavigate()
    const handleNavigate =()=>{
        navigate('/login')
    }

  return (
    <nav className='flex items-center justify-between text-sm border-b mb-3'>
        
        <img src={logo} className=' object-contain h-[86px] '  />
        <ul className='md:flex gap-5 hidden font-medium items-center justify-center'>
           {navLinks.map((link)=>(
            <NavLink to ={link.route} exact activeClassName="active-link">
                <li className='py-1'>{link.name}</li>
                <hr className='h-0.5 border-none outline-none bg-success w-3/4 m-auto hidden'/>
            </NavLink>
            ))
            }
        </ul>
        <div className='  rounded-full  flex items-center gap-4'>
            {
                token ?
                    <div className='flex gap-2 items-center cursor-pointer group relative'>
                        <img src={assets.profile_pic} 
                            className='h-[48px] w-[48px] rounded-full'
                           />
                        {/* <img src={assets.dropdown_icon} className='' /> */}
                        <div className='text-base absolute top-0 pt-[75px] right-0 font-medium 
                                text-gray-600 z-20 hidden group-hover:block'>
                            <MenuDropdownOptions />
                        </div>  
                    </div>
                    :
                    <button className=' text-white md:block px-8 py-3 hidden bg-success'
                        onClick={handleNavigate}>Create Account</button>
            }
           
        </div>
    </nav>
  )
}

export default Navbar