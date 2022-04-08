import React from "react";
import TelegramLoginButton from "react-telegram-login";
import PostService from "../../api/PostService";
import axios from "axios";
import classes from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";

const Auth = () => {
  const handleTelegramResponse = (response) => {
    handleLogin(response);
    axios.defaults.headers.cookie = response.headers["set-cookie"];
  };
  const [fetching, isLoading, error] = useFetching(PostService.login);

  const handleLogin = async (response) => {
    return await fetching(response);
  };

  return (
    <div className={classes.auth_widget}>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="app_state_bot"
      />
    </div>
  );
};

export default Auth;
