import React, {useState} from 'react';
import classes from "../Header.module.css";
import dropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import PostService from "../../../api/PostService";
import {useNavigate} from "react-router-dom";
import {useFetching} from "../../../hooks/useFetching";

const Admin = () => {
  const [isDropdownExitShown,setIsDropdownExitShown] = useState(false)
  const [fetching, isLoading, error] = useFetching(PostService.logout);
  const navigate = useNavigate()
  const handleLogout = async () => {
    const response = await fetching()
    console.log(response)
    navigate('/login')
  }
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
        <div className={classes.header__admin_exit} onClick={handleLogout}>Выйти</div>
      ) : null}
    </div>
  );
};

export default Admin;