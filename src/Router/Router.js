import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NavbarCom from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Store from "../Pages/Home/Store/Store";
import About from "../Pages/Home/About/About";
import Support from "../Pages/Support/Support";
import Contact from "../Pages/Contact/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <TopNav/> */}
      <NavbarCom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
