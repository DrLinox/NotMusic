import React from "react";
import styles from "./searchbar.module.css";

const SearchBar = () => {
  const glass = {
    fontSize: "1rem",
    cursor: "pointer",
    position: "absolute",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    top: "50%",
    right: "0",
    transform: "translate(-50%, -50%)",
  };
  return (
    <form action="" className={styles.container}>
      <div className={styles.bar}>
        <input type="search" name="" id="" className={styles.SearchBar} />
        <button
          className="fa-solid fa-magnifying-glass"
          type="submit"
          style={glass}
        ></button>
      </div>
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
