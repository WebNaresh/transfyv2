import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function AboutCard() {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component={"img"}
            // height={140}
            title="CardMedia"
            image="https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Cards"
          />
          <CardContent>
            <Button size="small" variant="contained">
              Share
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
