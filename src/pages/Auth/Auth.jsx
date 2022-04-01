import React from "react";
import TelegramLoginButton from "react-telegram-login";
import PostService from "../../api/PostService";

const Auth = () => {
  const handleTelegramResponse = (response) => {
    console.log("from teleg:", response);
    handleLogin(response);
    console.log(response.cookies);
  };

  const handleLogin = async (response) => {
    return await PostService.login(response)
    // const res = await fetch("https://app-state.herokuapp.com/login", {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   method: "POST",
    //   body: JSON.stringify(response),
    // });
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
