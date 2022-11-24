import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UseContext from "../UseState/UseContext";
import UseEffectContext from "./UseEffectContext";
import jwt_decode from "jwt-decode";
import ApiContext from "../ApiHandler/ApiContext";
import { io } from "socket.io-client";
import TestContext from "../Test/TestContext";

export const UseEffectState = (props) => {
  const {
    cookies,
    setUser,
    setSocket,
    user,
    socket,
    setProgress,
    friends,
    setFriends,
    currentUser,
    chatArea,
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
      // redirect("/");
    }

    // eslint-disable-next-line
  }, []);
  const filterTeArray = (array, userId) => {
    userId.forEach((element) => {
      if (element === user._id) {
        user.status = true;
      }
      friends.forEach((ele) => {
        if (element === ele._id) {
          ele.status = true;
        }
      });
    });

    setFriends([...friends]);
  };
  const sendNotificationToThatUser = (data) => {
    friends.forEach((element) => {
      if (data.from === element._id) {
        element.notification += 1;
      }
    });
    setFriends([...friends]);
  };
  useEffect(() => {
    setSocket(io(process.env.REACT_APP_BACKEND_STRING_OFFICIAL));
    if (socket !== undefined) {
      socket.emit("add", user._id);
      socket.on("userOnline", (userId) => {
        if (friends.length >= 1) {
          filterTeArray(friends, userId);
        }
      });
      socket.on("msg-recieve", (data) => {
        if (data.from === currentUser._id) {
          addMessageArray(data);
          window.scrollTo(0, chatArea.current.clientHeight);
        } else {
          sendNotificationToThatUser(data);
        }
      });
    }

    // eslint-disable-next-line
  }, [user._id, friends.length >= 1, currentUser._id !== null]);
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
