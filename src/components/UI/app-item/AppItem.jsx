import React from "react";
import classes from "./AppItem.module.css";
import copylinkIcon from "../../../assets/icons/copylink-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import editIcon from "../../../assets/icons/edit-icon.svg";
import shareIcon from "../../../assets/icons/share-icon.svg";
import ChangeDescription from "../modals/change-description";

const AppItem = ({
  onClick,
  editActive,
  setEditActive,
  setDeleteActive,
  setShareActive,
  name,
  bundle,
  description,
  icon,
  version,
  update,
  rate,
  rateCounting,
  installations,
}) => {

  return (
    <div className={classes.card}>
      <div className={classes.card__title_wrapper}>
        <img className={classes.card__icon} src={icon} alt="app icon" />
        <p className={classes.card__title}>{name}</p>
        <p className={classes.card__bundle}>{bundle}</p>
        <p className={classes.card__rate_counting}>
          <span className={classes.card__rate}>{rate}</span>
          {rateCounting}
        </p>
      </div>
      <div className={classes.card__description}>{description}</div>
      <div>
        <ul className={classes.card__details}>
          <li className={classes.card__details_updated}>
            Обновлено <p>{update}</p>
          </li>
          <li className={classes.card__details_version}>
            Версия <p>{version}</p>
          </li>
          <li className={classes.card__details_installed}>
            Установки <p>{installations}</p>
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
