import Coursel from "../../utils/Coursel";
import { Typography, Stack } from "@mui/material/";
import GridStack from "../../utils/GridStack";
// {
//   /* <GridStack /> */
// }

export default function About() {
  return (
    <>
      <Stack mt={8}>
        <Coursel />
        <Typography
          my={5}
          gutterBottom
          variant="h3"
          sx={{ color: "primary.main", textAlign: "center" }}
          component="div"
        >
          Welcome to Transfy
        </Typography>
        <Stack>
          <Typography
            variant="h5"
            lineHeight={2}
            component={"div"}
            textAlign={"left"}
            color="primary.light"
          >
            <Typography
              variant="h5"
              component={"p"}
              textAlign={"right"}
              color="primary.light"
            >
              {" "}
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Laborum,
            </Typography>
            aliquid corrupti ratione natus cupiditate dolor pariatur quam vel
            recusandae labore distinctio, suscipit quae, quis velit! Lorem ipsum
            dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste enim voluptatem possimus tenetur ipsam cum, quia dicta
            maiores, ex repellendus at totam quas non aperiam ullam quis
            molestias earum veniam nulla vero porro id maxime! consectetur
            adipisicing elit. Praesentium animi sapiente, nisi dolorem
            perferendis, eligendi reprehenderit officia, rem id nobis minus
          </Typography>
        </Stack>
        <Stack></Stack>
      </Stack>
    </>
  );
}
