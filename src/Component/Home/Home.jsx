import { Paper, Stack } from "@mui/material";
import React from "react";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import Card from "../Card/Card";
import Stories from "./Stories/Stories";

const Home = () => {
  const { blogs } = useContext(UseContext);
  return (
    <>
      <Stack mt={7}>
        <Paper sx={{ overflowY: "auto" }}>
          <Stories />
        </Paper>
        {blogs.map((ele, index) => {
          return <Card ele={ele} key={index} />;
        })}
      </Stack>
    </>
  );
};

export default Home;
