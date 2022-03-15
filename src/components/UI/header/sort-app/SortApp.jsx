import React from "react";
import "react-dropdown/style.css";
import classes from "./SortApp.module.css";
import Dropdown from "react-dropdown";

const SortApp = () => {
  const options = ["Все приложения", "Удаленные приложения", "Пендинг"];
  const defaultOption = options[0];

  return (
    <div>
      <Dropdown
        options={options}
        // onChange={(e) => setSelected(e.target.value)}
        controlClassName={classes.header__sortApp}
        arrowClassName={classes.header__sortApp_arrow}
        value={defaultOption}
        menuClassName={classes.header__sortApp_menu}
        placeholderClassName={classes.header__sortApp_placeholder}
        placeholder="Все приложения"
      />
    </div>
  );
};

export default SortApp;
