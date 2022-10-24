import { Card, CardActionArea, CardMedia } from "@mui/material";

export default function AboutCard({ url }) {
  return (
    <>
      <Card>
        <CardActionArea component={"div"}>
          <CardMedia
            component={"img"}
            sx={{ filter: "grayscale(0.7)" }}
            title="CardMedia"
            src={url}
            alt="Cards"
          />
        </CardActionArea>
      </Card>
    </>
  );
}
