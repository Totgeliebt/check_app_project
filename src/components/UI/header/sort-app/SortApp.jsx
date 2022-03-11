import React, { useState } from "react";
import classes from "../Header.module.css";
import dropdown from "../../../../assets/icons/dropdown.svg";

const SortApp = () => {
  const [isDropdownSortShown, setIsDropdownSortShown] = useState(false);
  return (
    <div
      className={classes.header__sortApp}
      onClick={() => setIsDropdownSortShown(!isDropdownSortShown)}
    >
      <p className={classes.header__sortApp_chosen}>Все приложения</p>
      <img
        className={classes.header__sortApp_icon}
        src={dropdown}
        alt="dropdown"
      />
      {isDropdownSortShown ? (
        <div className={classes.header__sortApp_dropdown}>
          <div className={classes.header__sortApp_title}>Все приложения</div>
          <div className={classes.header__sortApp_title}>Удаленные приложения</div>
          <div className={classes.header__sortApp_title}>Пендинг</div>
        </div>
      ) : null}
    </div>
  );
};

export default SortApp;
