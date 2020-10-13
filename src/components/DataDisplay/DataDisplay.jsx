import React from "react";
import styles from './datadisplay.module.css';

const DataDisplay = ({ results }) => {
  if (results) {
    return (
      <div className={styles.DataDisplay}>
        <ul className={styles.list}>
          {results.map((item) => {
            return <li className={styles.item} key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <div>Loading Data...</div>;
  }
};

export default DataDisplay;
