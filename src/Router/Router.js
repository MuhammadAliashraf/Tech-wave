import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import NavbarCom from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
       {/* <TopNav/> */}
      <NavbarCom />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
