import React, {useState} from 'react';
import classes from "../Header.module.css";
import search from "../../../../assets/icons/search.svg";
import {useBus} from "react-bus";

const SearchApp = ({inputValue, setInputValue}) => {

  // const bus = useBus();

  // bus.emit('searching',searchInputValue)
  // console.log(searchInputValue)
  return (
    <div className={classes.header__searchApp}>
      <img
        className={classes.header__searchApp_icon}
        src={search}
        alt="search"
      />
      <input
        className={classes.header__searchApp_input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchApp;