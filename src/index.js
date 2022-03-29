import React from "react";
import { App } from "./App";
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
  console.log(response);
};

ReactDOM.render(
  <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="testBot" />,
  document.getElementById('telegramButton')
);


// ReactDOM.render(<App />, document.getElementById("root"));
