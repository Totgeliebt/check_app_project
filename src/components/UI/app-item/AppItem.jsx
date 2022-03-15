import React, { useState } from "react";
import classes from "./AppItem.module.css";
import copylinkIcon from "../../../assets/icons/copylink-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import editIcon from "../../../assets/icons/edit-icon.svg";
import shareIcon from "../../../assets/icons/share-icon.svg";
import ChangeDescription from "../modals/change-description";
import DeleteApp from "../modals/delete-app";
import ShareApp from "../modals/share-app";
import axios from "axios";
import PostService from "../../../api/PostService";

const AppItem = ({
  name,
  bundle,
  description,
  icon,
  version,
  update,
  rate,
  rateCounting,
  installations,
  id,
  apps,
  setApps,
}) => {
  const [modalDeleteActive, setModalDeleteActive] = useState(false);
  const [modalShareActive, setModalShareActive] = useState(false);
  const [modalEditActive, setModalEditActive] = useState(false);
  const [descriptionIsEditing, setDescriptionIsEditing] = useState(description);

  async function deleteAppById(id) {
    const response = await PostService.deleteById(id);
    return response;
  }
  const removeApp = () => {
    setApps(apps.filter((app) => app.id !== id));
    deleteAppById(id);
    console.log(apps);
  };

  const changeDescription = async () => {
    const descriptionData = {
      id: `${id}`,
      description: `${descriptionIsEditing}`,
    };

    const response = PostService.editDescription(descriptionData)
      .then(function (response) {
        setDescriptionIsEditing(descriptionIsEditing);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleDescriptionChange = (description) => {
    changeDescription(description);
    setModalEditActive(false);
  };
  return (
    <>
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
        <div className={classes.card__description}>{descriptionIsEditing}</div>
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
            onClick={() => setModalEditActive(true)}
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
            onClick={() => setModalDeleteActive(true)}
            className={classes.card__icons_delete}
            src={deleteIcon}
            alt="delete"
          />
          <img
            onClick={() => setModalShareActive(true)}
            className={classes.card__icons_share}
            src={shareIcon}
            alt="share app"
          />
        </div>
      </div>
      <DeleteApp
        apps={apps}
        setDeleteActive={setModalDeleteActive}
        deleteActive={modalDeleteActive}
        onclick={removeApp}
        name={name}
      />

      <ChangeDescription
        editActive={modalEditActive}
        setEditActive={setModalEditActive}
        description={description}
        onClick={handleDescriptionChange}
        isEditing={descriptionIsEditing}
        setIsEditing={setDescriptionIsEditing}
      />
      <ShareApp
        shareActive={modalShareActive}
        setShareActive={setModalShareActive}
      />
    </>
  );
};

export default AppItem;
