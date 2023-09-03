import React from 'react'
import styles from './Subscribe.module.css'
import Fade from 'react-reveal'
import MyButton from '../button/MyButton'
function Subscribe() {
  return (
    <Fade bottom>
      <div className={styles.maincolor}>
        <div className={styles.Subscribe_content}>
          <h4>Subscribe to our email newsletter and get 10% off</h4>
          <p>
            Stay in the loop with the latest updates, exclusive offers, and
            exciting product launches by subscribing to our email newsletter.
          </p>
        </div>
        <div className={styles.Subscribe_inputs}>
          <input placeholder="Email Address" />
          <div className={styles.btn}>
            <MyButton label="Subscribe" />
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Subscribe
