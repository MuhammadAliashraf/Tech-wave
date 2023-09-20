import React, { useState } from "react";
import styles from "./Support.module.css";
import Fade from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
function Support() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleAnswer = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const data = [
    {
      question: 'Questions 1?',
      answer:
        'Kavvay, Türkiye’den yurt dışına satış yapa e-ticaret sitelerinin kullana bileceği E-gönderi yazılım hizmetidir. Size özel Kavvay hesabı üzerinden siparişlerinizi ve gönderilerinizi yöneterek, Kavvay E-Gönderi yazılım teknolojisi üzerinden gönderilerinizi müşterilerinize ulaşmasını sağlaya bilirsiniz.',
    },
    {
      question: 'Questions 1?',
      answer:
        'Kavvay, Türkiye’den yurt dışına satış yapa e-ticaret sitelerinin kullana bileceği E-gönderi yazılım hizmetidir. Size özel Kavvay hesabı üzerinden siparişlerinizi ve gönderilerinizi yöneterek, Kavvay E-Gönderi yazılım teknolojisi üzerinden gönderilerinizi müşterilerinize ulaşmasını sağlaya bilirsiniz.',
    },
    {
      question: 'Questions 1?',
      answer:
        'Kavvay, Türkiye’den yurt dışına satış yapa e-ticaret sitelerinin kullana bileceği E-gönderi yazılım hizmetidir. Size özel Kavvay hesabı üzerinden siparişlerinizi ve gönderilerinizi yöneterek, Kavvay E-Gönderi yazılım teknolojisi üzerinden gönderilerinizi müşterilerinize ulaşmasını sağlaya bilirsiniz.',
    },
    {
      question: 'Questions 1?',
      answer:
        'Kavvay, Türkiye’den yurt dışına satış yapa e-ticaret sitelerinin kullana bileceği E-gönderi yazılım hizmetidir. Size özel Kavvay hesabı üzerinden siparişlerinizi ve gönderilerinizi yöneterek, Kavvay E-Gönderi yazılım teknolojisi üzerinden gönderilerinizi müşterilerinize ulaşmasını sağlaya bilirsiniz.',
    },
    {
      question: 'Questions 1?',
      answer:
        'Kavvay, Türkiye’den yurt dışına satış yapa e-ticaret sitelerinin kullana bileceği E-gönderi yazılım hizmetidir. Size özel Kavvay hesabı üzerinden siparişlerinizi ve gönderilerinizi yöneterek, Kavvay E-Gönderi yazılım teknolojisi üzerinden gönderilerinizi müşterilerinize ulaşmasını sağlaya bilirsiniz.',
    },
  
  ]
  return (
    <>
      <Fade bottom>
        <div className={styles.maincolor}>
          <div className={styles.header}>
            <h1>Support</h1>
            <p>
              Whether you need assistance with product setup, troubleshooting,
              or general inquiries, our knowledgeable and friendly support staff
              is just a phone call or email away.
            </p>
          </div>
        </div>
      </Fade>
      <div className={styles.questionmain}>
        <h4>FREQUENTLY ASKED QUESTIONS</h4>
        <div className={styles.question_border}>
          {data?.map((item, index) => (
            <div key={index} >
              <div className={styles.question}>
                <h4>{item.question}</h4>
                <div>
                  <span
                    className={styles.arrow}
                    onClick={() => toggleAnswer(index)}
                  >
                    {index === expandedIndex ? (
                      <FontAwesomeIcon icon={faArrowUp} className={styles.icons} />
                    ) : (
                      <FontAwesomeIcon icon={faArrowDown} className={styles.icons} />
                    )}
                  </span>
                </div>
              </div>
              {index === expandedIndex && (
                <div className={styles.answer}>{item.answer}</div>
              )}
              <div className={styles.line}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Support;
