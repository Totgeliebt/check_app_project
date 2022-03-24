import classes from "./Header.module.css";
import React, {useState} from "react";
import Logo from "./logo/Logo";
import AddAppHeaderBtn from "./add-app-btn/AddAppHeaderBtn";
import SortApp from "./sort-app/SortApp";
import SearchApp from "./search-app/searchApp";
import Admin from "./admin/Admin";

const Header = ({ setActive, onClick, inputValue,setInputValue, selectedOption, setSelectedOption}) => {


  return (
    <header>
      <div className={classes.header__wrapper}>
        <Logo />
        <AddAppHeaderBtn setActive={setActive} onClick={onClick} />
        <SortApp setSelectedOption={setSelectedOption}
                 selectedOption={selectedOption}
        />
        <SearchApp inputValue={inputValue} setInputValue={setInputValue}/>
        <Admin />
      </div>
    </header>
  );
};

export default Header;
