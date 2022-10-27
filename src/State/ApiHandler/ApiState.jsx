import axios from "axios";
import jwtDecode from "jwt-decode";
import React from "react";
import { useContext } from "react";
import { redirect } from "react-router-dom";
import UseContext from "../UseState/UseContext";
import ApiContext from "./ApiContext";
export const ApiState = (props) => {
  const { setCookie, user, setUser, setFriends, friends, redirect } =
    useContext(UseContext);
  const apiRequest = (name, email, userImage) => {
    const data = {
      name,
      email,
      userImage,
    };
    const config = { headers: { "Content-Type": "application/json" } };
    const response = axios
      .post(process.env.REACT_APP_BACKEND_STRING, data, config)
      .then((data) => {
        setUser({
          ...user,
          name: data.data.user.name,
          email: data.data.user.name,
          avatar: data.data.user.userImage,
          status: true,
        });
        const options = {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
        redirect("/");
        setCookie("token", data.data.token, [options]);
      });
  };

  const apiFriendsRequest = (userId) => {
    const data = {
      userId,
    };
    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .post(process.env.REACT_APP_BACKEND_FRIENDS_REQUEST, data, config)
      .then(({ data }) => {
        console.log(data);

        setFriends(jwtDecode(data.users).users);
      })
      .catch((e) => console.log(e));
    console.log();
  };
  console.log(friends);

  const cookieExtractor = () => {};
  return (
    <ApiContext.Provider value={{ apiRequest, apiFriendsRequest }}>
      {props.children}
    </ApiContext.Provider>
  );
};
export default ApiState;
