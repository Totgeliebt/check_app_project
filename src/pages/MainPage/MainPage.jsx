import React, { useEffect, useState } from "react";
import Header from "../../components/UI/header";
import classes from "./MainPage.module.css";
import AddApp from "../../components/UI/modals/add-app";
import AppsList from "../../components/UI/apps-list/AppsList";
import Lottie from "lottie-react";
import animationData from "../../lotties/progressCircle.json";
import { useFetching } from "../../hooks/useFetching";

const MainPage = ({ onClick }) => {
  const [apps, setApps] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [isAppsLoading, setIsAppsLoading] = useState(false);

  //   const [fetchAllApps, isAppsLoading, appsError] = useFetching(async (apps, setApps) => {
  //     const response = await PostService.getAll();
  //     setApps(response.data);
  //   })

  return (
    <>
      <Header
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
          <AppsList
            apps={apps}
            setApps={setApps}
            onClick={onClick}
            loading={isAppsLoading}
            setLoading={setIsAppsLoading}
          />
        )}
        <AddApp active={modalActive} setActive={setModalActive} />
      </div>
    </>
  );
};

export default MainPage;
