import React, { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const AppProgress = () => {
  const { loading } = useContext(UseContext);
  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}
    </>
  );
};

export default AppProgress;
