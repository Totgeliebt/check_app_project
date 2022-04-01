import React from 'react';
import PostService from "../../api/PostService";
import TelegramLoginButton from "react-telegram-login";

const Auth = () => {

  const handleTelegramResponse = (response) => {
    console.log("from teleg:", response);
    const newRes =  h_clone(response)
console.log(newRes)
    console.log(typeof response)
    handleLogin(response);
    console.log(response)
    console.log(response.id)
  };
  function h_clone(response){
    var result = Object.prototype.toString.call(response);

    if(result === '[object Array]'){ // если event = [];
      let clone = [];
      response.forEach(el => clone.push(el));
      return clone;
    }
    if(result === '[object Object]'){ // если event = {};
      let clone = {};
      for(let key in response){ clone[key] = response[key]}
      return clone;
    }

    if (result === '[object HTMLCollection]') {  // если event = [HTMLCollection]
      let clone = Object.create(HTMLCollection.prototype);
      Array.from(response).forEach((item, i) => clone[i] = item);
      return clone;
    }
    if (result === '[object NodeList]') { // если event = [NodeList]
      let clone = [];
      response.forEach(node => {
        let clone_node = node.cloneNode();
        clone.push(clone_node);
      });
      return clone;
    }
  }
  const handleLogin = async (response) => {
      const res = await fetch( "https://app-state.herokuapp.com/login", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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