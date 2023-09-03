import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { FaBars, FaSearch, FaTimes, FaYahoo } from 'react-icons/fa'
import Logo from '../../images/logo.png'
function NavBar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div style={{display:"flex",alignItems:"center"}} >
          <a href="/">
    <img src={Logo} alt="Tech Wave Logo" />
  </a>
          <h4>Tech Wave</h4>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact
                to="/store"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/support"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Support
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-itemq">
              <div className="input-feild-div">
                <input
                  placeholder="Search"
                  style={{ color: '#CFCFCF' }}
                  className="input-feild"
                />
                <FaSearch color="#C4C4C4" />
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
