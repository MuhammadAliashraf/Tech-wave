import React from 'react'
import styles from './Footer.module.css'
import Fade from 'react-reveal'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import Image from "../../images/Clip path group.png"
import Image1 from "../../images/Clip path group-2.png"
import Image2 from "../../images/Clip path group-1.png"

function Footer() {
  return (
      <div className={styles.footermain}>
        <div className={styles.allcontent}>
          <div className={styles.headicons}>
            <div>
              <h3>Tech Wave</h3>
            </div>
            <div  className={styles.socialicons} >
              <FaTwitter size={30} color="white" />
              <FaInstagram size={30} color="white" />
              <FaFacebook size={30} color="white" />
              <FaLinkedin size={30} color="white" />
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
              <a href="/">Home</a>
              <a href="/">Store</a>
              <a href="/">About</a>
              <a href="/">Articles</a>
            </div>
            </div>
            <div className={styles.menu2}>
              <h5>UTILITY PAGES</h5>
              <div className={styles.menuitems}>
                <a href="/">Shipping</a>
                <a href="/">Contact</a>
                <a href="/">404 Not Found</a>
                <a href="/">Support</a>
              </div>
            </div>
          </div>
            <div className={styles.contact}>
              <h5>CONTACT US</h5>
              <div className={styles.menuitems}>
                <a href="/">Email</a>
                <a href="/">Phone</a>
              </div>
            </div>
        </div>

          {/* copyRight section  */}

          <div className={styles.lineandpayment}  >
            <div className={styles.line} ></div>
            <h5>Copyright © <span style={{color:"white"}} >Dev Muhammad Ali</span> | Designed by <span style={{color:"white"}} > Muhammad Ali</span></h5>
            <div className={styles.path} >
              <img  src={Image} />
              <img  src={Image1} />
              <img  src={Image2} />
            </div>
          </div>

        </div>
      </div>
  )
}

export default Footer
