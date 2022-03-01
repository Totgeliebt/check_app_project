import React, { useState } from "react";
import classes from "./AppItem.module.css";
import copylinkIcon from "../../../assets/icons/copylink-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import editIcon from "../../../assets/icons/edit-icon.svg";
import shareIcon from "../../../assets/icons/share-icon.svg";
import AddAppHeaderBtn from "../header/add-app-btn/AddAppHeaderBtn";
import ChangeDescription from "../modals/change-description";

const AppItem = ({
  onClick,
  editActive,
  setEditActive,
  setDeleteActive,
  setShareActive,

}) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__title_wrapper}>
        <img className={classes.card__icon} alt="app image" />
        <p className={classes.card__title}>Sketchbook</p>
        <p className={classes.card__bundle}>com.app.bundle</p>
        <p className={classes.card__rating}>21,367,566</p>
      </div>
      <div className={classes.card__description}>
        Sketchbook — это отмеченное наградами приложение для создания эскизов,
        картин и рисунков для всех...
      </div>
      <div>
        <ul className={classes.card__details}>
          <li className={classes.card__details_updated}>
            Обновлено <p>14.02.2022</p>
          </li>
          <li className={classes.card__details_version}>
            Версия <p>5.2.5</p>
          </li>
          <li className={classes.card__details_installed}>
            Установки <p>1 000 000 +</p>
          </li>
        </ul>
      </div>
      <div className={classes.card__icons}>
        <img
          onClick={() => setEditActive(true)}
          className={classes.card__icons_edit}
          src={editIcon}
          alt="edit"
        />
        <img
          className={classes.card__icons_copylink}
          src={copylinkIcon}
          alt="copy link"
        />
        <img
          onClick={() => setDeleteActive(true)}
          className={classes.card__icons_delete}
          src={deleteIcon}
          alt="delete"
        />
        <img
          onClick={() => setShareActive(true)}
          className={classes.card__icons_share}
          src={shareIcon}
          alt="share app"
        />
      </div>
      <ChangeDescription
        editActive={editActive}
        setEditActive={setEditActive}
        onEdit={onClick}
      />
    </div>
  );
};

export default AppItem;
