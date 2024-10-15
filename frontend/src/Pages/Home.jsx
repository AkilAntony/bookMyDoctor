import React from 'react'
import Banner from '../Components/Banner'
import Specialist from '../Components/Specialist'
import TopDoctors from '../Components/TopDoctors/TopDoctors'
import DoctorCard from '../Components/TopDoctors/DoctorCard'
import FooterBanner from '../Components/Navbar/FooterBanner'
 

function Home() {
  return (
    <div className=''>
        <Banner />
        <Specialist />
        <TopDoctors />
        <FooterBanner />
    </div>
  )
}

export default Home