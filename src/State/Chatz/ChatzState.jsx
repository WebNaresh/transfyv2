import React from "react";
import { useContext } from "react";
import TestContext from "../Test/TestContext";
import UseContext from "../UseState/UseContext";
import ChatzContext from "./ChatzContext";
import axios from "axios";
export const ChatState = (props) => {
  const { handleLoader } = useContext(TestContext);
  const { setCurrentUser, user, setMessages } = useContext(UseContext);
  const handleChatzOnclick = (friend) => {
    handleLoader(true, "yellow");
    const data = { userId: [user._id, friend._id] };
    console.log("onclick");

    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .post(process.env.REACT_APP_GetUserMessages, data, config)
      .catch((errors) => {
        console.log(errors);
      })
      .then((response) => {
        console.log(response.data.messages);
        setMessages(response.data.messages);
      });

    setCurrentUser({ ...friend, status: null });
  };

  return (
    <ChatzContext.Provider value={{ handleChatzOnclick }}>
      {props.children}
    </ChatzContext.Provider>
  );
};
export default ChatState;
