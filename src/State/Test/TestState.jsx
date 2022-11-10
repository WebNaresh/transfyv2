import React, { useContext, useState } from "react";
import UseContext from "../UseState/UseContext";
import TestContext from "./TestContext";
export const TestState = (props) => {
  const {
    setAppAlert,
    setAppLoading,
    setUser,
    setFriends,
    setCurrentUser,
    messages,
    setMessages,
  } = useContext(UseContext);

  const [state, setState] = React.useState(false);
  const [time, setTime] = useState(true);
  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(value);
  };
  setTimeout(() => {
    setTime(false);
  }, 3000);

  const handleAlert = (alert, type, msg) => {
    setAppAlert({
      alert: alert || false,
      type: type || "success",
      msg: msg || "this is test message",
    });
  };
  const handleLoader = (load, color) => {
    setAppLoading({
      load: load || true,
      color: color || "#fff",
    });
    setTimeout(() => {
      setAppLoading({
        load: false,
      });
    }, 2000);
  };
  const makeItNull = () => {
    setUser({
      name: null,
      email: null,
      avatar: null,
      status: null,
      _id: null,
    });
    setFriends([]);
  };

  const concatTheUser = async (object) => {
    await setCurrentUser({
      name: object.name,
      email: object.email,
      avatar: object.avatar,
      status: null,
      _id: object._id,
    });
  };
  const addMessageArray = async (data) => {
    console.log(data);
    console.log(messages.length);
    await setMessages([
      ...messages,
      { userId: data.from, userMessage: [data.msg] },
    ]);
  };
  const addRecentMessageArray = async (data) => {
    console.log(messages.length);

    await messages[messages.length - 1].userMessage.push(data.msg);
    await setMessages([...messages]);
  };
  return (
    <TestContext.Provider
      value={{
        state,
        setState,
        toggleDrawer,
        time,
        handleAlert,
        handleLoader,
        makeItNull,
        concatTheUser,
        addMessageArray,
        addRecentMessageArray,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};
export default TestState;
