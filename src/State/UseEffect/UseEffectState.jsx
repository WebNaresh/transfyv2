import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UseContext from "../UseState/UseContext";
import UseEffectContext from "./UseEffectContext";
export const UseEffectState = (props) => {
  const { setWindow1 } = useContext(UseContext);
  const location = useLocation();
  useEffect(() => {
    setWindow1(window);
    // console.log(window1);
    // eslint-disable-next-line
  }, []);

  return (
    <UseEffectContext.Provider value={{ location }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};
export default UseEffectState;
