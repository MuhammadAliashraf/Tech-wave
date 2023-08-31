import React from 'react'
import styles from './herosection.module.css'
import MyButton from '../button/MyButton'
import { Fade } from 'react-reveal'

function HeroSection() {
  return (
    <div className={styles.main}>
      <Fade bottom>
        <h1 className={styles.h1}>
          High-quality tech gadgets
          <br />& accessories
        </h1>
      </Fade>
      <Fade bottom>
        <p className={styles.p}>
          Shop our curated selection of premium products, designed to elevate
          your
          <br />
          everyday experiences
        </p>
      </Fade>
      <Fade bottom>
        <div className={styles.twobtn}>
          <div className={styles.one}>
            <MyButton label="Browse products" />
          </div>
          <div>
            <MyButton white label="About Us" />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default HeroSection
