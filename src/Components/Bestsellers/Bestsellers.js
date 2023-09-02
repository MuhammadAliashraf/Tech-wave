import React from 'react';
import styles from './Bestsellers.module.css';
import { FaArrowRight } from 'react-icons/fa';

function Bestsellers({ sellers }) {
  return (
    <div className={styles.seller}>
      <div className={styles.header}>
        <h1>Bestsellers</h1>
        <div className={styles.explore}>
          <div>
            <p>Explore category</p>
          </div>
          <div>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        {sellers.map((e, i) => (
          <div className={styles.cardItem} key={i}>
            <div className={styles.main}>
              <div className={styles.image}>
                <img src={e.image} alt={e.name} className={styles.image} />
              </div>
              <p className={styles.para}>{e?.category}</p>
            </div>
            <div className={styles.content}>
              <h4>{e.name}</h4>
              <p>{e.details}</p>
              <h4>${e.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
