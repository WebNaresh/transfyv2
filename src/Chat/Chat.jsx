import React from "react";
import { Paper, Stack, InputBase } from "@mui/material";
import { useRoundInputBaseStyles } from "@mui-treasury/styles/inputBase/round";
import { Chatz } from "./Chatz/Chatz";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UseContext from "../State/UseState/UseContext";
import TestContext from "../State/Test/TestContext";
import { useEffect } from "react";

const Chat = () => {
  const styles = useRoundInputBaseStyles();
  const { friends, user, redirect } = useContext(UseContext);
  const { handleAlert } = useContext(TestContext);
  useEffect(() => {
    if (user.name === null) {
      handleAlert(true, "warning", "Please Login To Access this route");
      redirect("/login");
    }
    // eslint-disable-next-line
  }, []);

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
              // color: "ActiveBorder !important",
              // backgroundColor: "GrayText !important",
              // border: "white !important",
            }}
            placeholder={"Search ..."}
          />
        </Stack>
        <Paper
          elevation={0}
          variant={"elevation"}
          sx={{ width: "100%", borderRadius: 1 }}
        >
          {friends.map((friend, key) => {
            return (
              <div key={key}>
                <Link to={`/chat/messages/${friend._id}`}>
                  <Chatz user={friend} />
                </Link>
              </div>
            );
          })}
        </Paper>
      </Paper>
    </div>
  );
};

export default Chat;
