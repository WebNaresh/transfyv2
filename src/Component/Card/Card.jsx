import {
  Collapse,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Card,
  Divider,
} from "@mui/material/";
import "./heart.css";
import { red } from "@mui/material/colors";
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  ShareOutlined,
} from "@mui/icons-material/";
import { Skeleton, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState, React } from "react";
import TestContext from "../../State/Test/TestContext";
import ExpandMore from "./ExpandMore/ExpandMore";
import ReusableCousel from "../../utils/ReusableCourasel/ReusableCoursel";
import BlogContext from "../../State/Blog/BlogContext";

function CardComponent({ ele }) {
  const { handleLikeButton } = useContext(BlogContext);
  console.log(ele);

  const [fav, setFav] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { time } = useContext(TestContext);

  const handleExpandClick = () => {
    console.log(!expanded);
    setExpanded(!expanded);
  };

  return (
    <Box mx={2} my={2}>
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardHeader
          avatar={
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              <>
                <Avatar
                  sx={{ bgcolor: red[500], cursor: "pointer" }}
                  aria-label="recipe"
                  src={ele.BLoggerAvatar}
                  alt={ele.BloggerName}
                />
              </>
            </Link>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={ele.BloggerName}
          subheader="September 14, 2016"
        />

        {time ? (
          <Skeleton variant="rectangular" animation={"wave"} height={500} />
        ) : (
          <CardMedia
            onDoubleClick={() => (fav === true ? setFav(false) : setFav(true))}
            component="div"
            height="500"
            sx={{
              width: "100%",
            }}
          >
            <div>
              <ReusableCousel array={ele.Image} />
            </div>
            <Divider />
          </CardMedia>
        )}

        <CardActions disableSpacing sx={{ padding: 0 }}>
          <Stack direction={"column"}>
            <Stack direction={"row"}>
              <section class="like" onClick={handleLikeButton}></section>
              <IconButton aria-label="share">
                <ShareOutlined
                  sx={{
                    color: "black",
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </CardActions>
        <CardContent
          sx={{ display: "flex ", flexDirection: "column", padding: 0.5 }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              cursor: "pointer",
            }}
            onClick={handleExpandClick}
          >
            <Typography
              variant="body1"
              fontSize={25}
              component={"div"}
              color="text.common"
              sx={{
                fontSize: "1.3rem !important",
                fontWeight: "initial",
              }}
            >
              {ele.PrimaryHeading}
            </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {/* <ExpandMoreIcon /> */}
            </ExpandMore>
          </div>
          <div style={{ display: "flex" }}>
            {ele.hashTags.map((body) => {
              return (
                <Link to={`/${body}`}>
                  <Typography variant="body2" color={"#0095ff"}>
                    #{body}&nbsp;
                  </Typography>
                </Link>
              );
            })}
          </div>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{ele.PrimaryHeading}</Typography>
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
        {/* <Stack my={2} width={"100vh"} direction={"row"}>
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
        </Stack> */}
      </Card>
    </Box>
  );
}

export default CardComponent;
