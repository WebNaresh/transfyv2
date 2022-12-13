import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseContext from "../UseState/UseContext";
import UseEffectContext from "./UseEffectContext";
import jwt_decode from "jwt-decode";
import ApiContext from "../ApiHandler/ApiContext";
import { io } from "socket.io-client";
import TestContext from "../Test/TestContext";
import Peer from "peerjs";

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
    onlineUsersPart1,
    setOnlineUsersPart1,
    setChatsNotification,
    setPeerId,
    userVideo,
    myVideo,
    peer,
    peerId,
    setpeer,
    setCurrentUserPeerId,
    stream,
    currentUserPeerId,
  } = useContext(UseContext);

  const { apiFriendsRequest } = useContext(ApiContext);
  const { addMessageArray, playMusic } = useContext(TestContext);
  const location = useLocation();
  const redirect = useNavigate();

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

  const filterTeArray = async (array, userId) => {
    friends.forEach((element) => {
      if (userId.includes(element._id)) {
        element.status = true;
      } else {
        element.status = false;
      }
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
    filterTeArray(friends, onlineUsersPart1);

    // eslint-disable-next-line
  }, [onlineUsersPart1]);

  useEffect(() => {
    let numberNotification = 0;
    friends.forEach((ele) => {
      numberNotification = ele.notification + numberNotification;
    });
    setChatsNotification(numberNotification);
    // eslint-disable-next-line
  }, [friends]);

  useEffect(() => {
    setSocket(io(process.env.REACT_APP_BACKEND_STRING_OFFICIAL));
    let peerWrapper = new Peer();
    setpeer(peerWrapper);
    if (peer !== null || undefined) {
      peer.on("open", (id) => {
        setPeerId(id);
        let data = { userId: user._id, peerIdI: id };
        if (socket !== undefined) {
          socket.emit("peerConnection", data);
        }
      });
      peer.on("call", (call) => {
        console.log("calling ", call);
        redirect(`${location.pathname}/call`);
        call.answer(stream);
        call.on("stream", (remoteStream) => {
          console.log(`🚀 ~ remoteStream`, remoteStream);
          if (userVideo !== null) {
            userVideo.current.srcObject = remoteStream;
            userVideo.current.play();
          }
        });
      });
    }
    if (socket !== undefined) {
      socket.emit("add", user._id);
      socket.on("userOnline", (userId) => {
        setOnlineUsersPart1([...userId]);
      });
      socket.on("msg-recieve", (data) => {
        if (data.from === currentUser._id) {
          addMessageArray(data);
          if (document.URL.includes(`/${currentUser._id}`)) {
            window.scrollTo(0, chatArea.current.clientHeight);
          }
        } else {
          sendNotificationToThatUser(data);
        }
        playMusic();
      });
      socket.on("peerIdGot", (id) => {
        console.log(id);
        setCurrentUserPeerId(id);
      });
      if (currentUserPeerId !== null || undefined) {
        const call = peer.call(currentUserPeerId, stream);
      }
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

  useEffect(() => {
    if (currentUser._id !== null) {
      console.log(currentUser);
      socket.emit("getPeerId", currentUser._id);
    }
  }, [currentUser._id]);

  return (
    <UseEffectContext.Provider value={{ location }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};
export default UseEffectState;
