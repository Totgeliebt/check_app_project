import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import {Provider as BusProvider} from "react-bus";
import React from "react";
import TelegramLoginButton from "react-telegram-login";
import PostService from "./api/PostService";

export const App = () => {

  const handleTelegramResponse = (response) => {
    console.log("from teleg:", response);
    postUserData(response);

  };
  const postUserData = async (response) => {
    return await PostService.postUserData(response);
  };
  return (
    <>
      <BusProvider>
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="zhuravskaya_bot"
        />
        <MainPage />
      </BusProvider>
    </>
  );
};
