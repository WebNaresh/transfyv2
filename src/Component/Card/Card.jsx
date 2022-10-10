import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Input,
  InputAdornment,
  Skeleton,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useContext } from "react";
import TestContext from "../../State/Test/TestContext";
import { AccountCircle, Favorite, Send } from "@mui/icons-material";
import { useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent() {
  const [inputVal, setInputVal] = useState("");
  const [fav, setFev] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const date1 = new Date();
  const { time } = useContext(TestContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const getTime = () => {
    try {
      const date = new Date();
      console.log(date.getSeconds());
    } catch (error) {
      console.log(error);
    }

    // const date3 = date;
  };
  const getTime2 = () => {
    try {
      const date = new Date();
      console.log(date.getSeconds());
    } catch (error) {
      console.log(error);
    }

    // const date3 = date;
  };

  return (
    <Box mx={2} my={2}>
      <Card
        onMouseEnter={getTime}
        onMouseLeave={getTime2}
        variant="outlined"
        sx={{ borderRadius: 3 }}
      >
        <CardHeader
          avatar={
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              <Avatar
                sx={{ bgcolor: red[500], cursor: "pointer" }}
                aria-label="recipe"
              >
                R
              </Avatar>
            </Link>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        {time ? (
          <Skeleton variant="rectangular" animation={"wave"} height={500} />
        ) : (
          <CardMedia
            onDoubleClick={() => (fav === true ? setFev(false) : setFev(true))}
            component="img"
            loading="lazy"
            height="500"
            sx={{ objectFit: "contain" }}
            image="https://picsum.photos/400/300"
            alt="Paella dish"
          />
        )}
        <CardContent>
          <Typography
            variant="body1"
            fontSize={25}
            component={"div"}
            color="text.secondary"
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Stack direction={"column"}>
            <Stack direction={"row"}>
              {fav === true ? (
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    fav === true ? setFev(false) : setFev(true);
                  }}
                >
                  <Favorite />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    fav === true ? setFev(false) : setFev(true);
                  }}
                >
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              )}
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Stack>
            <Stack padding={2} width={"100vh"} direction={"row"}>
              <Input
                fullWidth={true}
                value={inputVal}
                onChange={(e) => setInputVal(e.currentTarget.value)}
                placeholder="Comment"
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <IconButton>{inputVal.length > 0 ? <Send /> : <></>}</IconButton>
            </Stack>
          </Stack>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}
