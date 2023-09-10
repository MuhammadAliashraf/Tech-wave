import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ data }) {
  const [selectedValue, setSelectedValue] = useState("All");

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className={styles.Container}>
      {data.map((e, i) => (
        <div
          key={i}
          className={
            selectedValue === e.type
              ? styles.textmainAfterclick
              : styles.textmain
          }
          onClick={() => handleClick(e.type)}
        >
          <p
            className={
              selectedValue === e.type
                ? styles.textAfterclick
                : styles.text
            }
          >
            {e.type}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
