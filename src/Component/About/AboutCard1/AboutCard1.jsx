import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Stack,
  Divider,
} from "@mui/material/";

const AboutCard1 = ({ name, message, url, side }) => {
  return (
    <>
      <div>
        {side === "left" ? (
          <>
            {" "}
            <Card
              elevation={10}
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: { xs: "center", md: "unset" },
                width: "100%",
                margin: 2,
                padding: 4,
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    sx={{
                      textAlign: { md: "left", xs: "center" },
                    }}
                    variant="h5"
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="subtitle21"
                    color="text.secondary"
                    component="div"
                  >
                    {message}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: { md: "row", xs: "column" },
                    margin: 2,
                    pl: 1,
                    pb: 1,
                  }}
                >
                  <Stack>
                    <Avatar
                      sx={{ margin: 4, filter: "grayscale(1)" }}
                      alt="Remy Sharp"
                      src={url}
                    />
                  </Stack>
                  <Stack component={"subtitle-2"}> Dr. S R Bamane</Stack>
                </Box>
              </Box>
              <CardMedia>
                <Avatar
                  alt="Remy Sharp"
                  src={url}
                  sx={{ width: 200, height: 200, filter: "grayscale(1)" }}
                />
              </CardMedia>
            </Card>
            <Divider />
          </>
        ) : (
          <>
            <Card
              elevation={10}
              sx={{
                display: "flex",
                width: "100%",
                margin: 2,
                flexDirection: { xs: "column-reverse", md: "row-reverse" },
                alignItems: { xs: "center", md: "unset" },
                padding: 4,
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      textAlign: { md: "right", xs: "center" },
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                    textAlign={"right"}
                    sx={{
                      textAlign: { md: "right", xs: "left" },
                    }}
                  >
                    {message}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: 2,
                    pl: 1,
                    pb: 1,
                    flexDirection: { md: "row-reverse", xs: "column" },
                  }}
                >
                  <Stack>
                    <Avatar
                      sx={{ margin: 4, filter: "grayscale(1)" }}
                      alt="Remy Sharp"
                      src={url}
                    />
                  </Stack>
                  <Stack component={"subtitle-2"}>{name}</Stack>
                </Box>
              </Box>
              <CardMedia>
                <Avatar
                  alt="Remy Sharp"
                  src={url}
                  sx={{ width: 200, height: 200, filter: "grayscale(1)" }}
                />
              </CardMedia>
            </Card>
            <Divider />
          </>
        )}
      </div>
    </>
  );
};

export default AboutCard1;
