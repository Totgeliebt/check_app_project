import classes from "./Header.module.css";
import React from "react";
import Logo from "./logo/Logo";
import AddAppHeaderBtn from "./add-app-btn/AddAppHeaderBtn";
import SortApp from "./sort-app/SortApp";
import SearchApp from "./search-app/searchApp";
import Admin from "./admin/Admin";

const Header = ({ setActive, onClick }) => {
  return (
    <header>
      <div className={classes.header__wrapper}>
        <Logo />
        <AddAppHeaderBtn setActive={setActive} onClick={onClick} />
        <SortApp />
        <SearchApp />
        <Admin />
      </div>
    </header>
  );
};

export default Header;
