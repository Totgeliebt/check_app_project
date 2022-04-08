import React from "react";
import { AppItem } from "../app-item";
import classes from "../../pages/MainPage/MainPage.module.css";
import Lottie from "lottie-react";
import animationData from "../../lotties/progressCircle.json";

const AppsListComponent = ({ apps, setApps, filteredApps, setAllApps, isLoading }) => {
  return (
    <> {isLoading ? (
      <div className={classes.mainPage__lottie}>
        <Lottie animationData={animationData} />
      </div>
    ) : (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredApps.map((app, id) => {
          return (
            <AppItem
              app={app}
              key={app.id}
              id={app.id}
              state={app.state}
              setAllApps={setAllApps}
              apps={apps}
              setApps={setApps}
            />
          );
        })}
      </div>
    )}
    </>
  );
};

export default AppsListComponent;
