import React, { useEffect, useState } from "react";
import Header from "../../components/UI/header";
import classes from "./MainPage.module.css";
import AddApp from "../../components/UI/modals/add-app";
import AppsList from "../../components/UI/apps-list/AppsList";
import Lottie from "lottie-react";
import animationData from "../../lotties/progressCircle.json";
import AppListContainer from "../../components/UI/app-list-container/AppListContainer";

const MainPage = ({ onClick }) => {
  const [apps, setApps] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [isAppsLoading, setIsAppsLoading] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  const filteredApps = apps.filter((app) => {
    return(
      app.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      app.description.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      app.bundle.toLowerCase().includes(searchInputValue.toLowerCase())
    );
  });




  return (
    <>
      <Header
        apps={apps}
        setApps={setApps}
        inputValue={searchInputValue}
        setInputValue={setSearchInputValue}
        active={modalActive}
        setActive={setModalActive}
        onClick={onClick}
      />
      <div className={classes.mainPage__wrapper}>
        {isAppsLoading ? (
          <div className={classes.mainPage__lottie}>
            <Lottie animationData={animationData} />
          </div>
        ) : (
          <AppListContainer
            apps={apps}
            setApps={setApps}
            onClick={onClick}
            loading={isAppsLoading}
            setLoading={setIsAppsLoading}
            filteredApps={filteredApps}
          />
        )}
        <AddApp active={modalActive} setActive={setModalActive} />
      </div>
    </>
  );
};

export default MainPage;
