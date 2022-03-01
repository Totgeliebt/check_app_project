import React, {useState} from 'react';
import classes from "../Header.module.css";
import search from "../../../../assets/icons/search.svg";

const SearchApp = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  return (
    <div className={classes.header__searchApp}>
      <img
        className={classes.header__searchApp_icon}
        src={search}
        alt="search"
      />
      <input
        className={classes.header__searchApp_input}
        value={searchInputValue}
        onChange={e => setSearchInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchApp;