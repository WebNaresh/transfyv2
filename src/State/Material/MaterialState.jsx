import React from "react";
import { useContext } from "react";
import UseContext from "../UseState/UseContext";
import MaterialContext from "./MaterialContext";
import jwt_decode from "jwt-decode";
import ApiContext from "../ApiHandler/ApiContext";
import TestContext from "../Test/TestContext";
import axios from "axios";

export const MaterialState = (props) => {
  const {
    collegeMaterialForm,
    setCollegeMaterialForm,
    cookies,
    removeCookie,
    socket,
    currentUser,
    user,
    friends,
    chatArea,
  } = useContext(UseContext);
  const {
    handleAlert,
    handleLoader,
    makeItNull,
    concatTheUser,
    addMessageArray,
  } = useContext(TestContext);
  const { apiRequest, sendMessageApiRequest, getMessagesApiRequest } =
    useContext(ApiContext);

  const handleSemesterAutoComplete = (event, newValue) => {
    if (typeof newValue === "string") {
      setCollegeMaterialForm((existed) => ({
        ...existed,
        Semester: newValue.title,
      }));
    } else if (newValue && newValue.inputValue) {
      setCollegeMaterialForm((existed) => ({
        ...existed,
        Semester: newValue.title,
      }));
    } else if (newValue === null) {
      setCollegeMaterialForm((existed) => ({
        ...existed,
        Semester: null,
      }));
    } else {
      if (
        collegeMaterialForm.Semester === "1" ||
        collegeMaterialForm.Semester === "2"
      ) {
        setCollegeMaterialForm((existed) => ({
          ...existed,
          Semester: newValue.title,
          Year: "1st Year",
        }));
      } else if (
        collegeMaterialForm.Semester === "3" ||
        collegeMaterialForm.Semester === "4"
      ) {
        setCollegeMaterialForm((existed) => ({
          ...existed,
          Semester: newValue.title,
          Year: "2nd Year",
        }));
      } else {
        setCollegeMaterialForm((existed) => ({
          ...existed,
          Semester: newValue.title,
          Year: "3rd Year",
        }));
      }
    }
  };

  const sendMessageControl = async (msg) => {
    socket.emit("send-msg", { from: user._id, msg, to: currentUser._id });
    addMessageArray({ from: user._id, msg, to: currentUser._id });
    window.scrollTo(0, chatArea.current.clientHeight);
    sendMessageApiRequest(user._id, currentUser._id, msg);
  };
  const handleFailure = (result) => {
    handleLoader(true, "red");
    handleAlert(true, "warning", "connecting with your google account Failed");
  };
  const handleLogin = async (credentialResponse) => {
    handleLoader(true, "inherit");

    var { name, email, picture } = jwt_decode(credentialResponse.credential);

    if (cookies.token === undefined) {
      await apiRequest(name, email, picture);
    }
  };

  const handleLogout = () => {
    handleLoader(true, "blue");
    handleAlert(true, "warning", "logged out successfully");

    removeCookie("token");
    makeItNull();
  };

  const getTheUser = async (id) => {
    let getUser = friends.filter((ele) => {
      return ele._id === id;
    });
    console.log(friends);
    if (getUser[0] !== undefined) {
      console.log(`🚀 ~ getUser`, getUser);
      concatTheUser(getUser[0]);
      getMessagesApiRequest([user._id, getUser[0]._id]);
    }
  };

  return (
    <MaterialContext.Provider
      value={{
        handleSemesterAutoComplete,
        sendMessageControl,
        handleLogin,
        handleFailure,
        handleLogout,
        getTheUser,
      }}
    >
      {props.children}
    </MaterialContext.Provider>
  );
};
export default MaterialState;
