import React from 'react'
import styles from './Category.module.css'
import { Fade } from 'react-reveal'
import { FaArrowRight } from 'react-icons/fa'

function Category(Data) {
  console.log(Data)
  return (
    <div className={styles.main}>
      {Data.Data.map((category, index) => (
        <Fade bottom>
          <div key={index} className={styles.categoryItem}>
            <div className={styles.image}>{category.image}</div>
            <div className={styles.content}>
              <h3 className={styles.title}>{category.name}</h3>
              <p className={styles.details}>{category.details}</p>
            </div>
            <div className={styles.explore}>
              <div>
                <p>Explore category</p>
              </div>
              <div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  )
}

export default Category
