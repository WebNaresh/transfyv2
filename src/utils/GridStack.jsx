import { Grid, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import AboutCard from "../Component/About/AboutCards/AboutCards";

export default function GridStack() {
  const items = [
    {
      index: 1,
      url: {
        url1: "http://ssgmkhandala.org/images/gallery/1.jpg",
        url2: "http://ssgmkhandala.org/images/gallery/3.jpg",
        url3: "http://ssgmkhandala.org/images/gallery/2.jpg",
      },
    },
    {
      index: 2,
      url: {
        url1: "http://ssgmkhandala.org/images/gallery/1.jpg",
        url2: "http://ssgmkhandala.org/images/gallery/3.jpg",
        url3: "http://ssgmkhandala.org/images/gallery/2.jpg",
      },
    },
    {
      index: 3,
      url: {
        url1: "http://ssgmkhandala.org/images/gallery/1.jpg",
        url2: "http://ssgmkhandala.org/images/gallery/3.jpg",
        url3: "http://ssgmkhandala.org/images/gallery/2.jpg",
      },
    },
  ];

  return (
    <Grid>
      <Carousel
        autoPlay={"true"}
        indicators={"true"}
        swipe={"true"}
        //   cycleNavigation={'false'}
        navButtonsAlwaysVisible={"true"}
        animation="slide"
        duration={1800}
      >
        {items.map((url, index) => (
          <Stack
            key={index}
            display={"flex"}
            justifyContent={"center"}
            // justifyItems={"inherit"}
            px={4}
            direction={"row"}
          >
            <Grid px={2} item>
              <AboutCard url={url.url.url1} />
            </Grid>
            <Grid px={2} item>
              <AboutCard url={url.url.url2} />
            </Grid>
            <Grid px={2} item>
              <AboutCard url={url.url.url3} />
            </Grid>
          </Stack>
        ))}
      </Carousel>
    </Grid>
  );
}
