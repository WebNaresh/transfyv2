import React, { useEffect } from "react";
import { useContext } from "react";
import UseContext from "../UseState/UseContext";
import MaterialContext from "./MaterialContext";
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
    currentUser,
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
    // console.log(messages);
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
  return (
    <MaterialContext.Provider
      value={{ handleSemesterAutoComplete, sendMessageControl }}
    >
      {props.children}
    </MaterialContext.Provider>
  );
};
export default MaterialState;
