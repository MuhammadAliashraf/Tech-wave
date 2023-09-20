import React from "react";
import styles from "./About.module.css";
import Fade from "react-reveal";
import Experience from "../../../Components/Experience/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLightbulb,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCreativeCommons,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCross,
  faIndustry,
  faPenRuler,
  faTractor,
} from "@fortawesome/free-solid-svg-icons";
import Premium from "../../../Components/Premium/Premium";
function About() {
  const data = [
    {
      id: 1,
      icon: <FontAwesomeIcon size="2xl" icon={faPenRuler} />,
      title: "Design",
      para: "We believe in the power of thoughtful design, creating products that blend aesthetically and functionally.",
    },
    {
      id: 1,
      icon: <FontAwesomeIcon size="2xl" icon={faStar} />,
      title: "Quality",
      para: "Quality is at the forefront of everything we do. From materials selection to manufacturing processes.",
    },
    {
      id: 1,
      icon: <FontAwesomeIcon size="2xl" icon={faLightbulb} />,
      title: "Innovation",
      para: "We foster a culture of innovation, constantly pushing the boundaries of what's possible and embracing new technologies.",
    },
    {
      id: 1,
      icon: <FontAwesomeIcon size="2xl" icon={faHeart} />,
      title: "Passion",
      para: "We are deeply passionate about what we do, and that passion fuels our commitment to delivering exceptional products.",
    },
  ];
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
      <div className={styles.valuescardmain}>
        <Fade bottom>
          {data.map((e, i) => {
            return (
              <div className={styles.valuecard}>
                <div>
                  {e.icon}
                  <div>
                    <h5>{e.title}</h5>
                    <p>{e.para}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
      <Premium />

      {/* our Partner */}
      <div className={styles.ourpartner}>
        <div>
          <h4 style={{ textAlign: "center" }}>Our partners</h4>
          <div className={styles.icons}>
            <FontAwesomeIcon
              style={{ margin: 15 }}
              size="2xl"
              icon={faGoogle}
            />
            <FontAwesomeIcon
              style={{ margin: 15 }}
              size="2xl"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              style={{ margin: 15 }}
              size="2xl"
              icon={faIndustry}
            />
            <FontAwesomeIcon
              style={{ margin: 15 }}
              size="2xl"
              icon={faTractor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
