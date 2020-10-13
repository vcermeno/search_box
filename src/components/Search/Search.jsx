import React from "react";
import styles from './search.module.css';

const Search = ({text, handleOnChange}) => {

  return (
    <>  
        <label htmlFor='search-box'>
            Find your files...
        </label>
        <input type="search" value={text} className={styles.input} onChange={(e) => handleOnChange(e)} aria-label="Search"/>
    </>
  );
};

export default Search;
