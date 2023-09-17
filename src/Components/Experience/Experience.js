import React from "react";
import styles from "./Experience.module.css";
import image14 from "../../images/image (14).png";
import MyButton from "../button/MyButton";

import Fade from "react-reveal";
function Experience({ title, para, label }) {
  return (
    <Fade bottom>
      <div className={styles.main}>
        <div>
          <div className={styles.topcontainer}>
            <div className={styles.content}>
              <h1>{title}</h1>
              <p className={styles.para}>{para}</p>
              <div className={styles.btn}>
                <MyButton white label="Browse products" />
              </div>
            </div>
          </div>
          <div className={styles?.imagecontainer}>
            <img src={image14} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Experience;
