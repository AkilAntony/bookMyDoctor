import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Contact from '../../Pages/Contact'
import Doctors from '../../Pages/Doctors'
import Login from '../../Pages/Login'
import MyAppointments from '../../Pages/MyAppointments'
import Profile from '../../Pages/Profile'
import About from '../../Pages/About'
import Home from '../../Pages/Home'
                      
const Router = () => {
  return (
    <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/contact' element= {<Contact />} />
        <Route path='/doctors' element= {<Doctors />} />
        <Route path='/doctors/:specialist' element= {<Doctors />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/appointments' element= {<MyAppointments />} />
        <Route path='/appointments/:docId' element= {<MyAppointments />} />
        <Route path='/myprofile' element= {<Profile />} />
        <Route path='/about' element= {<About />} />
    </Routes>  
  )
}

export default Router
