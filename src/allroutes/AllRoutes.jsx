import React from 'react'
import Hyundai from '../hyundaiPage/Hyundai'
import {Routes,Route} from "react-router-dom"
import SignupModal from '../signupPage/SignupModal'
import LandingPage from '../landingPage/LandingPage'
import FAQ from '../faq/FAQ'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/hyundai" element={<Hyundai/>}/>
            <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes