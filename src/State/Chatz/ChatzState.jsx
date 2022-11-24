import React from "react";
import { useContext } from "react";
import TestContext from "../Test/TestContext";
import UseContext from "../UseState/UseContext";
import ChatzContext from "./ChatzContext";
import ApiContext from "../ApiHandler/ApiContext";
export const ChatState = (props) => {
  const { handleLoader } = useContext(TestContext);
  const { getMessagesApiRequest } = useContext(ApiContext);
  const { setCurrentUser, user, setMessages, friends, setFriends } =
    useContext(UseContext);
  const handleChatzOnclick = (friend) => {
    setMessages([]);
    friends.forEach((element) => {
      if (friend._id === element._id) {
        element.notification = 0;
      }
    });
    setFriends([...friends]);
    console.log(friend);
    handleLoader(true, "yellow");
    getMessagesApiRequest([user._id, friend._id]);
    setCurrentUser({ ...friend, status: null });
  };

  return (
    <ChatzContext.Provider value={{ handleChatzOnclick }}>
      {props.children}
    </ChatzContext.Provider>
  );
};
export default ChatState;
