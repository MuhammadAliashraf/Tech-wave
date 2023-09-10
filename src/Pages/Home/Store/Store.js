import React from 'react'
import styles from './Store.module.css'
import Fade from 'react-reveal'
import SearchBar from '../../../Components/SearchBar/SearchBar'
import Bestsellers from '../../../Components/Bestsellers/Bestsellers'
import { useState } from 'react'
function Store() {
  const data = [
    {
      id: 1,
      type: 'All',
    },
    {
      id: 1,
      type: 'Gear',
    },
    {
      id: 1,
      type: 'Technology',
    },
    {
      id: 1,
      type: 'Accessory',
    },
  ]
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
    {
      id: 1,
      price: 349.99,
      category: 'Gear',
      name: 'iPhone Case',
      details:
        'Find the Perfect Finishing Touch with Stylish and Functional Accessories',
      image: '../../images/image (10).png',
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
      category: 'Technology',
      name: 'VR HeadSet',
      details:
        'Explore the Latest Innovations and Unleash the Power of Technology',
      image: '../../images/image (2).png',
    },
  ])
  return (
    <div>
      <div className={styles.header}>
        <h1>Store</h1>
        {/* ======= */}
        <SearchBar data={data} />
      </div>
      <Fade bottom>
        <div>
          <Bestsellers sellers={features} />
        </div>
      </Fade>
    </div>
  )
}

export default Store
