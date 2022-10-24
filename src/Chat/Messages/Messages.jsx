import React from "react";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import InputBase from "@material-ui/core/InputBase";
import { useRoundInputBaseStyles } from "@mui-treasury/styles/inputBase/round";
import { Stack } from "@mui/system";
import { IconButton, InputAdornment } from "@mui/material";
import { Link, Send } from "@mui/icons-material";

const Messages = () => {
  const styles = useRoundInputBaseStyles();
  return (
    <Stack margin={2} mt={10}>
      <ChatMsg
        avatar={"N"}
        messages={[
          "Hi Jenny, How r u today?",
          "Did you train yesterday",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
        ]}
      />
      <ChatMsg
        side={"right"}
        messages={[
          "Great! What's about you?",
          "Of course I did. Speaking of which check this out",
        ]}
      />
      <ChatMsg
        avatar={""}
        messages={[
          "Hi Jenny, How r u today?",
          "Did you train yesterday",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
        ]}
      />
      <ChatMsg
        side={"right"}
        messages={[
          "Great! What's about you?",
          "Of course I did. Speaking of which check this out",
        ]}
      />
      <ChatMsg
        avatar={""}
        messages={[
          "Hi Jenny, How r u today?",
          "Did you train yesterday",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
        ]}
      />
      <ChatMsg
        side={"right"}
        messages={[
          "Great! What's about you?",
          "Of course I did. Speaking of which check this out",
        ]}
      />
      <ChatMsg avatar={""} messages={["Im good.", "See u later."]} />
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
          }}
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
              <IconButton color={"primary"} size="large">
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
