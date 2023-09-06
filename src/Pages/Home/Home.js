import React from 'react'
import styles from './home.module.css'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Category from '../../Components/Category/Category'
import Tec from '../../images/image (3).png'
import Gear from '../../images/image (11).png'
import Gear1 from '../../images/image (7).png'
import laptop from '../../images/image (9).png'
import Watch from '../../images/image.png'
import { useState } from 'react'
import Experience from '../../Components/Experience/Experience'
import Bestsellers from '../../Components/Bestsellers/Bestsellers'
import Fade from 'react-reveal'
import Premium from '../../Components/Premium/Premium'
import Featured from '../../Components/Featured/Featured'
import Icons from '../../Components/Icons/Icons'
import Subscribe from '../../Components/Subscribe/Subscribe'
function Home() {
  const [data, setdata] = useState([
    {
      id: 1,
      name: 'Technology',
      details:
        'Explore the Latest Innovations and Unleash the Power of Technology',
      image: <img src={Tec} />,
    },
    {
      id: 1,
      name: 'Gear',
      details: 'Equip Yourself with Top-Notch Gear for Every Adventure',
      image: <img src={Gear} />,
    },
    {
      id: 1,
      name: 'Gear',
      details: 'Equip Yourself with Top-Notch Gear for Every Adventure',
      image: <img src={Gear1} />,
    },
    {
      id: 1,
      name: 'Accessory',
      details:
        'Find the Perfect Finishing Touch with Stylish and Functional Accessories',
      image: <img src={Watch} />,
    },
  ])
  const [sellers, setsellers] = useState([
    {
      id: 1,
      price: 349.99,
      category: 'Technology',
      name: 'Lryx Watch',
      details:
        'Explore the Latest Innovations and Unleash the Power of Technology',
      image: '../../images/image (12).png',
    },
    {
      id: 1,
      price: 349.99,
      category: 'Gear',
      name: 'Premium Earbuds',
      details: 'Equip Yourself with Top-Notch Gear for Every Adventure',
      image: '../../images/image (6).png',
    },
    {
      id: 1,
      price: 349.99,
      category: 'Gear',
      name: 'Headphone 21-Bass',
      details: 'Equip Yourself with Top-Notch Gear for Every Adventure',
      image: '../../images/image (8).png',
    },
    {
      id: 1,
      price: 349.99,
      category: 'Gear',
      name: 'VR Headset',
      details:
        'Find the Perfect Finishing Touch with Stylish and Functional Accessories',
      image: '../../images/image (2).png',
    },
  ])
  const [features, setfeatures] = useState([
    {
      id: 1,
      price: 349.99,
      category: 'Technology',
      name: 'VR HeadSet',
      details:
        'Explore the Latest Innovations and Unleash the Power of Technology',
      image: '../../images/image (2).png',
    },
    {
      id: 1,
      price: 349.99,
      category: 'Gear',
      name: 'MX Master 3',
      details: 'Equip Yourself with Top-Notch Gear for Every Adventure',
      image: '../../images/image (6).png',
    },
    {
      id: 1,
      price: 349.99,
      category: 'Gear',
      name: 'Purifier',
      details: 'Equip Yourself with Top-Notch Gear for Every Adventure',
      image: '../../images/image (1).png',
    },
    {
      id: 1,
      price: 349.99,
      category: 'Gear',
      name: 'iPhone Case',
      details:
        'Find the Perfect Finishing Touch with Stylish and Functional Accessories',
      image: '../../images/image (10).png',
    },
  ])
  const [icons,seticons]=useState(
   [ {
      id:1,
      name:"Free Shipping",
      des:"Over $29.00",
      image:"../../images/icons (1).png"
    },
    {
      id:1,
      name:"Secure Payments",
      des:"With 5+ Payment options",
      image:"../../images/icons (2).png"
    },
    {
      id:1,
      name:"30 days free return",
      des:"No questions asked",
      image:"../../images/icons (3).png"
    },]
  )
  
  return (
    <div>
      <HeroSection />
      <Category Data={data} />
      <Experience />
      <Bestsellers title="Bestsellers" label="Browse all products" sellers={sellers} />
      <div className={styles.images}>
        <Fade bottom>
          <img className={styles.homeimages} src={laptop} />
        </Fade>
      </div>
      <Premium />
      <Bestsellers title="Featured Products" label="Browse all products" showbigimage show sellers={features} />
      <Icons data={icons}/>
      <Subscribe/>
      </div>  
  )
}

export default Home
