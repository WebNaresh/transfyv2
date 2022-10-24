import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Badge, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export function Chatz() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem sx={{ width: "100%" }} alignItems="flex-start">
        <ListItemAvatar>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <Stack>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                badgeContent={4}
                color="error"
              >
                <Typography
                  sx={{ display: "inline" }}
                  component="div"
                  variant="body1"
                  color="text.primary"
                >
                  Ali Connors — I'll be in your neighborhood doing errands this…
                </Typography>
              </Badge>
            </Stack>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
