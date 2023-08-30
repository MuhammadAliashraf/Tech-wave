import React from 'react'
import styles from './button.module.css'

function MyButton(props) {
  const {
    border,
    label,
    Onclick,
  } = props
  return (
    <div>
      <button
        onClick={Onclick}
        className={styles.btn}>
        {label}
      </button>
    </div>
  )
}

export default MyButton
