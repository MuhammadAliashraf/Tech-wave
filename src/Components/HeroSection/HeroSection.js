import React from 'react'
import styles from "./herosection.module.css"
import MyButton from '../button/MyButton'

function HeroSection() {
  return (
        <div className={styles.main}  >
           <h1 className={styles.h1}  >High-quality tech gadgets
           <br/>
            & accessories</h1> 
           <p className={styles.p}>Shop our curated selection of premium products, designed to elevate your
           <br/>
            everyday experiences</p>    
           <div className={styles.twobtn}>
            <div >
             <MyButton label="Browse products" marginright={5}/>
            </div>
            <div>
            <MyButton 
            white
            label="About Us" />
           </div>
            </div>
        </div>
  )
}

export default HeroSection