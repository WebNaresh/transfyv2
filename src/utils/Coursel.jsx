import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
const Coursel = () => {
  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "http://ssgmkhandala.org/images/college/img3.jpg",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "http://ssgmkhandala.org/images/college/img2.jpg",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "http://ssgmkhandala.org/images/college/img1.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      url: "http://ssgmkhandala.org/images/college/img4.jpg",
    },
  ];
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
        <Paper
          elevation={24}
          component={"img"}
          style={{
            display: "flex",
            height: "60vh",
            objectFit: "cover",
            justifyContent: "center",
            margin: "2%",
            borderRadius: "2%",
          }}
          src={props.item.url}
          alt={props.item.description}
        />
      </Stack>
    );
  }

  return (
    <Carousel
      autoPlay={"true"}
      indicators={"true"}
      swipe={"true"}
      navButtonsAlwaysVisible={"true"}
      animation="slide"
      duration={1800}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Coursel;
