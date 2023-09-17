import React from "react";
import styles from "./About.module.css";
import Fade from "react-reveal";
import Experience from "../../../Components/Experience/Experience";
function About() {
  return (
    <div>
      <Fade bottom>
        <div className={styles.maincolor}>
          <div className={styles.header}>
            <h1>About our products</h1>
            <p>
              We're a passionate team dedicated to delivering exceptional
              products and experiences to our valued customers. With a
              commitment to quality and innovation, we handpick each item in our
              collection to ensure it meets our stringent standards.
            </p>
          </div>
        </div>
      </Fade>
      {/* Count Cards Start */}
      <div className={styles.cardmain}>
        <div className={styles.cards}>
          <h4>2010</h4>
          <p>Year Founded</p>
        </div>
        <div className={styles.cards}>
          <h4>+50</h4>
          <p>Collections</p>
        </div>
        <div className={styles.cards}>
          <h4>70K</h4>
          <p>Happy Customers</p>
        </div>
        <div className={styles.cards}>
          <h4>+250</h4>
          <p>Products</p>
        </div>
        <div className={styles.cards}>
          <h4>+25</h4>
          <p>Team members</p>
        </div>
      </div>
      {/* Count Cards End */}
      <Experience
        title="We are committed to
        designing high quality, human-centered products"
        para="From the initial concept to the final product, we prioritize meticulous attention to detail and rigorous testing to ensure the utmost satisfaction of our customers."
      />
      {/* --------Over Values------- */}
      <div className={styles.maincolor}>
        <div className={styles.header}>
          <h1>Our Values</h1>
          <p>
            We value innovation and continuously seek to push boundaries,
            delivering products that inspire and delight. Join us in embracing
            these values and become part of our mission to make a positive
            difference in the world.
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default About;
