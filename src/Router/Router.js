import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import NavbarCom from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Store from '../Pages/Home/Store/Store'

const AppRouter = () => {
  return (
    <BrowserRouter>
       {/* <TopNav/> */}
      <NavbarCom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Store />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
