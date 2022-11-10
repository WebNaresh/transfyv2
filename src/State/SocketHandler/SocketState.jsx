import React from "react";
import { useContext } from "react";
import UseContext from "../UseState/UseContext";
import SocketContext from "./SocketContext";

export const SocketState = (props) => {
  const { socket, user } = useContext(UseContext);

  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};
export default SocketState;
