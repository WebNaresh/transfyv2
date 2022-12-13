import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Call, VideoCall } from "@mui/icons-material";
import { Link, useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import SocketContext from "../../../../../State/SocketHandler/SocketContext";
import { Button } from "@mui/material";

export default function Speed1({ paramsId }) {
  const { call } = useContext(SocketContext);
  const { id } = useParams();
  const actions = [
    { icon: <Call />, name: "Copy" },
    {
      icon: (
        <Link onClick={() => call(id)} to={`/chat/messages/${paramsId}/call`}>
          <VideoCall />
        </Link>
      ),
      name: "Video call",
    },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <Box
      sx={{
        width: 100,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        top: 180,
        height: "30%",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon color="primary.main" />}
        direction={"down"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            color={"primary.main"}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
