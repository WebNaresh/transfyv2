import React from "react";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import InputBase from "@material-ui/core/InputBase";
import { useRoundInputBaseStyles } from "@mui-treasury/styles/inputBase/round";
import { Stack } from "@mui/system";
import { IconButton, InputAdornment } from "@mui/material";
import { Link, Send } from "@mui/icons-material";
import { useEffect } from "react";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import MaterialContext from "../../State/Material/MaterialContext";
import { useParams } from "react-router-dom";

const Messages = () => {
  const params = useParams();
  const styles = useRoundInputBaseStyles();
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
    if (currentUser._id === null) {
      getTheUser(params.id);
    }
    // eslint-disable-next-line
  }, []);
  const { messages, currentUser, user, chatInput, setChatInput } =
    useContext(UseContext);
  const { sendMessageControl, getTheUser } = useContext(MaterialContext);

  return (
    <Stack margin={2} my={10}>
      {messages.map(({ userId, userMessage }, i2) => {
        return (
          <div key={i2}>
            {userId === user._id ? (
              <ChatMsg
                avatar={user.avatar}
                side={"right"}
                messages={userMessage}
              />
            ) : (
              <ChatMsg avatar={currentUser.avatar} messages={userMessage} />
            )}
          </div>
        );
      })}

      <Stack
        width={"95%"}
        sx={{
          position: "fixed",
          bottom: 0,
        }}
        marginY={2}
      >
        <InputBase
          style={{
            padding: 8,
            background: "#606162 !important",
          }}
          value={chatInput}
          onChange={(e) => setChatInput(e.currentTarget.value)}
          startAdornment={
            <InputAdornment position="start">
              <IconButton color={"primary"} size="large">
                <Link
                  sx={{
                    height: 30,
                    width: 30,
                  }}
                  color="info"
                />
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => sendMessageControl(chatInput)}
                color={"primary"}
                size="large"
              >
                <Send
                  sx={{
                    height: 30,
                    width: 30,
                  }}
                  color="info"
                />
              </IconButton>
            </InputAdornment>
          }
          fullWidth
          classes={styles}
          placeholder={"Placeholder"}
        />
      </Stack>
    </Stack>
  );
};

export default Messages;
