import React from "react";
import { Paper, Stack, InputBase } from "@mui/material/";
import { useRoundInputBaseStyles } from "@mui-treasury/styles/inputBase/round";
import { Chatz } from "./Chatz/Chatz";
import { Link } from "react-router-dom";

const Chat = () => {
  const styles = useRoundInputBaseStyles();
  return (
    <div>
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          marginTop: 8.5,
          flexDirection: "column",
        }}
      >
        <Stack padding={2} width={"100%"} direction={"column"}>
          <InputBase
            classes={styles}
            fullWidth
            color="none"
            sx={{
              paddingX: "1rem !important",
              paddingY: "0.5rem !important",
              color: "ActiveBorder !important",
              backgroundColor: "GrayText !important",
              border: "white !important",
              // borderColor: "GrayText",
              // ":active": {
              //   borderColor: "GrayText !important ",
              // },
            }}
            placeholder={"Search ..."}
          />
        </Stack>
        <Paper elevation={8} variant={"elevation"} sx={{ width: "100%" }}>
          <Link to={"/chat/messages"}>
            <Chatz />
          </Link>
          <Link to={"/chat/messages"}>
            <Chatz />
          </Link>
          <Link to={"/chat/messages"}>
            <Chatz />
          </Link>
        </Paper>
      </Paper>
    </div>
  );
};

export default Chat;
