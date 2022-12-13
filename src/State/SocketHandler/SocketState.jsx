import React from "react";
import { useContext } from "react";
import UseContext from "../UseState/UseContext";
import SocketContext from "./SocketContext";

export const SocketState = (props) => {
  const { socket, myVideo, peer, currentUserPeerId, setStream } =
    useContext(UseContext);

  const call = async (id) => {
    socket.emit("getPeerId", id);

    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    getUserMedia({ video: true }, (mediaStream) => {
      peer.call(currentUserPeerId, mediaStream);
      console.log(
        `🚀 ~ currentUserPeerId, mediaStream`,
        currentUserPeerId,
        mediaStream
      );

      setStream(mediaStream);
    });
  };
  const getUserMedia = () => {
    console.log("iam");
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    getUserMedia({ video: true }, (mediaStream) => {
      console.log(mediaStream);
      myVideo.current.srcObject = mediaStream;
      myVideo.current.play();
    });
  };

  return (
    <SocketContext.Provider value={{ socket, call, getUserMedia }}>
      {props.children}
    </SocketContext.Provider>
  );
};
export default SocketState;
