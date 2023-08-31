import React from 'react'
import styles from './button.module.css'

function MyButton(props) {
  const {
    border,
    label,
    Onclick,
    black,
    white,
    lightgray,
    width,
    height,
    backgroundcolor,
    color,
    borderRadius,
    marginLeft,
    marginright
  } = props
  return (
    <div>
      <button
        onClick={Onclick}
        className={[
          white?styles.whitebtn:
          styles.btn]}
          >
        {label}
      </button>
    </div>
  )
}

export default MyButton
