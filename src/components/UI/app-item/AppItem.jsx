import React, { useState } from "react";
import classes from "./AppItem.module.css";
import copylinkIcon from "../../../assets/icons/copylink-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import editIcon from "../../../assets/icons/edit-icon.svg";
import shareIcon from "../../../assets/icons/share-icon.svg";
import ChangeDescription from "../modals/change-description";
import DeleteApp from "../modals/delete-app";
import ShareApp from "../modals/share-app";
import PostService from "../../../api/PostService";
import { addAt } from "../../../utils/helpers";
import { useListener } from "react-bus";

const AppItem = ({
  name,
  description,
  rateCounting,
  id,
  state,
  app,
  allApps,
  setAllApps,
}) => {
  const [modalDeleteActive, setModalDeleteActive] = useState(false);
  const [modalShareActive, setModalShareActive] = useState(false);
  const [modalEditActive, setModalEditActive] = useState(false);
  const [descriptionIsEditing, setDescriptionIsEditing] = useState(
    app.description
  );
  const [appIsSharing, setAppIsSharing] = useState("");

  const deleteAppById = async (id) => {
    const response = await PostService.deleteById(id);
    return response;
  };
  const removeApp = () => {
    setAllApps(allApps.filter((appItem) => appItem.id !== id));
    deleteAppById(id);
  console.log(allApps);
    setModalDeleteActive(false);
  };

  const changeDescription = async () => {
    const descriptionData = {
      id: `${app.id}`,
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

  const handleShareChange = (e) => {
    setAppIsSharing(e.target.value);
  };

  const shareApp = async () => {
    const shareData = {
      id: `${app.id}`,
      shareTo: `${addAt(appIsSharing)}`,
    };
    console.log(shareData);
    const response = PostService.share(shareData)
      .then(function (response) {
        setAppIsSharing(appIsSharing);
      })
      .catch(function (error) {
        console.log(error);
      });
    setModalShareActive(false);
    // console.log(response)
  };

  return (
    <>
      <div
        className={
          state === 0
            ? `${classes.card} ${classes.pending}`
            : classes.card && state === 2
            ? `${classes.card} ${classes.deleted}`
            : classes.card
        }
      >
        <div className={classes.card__title_wrapper}>
          <img className={classes.card__icon} src={app.icon} alt="app icon" />
          <p className={classes.card__title}>{app.name}</p>
          <p className={classes.card__bundle}>{app.bundle}</p>
          <p className={classes.card__rate_counting}>
            <span className={classes.card__rate}>{app.rate}</span>
            {rateCounting}
          </p>
        </div>
        <div className={classes.card__description}>{descriptionIsEditing}</div>
        <div>
          <ul className={classes.card__details}>
            <li className={classes.card__details_updated}>
              Обновлено <p>{app.update}</p>
            </li>
            <li className={classes.card__details_version}>
              Версия <p>{app.version}</p>
            </li>
            <li className={classes.card__details_installed}>
              Установки <p>{app.installations}</p>
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
        isSharing={appIsSharing}
        setIsSharing={setAppIsSharing}
        onclick={shareApp}
        onChange={handleShareChange}
        shareActive={modalShareActive}
        setShareActive={setModalShareActive}
      />
    </>
  );
};

export default AppItem;
