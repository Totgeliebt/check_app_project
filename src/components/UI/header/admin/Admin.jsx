import React, {useState} from 'react';
import classes from "../Header.module.css";
import dropdownArrow from "../../../../assets/icons/dropdown-arrow.svg";

const Admin = () => {
  const [isDropdownExitShown,setIsDropdownExitShown] = useState(false)
  return (
    <div
      className={classes.header__admin}
      onClick={() => setIsDropdownExitShown(!isDropdownExitShown)}
    >
      <h2 className={classes.header__admin_title}>Администратор</h2>
      <img
        className={classes.header__admin_dropdown}
        src={dropdownArrow}
        alt="dropdown_arrow"
      />
      <div className={classes.header__admin_user}></div>
      {isDropdownExitShown ? (
        <div className={classes.header__admin_exit}>Выйти</div>
      ) : null}
    </div>
  );
};

export default Admin;