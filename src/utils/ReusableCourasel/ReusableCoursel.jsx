import React, { useEffect } from "react";
import { Button, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useRef } from "react";
const ReusableCousel = ({ array, className }) => {
  useEffect(() => {
    setTimeout(() => {
      firstRef.current.classList.remove("zindex");
    }, 2100);
    // eslint-disable-next-line
  }, [className]);
  const firstRef = useRef(null);
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
          className={`like unique ${className}`}
          ref={firstRef}
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
