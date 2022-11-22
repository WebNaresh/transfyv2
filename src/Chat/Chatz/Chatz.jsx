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
import { useContext } from "react";
import ChatzContext from "../../State/Chatz/ChatzContext";

export function Chatz({ user }) {
  const { handleChatzOnclick } = useContext(ChatzContext);

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
  const StyledBadge2 = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#858585",
      color: "#858585",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid currentColor",
        content: '""',
      },
    },
  }));
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem
        onClick={() => handleChatzOnclick(user)}
        sx={{ width: "100%" }}
        alignItems="flex-start"
      >
        <ListItemAvatar>
          {user.status === true ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                imgProps={{ loading: "lazy" }}
                alt={user.name}
                src={user.avatar}
              />
            </StyledBadge>
          ) : (
            <StyledBadge2
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                imgProps={{ loading: "lazy" }}
                alt={user.name}
                src={user.avatar}
              />
            </StyledBadge2>
          )}
        </ListItemAvatar>
        <ListItemText
          disableTypography
          primary={
            <Typography type="body2" style={{ color: "#FFFFFF" }}>
              {user.name}
            </Typography>
          }
          children={"span"}
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
                  Say Hello to {user.email}
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
