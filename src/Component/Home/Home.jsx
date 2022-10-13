import { Stack } from "@mui/system";
import React from "react";
import Card from "../Card/Card";
import Stories from "./Stories/Stories";

const Home = () => {
  return (
    <>
      <Stack mt={7}>
        <Stack>
          <Stories />
        </Stack>
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
