import React from "react";
import ReactDOM from "react-dom";
import TelegramLoginButton from "react-telegram-login/src";
import { App } from "./App";
const handleTelegramResponse = response => {
  console.log(response);
};

ReactDOM.render(
  <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="testBot" />,
  document.getElementById('telegramButton')
);
ReactDOM.render(<App />, document.getElementById("root"));
