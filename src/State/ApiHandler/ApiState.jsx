import axios from "axios";
import jwtDecode from "jwt-decode";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TestContext from "../Test/TestContext";
import UseContext from "../UseState/UseContext";
import ApiContext from "./ApiContext";
export const ApiState = (props) => {
  const redirect = useNavigate();
  const { handleLoader, handleAlert } = useContext(TestContext);
  const { setCookie, user, setUser, setFriends } = useContext(UseContext);
  const apiRequest = (name, email, avatar) => {
    const data = {
      name,
      email,
      avatar,
    };
    const config = { headers: { "Content-Type": "application/json" } };
    handleLoader(true, "blue");
    axios
      .post(process.env.REACT_APP_BACKEND_STRING, data, config)
      .then((data) => {
        handleAlert(true, "success", "logged in successfully");
        redirect("/");
        setUser({
          ...user,
          name: data.data.user.name,
          email: data.data.user.name,
          avatar: data.data.user.avatar,
          _id: data.data.user._id,
          status: null,
        });
        apiFriendsRequest(data.data.user._id);
        const options = {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
        setCookie("token", data.data.token, [options]);
      })
      .catch((e) => {
        console.log(e);
        handleLoader(true, "red");
        redirect("/login");
        console.log(e);
        handleAlert(
          true,
          "warning",
          "Server is under maintainace please try after sometime"
        );
      });
  };

  const apiFriendsRequest = (userId) => {
    handleLoader(true, "blue");
    const data = {
      userId,
    };
    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .post(process.env.REACT_APP_BACKEND_FRIENDS_REQUEST, data, config)
      .then(({ data }) => {
        handleAlert(true, "info", "Downloading your information");
        setFriends(jwtDecode(data.users).users);
      })
      .catch((e) => {
        console.log(e);
        handleAlert(
          true,
          "warning",
          "Server is under maintainace please try after sometime"
        );
      });
  };

  return (
    <ApiContext.Provider value={{ apiRequest, apiFriendsRequest }}>
      {props.children}
    </ApiContext.Provider>
  );
};
export default ApiState;