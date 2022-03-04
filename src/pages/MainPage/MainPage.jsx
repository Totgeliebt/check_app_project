import React, { useState } from "react";
import Header from "../../components/UI/header";
import classes from "./MainPage.module.css";
import AddApp from "../../components/UI/modals/add-app";
import ChangeDescription from "../../components/UI/modals/change-description";
import ShareApp from "../../components/UI/modals/share-app";
import DeleteApp from "../../components/UI/modals/delete-app";
import AppsList from "../../components/UI/apps-list/AppsList";
import AppItem from "../../components/UI/app-item/AppItem";

const MainPage = ({ onClick}) => {
  const [apps, setApps] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [modalEditActive, setModalEditActive] = useState(false);
  const [modalDeleteActive, setModalDeleteActive] = useState(false);
  const [modalShareActive, setModalShareActive] = useState(false);

  return (
    <>
      <Header
        active={modalActive}
        setActive={setModalActive}
        onClick={onClick}
      />
      <div className={classes.mainPage__wrapper}>
        <AppsList apps={apps} setApps={setApps}/>
        {/*<AppItem*/}
        {/*  editActive={modalEditActive}*/}
        {/*  setEditActive={setModalEditActive}*/}
        {/*  setDeleteActive={setModalDeleteActive}*/}
        {/*  setShareActive={setModalShareActive}*/}
        {/*  onClick={onClick}*/}
        {/*/>*/}
        <AddApp
          apps={apps}
          setApps={setApps}
          active={modalActive}
          setActive={setModalActive}
        />
        <ChangeDescription
          editActive={modalEditActive}
          setEditActive={setModalEditActive}
        />
        <ShareApp
          shareActive={modalShareActive}
          setShareActive={setModalShareActive}
          onClick={onClick}
        />
        <DeleteApp
          deleteActive={modalDeleteActive}
          setDeleteActive={setModalDeleteActive}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default MainPage;
