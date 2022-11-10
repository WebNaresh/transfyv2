import { Paper, Stack } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import Stories from "./Stories/Stories";

const Home = () => {
  return (
    <>
      <Stack mt={7}>
        <Paper sx={{ overflowY: "auto" }}>
          <Stories />
        </Paper>
        <Card index={1} />

        <Card index={2} />

        <Card index={3} />
        <Card index={1} />

        <Card index={2} />

        <Card index={3} />
        <Card index={1} />

        <Card index={2} />

        <Card index={3} />
        <Card index={1} />

        <Card index={2} />

        <Card index={3} />
        <Card index={1} />

        <Card index={2} />

        <Card index={3} />
      </Stack>
    </>
  );
};

export default Home;
