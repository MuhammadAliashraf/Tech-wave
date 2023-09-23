import React from "react";
import styles from "./Contact.module.css";
import Fade from "react-reveal";
function Contact() {
  return (
    <Fade bottom>
      <div className={styles.maincolor}>
        <div className={styles.first}>
          <div>
            <h1>Contact</h1>
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
            <textarea
              placeholder="Message"
              rows={7}
              className={styles.textarea}
            />
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </div>
        </div>
        <div className={styles.second}>
          <div  className={styles.secondcontent} >
            <div className={styles.smallcontent} >
              <p>Location</p>
              <h4>Greenfields, Citytown, London, UK, 52050</h4>
            </div>
            <div  className={styles.smallcontent}>
              <p>WORKING HOURS</p>
              <h4>Monday To Friday 9:00 AM to 8:00 PM </h4>
              <p>Our Support Team is available 24Hrs</p>
            </div>
            <div className={styles.smallcontent}>
              <p>CONTACT US</p>
              <h4>020 7993 2905</h4>
              <p>Sayhello@techwave.com</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;
