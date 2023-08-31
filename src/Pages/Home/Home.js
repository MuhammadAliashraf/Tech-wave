import React from 'react'
import styles from './home.module.css'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Category from '../../Components/Category/Category'
import Tec from "../../images/image (3).png"
import Gear from "../../images/image (11).png"
import Gear1 from "../../images/image (7).png"
import Watch from "../../images/image.png"
import { useState } from 'react'
function Home() {
  const[data,setdata]=useState([
    {
      id:1,
      name:"Technology",
      details:"Explore the Latest Innovations and Unleash the Power of Technology",
      image:<img src={Tec}/>
    },
    {
      id:1,
      name:"Gear",
      details:"Equip Yourself with Top-Notch Gear for Every Adventure",
      image:<img src={Gear}/>
    },
    {
      id:1,
      name:"Gear",
      details:"Equip Yourself with Top-Notch Gear for Every Adventure",
      image:<img src={Gear1}/>
    },
    {
      id:1,
      name:"Accessory",
      details:"Find the Perfect Finishing Touch with Stylish and Functional Accessories",
      image:<img src={Watch}/>
    },
  ])
  return (
    <div>
      <HeroSection/>
      <Category Data={data}/>
    </div>
  )
}

export default Home
