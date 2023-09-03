import React from 'react'
import styles from './Featured.module.css'
import Fade from 'react-reveal'
import { FaArrowRight } from 'react-icons/fa'
import Header from '../Header/Header'

function Featured() {
  return (
    <Fade bottom>
      <div>
        <Header
          titel="Featured Products"
          para="Browse all products"
        />
      </div>
    </Fade>
  )
}

export default Featured
