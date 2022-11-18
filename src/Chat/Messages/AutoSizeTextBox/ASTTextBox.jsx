import { useRoundInputBaseStyles } from "@mui-treasury/styles/inputBase/round";
import { Send, Link } from "@mui/icons-material";
import { IconButton, InputAdornment, InputBase } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useContext } from "react";
import MaterialContext from "../../../State/Material/MaterialContext";
import UseContext from "../../../State/UseState/UseContext";

const ASTTextBox = () => {
  const { chatInput, setChatInput } = useContext(UseContext);
  const { sendMessageControl } = useContext(MaterialContext);
  const styles = useRoundInputBaseStyles();
  return (
    <Stack
      width={"95%"}
      sx={{
        position: "fixed",
        bottom: 0,
      }}
      marginY={2}
    >
      {/* <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ width: 200 }}
      /> */}
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
  );
};

export default ASTTextBox;
