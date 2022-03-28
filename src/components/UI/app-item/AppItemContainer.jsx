import React, { useState } from "react";
import PostService from "../../../api/PostService";
import { addAt } from "../../../utils/helpers";

const AppItemContainer = ({ apps, app, setApps, setAllApps, id, children }) => {
  const [modalEditActive, setModalEditActive] = useState(false);
  const [descriptionIsEditing, setDescriptionIsEditing] = useState(
    app.description
  );
  const [modalDeleteActive, setModalDeleteActive] = useState(false);
  const [modalShareActive, setModalShareActive] = useState(false);
  const [appIsSharing, setAppIsSharing] = useState("");

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

  const deleteAppById = async (id) => {
    const response = await PostService.deleteById(id);
    return response;
  };
  const removeApp = () => {
    console.log(apps);
    setApps(apps.filter((appItem) => appItem.id !== id));
    setAllApps(apps);
    deleteAppById(id);
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
    // console.log(response);
  };
  const props = {
    deleteAppById,
    removeApp,
    handleDescriptionChange,
    descriptionIsEditing,
    setDescriptionIsEditing,
    modalDeleteActive,
    setModalDeleteActive,
    setModalEditActive,
    modalEditActive,
    handleShareChange,
    shareApp,
    modalShareActive,
    setModalShareActive,
    appIsSharing,
  };

  return children(props);
};

export default AppItemContainer;
