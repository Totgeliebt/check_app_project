import React from 'react';
import AppItem from "../app-item/AppItem";
import classes from './AppsList.module.css'
import EmptyCard from "../empty-card";

const AppsList = ({apps}) => {
  if(!apps.length) {
    return (
      <EmptyCard/>
    )
  }

  return (
    <div>
      {apps.map(app => {
        <AppItem app={app} id={app.id}/>
      })}

    </div>
  );
};

export default AppsList;