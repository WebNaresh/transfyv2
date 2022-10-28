import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UseContext from "../UseState/UseContext";
import UseEffectContext from "./UseEffectContext";
import jwt_decode from "jwt-decode";
import ApiContext from "../ApiHandler/ApiContext";
export const UseEffectState = (props) => {
  const { setWindow1, cookies, setUser, user, redirect } =
    useContext(UseContext);
  const { apiFriendsRequest } = useContext(ApiContext);
  const location = useLocation();
  useEffect(() => {
    setWindow1(window);
    if (cookies.token !== undefined || user.name === null) {
      let { user } = jwt_decode(cookies.token);

      setUser({
        name: user.name,
        email: user.name,
        avatar: user.userImage,
        status: true,
      });
    } else {
      redirect("/login");
    }
    if (user.id === undefined || null) {
      apiFriendsRequest(user.id);
    }
    console.log(cookies.token);
    // eslint-disable-next-line
  }, []);

  return (
    <UseEffectContext.Provider value={{ location }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};
export default UseEffectState;
