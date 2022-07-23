import React from 'react'
import Hyundai from '../hyundaiPage/Hyundai'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../landingPage/LandingPage'
import FAQData from '../faq/FAQData'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/hyundai" element={<Hyundai/>}/>
            <Route path="/FAQData" element={<FAQData/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes