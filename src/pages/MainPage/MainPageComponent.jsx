import React from "react";
import Header from "../../components/header";
import classes from "./MainPage.module.css";
import { AddApp } from "../../components/modals/add-app/";
import Lottie from "lottie-react";
import animationData from "../../lotties/progressCircle.json";
import { AppsList } from "../../components/apps-list";

const MainPageComponent = ({
  searchInputValue,
  setSearchInputValue,
  setModalActive,
  setSelectedOption,
  selectedOption,
  isLoading,
  allApps,
  setAllApps,
  apps,
  setApps,
  filteredApps,
  modalActive,
}) => {
  return (
    <>
      <Header
        inputValue={searchInputValue}
        setInputValue={setSearchInputValue}
        setActive={setModalActive}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
      />
      <div className={classes.mainPage__wrapper}>
        {isLoading ? (
          <div className={classes.mainPage__lottie}>
            <Lottie animationData={animationData} />
          </div>
        ) : (
          <AppsList
            allApps={allApps}
            setAllApps={setAllApps}
            apps={apps}
            setApps={setApps}
            filteredApps={filteredApps}
          />
        )}
        <AddApp active={modalActive} setActive={setModalActive} />
      </div>
    </>
  );
};

export default MainPageComponent;
