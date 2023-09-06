import React from 'react'
import styles from './Footer.module.css'
import Fade from 'react-reveal'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
function Footer() {
  return (
    <Fade bottom>
      <div className={styles.footermain}>
        <div className={styles.allcontent}>
          <div className={styles.headicons}>
            <div>
              <h3>Tech Wave</h3>
            </div>
            <div>
              <FaTwitter color="white" />
              <FaInstagram color="white" />
              <FaFacebook color="white" />
              <FaLinkedin color="white" />
            </div>
          </div>
          <p>
            Selling premium products, designed to elevate your everyday
            experience
          </p>
          <div className={styles.footer_second}>
          <div className={styles.menu}>
            <div>
            <h5>Menu</h5>
            <div className={styles.menuitems}>
              <a href="/about">Home</a>
              <a href="/about">Store</a>
              <a href="/about">About</a>
              <a href="/about">Articles</a>
            </div>
            </div>
            <div className={styles.menu2}>
              <h5>Menu</h5>
              <div className={styles.menuitems}>
                <a href="/about">Home</a>
                <a href="/about">Store</a>
                <a href="/about">About</a>
                <a href="/about">Articles</a>
              </div>
            </div>
          </div>
            <div className={styles.contact}>
              <h5>contact</h5>
              <div className={styles.menuitems}>
                <a href="/about">Home</a>
                <a href="/about">Store</a>
                <a href="/about">About</a>
                <a href="/about">Articles</a>
              </div>
            </div>
        </div>
        </div>
      </div>
    </Fade>
  )
}

export default Footer
