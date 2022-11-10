import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Login from "./Component/Login/Login";
import Chat from "./Chat/Chat";
import Messages from "./Chat/Messages/Messages";
import CollegeM from "./Component/CollegeMatrial/CollegeM";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/collegeMaterials" element={<CollegeM />} />
      <Route exact path="/teacher" element={<Login />} />
      <Route exact path="/chat" element={<Chat />} />
      <Route exact path="/chat/messages/:id" element={<Messages />} />
    </Routes>
  );
};
export default App;
