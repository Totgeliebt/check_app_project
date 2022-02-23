import React, { useState } from "react";
import Header from "../../components/UI/header";
import EmptyCard from "../../components/UI/empty-card";
import classes from "./MainPage.module.css";
import AddAppPopup from "../../components/UI/modals/add-app";
import ChangeDescription from "../../components/UI/modals/change-description";
import ShareApp from "../../components/UI/modals/share-app";
import DeleteApp from "../../components/UI/modals/delete-app/DeleteApp";

const MainPage = ({ onClick }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.mainPage__wrapper}>
      <Header
        active={modalActive}
        setActive={setModalActive}
        onClick={onClick}
      />
      <EmptyCard />
      {/*<AddAppPopup*/}
      {/*  active={modalActive}*/}
      {/*  setActive={setModalActive}*/}
      {/*/>*/}
      {/*<ChangeDescription*/}
      {/*  active={modalActive}*/}
      {/*  setActive={setModalActive}*/}
      {/*/>*/}
      {/*<ShareApp*/}
      {/*  active={modalActive}*/}
      {/*  setActive={setModalActive}*/}
      {/*  onClick={onClick}*/}
      {/*/>*/}
      <DeleteApp
        active={modalActive}
        setActive={setModalActive}
        onClick={onClick}/>
    </div>
  );
};

export default MainPage;
