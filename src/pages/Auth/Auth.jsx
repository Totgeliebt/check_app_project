import React from 'react';
import TelegramLoginButton from "react-telegram-login";

const Auth = () => {

  const handleTelegramResponse = (response) => {
    console.log("from teleg:", response);
    handleLogin(response);
    console.log(response)
  };

  const handleLogin = async (response) => {
      const res = await fetch( "https://app-state.herokuapp.com/login", {
        method: 'POST',
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(response)
      });
      console.log(res);
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