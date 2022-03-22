import React, { useState } from "react";
import "react-dropdown/style.css";
import classes from "./SortApp.module.css";
import Dropdown from "react-dropdown";
import { useBus } from "react-bus";

const SortApp = ({ apps, setApps }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const options = ["Все приложения", "Удаленные приложения", "Пендинг"];
  const options = [
    { value: "allApps", label: "Все приложения" },
    { value: "deletedApps", label: "Удаленные приложения" },
    { value: "pendingApps", label: "Пендинг" },
  ];
  const bus = useBus();

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    bus.emit("appState", selectedOption.value);
  };

  return (
    <div>
      <Dropdown
        options={options}
        onChange={handleChange}
        controlClassName={classes.header__sortApp}
        arrowClassName={classes.header__sortApp_arrow}
        value={selectedOption}
        menuClassName={classes.header__sortApp_menu}
        placeholderClassName={classes.header__sortApp_placeholder}
        placeholder="Все приложения"
      />
    </div>
  );
};

export default SortApp;
