import React, {useState} from "react";
import PostService from "../../api/PostService";
import {addAt} from "../../utils/helpers";
import {useFetching} from "../../hooks/useFetching";

const AppItemContainer = ({ apps, app, setApps, setAllApps, id, children }) => {
  const [modalEditActive, setModalEditActive] = useState(false);
  const [descriptionIsEditing, setDescriptionIsEditing] = useState(
    app.description
  );
  const [modalDeleteActive, setModalDeleteActive] = useState(false);
  const [modalShareActive, setModalShareActive] = useState(false);
  const [appIsSharing, setAppIsSharing] = useState("");
  const [fetching, isLoading, error] = useFetching(PostService.editDescription);
  const changeDescription = async () => {
    const descriptionData = {
      id: `${app.id}`,
      description: `${descriptionIsEditing}`,
    };
    const response = fetching(descriptionData)
      setDescriptionIsEditing(descriptionIsEditing);
    console.log(response)
  };

  const handleDescriptionChange = (description) => {
    changeDescription(description);
    setModalEditActive(false);
  };

  // const [fetching, isLoading, error] = useFetching(PostService.deleteById);
  const deleteAppById = async (id) => {
    const response = await PostService.deleteById(id)
    // return response

    // console.log(response)
  };

  const removeApp = () => {
    setApps(apps.filter((appItem) => appItem.id !== id));
    setAllApps(apps);
    deleteAppById(id);
    console.log(apps);
  };

  const handleShareChange = (e) => {
    setAppIsSharing(e.target.value);
  };

  useFetching(() => PostService.share)
  const shareApp = async () => {
    const shareData = {
      id: `${app.id}`,
      shareTo: `${addAt(appIsSharing)}`,
    };
    const response = fetching(shareData)
      setAppIsSharing(appIsSharing);
      setModalShareActive(false);
    console.log(response);
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
