import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Avatar,
} from "@mui/material/";
import {
  AccountCircle,
  Notifications,
  CachedOutlined,
  Menu as MenuIcon,
  School,
  FestivalOutlined,
  Login,
  Info,
  Home,
  Forum,
  BookOnline,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";
import TestContext from "../../State/Test/TestContext";
import UseEffect from "../../State/UseEffect/UseEffectContext";
import userEvent from "@testing-library/user-event";
import UseContext from "../../State/UseState/UseContext";

const TopNavaigation = () => {
  const { location } = React.useContext(UseEffect);

  const { toggleDrawer, state } = React.useContext(TestContext);

  const { user } = React.useContext(UseContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {location.pathname !== "/" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
        {location.pathname !== "/about" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/about"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText primary={"About College"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
        {location.pathname !== "/process" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/process"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <CachedOutlined />
                </ListItemIcon>
                <ListItemText primary={"College Admission Process"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
        {location.pathname !== "/fest" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/fest"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <FestivalOutlined />
                </ListItemIcon>
                <ListItemText primary={"College Upcomming"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
      </List>
      <Divider />
      <List>
        {location.pathname !== "/login" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/login"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  {" "}
                  <Login />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
        {location.pathname !== "/studentLogin" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/studentLogin"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary={"Login as Student"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
        {location.pathname !== "/collegeMaterials" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/collegeMaterials"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <BookOnline />
                </ListItemIcon>
                <ListItemText primary={"College Materials"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
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
              onClick={handleClick}
            >
              <Badge badgeContent={17} color="error">
                {user.avatar !== null ? (
                  <Avatar src={user.avatar} sx={{ width: 40, height: 40 }} />
                ) : (
                  <AccountCircle />
                )}
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
              <Link to={"/profile"}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    {user.avatar !== null ? (
                      <Avatar
                        src={user.avatar}
                        sx={{ width: 24, height: 24 }}
                      />
                    ) : (
                      <AccountCircle />
                    )}
                  </ListItemIcon>
                  Profile
                </MenuItem>
              </Link>
              <Link to={"/notification"}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Badge badgeContent={17} color="error">
                      <Notifications />
                    </Badge>
                  </ListItemIcon>
                  Notifications
                </MenuItem>
              </Link>
              <Link to={"/chat"}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Badge color="error">
                      <Forum />
                    </Badge>
                  </ListItemIcon>
                  chat
                </MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavaigation;
