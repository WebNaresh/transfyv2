import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Login from "./Component/Login/Login";
import CollegeM from "./Component/CollegeMatrial/CollegeM";
import Chat from "./Component/Chat/Chat";
import Messages from "./Component/Chat/Messages/Messages";
import TestContext from "./State/Test/TestContext";
import { useContext } from "react";
import { useEffect } from "react";
import Calling from "./Component/Calling/Calling";
const App = () => {
  const useHistory = useLocation();
  const { makeCurrentUserNull } = useContext(TestContext);

  useEffect(() => {
    if (!useHistory.pathname.includes("messages")) {
      makeCurrentUserNull();
    }

    // eslint-disable-next-line
  }, [useHistory.pathname]);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/collegeMaterials" element={<CollegeM />} />
      {/* <Route exact path="/collegeMaterials" element={<Test />} /> */}
      <Route exact path="/teacher" element={<Login />} />
      <Route exact path="/chat" element={<Chat />} />
      <Route exact path="/chat/messages/:id" element={<Messages />} />
      <Route exact path="/chat/messages/:id/call" element={<Calling />} />
    </Routes>
  );
};
export default App;
