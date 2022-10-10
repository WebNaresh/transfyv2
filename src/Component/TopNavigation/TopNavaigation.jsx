import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import { List, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import LoginIcon from "@mui/icons-material/Login";
import Notification from "@mui/icons-material/Notifications";
import TestContext from "../../State/Test/TestContext";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const TopNavaigation = () => {
  const { toggleDrawer, state } = React.useContext(TestContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem onClick={toggleDrawer(false)}>
          <Link to={"/about"}>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={"About College"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem onClick={toggleDrawer(false)}>
          <Link to={"/process"}>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <CachedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"College Admission Process"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem onClick={toggleDrawer(false)}>
          <Link to={"/fest"}>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <FestivalOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"College Upcomming"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={toggleDrawer(false)}>
          <Link to={"/login"}>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem onClick={toggleDrawer(false)}>
          <Link to={"/login"}>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={"Login as Student"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem onClick={toggleDrawer(false)}>
          <Link to={"/login"}>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <CastForEducationIcon />
              </ListItemIcon>
              <ListItemText primary={"Login as College Proffesional"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
        {list("top")}
      </Drawer>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Transfy{" "}
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => setAnchorEl("open")}
            >
              <Badge badgeContent={17} color="error">
                <AccountCircle />
              </Badge>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Badge badgeContent={17} color="error">
                    <Notification />
                  </Badge>
                </ListItemIcon>
                Notification
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavaigation;
