import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NavbarCom from '../Components/Navbar/Navbar'
import TopNav from '../Components/Navtop/TopNav'

const AppRouter = () => {
  return (
    <BrowserRouter>
       {/* <TopNav/> */}
      <NavbarCom />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
