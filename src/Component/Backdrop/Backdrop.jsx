import React, { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ReportIcon from "@mui/icons-material/Report";

const AppProgress = () => {
  const { appLoading } = useContext(UseContext);
  return (
    <>
      {appLoading.load ? (
        <Backdrop
          sx={{
            color: appLoading.color,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={appLoading.load}
        >
          <CircularProgress color={"inherit"}>
            {appLoading.color === "danger" ? <ReportIcon color="danger" /> : ""}
          </CircularProgress>
        </Backdrop>
      ) : (
        ""
      )}
    </>
  );
};

export default AppProgress;
