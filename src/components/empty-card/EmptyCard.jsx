import React from "react";
import classes from "./EmptyCard.module.css";
import cardAddIcon from "../../assets/icons/card-add-icon.svg";

const EmptyCard = () => (
  <div className={classes.card}>
    <img
      className={classes.card__addAppIcon}
      src={cardAddIcon}
      alt="add app"
    />
    <p className={classes.card__title}>У вас пока нет приложений!</p>
  </div>
);

export default EmptyCard;
