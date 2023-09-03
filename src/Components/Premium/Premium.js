import React from 'react'
import styles from './Premium.module.css'
import MyButton from '../button/MyButton'
import Fade from 'react-reveal'
function Premium() {
  return (
    <Fade bottom>
      <div className={styles.maincolor}>
        <div>
          <h1 style={{ fontWeight: 400 }}>Premium Design and Quality</h1>
          <p>
            Born out of a shared love of good design & quality products, we
            create considered solutions fit for the modern lifestyle. Always
            driven by passion, we work to empower others to live the same way.
          </p>
          <div className={styles.btn}>
            <MyButton label="Read out Story" />
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Premium
