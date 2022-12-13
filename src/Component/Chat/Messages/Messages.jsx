import React from "react";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { useContext } from "react";
import UseContext from "../../../State/UseState/UseContext";
import MaterialContext from "../../../State/Material/MaterialContext";
import { useParams } from "react-router-dom";
import ASTTextBox from "./AutoSizeTextBox/ASTTextBox";
import Speed1 from "./AutoSizeTextBox/SpeedDial/Speed1";

const Messages = () => {
  const params = useParams();
  const { messages, currentUser, user, chatArea } = useContext(UseContext);
  const { getTheUser } = useContext(MaterialContext);
  useEffect(() => {
    window.scrollTo(0, chatArea.current.clientHeight);
    if (currentUser._id === null) {
      getTheUser(params.id);
    }
    // eslint-disable-next-line
  }, [chatArea, getTheUser, params]);

  return (
    <div>
      <Stack component={"div"} ref={chatArea} margin={2} pb={4} my={10}>
        {messages.map(({ userId, msg }, i2) => {
          return (
            <div key={i2}>
              {userId === user._id ? (
                <ChatMsg avatar={user.avatar} side={"right"} messages={msg} />
              ) : (
                <ChatMsg avatar={currentUser.avatar} messages={msg} />
              )}
            </div>
          );
        })}
      </Stack>
      <Speed1 paramsId={params.id} />
      <ASTTextBox />
    </div>
  );
};

export default Messages;
