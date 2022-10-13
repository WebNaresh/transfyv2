import { Avatar, Paper } from "@mui/material";
import React from "react";

const Stories = () => {
  return (
    <>
      <Paper elevation={4} sx={{ margin: 2, padding: 2, display: "flex" }}>
        <Avatar
          alt="Nb"
          src="https://images.unsplash.com/photo-1661206482972-6afc21eca68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          sx={{
            height: 60,
            width: 60,
            border: "3px solid skyblue",
            marginX: 2,
          }}
        />
      </Paper>
    </>
  );
};

export default Stories;
