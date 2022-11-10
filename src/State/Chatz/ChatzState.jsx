import React from "react";
import { useContext } from "react";
import TestContext from "../Test/TestContext";
import UseContext from "../UseState/UseContext";
import ChatzContext from "./ChatzContext";
export const ChatState = (props) => {
  const { handleLoader } = useContext(TestContext);
  const { setCurrentUser, setMessages, messages } = useContext(UseContext);
  const handleChatzOnclick = (friend) => {
    handleLoader(true, "yellow");
    setCurrentUser({ ...friend, status: null });
  };

  return (
    <ChatzContext.Provider value={{ handleChatzOnclick }}>
      {props.children}
    </ChatzContext.Provider>
  );
};
export default ChatState;
