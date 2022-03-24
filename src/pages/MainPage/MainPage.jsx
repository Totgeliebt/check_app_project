import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/UI/header";
import classes from "./MainPage.module.css";
import AddApp from "../../components/UI/modals/add-app";
import AppsList from "../../components/UI/apps-list/AppsList";
import Lottie from "lottie-react";
import animationData from "../../lotties/progressCircle.json";
import { useListener } from "react-bus";

const MainPage = ({ onClick }) => {
  const [apps, setApps] = useState([]);
  const [allApps, setAllApps] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [isAppsLoading, setIsAppsLoading] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const filteredApps = apps.filter((app) => {
    return (
      app.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      app.description.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      app.bundle.toLowerCase().includes(searchInputValue.toLowerCase())
    );
  });
  // const getState = React.useCallback((selectedOption) => {
  // const sortedApps = apps.filter((app) => {
  //   return (selectedOption.includes('pendingApps') && app.state === 0) ||
  //     (selectedOption.includes('deletedApps') && app.state === 2)
  // })
  // setApps(sortedApps)

  const getState = (selectedOption) => {
    if (selectedOption === "deletedApps") {
      const sortedApps = allApps.filter((app) => app.state === 2);
      setApps(sortedApps);
      console.log(sortedApps);
    } else if (selectedOption === "pendingApps") {
      const sortedApps = allApps.filter((app) => app.state === 0);
      setApps(sortedApps);
      console.log(sortedApps);
    } else {
      setApps(allApps);
      console.log("hwork3");
    }
  };

  useListener("appState", getState);

  // useEffect =
  return (
    <>
      <Header
        inputValue={searchInputValue}
        setInputValue={setSearchInputValue}
        active={modalActive}
        setActive={setModalActive}
        onClick={onClick}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
      />
      <div className={classes.mainPage__wrapper}>
        {isAppsLoading ? (
          <div className={classes.mainPage__lottie}>
            <Lottie animationData={animationData} />
          </div>
        ) : (
          <AppsList
            allApps={allApps}
            setAllApps={setAllApps}
            apps={apps}
            setApps={setApps}
            onClick={onClick}
            loading={isAppsLoading}
            setLoading={setIsAppsLoading}
            searchInputValue={searchInputValue}
            setSearchInputValue={setSearchInputValue}
            filteredApps={filteredApps}
          />
        )}
        <AddApp active={modalActive} setActive={setModalActive} />
      </div>
    </>
  );
};

export default MainPage;
