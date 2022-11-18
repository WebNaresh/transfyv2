import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseContext from "../UseState/UseContext";
import UseEffectContext from "./UseEffectContext";
import jwt_decode from "jwt-decode";
import ApiContext from "../ApiHandler/ApiContext";
import { io } from "socket.io-client";
import TestContext from "../Test/TestContext";

export const UseEffectState = (props) => {
  const redirect = useNavigate();
  const {
    cookies,
    setUser,
    setSocket,
    user,
    socket,
    setProgress,
    friends,
    setFriends,
  } = useContext(UseContext);

  const { apiFriendsRequest } = useContext(ApiContext);
  const { addMessageArray } = useContext(TestContext);
  const location = useLocation();
  useEffect(() => {
    if (cookies.token !== undefined) {
      let { user } = jwt_decode(cookies.token);

      setUser({
        name: user.name,
        email: user.name,
        avatar: user.avatar,
        status: null,
        _id: user._id,
      });
      apiFriendsRequest(user._id);
    } else {
      redirect("/");
    }

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setSocket(io(process.env.REACT_APP_BACKEND_STRING_OFFICIAL));
    if (socket !== undefined) {
      socket.emit("add", user._id);
      socket.on("userOnline", (userId) => {
        if (userId === user._id) {
          setUser({ ...user, status: true });
        } else {
          const sortedAy = friends.find((friend) => friend._id === userId);
          sortedAy.status = true;
          setFriends(...friends);
        }
      });
      socket.on("msg-recieve", (data) => {
        addMessageArray(data);
        window.scrollTo(0, document.body.scrollHeight);
      });
    }
    // eslint-disable-next-line
  }, [user._id]);
  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // eslint-disable-next-line
  }, [location.key]);

  return (
    <UseEffectContext.Provider value={{ location }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};
export default UseEffectState;
