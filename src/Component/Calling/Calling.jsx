import React from "react";
import { Stack } from "@mui/system";
import { Paper } from "@material-ui/core";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import { useEffect } from "react";
import SocketContext from "../../State/SocketHandler/SocketContext";

const Calling = () => {
  const { myVideo, userVideo } = useContext(UseContext);
  const { getUserMedia } = useContext(SocketContext);
  const styles3 = useDynamicAvatarStyles({ size: 64, radius: 8 });
  useEffect(() => {
    getUserMedia();
  }, []);

  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      height={"100vh"}
      width={"100%"}
    >
      <Paper
        style={{ width: "100%", height: "88%", margin: "70px 20px 20px 20px" }}
        elevation={4}
      >
        <Avatar
          ref={myVideo}
          sx={{
            position: "absolute",
            right: "5%",
            bottom: "5%",
            borderRadius: 2,
            height: 130,
            width: 120,
            objectFit: "cover",
            zIndex: 5,
            boxShadow:
              "14px 11px 28px -2px rgb(0 0 0 / 80%), 11px -8px 18px 0px rgb(0 0 0 / 14%), 18px 1px 10px 0px rgb(0 0 0 / 12%)",
          }}
          classes={styles3}
          variant={"square"}
          component={"video"}
          autoPlay
          muted
        />
        <Avatar
          //   src={stream}
          ref={userVideo}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 2,
          }}
          classes={styles3}
          variant={"square"}
          component={"video"}
          autoPlay={true}
        ></Avatar>
      </Paper>
    </Stack>
  );
};

export default Calling;
