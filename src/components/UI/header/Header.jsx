import classes from './Header.module.css'
import app_logo from '../images/app_logo.png'
import React from 'react';
import plus from '../images/plus.png'
import search from '../images/search.svg'
import dropdown_arrow from '../images/dropdown_arrow.png'
import user_image from '../images/user_image.png'
import dropdown from '../images/dropdown.png'
const Header = () => {
    return (
        <header >
            <div className={classes.header__wrapper}>
                <div className={classes.header__logo}>
                    <img src={app_logo} className={classes.header__logo_icon} alt="logo"/>
                    <div>
                    <h1 className={classes.header__logo_title}>AppCheck</h1>
                    <p className={classes.header__logo_text}>Список приложений</p>
                    </div>
                </div>
                <div className={classes.header__addApp}>
                    <div className={classes.header__addApp_btn}>
                        <img className={classes.header__addApp_plus} src={plus} alt="plus"/>
                    </div>
                    <p className={classes.header__addApp_title}>Добавить приложение</p>
                </div>
                <div className={classes.header__sortApp}>
                   <p className={classes.header__sortApp_title}>Все приложения</p>
                    <img className={classes.header__sortApp_dropdown} src={dropdown} alt="dropdown"/>
                </div>
                <div className={classes.header__searchApp}>
                    <img className={classes.header__searchApp_icon} src={search} alt="search"/>
                    <input className={classes.header__searchApp_input} type="text"/>
                </div>
                <div className={classes.header__admin}>
                    <h2 className={classes.header__admin_title}>Администратор</h2>
                    <img className={classes.header__admin_dropdown} src={dropdown_arrow} alt="dropdown arrow"/>
                    <img className={classes.header__admin_user} src={user_image} alt="user image"/>
                </div>
            </div>
        </header>
    );
};

export default Header;