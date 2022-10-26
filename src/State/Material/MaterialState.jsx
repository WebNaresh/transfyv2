import React, { useEffect } from "react";
import { useContext } from "react";
import UseContext from "../UseState/UseContext";
import MaterialContext from "./MaterialContext";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const MaterialState = (props) => {
  const {
    material,
    setMaterial,
    collegeMaterialForm,
    setCollegeMaterialForm,
    chatInput,
    messages,
    setMessages,
    user,
    setUser,
    currentUser,
    redirect,
  } = useContext(UseContext);

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

  const sendMessageControl = (e, n) => {
    // if (messages[messages.length - 1].userId === user.id) {
    //   messages[messages.length - 1].userMessage.push(chatInput);
    //   setMessages([...messages]);
    // } else if (messages[messages.length - 1].userId === currentUser.id) {
    //   messages[messages.length - 1].userMessage.push(chatInput);
    //   setMessages([...messages]);
    // } else {
    //   setMessages([
    //     ...messages,
    //     { userId: currentUser.id, userMessage: [chatInput] },
    //   ]);
    // }
  };
  const handleFailure = (result) => {
    console.log(result);
  };
  const handleLogin = async (credentialResponse) => {
    var { name, email, picture } = jwt_decode(credentialResponse.credential);
    try {
      const data = {
        name,
        email,
        userImage: picture,
      };
      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios
        .post(process.env.REACT_APP_BACKEND_STRING, data, config)
        .then((data) => console.log(data));
    } catch (errors) {
      console.log(errors);
    }

    setUser({ ...user, name, email, avatar: picture, status: true });
    redirect("/");
  };
  return (
    <MaterialContext.Provider
      value={{
        handleSemesterAutoComplete,
        sendMessageControl,
        handleLogin,
        handleFailure,
      }}
    >
      {props.children}
    </MaterialContext.Provider>
  );
};
export default MaterialState;
