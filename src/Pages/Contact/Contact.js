import React from "react";
import styles from "./Contact.module.css";
import Fade from "react-reveal";
function Contact() {
  return (
    <Fade bottom>
      <div className={styles.maincolor}>
        <div className={styles.first}>
          <div>
            <h3>Contact</h3>
            <p>Send a message and our team will get back to within 24 hrs</p>
          </div>
          <div className={styles.form}>
              <input
                placeholder="Name"
                style={{ color: "black" }}
                className={styles.inputfeild}
              />
              <input
                placeholder="Email"
                style={{ color: "black" }}
                className={styles.inputfeild}
              />        
            <textarea     className={styles.textarea} />
          </div>
        </div>
        <div className={styles.second}></div>
      </div>
    </Fade>
  );
}

export default Contact;
