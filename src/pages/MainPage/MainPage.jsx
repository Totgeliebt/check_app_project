import React, { useState } from "react";
import Header from "../../components/UI/header";
import classes from "./MainPage.module.css";
import AddApp from "../../components/UI/modals/add-app";
import ChangeDescription from "../../components/UI/modals/change-description";
import ShareApp from "../../components/UI/modals/share-app";
import DeleteApp from "../../components/UI/modals/delete-app";
import axios from "axios";
import AppItem from "../../components/UI/app-item/AppItem";
import AppsList from "../../components/UI/apps-list/AppsList";

const MainPage = ({ onClick, props, appName,appDescription,appBundle }) => {
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
        <AppsList props={props} apps={apps} setApps={setApps}/>
        {/*<AppItem*/}
        {/*  editActive={modalEditActive}*/}
        {/*  setEditActive={setModalEditActive}*/}
        {/*  setDeleteActive={setModalDeleteActive}*/}
        {/*  setShareActive={setModalShareActive}*/}
        {/*  onClick={onClick}*/}
        {/*/>*/}
        <AddApp
          // appName={appName} appDescription={appDescription} appBundle={appBundle}
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
