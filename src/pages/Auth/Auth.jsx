import React from 'react';
import PostService from "../../api/PostService";
import TelegramLoginButton from "react-telegram-login";

const Auth = () => {

  const handleTelegramResponse = (response) => {
    console.log("from teleg:", response);
    handleLogin(response);

  };
  const handleLogin = async (response) => {
    return await PostService.login(response);
  };
  return (
    <div>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="zhuravskaya_bot"
      />
    </div>
  );
};

export default Auth;