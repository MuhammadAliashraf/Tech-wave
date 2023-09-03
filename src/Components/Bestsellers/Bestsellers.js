import React from 'react'
import styles from './Bestsellers.module.css'
import { FaArrowRight } from 'react-icons/fa'
import BIG from '../../images/big.png'
import { Fade } from 'react-reveal'
function Bestsellers({ sellers, title, label, show, showbigimage }) {
  console.log(show)
  return (
    <div className={styles.seller}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.explore}>
          <div>
            <p>{label}</p>
          </div>
          <div>
            <FaArrowRight />
          </div>
        </div>
      </div>
      {showbigimage ? (
        <div className={styles.big}>
          <Fade bottom>
            <img className={styles.bigimage} src={BIG} />
            <div className={styles.content}>
              <h4>Lryx Watch</h4>
              <h4 className={styles.contentpara}>$349.99</h4>
            </div>
          </Fade>
        </div>
      ) : (
        ''
      )}
      <div className={styles.card}>
        {sellers.map((e, i) => (
          <div className={styles.cardItem} key={i}>
            <Fade bottom>
              <div className={styles.main}>
                <div className={styles.image}>
                  <img src={e.image} alt={e.name} className={styles.image} />
                </div>
                <p className={styles.para}>{e?.category}</p>
              </div>
              <div className={styles.content}>
                <h4>{e.name}</h4>
                {show ? '' : <p>{e.details}</p>}
                <h4 className={styles.contentpara}>${e.price}</h4>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bestsellers
