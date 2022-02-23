import React from 'react';
import classes from "../Header.module.css";
import search from "../../../../assets/icons/search.svg";

const SearchApp = () => {
  return (
    <div className={classes.header__searchApp}>
      <img
        className={classes.header__searchApp_icon}
        src={search}
        alt="search"
      />
      <input className={classes.header__searchApp_input} type="text" />
    </div>
  );
};

export default SearchApp;