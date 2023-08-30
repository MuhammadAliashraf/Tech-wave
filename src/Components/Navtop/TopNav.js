import React from 'react'
import styles from './topnav.module.css'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {
  FaFacebook,
  FaGoogle,
  FaPinterest,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

function TopNav() {
  return (
    <div className={styles.maindev}>
      <div className={styles.item1}>
        <FaMapMarkerAlt className={styles.icons} />
        <p>28 Jackson Street, Chicago, 7788569 USA </p>
      </div>
      <div className={styles.item1}>
        <MdEmail className={styles.icons} />
        <p>info.dento@gmail.com</p>
      </div>
      <div className={styles.item2}>
        <FaFacebook className={styles.icons} />
        <FaGoogle className={styles.icons} />
        <FaPinterest className={styles.icons} />
        <FaLinkedin className={styles.icons} />
        <FaTwitter className={styles.icons} />
      </div>
    </div>
  )
}

export default TopNav
