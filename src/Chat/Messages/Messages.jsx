import React from "react";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import MaterialContext from "../../State/Material/MaterialContext";
import { useParams } from "react-router-dom";
import ASTTextBox from "./AutoSizeTextBox/ASTTextBox";

const Messages = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
    if (currentUser._id === null) {
      getTheUser(params.id);
    }
    // eslint-disable-next-line
  }, []);
  const { messages, currentUser, user } = useContext(UseContext);
  const { getTheUser } = useContext(MaterialContext);

  return (
    <Stack margin={2} my={10}>
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

      <ASTTextBox />
    </Stack>
  );
};

export default Messages;
