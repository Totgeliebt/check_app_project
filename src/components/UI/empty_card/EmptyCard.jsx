import React from 'react';
import classes from './EmptyCard.module.css'
import card_add_icon from '../images/card_add_icon.png'
const EmptyCard = () => {
    return (
        <div className={classes.card}>
            <img className={classes.card__addAppIcon} src={card_add_icon} alt="add app"/>
            <p className={classes.card__title}>У вас пока нет приложений!</p>
        </div>
    );
};

export default EmptyCard;