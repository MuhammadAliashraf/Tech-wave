import React from 'react'
import {
  FaFacebook,
  FaGoogle,
  FaPinterest,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaHeart,
  FaCertificate,
  FaIdCard,
} from 'react-icons/fa'
import styles from './icon.module.css'

function Iconsection() {
  return (
    <div className={styles.top}>
      <div className={styles.main}>
        <FaReact className={styles.icons} />
        <h4>20</h4>
        <h5>Years Of Experience</h5>
      </div>
      <div className={styles.main}>
        <FaHeart className={styles.icons} />
        <h4>700+</h4>
        <h5>Happy Patients</h5>
      </div>
      <div className={styles.main}>
        <FaCertificate className={styles.icons} />
        <h4>120</h4>
        <h5>Certificate</h5>
      </div>
      <div className={styles.main}>
        <FaIdCard className={styles.icons} />
        <h4>40+</h4>
        <h5>Dentist</h5>
      </div>
    </div>
  )
}

export default Iconsection
