import React from "react";
import TelegramLoginButton from "react-telegram-login";
import PostService from "../../api/PostService";

const Auth = () => {
  const handleTelegramResponse = (response) => {
    console.log("from teleg:", response);
    handleLogin(response);
    console.log(document.cookie);
    // document.cookie = "stel_token=fd27f3c865959d209f661de744463a5cfd27f3defd26ff5102f0c1fbba10b16632dc7Э"
    // document.cookie =  "stel_ssid=11c26eca36f002cad6_17208947061775559847";
    // console.log(document.cookie);
  };
  console.log(document.cookie);
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
