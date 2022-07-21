import React from 'react'
import Hyundai from '../hyundaiPage/Hyundai'
import {Routes,Route} from "react-router-dom"
import SignupModal from '../signupPage/SignupModal'
import LandingPage from '../landingPage/LandingPage'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/hyundai" element={<Hyundai/>}/>
            <Route path="/signupModal" element={<SignupModal/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes