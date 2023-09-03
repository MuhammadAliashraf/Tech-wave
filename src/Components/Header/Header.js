import React from 'react'
import styles from './Header.module.css'
import Fade from 'react-reveal'
import { FaArrowRight } from 'react-icons/fa'
function Header({ titel, para }) {
  return (
    <Fade bottom>
        <div className={styles.header}>
          <h1>{titel}</h1>
          <div className={styles.explore}>
            <div>
              <p>{para}</p>
            </div>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </div>
    </Fade>
  )
}

export default Header
