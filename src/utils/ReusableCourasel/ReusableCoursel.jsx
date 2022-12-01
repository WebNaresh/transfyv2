import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
const ReusableCousel = ({ array }) => {
  function Item(props) {
    return (
      <Stack>
        <Button
          size="large"
          sx={{
            position: "absolute",
            top: "50% ",
            left: "40%",
            color: "white",
            backdropFilter: "blur(2)",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
          variant="text"
          color="inherit"
        >
          {" "}
          {props.item.name}
        </Button>
        <Stack
          component={"img"}
          style={{
            display: "flex",
            height: "60vh",
            objectFit: "cover",
            justifyContent: "center",
            width: "100%",
          }}
          src={props.item.url}
          alt={props.item.alt}
        />
      </Stack>
    );
  }

  return (
    <>
      <div
        style={{
          width: "94%",
          height: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <section
          class="like unique"
          style={{
            height: "60%",
          }}
        ></section>
      </div>
      <Carousel
        autoPlay={false}
        indicators={false}
        swipe={true}
        navButtonsAlwaysVisible={array.length > 1 ? true : false}
        animation="fade"
        duration={1400}
      >
        {array.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

export default ReusableCousel;
